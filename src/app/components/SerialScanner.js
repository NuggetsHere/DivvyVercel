'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { createWorker } from 'tesseract.js';

// Apple never uses O or I in serials — they use 0 and 1 instead.
// So we never even let the OCR engine consider O or I as valid outputs.
const APPLE_WHITELIST = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';

function normalizeAppleSerial(raw) {
  let s = (raw || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  s = s.replace(/O/g, '0').replace(/[IL]/g, '1');
  if (s.length > 12 && s.startsWith('S')) s = s.slice(1); // strip barcode "S" prefix
  return s;
}

function isPlausibleAppleSerial(s) {
  return /^[0-9A-HJ-NP-Z]{8,14}$/.test(s);
}

// Crop to the center guide box, upscale, grayscale + contrast boost.
// This preprocessing matters more than the OCR engine for small etched text.
function preprocessFrame(video, guideRect) {
  const { x, y, w, h } = guideRect;
  const scale = 3;

  const canvas = document.createElement('canvas');
  canvas.width = w * scale;
  canvas.height = h * scale;
  const ctx = canvas.getContext('2d');

  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(video, x, y, w, h, 0, 0, w * scale, h * scale);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const d = imageData.data;
  const contrast = 1.6;
  const intercept = 128 * (1 - contrast);

  for (let i = 0; i < d.length; i += 4) {
    const gray = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
    const adjusted = Math.max(0, Math.min(255, gray * contrast + intercept));
    d[i] = d[i + 1] = d[i + 2] = adjusted;
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas;
}

export default function SerialScanner({ onCapture, onClose }) {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [status, setStatus] = useState('starting'); // starting | ready | scanning | error
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    let cancelled = false;

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment', width: 1280, height: 720 } })
      .then((stream) => {
        if (cancelled) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        setStatus('ready');
      })
      .catch((err) => {
        setStatus('error');
        setErrorMsg(err.message || 'Could not access camera.');
      });

    return () => {
      cancelled = true;
      streamRef.current?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const guideRect = { x: 160, y: 260, w: 960, h: 200 }; // matches the overlay box below

  const handleCapture = useCallback(async () => {
    if (!videoRef.current || status !== 'ready') return;
    setStatus('scanning');

    try {
      const canvas = preprocessFrame(videoRef.current, guideRect);

      const worker = await createWorker('eng');
      await worker.setParameters({
        tessedit_char_whitelist: APPLE_WHITELIST,
        tessedit_pageseg_mode: '7', // treat image as a single line of text
      });
      const { data } = await worker.recognize(canvas);
      await worker.terminate();

      const normalized = normalizeAppleSerial(data.text);
      const plausible = isPlausibleAppleSerial(normalized);

      onCapture({
        value: normalized,
        confidence: data.confidence, // 0-100 from Tesseract
        plausible,
      });
    } catch (err) {
      setStatus('error');
      setErrorMsg('OCR failed — try again with better lighting/framing.');
    }
  }, [status, onCapture]);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-center justify-center p-4">
      <div className="relative w-full max-w-3xl bg-black rounded-xl overflow-hidden">
        <video ref={videoRef} className="w-full h-auto" muted playsInline />

        {/* Guide overlay — user aligns the serial number inside this box */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="border-2 border-amber-400 rounded-lg" style={{ width: '75%', height: '28%' }}>
            <span className="absolute -top-6 left-0 text-amber-300 text-xs font-bold">
              Align serial number inside box
            </span>
          </div>
        </div>

        {status === 'error' && (
          <div className="absolute inset-0 bg-black/90 flex items-center justify-center p-6 text-center">
            <p className="text-rose-400 text-sm font-medium">{errorMsg}</p>
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-4">
        <button
          type="button"
          onClick={onClose}
          className="bg-slate-700 hover:bg-slate-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleCapture}
          disabled={status !== 'ready'}
          className="bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white text-sm font-semibold px-6 py-2.5 rounded-lg"
        >
          {status === 'scanning' ? 'Reading…' : 'Capture & Read'}
        </button>
      </div>
    </div>
  );
}