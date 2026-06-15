'use client';

import { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function InventoryStickerPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerNumber: '',
    issue: '',
    model: '',
    ram: '',
    ssd: '',
    serialNumber: '',
    assetTag: '', // Tracked here
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

  // Helper utility to generate the custom asset tag format: DC-YYYYMMDD-RANDOM
  const generateAssetTag = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    // Generates a clean 5-character alphanumeric uppercase string
    const randomString = Math.random().toString(36).substring(2, 7).toUpperCase();
    
    return `DC-${year}${month}${day}-${randomString}`;
  };

  // Initialize the form with a fresh asset tag immediately on page mount
  useEffect(() => {
    setFormData((prev) => ({ ...prev, assetTag: generateAssetTag() }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: '', text: '' });

    const canvasElement = document.getElementById('sticker-canvas-target');
    if (!canvasElement) {
      setStatusMessage({ type: 'error', text: 'Error interacting with live canvas generation.' });
      setLoading(false);
      return;
    }

    const base64ImageString = canvasElement.toDataURL('image/png');

    const finalizedPayload = {
      ...formData,
      qrCodeImage: base64ImageString,
    };

    try {
      const response = await fetch('/api/inventory', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalizedPayload),
      });

      const outcome = await response.json();

      if (outcome.success) {
        setStatusMessage({ 
          type: 'success', 
          text: `Saved to database under Asset Tag: ${formData.assetTag}` 
        });
        
        // Reset everything and generate a brand-new unique tag for the next entry
        setFormData({
          customerName: '',
          customerNumber: '',
          issue: '',
          model: '',
          ram: '',
          ssd: '',
          serialNumber: '',
          assetTag: generateAssetTag(), 
        });
      } else {
        setStatusMessage({ type: 'error', text: outcome.error || 'Database submission rejected.' });
      }
    } catch (networkError) {
      console.error(networkError);
      setStatusMessage({ type: 'error', text: 'Network failure encountered syncing up data targets.' });
    } finally {
      setLoading(false);
    }
  };

  const triggerSystemPrint = () => {
    window.print();
  };

  // Upgraded QR schema data structure containing the absolute Asset Tag tracking profile
  const structuredQRString = `TAG:${formData.assetTag}\nSN:${formData.serialNumber || 'N/A'}\nModel:${formData.model || 'N/A'}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased font-sans p-6 md:p-12 mt-24 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start print:block print:max-w-full print:p-0">
        
        {/* Form Panel */}
        <div className="lg:col-span-7 bg-white border border-slate-200 shadow-sm rounded-xl p-6 md:p-8 print:hidden">
          <div className="mb-6 flex justify-between items-start flex-wrap gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">Device Logging & Asset Sticker Utility</h1>
              <p className="text-sm text-slate-500 mt-1">Populate machine credentials to generate stickers and store images permanently.</p>
            </div>
            {formData.assetTag && (
              <span className="bg-blue-50 text-blue-700 text-xs font-mono font-bold px-3 py-1.5 rounded-md border border-blue-200">
                Live Tag: {formData.assetTag}
              </span>
            )}
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Customer Name</label>
                <input type="text" name="customerName" value={formData.customerName} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Customer Contact Number</label>
                <input type="tel" name="customerNumber" value={formData.customerNumber} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. +91 98765 43210" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Device Model</label>
              <input type="text" name="model" value={formData.model} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. Apple MacBook Pro M3" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">RAM</label>
                <input type="text" name="ram" value={formData.ram} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. 16GB" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">SSD</label>
                <input type="text" name="ssd" value={formData.ssd} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. 512GB NVMe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Serial Number</label>
                <input type="text" name="serialNumber" value={formData.serialNumber} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. C02XL198HF21" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Device Issues</label>
              <textarea name="issue" value={formData.issue} onChange={handleInputChange} rows="3" required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none" placeholder="Describe symptoms..."></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button type="submit" disabled={loading} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm py-3 px-4 rounded-xl transition-all shadow-sm active:scale-[0.99] disabled:bg-blue-400 disabled:pointer-events-none">
                {loading ? 'Saving...' : 'Commit Entries to Database'}
              </button>
              <button type="button" onClick={triggerSystemPrint} className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm py-3 px-5 rounded-xl transition-all shadow-sm active:scale-[0.99]">
                Print Sticker
              </button>
            </div>

            {statusMessage.text && (
              <div className={`p-4 rounded-xl text-sm font-medium border ${statusMessage.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
                {statusMessage.text}
              </div>
            )}
          </form>
        </div>

        {/* Live Preview / Label Layout Container */}
        <div className="lg:col-span-5 flex flex-col items-center justify-start print:block print:p-0 print:m-0">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3 print:hidden">Live UI Render Profile</p>
          
          <div className="w-[380px] min-h-[220px] bg-white border-[3px] border-black rounded-lg p-4 text-black font-sans flex flex-col justify-between shadow-md print:shadow-none print:border-2 print:rounded-none print:w-[3.5in] print:h-[2in] print:absolute print:top-0 print:left-0 print:m-0">
            
            <div className="border-b-2 border-black pb-1.5 flex justify-between items-center">
              <span className="text-xs font-black tracking-wider uppercase bg-black text-white px-1.5 py-0.5 rounded mr-1">
                {formData.assetTag || 'DC-XXXX'}
              </span>
              <span className="text-[10px] font-mono font-bold border border-black px-1.5 py-0.5 rounded truncate max-w-[130px]">
                S/N: {formData.serialNumber || 'PENDING'}
              </span>
            </div>

            <div className="flex gap-4 items-start flex-1 mt-2">
              <div className="flex-1 min-w-0 space-y-1.5 text-[11px] leading-snug">
                <div className="truncate"><span className="font-extrabold uppercase text-[9px] text-slate-500 block">Client Identity</span>{formData.customerName || '—'} <span className="text-slate-600 font-medium">({formData.customerNumber || '—'})</span></div>
                <div className="truncate"><span className="font-extrabold uppercase text-[9px] text-slate-500 block">Device Identifier</span>{formData.model || '—'}</div>
                
                <div className="grid grid-cols-2 gap-2 border-t border-slate-200 pt-1">
                  <div><span className="font-extrabold text-[9px] text-slate-400 uppercase block">RAM Spec</span>{formData.ram || '—'}</div>
                  <div><span className="font-extrabold text-[9px] text-slate-400 uppercase block">SSD Block</span>{formData.ssd || '—'}</div>
                </div>

                <div className="border-t border-dashed border-slate-400 pt-1">
                  <span className="font-extrabold uppercase text-[9px] text-rose-600 block">Diagnosed Malfunction:</span>
                  <p className="text-[10px] font-mono leading-tight italic line-clamp-2 text-slate-900">{formData.issue || 'No problems declared.'}</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center p-1.5 bg-white border border-slate-300 rounded-md shadow-sm shrink-0">
                <QRCodeCanvas id="sticker-canvas-target" value={structuredQRString} size={85} level="M" includeMargin={false} />
                <span className="text-[7px] font-bold font-mono tracking-tighter text-slate-500 mt-1 uppercase">Scan Inventory</span>
              </div>
            </div>

            <div className="text-[8px] font-mono text-slate-400 flex justify-between items-center border-t border-slate-200 pt-1.5 mt-2">
              <span>SYSTEM LOGGED OBJECT</span>
              <span>Date: {new Date().toLocaleDateString('en-IN')}</span>
            </div>
          </div>
        </div>

      </div>

      <style jsx global>{`
        @media print {
          html, body {
            background-color: #ffffff !important;
            color: #000000 !important;
            padding: 0px !important;
            margin: 0px !important;
          }
          nav, header, footer, sidebar, form, button, p, .print\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}