//src/app/inventory/scan-out/page.js
'use client';

import { useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

export default function ScanOutPage() {
  const [manualTag, setManualTag] = useState('');
  const [assetData, setAssetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [cameraActive, setCameraActive] = useState(false);

  useEffect(() => {
    let scanner = null;
    if (cameraActive) {
      scanner = new Html5QrcodeScanner('qr-reader-target', {
        fps: 10,
        qrbox: { width: 250, height: 250 },
      }, false);

      scanner.render((decodedText) => {
        // Parse out the Tag line from our custom multiline QR string
        // Custom string format: TAG:DC-YYYYMMDD-XXXX\nSN:...
        const lines = decodedText.split('\n');
        const tagLine = lines.find(line => line.startsWith('TAG:'));
        const cleanTag = tagLine ? tagLine.replace('TAG:', '').trim() : decodedText.trim();
        
        setManualTag(cleanTag);
        fetchAssetDetails(cleanTag);
        scanner.clear();
        setCameraActive(false);
      }, (error) => {
        // Silent catch for scan frame updates
      });
    }

    return () => {
      if (scanner) {
        scanner.clear().catch(err => console.error("Scanner cleanup failure", err));
      }
    };
  }, [cameraActive]);

  const fetchAssetDetails = async (tagToSearch) => {
    const target = tagToSearch || manualTag;
    if (!target) return;

    setLoading(true);
    setMessage({ type: '', text: '' });
    setAssetData(null);

    try {
      const res = await fetch('/api/inventory', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assetTag: target, action: 'FETCH' }),
      });
      const result = await res.json();

      if (result.success) {
        setAssetData(result.data);
      } else {
        setMessage({ type: 'error', text: result.error || 'Asset not found.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Error contacting server utility.' });
    } finally {
      setLoading(false);
    }
  };

  const processAssetOut = async () => {
    if (!assetData) return;
    setLoading(true);

    try {
      const res = await fetch('/api/inventory', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ assetTag: assetData.assetTag, action: 'OUT' }),
      });
      const result = await res.json();

      if (result.success) {
        setMessage({ type: 'success', text: `Asset ${assetData.assetTag} successfully marked as OUT!` });
        setAssetData(result.data); // Refresh UI with updated OUT status data
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to check out asset.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Error handling transaction request.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 md:p-12 antialiased font-sans">
      <div className="max-w-2xl mx-auto space-y-6">
        
        {/* Core Control Dashboard Panel */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 md:p-8">
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">Dispatch Gate: Asset Out Scan</h1>
          <p className="text-sm text-slate-500 mt-1">Scan the customer or hardware sticker QR to verify credentials and check the device out.</p>

          {/* Action Input / Camera Launcher Row */}
          <div className="mt-6 space-y-4">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={manualTag} 
                onChange={(e) => setManualTag(e.target.value.toUpperCase())}
                placeholder="Scan or Enter Asset Tag (e.g. DC-2026...)"
                className="flex-1 text-sm font-mono px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                onKeyDown={(e) => e.key === 'Enter' && fetchAssetDetails()}
              />
              <button 
                onClick={() => fetchAssetDetails()} 
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-5 py-2.5 rounded-lg active:scale-[0.99] transition-all"
              >
                Find
              </button>
            </div>

            <button
              onClick={() => setCameraActive(!cameraActive)}
              className={`w-full font-semibold text-sm py-2.5 px-4 rounded-lg border transition-all active:scale-[0.99] ${cameraActive ? 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100' : 'bg-slate-900 text-white border-transparent hover:bg-slate-800'}`}
            >
              {cameraActive ? 'Close Live Camera' : 'Start Camera Scanner'}
            </button>
          </div>

          {/* Live Camera Feed Target Anchor Container */}
          {cameraActive && (
            <div className="mt-4 border-2 border-dashed border-slate-300 rounded-xl overflow-hidden p-2 bg-slate-900">
              <div id="qr-reader-target" className="w-full mx-auto overflow-hidden bg-slate-900 text-white"></div>
            </div>
          )}

          {message.text && (
            <div className={`mt-4 p-4 rounded-xl text-sm font-medium border ${message.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
              {message.text}
            </div>
          )}
        </div>

        {/* Dynamic Context Card: Shows when data is returned */}
        {assetData && (
          <div className="bg-white border-2 border-slate-900 shadow-md rounded-xl p-6 space-y-4">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold font-mono text-slate-400 block">ASSET STATUS CARD</span>
                <h2 className="text-lg font-bold font-mono text-slate-900">{assetData.assetTag}</h2>
              </div>
              <span className={`text-xs font-mono font-black px-3 py-1 rounded-md border ${assetData.status === 'IN' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>
                CURRENTLY {assetData.status}
              </span>
            </div>

            {/* Core Specs Matrix layout details visual */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm">
              <div><span className="text-xs font-bold text-slate-400 block uppercase">Client Name</span> <p className="font-semibold text-slate-800">{assetData.customerName}</p></div>
              <div><span className="text-xs font-bold text-slate-400 block uppercase">Client Number</span> <p className="font-mono font-medium text-slate-700">{assetData.customerNumber}</p></div>
              <div className="col-span-2 border-t border-slate-100 pt-2"><span className="text-xs font-bold text-slate-400 block uppercase">Device Hardware / Model</span> <p className="font-medium text-slate-800">{assetData.model} (S/N: {assetData.serialNumber})</p></div>
              <div className="col-span-2 border-t border-slate-100 pt-2"><span className="text-xs font-bold text-slate-400 block uppercase">Stated Diagnostic Issue</span> <p className="font-mono text-xs italic text-slate-600 bg-slate-50 p-2.5 rounded-lg mt-1 border border-slate-200">{assetData.issue}</p></div>
            </div>

            {/* Trigger Button Core Action State controller */}
            {assetData.status === 'IN' ? (
              <button
                onClick={processAssetOut}
                disabled={loading}
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-4 rounded-xl text-sm shadow transition-all active:scale-[0.99] mt-2"
              >
                {loading ? 'Updating Database...' : 'Approve Handover: Mark Asset OUT'}
              </button>
            ) : (
              <div className="w-full bg-slate-100 text-slate-500 font-semibold text-center text-xs py-3 rounded-xl border border-slate-200 block mt-2">
                This device has already left the shop floor (Logged OUT).
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}