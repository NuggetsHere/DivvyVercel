'use client';

import { useState, useEffect, useRef } from 'react';
import { BrowserMultiFormatReader } from '@zxing/browser';

export default function ScanInspectionPage() {
  const [manualTag, setManualTag] = useState('');
  const [assetData, setAssetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [cameraActive, setCameraActive] = useState(false);

  const videoRef = useRef(null);
  const controlsRef = useRef(null);

  const stopCamera = () => {
    if (controlsRef.current) {
      controlsRef.current.stop();
      controlsRef.current = null;
    }
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  const startScanner = async () => {
    setMessage({ type: '', text: '' });
    setCameraActive(true);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: 'environment' } },
        audio: false,
      });

      if (!videoRef.current) return;

      videoRef.current.srcObject = stream;
      videoRef.current.setAttribute('playsinline', 'true');
      await videoRef.current.play();

      const codeReader = new BrowserMultiFormatReader();
      const controls = await codeReader.decodeFromVideoElement(
        videoRef.current,
        (result) => {
          if (result) {
            const decodedText = result.getText();
            const lines = decodedText.split('\n');
            const tagLine = lines.find((line) => line.startsWith('TAG:'));
            const cleanTag = tagLine ? tagLine.replace('TAG:', '').trim() : decodedText.trim();

            setManualTag(cleanTag);
            fetchAssetDetails(cleanTag);
            stopCamera();
          }
        }
      );

      controlsRef.current = controls;
    } catch (err) {
      console.error('Camera Init Error:', err);
      setMessage({
        type: 'error',
        text: err?.name === 'NotAllowedError'
          ? 'Camera permission denied. Please allow camera permissions in your browser bar.'
          : `Camera error: ${err.message || 'Unable to access camera hardware.'}`,
      });
      stopCamera();
    }
  };

  const handleToggleCamera = () => {
    if (cameraActive) {
      stopCamera();
    } else {
      startScanner();
    }
  };

  useEffect(() => {
    return () => {
      stopCamera();
    };
  }, []);

  const fetchAssetDetails = async (tagToSearch) => {
    const target = tagToSearch || manualTag;
    if (!target) return;

    setLoading(true);
    setMessage({ type: '', text: '' });
    setAssetData(null);

    try {
      const res = await fetch(`/api/inventory?query=${encodeURIComponent(target.trim())}`);
      const result = await res.json();

      if (result.success && result.data) {
        setAssetData(result.data);
      } else {
        setMessage({ type: 'error', text: result.error || 'Asset not found.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Error contacting server.' });
    } finally {
      setLoading(false);
    }
  };

  const renderStatusBadge = (status, outReason, thirdParty) => {
    if (status === 'IN') {
      return <span className="text-xs font-mono font-black px-3 py-1 rounded-md border bg-emerald-50 text-emerald-700 border-emerald-200">CURRENTLY IN</span>;
    }

    if (outReason === 'SOLD') {
      return <span className="text-xs font-mono font-black px-3 py-1 rounded-md border bg-purple-50 text-purple-700 border-purple-200">OUT — SOLD</span>;
    }

    if (outReason === 'THIRD_PARTY') {
      return <span className="text-xs font-mono font-black px-3 py-1 rounded-md border bg-blue-50 text-blue-700 border-blue-200">OUT — THIRD PARTY ({thirdParty || 'EXTERNAL'})</span>;
    }

    return <span className="text-xs font-mono font-black px-3 py-1 rounded-md border bg-amber-50 text-amber-700 border-amber-200">OUT</span>;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-12 antialiased font-sans">
      <div className="max-w-2xl mx-auto space-y-6 mt-16">
        
        {/* Inspection Control Card */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 md:p-8">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Asset Inspection & Lookup</h1>
          <p className="text-sm text-slate-500 mt-1">Scan or search an asset tag to verify hardware details, pricing, and live status.</p>

          <div className="mt-6 space-y-4">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={manualTag} 
                onChange={(e) => setManualTag(e.target.value.toUpperCase())}
                placeholder="Scan or Enter Asset Tag / S/N"
                className="flex-1 text-sm font-mono px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                onKeyDown={(e) => e.key === 'Enter' && fetchAssetDetails()}
              />
              <button 
                onClick={() => fetchAssetDetails()} 
                disabled={loading || !manualTag.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg active:scale-[0.99] transition-all disabled:opacity-50"
              >
                Inspect
              </button>
            </div>

            <button
              type="button"
              onClick={handleToggleCamera}
              className={`w-full font-semibold text-sm py-2.5 px-4 rounded-lg border transition-all active:scale-[0.99] ${
                cameraActive 
                  ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100' 
                  : 'bg-slate-900 text-white border-transparent hover:bg-slate-800'
              }`}
            >
              {cameraActive ? 'Close Live Camera' : 'Start Camera Scanner'}
            </button>
          </div>

          {/* Persistent Video Viewport */}
          <div className={`mt-4 border-2 border-slate-300 rounded-xl overflow-hidden p-2 bg-black flex-col items-center justify-center relative min-h-[300px] ${cameraActive ? 'flex' : 'hidden'}`}>
            <video 
              ref={videoRef} 
              className="w-full max-w-[360px] h-[260px] object-cover rounded-lg"
              muted
              autoPlay
              playsInline
            />
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="w-48 h-48 border-2 border-emerald-400 border-dashed rounded-lg"></div>
            </div>
            <p className="text-[11px] font-mono text-slate-400 mt-2">Center the sticker QR code inside the box</p>
          </div>

          {message.text && (
            <div className={`mt-4 p-4 rounded-xl text-sm font-medium border ${message.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
              {message.text}
            </div>
          )}
        </div>

        {/* Read-Only Asset Status & Specs Card */}
        {assetData && (
          <div className="bg-white border-2 border-slate-900 shadow-md rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold font-mono text-slate-400 block">INSPECTED ASSET</span>
                <h2 className="text-lg font-bold font-mono text-slate-900">{assetData.assetTag}</h2>
              </div>
              {renderStatusBadge(assetData.status, assetData.outReason, assetData.thirdPartyName)}
            </div>

            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
              <div>
                <span className="text-xs font-bold text-slate-400 block uppercase">Client / Source</span> 
                <p className="font-semibold text-slate-800">{assetData.customerName || '—'}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block uppercase">Contact</span> 
                <p className="font-mono font-medium text-slate-700">{assetData.customerNumber || '—'}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block uppercase">Device Type</span> 
                <p className="font-medium text-slate-800">{assetData.deviceType} {assetData.partType ? `(${assetData.partType})` : ''}</p>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-400 block uppercase">Specs</span> 
                <p className="font-mono text-xs text-slate-700">{[assetData.processor, assetData.ram, assetData.ssd].filter(Boolean).join(' · ') || '—'}</p>
              </div>
              <div className="col-span-2 border-t border-slate-100 pt-2">
                <span className="text-xs font-bold text-slate-400 block uppercase">Model & Serial</span> 
                <p className="font-medium text-slate-800">{assetData.model} <span className="font-mono text-xs text-slate-500">(S/N: {assetData.serialNumber})</span></p>
              </div>

              {/* Price Range Display if Marked For Sale */}
              {assetData.isForSale && (
                <div className="col-span-2 border-t border-slate-100 pt-2">
                  <span className="text-xs font-bold text-slate-400 block uppercase">Pricing Architecture</span>
                  <div className="flex gap-4 mt-1 font-mono text-xs">
                    <span className="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md border border-slate-200">
                      Min Price: <strong>₹{assetData.minSalePrice ? Number(assetData.minSalePrice).toLocaleString('en-IN') : '—'}</strong>
                    </span>
                    <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-200">
                      Max / Sticker Price: <strong>₹{assetData.maxSalePrice ? Number(assetData.maxSalePrice).toLocaleString('en-IN') : '—'}</strong>
                    </span>
                  </div>
                </div>
              )}

              <div className="col-span-2 border-t border-slate-100 pt-2">
                <span className="text-xs font-bold text-slate-400 block uppercase">Reported Symptoms / Faults</span> 
                <p className="font-mono text-xs italic text-slate-600 bg-slate-50 p-2.5 rounded-lg mt-1 border border-slate-200">{assetData.issue || 'None reported'}</p>
              </div>

              {/* Logged Out / Dispatch Date */}
              {assetData.status === 'OUT' && assetData.outDate && (
                <div className="col-span-2 border-t border-slate-100 pt-2">
                  <span className="text-xs font-bold text-slate-400 block uppercase">Dispatch Timestamp</span> 
                  <p className="font-mono text-xs text-amber-800 font-semibold">{new Date(assetData.outDate).toLocaleString('en-IN')}</p>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}