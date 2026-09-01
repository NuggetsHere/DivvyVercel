// //src/app/inventory/page.js
// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { QRCodeCanvas } from 'qrcode.react';
// import { toPng } from 'html-to-image';

// /**
//  * Font scaling for a 203 DPI thermal label.
//  *
//  * At 1 CSS px = 1 printer dot, 1px = 0.125mm.
//  * 24px = 8.5pt is the practical legibility floor on a TSC TE210.
//  * Never pass a minPx below 24 for lowercase body copy.
//  */
// const fitPx = (text, maxPx, minPx, idealChars) => {
//   const len = String(text || '').length || 1;
//   const raw = maxPx * (idealChars / len);
//   return `${Math.max(minPx, Math.min(maxPx, raw)).toFixed(0)}px`;
// };

// const CPU_REQUIRED = ['Macbook', 'Windows Laptop'];

// const EMPTY_FORM = {
//   customerName: '',
//   customerNumber: '',
//   deviceType: '',
//   partType: '',
//   issue: '',
//   model: '',
//   processor: '',
//   ram: '',
//   ssd: '',
//   serialNumber: '',
//   assetTag: '',
//   isForSale: false,
//   salePrice: '',
// };

// export default function InventoryStickerPage() {
//   const [formData, setFormData] = useState(EMPTY_FORM);
//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
//   const [isReprintMode, setIsReprintMode] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const inventoryLabelRef = useRef(null);
//   const customerLabelRef = useRef(null);

//   const generateAssetTag = () => {
//     const date = new Date();
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     const randomString = Math.random().toString(36).substring(2, 7).toUpperCase();
//     return `DC-${year}${month}${day}-${randomString}`;
//   };

//   useEffect(() => {
//     setFormData((prev) => ({ ...prev, assetTag: generateAssetTag() }));
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     if (type === 'checkbox') {
//       setFormData((prev) => ({ ...prev, [name]: checked, salePrice: checked ? prev.salePrice : '' }));
//     } else if (name === 'deviceType' && value !== 'Parts') {
//       setFormData((prev) => ({ ...prev, deviceType: value, partType: '' }));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleLookupAsset = async (e) => {
//     e?.preventDefault();
//     if (!searchQuery.trim()) return;

//     setLoading(true);
//     setStatusMessage({ type: '', text: '' });

//     try {
//       const res = await fetch(`/api/inventory?query=${encodeURIComponent(searchQuery.trim())}`);
//       const result = await res.json();

//       if (result.success && result.data) {
//         const item = result.data;
//         setFormData({
//           customerName: item.customerName || '',
//           customerNumber: item.customerNumber || '',
//           deviceType: item.deviceType || '',
//           partType: item.partType || '',
//           issue: item.issue || '',
//           model: item.model || '',
//           processor: item.processor || '',
//           ram: item.ram || '',
//           ssd: item.ssd || '',
//           serialNumber: item.serialNumber || '',
//           assetTag: item.assetTag || '',
//           isForSale: item.isForSale || false,
//           salePrice: item.salePrice || '',
//         });
//         setIsReprintMode(true);
//         setStatusMessage({ type: 'success', text: `Loaded tag: ${item.assetTag} (Re-print mode active)` });
//       } else {
//         setStatusMessage({ type: 'error', text: result.error || 'No matching asset found.' });
//       }
//     } catch (err) {
//       setStatusMessage({ type: 'error', text: 'Error contacting database.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleClearReprint = () => {
//     setIsReprintMode(false);
//     setSearchQuery('');
//     setStatusMessage({ type: '', text: '' });
//     setFormData({ ...EMPTY_FORM, assetTag: generateAssetTag() });
//   };

//   const handleSaveAndPrint = async (targetStickerType) => {
//     if (!formData.deviceType || !formData.model || !formData.serialNumber) {
//       setStatusMessage({ type: 'error', text: 'Device Type, Model, and S/N are required.' });
//       return;
//     }
//     if (formData.deviceType === 'Parts' && !formData.partType) {
//       setStatusMessage({ type: 'error', text: 'Choose the exact part type.' });
//       return;
//     }
//     if (CPU_REQUIRED.includes(formData.deviceType) && (!formData.processor || !formData.ram || !formData.ssd)) {
//       setStatusMessage({ type: 'error', text: 'Processor, RAM and storage are required for laptops.' });
//       return;
//     }
//     if (formData.isForSale && !formData.salePrice) {
//       setStatusMessage({ type: 'error', text: 'Enter a sale price.' });
//       return;
//     }
//     if (targetStickerType === 'customer' && (!formData.customerName.trim() || !formData.customerNumber.trim())) {
//       setStatusMessage({ type: 'error', text: 'Customer Name and Contact Number are required for Customer Labels.' });
//       return;
//     }

//     setLoading(true);
//     setStatusMessage({ type: '', text: '' });

//     try {
//       const targetRef = targetStickerType === 'inventory' ? inventoryLabelRef : customerLabelRef;

//       const base64Sticker = await toPng(targetRef.current, {
//         cacheBust: true,
//         width: 480,
//         height: 320,
//         pixelRatio: 1, // 1 CSS px === 1 printer dot at 203 DPI
//         backgroundColor: '#ffffff',
//         style: {
//           transform: 'none',
//         },
//       });

//       if (!isReprintMode) {
//         const finalizedPayload = { ...formData, qrCodeImage: base64Sticker };
//         const inventoryRes = await fetch('/api/inventory', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify(finalizedPayload),
//         });

//         const outcome = await inventoryRes.json();
//         if (!outcome.success) {
//           setStatusMessage({ type: 'error', text: outcome.error || 'The database rejected this entry.' });
//           setLoading(false);
//           return;
//         }
//       }

//       const printRes = await fetch('/api/print', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ zpl: base64Sticker }),
//       });

//       const printOutcome = await printRes.json();

//       if (printOutcome.success) {
//         setStatusMessage({ type: 'success', text: `Asset ${formData.assetTag} sent to printer!` });
//         if (!isReprintMode) {
//           setFormData({ ...EMPTY_FORM, assetTag: generateAssetTag() });
//         }
//       } else {
//         setStatusMessage({ type: 'error', text: printOutcome.error || 'Failed to queue print job.' });
//       }
//     } catch (err) {
//       setStatusMessage({ type: 'error', text: 'Error generating label image.' });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const structuredQRString = `TAG:${formData.assetTag}\nSN:${formData.serialNumber || 'N/A'}\nModel:${formData.model || 'N/A'}`;
//   const currentDateString = new Date().toLocaleDateString('en-IN');

//   const displayDeviceClassification = formData.deviceType === 'Parts' && formData.partType
//     ? `Parts — ${formData.partType}`
//     : formData.deviceType || '—';

//   const cpuLine = formData.processor || '—';
//   const ramGB = formData.ram ? `${formData.ram.replace(/gb$/i, '')}GB` : '';
//   const ssdGB = formData.ssd ? `${formData.ssd.replace(/gb$/i, '')}GB` : '';
//   const memoryLine = [ramGB, ssdGB].filter(Boolean).join(' · ') || '—';

//   return (
//     <div className="page-wrap min-h-screen bg-slate-50 text-slate-800 p-6 md:p-12">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-24">

//         {/* Input Control Deck */}
//         <div className="lg:col-span-6 bg-white border border-slate-200 shadow-sm rounded-xl p-6 md:p-8">

//           <div className="mb-6 flex justify-between items-start flex-wrap gap-4">
//             <div>
//               <h1 className="text-xl font-bold tracking-tight text-slate-900">Device Logging Dashboard</h1>
//               <p className="text-sm text-slate-500 mt-1">Labels map 1:1 to 203 DPI (480x320 pixels).</p>
//             </div>
//             {formData.assetTag && (
//               <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded-md border ${isReprintMode ? 'bg-amber-50 text-amber-800 border-amber-300' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
//                 {isReprintMode ? 'RE-PRINTING: ' : 'Asset ID: '}{formData.assetTag}
//               </span>
//             )}
//           </div>

//           <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
//             <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
//               Re-Print Existing Sticker
//             </label>
//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={(e) => e.key === 'Enter' && handleLookupAsset(e)}
//                 placeholder="Scan or enter Asset Tag / Serial No."
//                 className="flex-1 text-sm font-mono px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none"
//               />
//               <button
//                 type="button"
//                 onClick={handleLookupAsset}
//                 disabled={loading || !searchQuery.trim()}
//                 className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-all active:scale-[0.99] disabled:bg-amber-300"
//               >
//                 Fetch Tag
//               </button>
//               {isReprintMode && (
//                 <button
//                   type="button"
//                   onClick={handleClearReprint}
//                   className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs px-3 py-2 rounded-lg transition-all"
//                 >
//                   New Tag
//                 </button>
//               )}
//             </div>
//           </div>

//           <div className="space-y-5">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
//                   Customer/Supplier Name <span className="text-slate-400 font-normal">(Req for Customer tag)</span>
//                 </label>
//                 <input type="text" name="customerName" value={formData.customerName} onChange={handleInputChange} className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. John Doe" />
//               </div>
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
//                   Customer Contact Number <span className="text-slate-400 font-normal">(Req for Customer tag)</span>
//                 </label>
//                 <input type="tel" name="customerNumber" value={formData.customerNumber} onChange={handleInputChange} className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. +91 98765 43210" />
//               </div>
//             </div>

//             <div className={`grid grid-cols-1 ${formData.deviceType === 'Parts' ? 'md:grid-cols-2' : ''} gap-4`}>
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Device Type</label>
//                 <select name="deviceType" value={formData.deviceType} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
//                   <option value="">-- Select Device --</option>
//                   <option value="Macbook">Macbook</option>
//                   <option value="Windows Laptop">Windows Laptop</option>
//                   <option value="Phone">Phone</option>
//                   <option value="Keyboard">Keyboard</option>
//                   <option value="Mouse">Mouse</option>
//                   <option value="Monitor">Monitor</option>
//                   <option value="Parts">Parts</option>
//                   <option value="Others">Others</option>
//                 </select>
//               </div>

//               {formData.deviceType === 'Parts' && (
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Part Specification</label>
//                   <select name="partType" value={formData.partType} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
//                     <option value="">-- Select Component --</option>
//                     <option value="Screen">Screen</option>
//                     <option value="Panel">Panel</option>
//                     <option value="Battery">Battery</option>
//                     <option value="Trackpad">Trackpad</option>
//                     <option value="Speakers">Speakers</option>
//                     <option value="Keyboard Replacement">Keyboard Replacement</option>
//                     <option value="Strip">Strip</option>
//                     <option value="DC">DC</option>
//                     <option value="Motherboard">Motherboard</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>
//               )}
//             </div>

//             <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
//               <div className="flex items-center gap-3">
//                 <input
//                   type="checkbox"
//                   id="isForSale"
//                   name="isForSale"
//                   checked={formData.isForSale}
//                   onChange={handleInputChange}
//                   className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
//                 />
//                 <label htmlFor="isForSale" className="text-sm font-bold text-slate-700 uppercase tracking-wide cursor-pointer select-none">
//                   Mark this asset For Sale
//                 </label>
//               </div>

//               {formData.isForSale && (
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Sale Price (₹)</label>
//                   <input
//                     type="number"
//                     name="salePrice"
//                     value={formData.salePrice}
//                     onChange={handleInputChange}
//                     required={formData.isForSale}
//                     className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
//                     placeholder="e.g. 45000"
//                   />
//                 </div>
//               )}
//             </div>

//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Device Model / Descriptor</label>
//               <input type="text" name="model" value={formData.model} onChange={handleInputChange} required maxLength={24} className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. MacBook Pro M3" />
//             </div>

//             <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-4">
//               <p className="text-[11px] font-bold uppercase tracking-wider text-blue-800">Headline specs — printed large on the inventory label</p>
//               <div>
//                 <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Processor</label>
//                 <input type="text" name="processor" value={formData.processor} onChange={handleInputChange} maxLength={20} className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. i7-1165G7 or M3 Pro" />
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">RAM</label>
//                   <input type="text" name="ram" value={formData.ram} onChange={handleInputChange} className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. 16GB" />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Storage</label>
//                   <input type="text" name="ssd" value={formData.ssd} onChange={handleInputChange} className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. 512GB SSD" />
//                 </div>
//               </div>
//             </div>

//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Serial Number (S/N)</label>
//               <input type="text" name="serialNumber" value={formData.serialNumber} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. C02XL198HF21" />
//             </div>

//             <div>
//               <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Reported Symptoms / Failures</label>
//               <textarea name="issue" value={formData.issue} onChange={handleInputChange} rows="3" maxLength={30} className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none" placeholder="Describe faults..."></textarea>
//               <p className="text-[11px] text-slate-500 mt-1">Fault prints on one line — anything past ~27 characters is cut with an ellipsis.</p>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
//               <button
//                 type="button"
//                 disabled={loading}
//                 onClick={() => handleSaveAndPrint('inventory')}
//                 className={`${isReprintMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold text-sm py-3.5 px-4 rounded-xl transition-all shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none`}
//               >
//                 {loading ? 'Processing...' : (isReprintMode ? 'Re-Print Inventory Label' : 'Print Inventory Label')}
//               </button>
//               <button
//                 type="button"
//                 disabled={loading}
//                 onClick={() => handleSaveAndPrint('customer')}
//                 className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm py-3.5 px-4 rounded-xl transition-all shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
//               >
//                 {loading ? 'Processing...' : (isReprintMode ? 'Re-Print Customer Label' : 'Print Customer Label')}
//               </button>
//             </div>

//             {statusMessage.text && (
//               <div className={`p-4 rounded-xl text-sm font-medium border ${statusMessage.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
//                 {statusMessage.text}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Live label previews */}
//         <div className="lg:col-span-6 flex flex-col gap-8 items-center">

//           {/* 1. INTERNAL INVENTORY LABEL */}
//           <div className="lbl-frame">
//             <div className="lbl" ref={inventoryLabelRef}>
//               <div className="lbl-head">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img src="/divvylogo-nav.svg" alt="Divvy" className="lbl-logo" />
//                 <span className="lbl-tag">{formData.assetTag || 'DC-XXXXXXXX-XXXXX'}</span>
//               </div>

//               <div className="lbl-body">
//                 <div className="lbl-col">
//                   <div className="lbl-hero">
//                     <span className="lbl-cpu" style={{ fontSize: fitPx(cpuLine, 36, 24, 14) }}>{cpuLine}</span>
//                     <span className="lbl-mem" style={{ fontSize: fitPx(memoryLine, 30, 24, 17) }}>{memoryLine}</span>
//                   </div>

//                   <div className="lbl-sub">
//                     <span className="lbl-k">Model</span>
//                     <span className="lbl-model">{formData.model || '—'}</span>
//                   </div>
//                 </div>

//                 <div className="lbl-qr">
//                   <QRCodeCanvas
//                     id="inventory-canvas-target"
//                     value={structuredQRString}
//                     size={120}
//                     level="M"
//                     includeMargin={false}
//                   />
//                 </div>
//               </div>

//               <div className="lbl-rows">
//                 <div className="lbl-row">
//                   <span className="lbl-k">Type</span>
//                   <span className="lbl-row-v">{displayDeviceClassification}</span>
//                 </div>
//                 <div className="lbl-row">
//                   <span className="lbl-k">S/N</span>
//                   <span className="lbl-row-v lbl-mono">{formData.serialNumber || '—'}</span>
//                 </div>
//                 <div className="lbl-row">
//                   <span className="lbl-k lbl-k-alert">Fault</span>
//                   <span className="lbl-row-v lbl-italic">{formData.issue || 'No fault reported'}</span>
//                 </div>
//               </div>

//               <div className="lbl-foot lbl-foot-inv">
//                 <span className="lbl-foot-name">{formData.customerName || '—'}</span>
//                 <span className="lbl-foot-right">
//                   {formData.isForSale && formData.salePrice && (
//                     <span className="lbl-price"><span className="lbl-rupee">₹</span>{Number(formData.salePrice).toLocaleString('en-IN')}</span>
//                   )}
//                   <span>{currentDateString}</span>
//                 </span>
//               </div>
//             </div>
//             <span className="lbl-caption">Inventory label — 203 DPI Native Mapping</span>
//           </div>

//           {/* 2. CUSTOMER COUNTER LABEL */}
//           <div className="lbl-frame">
//             <div className="lbl" ref={customerLabelRef}>
//               <div className="lbl-head">
//                 {/* eslint-disable-next-line @next/next/no-img-element */}
//                 <img src="/divvylogo-nav.svg" alt="Divvy" className="lbl-logo" />
//                 <span className="lbl-slip">Customer Tag</span>
//               </div>

//               <div className="lbl-body lbl-body-cust">
//                 <div className="lbl-col lbl-col-cust">
//                   <div>
//                     <span className="lbl-k">Asset ID</span>
//                     <span className="lbl-cust-id">{formData.assetTag || 'DC-XXXXXXXX-XXXXX'}</span>
//                   </div>
//                   <div>
//                     <span className="lbl-k">Customer</span>
//                     <span className="lbl-v">{formData.customerName || '—'}</span>
//                   </div>
//                   <div>
//                     <span className="lbl-k">Contact</span>
//                     <span className="lbl-v lbl-mono">{formData.customerNumber || '—'}</span>
//                   </div>
//                 </div>

//                 <div className="lbl-qr">
//                   <QRCodeCanvas
//                     id="customer-canvas-target"
//                     value={structuredQRString}
//                     size={120}
//                     level="M"
//                     includeMargin={false}
//                   />
//                 </div>
//               </div>

//               <div className="lbl-rows lbl-rows-cust">
//                 <div className="lbl-row">
//                   <span className="lbl-k">Device</span>
//                   <span className="lbl-row-v">{formData.model || '—'}</span>
//                 </div>
//                 <div className="lbl-row">
//                   <span className="lbl-k">Booked in</span>
//                   <span className="lbl-row-v lbl-mono">{currentDateString}</span>
//                 </div>
//               </div>

//               <div className="lbl-foot lbl-foot-center">
//                 <span className="lbl-mono">+91 9312247627 / +91 8810223137</span>
//               </div>
//             </div>
//             <span className="lbl-caption">Customer label — 203 DPI Native Mapping</span>
//           </div>

//         </div>

//       </div>

//       <style jsx global>{`
//         /* ==================================================================
//            203 DPI THERMAL LABEL — 1 CSS px === 1 printer dot === 0.125 mm

//            Layout is UNCHANGED from the original design. Only type sizes,
//            colours and internal spacing were retuned so the glyphs survive
//            the spooler's 1-bit threshold.

//            RULES — do not break these when editing:
//            1. No lowercase copy below 24px. 24px = 8.5pt = the point where an
//               'e' counter is still ~2 dots wide. Below that it fills in and
//               reads as "pixelation". All-caps labels are fine at 20px: no
//               tight counters, no descenders.
//            2. Pure #000 / #fff only. The spooler thresholds at 200, so #555,
//               #999 and #bbb ALL printed solid black already. Keeping them in
//               CSS only made the on-screen preview lie about the output.
//            3. No fractional or negative letter-spacing. Sub-dot tracking
//               rounds differently per glyph and looks uneven after 1-bit
//               conversion.
//            4. Borders in even px (2px). A 1px hairline is a single dot and
//               drops out at low darkness.
//            5. Explicit px line-height everywhere, so the budget below is
//               exact rather than font-metric dependent.

//            VERTICAL BUDGET — usable = 320 - 4 (border) - 12 (padding) = 304
//              INVENTORY   head 30 + body 130 + rows 105 + foot 36 = 301  (3 spare)
//              CUSTOMER    head 30 + body 170 + rows  67 + foot 36 = 303  (1 spare)
//            HORIZONTAL BUDGET — usable = 480 - 4 - 24 = 452
//              .lbl-col 320 | gap 12 | .lbl-qr 120    row value = 452-118-8 = 326
//            ================================================================== */
//         .lbl {
//           box-sizing: border-box;
//           width: 480px;
//           height: 320px;
//           padding: 6px 12px;          /* was 10px 14px — bought 8px of height */
//           background: #fff;
//           color: #000;
//           border: 2px solid #000;
//           border-radius: 8px;
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
//         }

//         /* ---------- HEAD — 30px ---------- */
//         .lbl-head {
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 12px;
//           height: 30px;
//           padding-bottom: 4px;
//           border-bottom: 2px solid #000;
//           flex: 0 0 auto;
//         }
//         .lbl-logo {
//           height: 24px;
//           width: auto;
//           max-width: 150px;
//           object-fit: contain;
//           /* If divvylogo-nav.svg contains gradients or midtones they will
//              threshold into blobs. Export a pure-black variant and delete
//              this filter if the mark looks muddy on paper. */
//           filter: grayscale(1) contrast(3);
//         }
//         .lbl-tag {
//           font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
//           font-size: 24px;            /* 20 -> 24   (7.1pt -> 8.5pt) */
//           line-height: 24px;
//           font-weight: 700;
//           letter-spacing: 0;          /* was -0.5px */
//           white-space: nowrap;
//         }
//         .lbl-slip {
//           font-size: 22px;            /* 17 -> 22   (6.0pt -> 7.8pt, all-caps) */
//           line-height: 22px;
//           font-weight: 800;
//           letter-spacing: 1px;
//           text-transform: uppercase;
//           border: 2px solid #000;
//           border-radius: 5px;
//           padding: 1px 8px;
//           white-space: nowrap;
//         }

//         /* ---------- BODY — 130px inventory / 170px customer ---------- */
//         .lbl-body {
//           display: flex;
//           align-items: flex-start;
//           gap: 12px;
//           height: 137px;
//           padding-top: 6px;
//           flex: 0 0 auto;
//         }
//         .lbl-body-cust { height: 170px; }

//         .lbl-col {
//           flex: 1 1 auto;
//           min-width: 0;
//           display: flex;
//           flex-direction: column;
//           justify-content: flex-start;
//         }
//         .lbl-col-cust { gap: 4px; }

//         .lbl-hero {
//           display: flex;
//           flex-direction: column;
//           flex: 0 0 auto;
//         }
//         .lbl-cpu {
//           display: block;
//           line-height: 40px;
//           font-weight: 800;
//           letter-spacing: 0;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }
//         .lbl-mem {
//           display: block;
//           line-height: 33px;
//           font-weight: 800;
//           letter-spacing: 0;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }

//         .lbl-sub {
//           margin-top: 2px;
//           padding-top: 4px;
//           border-top: 2px dashed #000;   /* was #999 — printed black anyway */
//           min-width: 0;
//           flex: 0 0 auto;
//         }
//         .lbl-model {
//           display: block;
//           font-size: 26px;            /* 20 -> 26   (7.1pt -> 9.2pt) */
//           line-height: 30px;
//           font-weight: 700;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }

//         /* ---------- SHARED TYPE ---------- */
//         .lbl-k {
//           display: block;
//           font-size: 20px;            /* 13 -> 20   (4.6pt -> 7.1pt) */
//           line-height: 20px;
//           font-weight: 600;
//           letter-spacing: 0.5px;
//           text-transform: uppercase;
//           color: #000;                /* was #555 */
//         }
//         .lbl-k-alert { color: #000; }
//         .lbl-v {
//           color: #000; 
//           display: block;
//           font-size: 28px;            /* 22 -> 28   (7.8pt -> 9.9pt) */
//           line-height: 32px;
//           font-weight: 800;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }
//         .lbl-cust-id {
//           display: block;
//           font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
//           font-size: 28px;            /* 25 -> 28   (8.9pt -> 9.9pt) */
//           line-height: 32px;
//           font-weight: 800;
//           letter-spacing: 0;          /* was -0.5px */
//           white-space: nowrap;
//         }
//         .lbl-mono { font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace; }
//         .lbl-italic { font-style: italic; }

//         /* ---------- ROWS — 105px inventory (3) / 67px customer (2) ---------- */
//         .lbl-rows {
//           flex: 0 0 auto;
//           height: 95px;
//           display: flex;
//           flex-direction: column;
//           gap: 2px;
//           padding-top: 5px;
//           border-top: 2px solid #000;    /* was #bbb */
//           overflow: hidden;
//         }
//         .lbl-rows-cust { height: 67px; }

//         .lbl-row {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           height: 28px;
//           min-width: 0;
//           flex: 0 0 auto;
//         }
//         .lbl-rows-cust .lbl-row { height: 28px; }
//         .lbl-row .lbl-k { flex: 0 0 118px; }   /* was 95px — fits "BOOKED IN" at 20px */

//         .lbl-row-v {
//           flex: 1 1 auto;
//           min-width: 0;
//           font-size: 24px;            /* 17 -> 24   (6.0pt -> 8.5pt) */
//           line-height: 28px;
//           font-weight: 600;
//           white-space: nowrap;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }

//         /* ---------- QR ---------- */
//         .lbl-qr {
//           flex: 0 0 120px;
//           width: 120px;
//           height: 120px;
//           display: flex;
//           align-items: flex-start;
//           justify-content: flex-end;
//         }
//         .lbl-qr canvas {
//           width: 120px !important;
//           height: 120px !important;
//           display: block;
//         }

//         /* ---------- FOOT — 36px ---------- */
//         .lbl-foot {
//           flex: 0 0 auto;
//           height: 36px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 10px;
//           margin-top: 4px;
//           padding-top: 4px;
//           border-top: 2px solid #000;
//           font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
//           font-size: 22px;            /* 15 -> 22   (5.3pt -> 7.8pt) */
//           line-height: 26px;
//           font-weight: 700;
//           white-space: nowrap;
//           overflow: hidden;
//         }
//         .lbl-foot-center { justify-content: center; }
//         .lbl-foot-name {
//           min-width: 0;
//           overflow: hidden;
//           text-overflow: ellipsis;
//         }
//         .lbl-foot-right { display: flex; align-items: center; gap: 8px; flex: 0 0 auto; }
//         .lbl-price {
//           background: #000;
//           color: #fff;
//           padding: 0 6  px;
//           border-radius: 4px;
//           font-weight: 800;
//           font-size: 26px;            /* 18 -> 22 */
//           line-height: 30px;
//           /* NOTE: reversed text is the most fragile element on a thermal
//              label — the white counters can close up when darkness is high.
//              If the price prints as a black blob, swap to an outlined badge:
//                background: #fff; color: #000; border: 2px solid #000;
//              and drop font-size to 20px to keep the badge the same width. */
//         }

//         /* ---------- PREVIEW CHROME (screen only, not captured) ---------- */
//         .lbl-frame {
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//           border-radius: 8px;
//           background: #fff;
//         }
//         .lbl-caption {
//           font-size: 0.75rem;
//           font-weight: 600;
//           color: #64748b;
//           text-align: center;
//           padding: 4px;
//         }
//         .lbl-foot-inv    { height: 40px; }       
//         .lbl-rupee {
//   font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
//   font-weight: 700;      /* badge is 800 — lighter keeps the bars from merging */
//   font-size: 28px;       /* 2px over the digits so its bars get more dots */
//   margin-right: 2px;
// }

//       `}</style>
//     </div>
//   );
// }


'use client';

import { useState, useEffect, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { toPng } from 'html-to-image';

/**
 * Font scaling for a 203 DPI thermal label.
 *
 * At 1 CSS px = 1 printer dot, 1px = 0.125mm.
 * 24px = 8.5pt is the practical legibility floor on a TSC TE210.
 * Never pass a minPx below 24 for lowercase body copy.
 */
const fitPx = (text, maxPx, minPx, idealChars) => {
  const len = String(text || '').length || 1;
  const raw = maxPx * (idealChars / len);
  return `${Math.max(minPx, Math.min(maxPx, raw)).toFixed(0)}px`;
};

const CPU_REQUIRED = ['Macbook', 'Windows Laptop'];

const EMPTY_FORM = {
  customerName: '',
  customerNumber: '',
  deviceType: '',
  partType: '',
  issue: '',
  model: '',
  processor: '',
  ram: '',
  ssd: '',
  serialNumber: '',
  assetTag: '',
  isForSale: false,
  minSalePrice: '',
  maxSalePrice: '',
};

export default function InventoryStickerPage() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });
  const [isReprintMode, setIsReprintMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const inventoryLabelRef = useRef(null);
  const customerLabelRef = useRef(null);

  const generateAssetTag = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const randomString = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `DC-${year}${month}${day}-${randomString}`;
  };

  useEffect(() => {
    setFormData((prev) => ({ ...prev, assetTag: generateAssetTag() }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({ 
        ...prev, 
        [name]: checked, 
        minSalePrice: checked ? prev.minSalePrice : '',
        maxSalePrice: checked ? prev.maxSalePrice : '' 
      }));
    } else if (name === 'deviceType' && value !== 'Parts') {
      setFormData((prev) => ({ ...prev, deviceType: value, partType: '' }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLookupAsset = async (e) => {
    e?.preventDefault();
    if (!searchQuery.trim()) return;

    setLoading(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const res = await fetch(`/api/inventory?query=${encodeURIComponent(searchQuery.trim())}`);
      const result = await res.json();

      if (result.success && result.data) {
        const item = result.data;
        setFormData({
          customerName: item.customerName || '',
          customerNumber: item.customerNumber || '',
          deviceType: item.deviceType || '',
          partType: item.partType || '',
          issue: item.issue || '',
          model: item.model || '',
          processor: item.processor || '',
          ram: item.ram || '',
          ssd: item.ssd || '',
          serialNumber: item.serialNumber || '',
          assetTag: item.assetTag || '',
          isForSale: item.isForSale || false,
          minSalePrice: item.minSalePrice || '',
          maxSalePrice: item.maxSalePrice || '',
        });
        setIsReprintMode(true);
        setStatusMessage({ type: 'success', text: `Loaded tag: ${item.assetTag} (Re-print mode active)` });
      } else {
        setStatusMessage({ type: 'error', text: result.error || 'No matching asset found.' });
      }
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Error contacting database.' });
    } finally {
      setLoading(false);
    }
  };

  const handleClearReprint = () => {
    setIsReprintMode(false);
    setSearchQuery('');
    setStatusMessage({ type: '', text: '' });
    setFormData({ ...EMPTY_FORM, assetTag: generateAssetTag() });
  };

  const handleSaveAndPrint = async (targetStickerType) => {
    if (!formData.deviceType || !formData.model || !formData.serialNumber) {
      setStatusMessage({ type: 'error', text: 'Device Type, Model, and S/N are required.' });
      return;
    }
    if (formData.deviceType === 'Parts' && !formData.partType) {
      setStatusMessage({ type: 'error', text: 'Choose the exact part type.' });
      return;
    }
    if (CPU_REQUIRED.includes(formData.deviceType) && (!formData.processor || !formData.ram || !formData.ssd)) {
      setStatusMessage({ type: 'error', text: 'Processor, RAM and storage are required for laptops.' });
      return;
    }
    if (formData.isForSale && (!formData.minSalePrice || !formData.maxSalePrice)) {
      setStatusMessage({ type: 'error', text: 'Enter both minimum and maximum sale prices.' });
      return;
    }
    if (targetStickerType === 'customer' && (!formData.customerName.trim() || !formData.customerNumber.trim())) {
      setStatusMessage({ type: 'error', text: 'Customer Name and Contact Number are required for Customer Labels.' });
      return;
    }

    setLoading(true);
    setStatusMessage({ type: '', text: '' });

    try {
      const targetRef = targetStickerType === 'inventory' ? inventoryLabelRef : customerLabelRef;

      const base64Sticker = await toPng(targetRef.current, {
        cacheBust: true,
        width: 480,
        height: 320,
        pixelRatio: 1,
        backgroundColor: '#ffffff',
        style: {
          transform: 'none',
        },
      });

      if (!isReprintMode) {
        const finalizedPayload = { ...formData, qrCodeImage: base64Sticker };
        const inventoryRes = await fetch('/api/inventory', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(finalizedPayload),
        });

        const outcome = await inventoryRes.json();
        if (!outcome.success) {
          setStatusMessage({ type: 'error', text: outcome.error || 'The database rejected this entry.' });
          setLoading(false);
          return;
        }
      }

      const printRes = await fetch('/api/print', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ zpl: base64Sticker }),
      });

      const printOutcome = await printRes.json();

      if (printOutcome.success) {
        setStatusMessage({ type: 'success', text: `Asset ${formData.assetTag} sent to printer!` });
        if (!isReprintMode) {
          setFormData({ ...EMPTY_FORM, assetTag: generateAssetTag() });
        }
      } else {
        setStatusMessage({ type: 'error', text: printOutcome.error || 'Failed to queue print job.' });
      }
    } catch (err) {
      setStatusMessage({ type: 'error', text: 'Error generating label image.' });
    } finally {
      setLoading(false);
    }
  };

  const structuredQRString = `TAG:${formData.assetTag}\nSN:${formData.serialNumber || 'N/A'}\nModel:${formData.model || 'N/A'}`;
  const currentDateString = new Date().toLocaleDateString('en-IN');

  const displayDeviceClassification = formData.deviceType === 'Parts' && formData.partType
    ? `Parts — ${formData.partType}`
    : formData.deviceType || '—';

  const cpuLine = formData.processor || '—';
  const ramGB = formData.ram ? `${formData.ram.replace(/gb$/i, '')}GB` : '';
  const ssdGB = formData.ssd ? `${formData.ssd.replace(/gb$/i, '')}GB` : '';
  const memoryLine = [ramGB, ssdGB].filter(Boolean).join(' · ') || '—';

  return (
    <div className="page-wrap min-h-screen bg-slate-50 text-slate-800 p-6 md:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-24">

        {/* Input Control Deck */}
        <div className="lg:col-span-6 bg-white border border-slate-200 shadow-sm rounded-xl p-6 md:p-8">

          <div className="mb-6 flex justify-between items-start flex-wrap gap-4">
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900">Device Logging Dashboard</h1>
              <p className="text-sm text-slate-500 mt-1">Labels map 1:1 to 203 DPI (480x320 pixels).</p>
            </div>
            {formData.assetTag && (
              <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded-md border ${isReprintMode ? 'bg-amber-50 text-amber-800 border-amber-300' : 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                {isReprintMode ? 'RE-PRINTING: ' : 'Asset ID: '}{formData.assetTag}
              </span>
            )}
          </div>

          <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-xl">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Re-Print Existing Sticker
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLookupAsset(e)}
                placeholder="Scan or enter Asset Tag / Serial No."
                className="flex-1 text-sm font-mono px-3 py-2 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 outline-none"
              />
              <button
                type="button"
                onClick={handleLookupAsset}
                disabled={loading || !searchQuery.trim()}
                className="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs px-4 py-2 rounded-lg transition-all active:scale-[0.99] disabled:bg-amber-300"
              >
                Fetch Tag
              </button>
              {isReprintMode && (
                <button
                  type="button"
                  onClick={handleClearReprint}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs px-3 py-2 rounded-lg transition-all"
                >
                  New Tag
                </button>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Customer/Supplier Name <span className="text-slate-400 font-normal">(Req for Customer tag)</span>
                </label>
                <input type="text" name="customerName" value={formData.customerName} onChange={handleInputChange} className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. John Doe" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Customer Contact Number <span className="text-slate-400 font-normal">(Req for Customer tag)</span>
                </label>
                <input type="tel" name="customerNumber" value={formData.customerNumber} onChange={handleInputChange} className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. +91 98765 43210" />
              </div>
            </div>

            <div className={`grid grid-cols-1 ${formData.deviceType === 'Parts' ? 'md:grid-cols-2' : ''} gap-4`}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Device Type</label>
                <select name="deviceType" value={formData.deviceType} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
                  <option value="">-- Select Device --</option>
                  <option value="Macbook">Macbook</option>
                  <option value="Windows Laptop">Windows Laptop</option>
                  <option value="Phone">Phone</option>
                  <option value="Keyboard">Keyboard</option>
                  <option value="Mouse">Mouse</option>
                  <option value="Monitor">Monitor</option>
                  <option value="Parts">Parts</option>
                  <option value="Others">Others</option>
                </select>
              </div>

              {formData.deviceType === 'Parts' && (
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Part Specification</label>
                  <select name="partType" value={formData.partType} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all">
                    <option value="">-- Select Component --</option>
                    <option value="Screen">Screen</option>
                    <option value="Panel">Panel</option>
                    <option value="Battery">Battery</option>
                    <option value="Trackpad">Trackpad</option>
                    <option value="Speakers">Speakers</option>
                    <option value="Keyboard Replacement">Keyboard Replacement</option>
                    <option value="Strip">Strip</option>
                    <option value="DC">DC</option>
                    <option value="Motherboard">Motherboard</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-4">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isForSale"
                  name="isForSale"
                  checked={formData.isForSale}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="isForSale" className="text-sm font-bold text-slate-700 uppercase tracking-wide cursor-pointer select-none">
                  Mark this asset For Sale
                </label>
              </div>

              {formData.isForSale && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Min Sale Price (₹)</label>
                    <input
                      type="number"
                      name="minSalePrice"
                      value={formData.minSalePrice}
                      onChange={handleInputChange}
                      required={formData.isForSale}
                      className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                      placeholder="e.g. 40000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Max Sale Price (₹)</label>
                    <input
                      type="number"
                      name="maxSalePrice"
                      value={formData.maxSalePrice}
                      onChange={handleInputChange}
                      required={formData.isForSale}
                      className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none"
                      placeholder="e.g. 45000"
                    />
                  </div>
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Device Model / Descriptor</label>
              <input type="text" name="model" value={formData.model} onChange={handleInputChange} required maxLength={24} className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. MacBook Pro M3" />
            </div>

            <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-xl space-y-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-blue-800">Headline specs — printed large on the inventory label</p>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Processor</label>
                <input type="text" name="processor" value={formData.processor} onChange={handleInputChange} maxLength={20} className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. i7-1165G7 or M3 Pro" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">RAM</label>
                  <input type="text" name="ram" value={formData.ram} onChange={handleInputChange} className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. 16GB" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Storage</label>
                  <input type="text" name="ssd" value={formData.ssd} onChange={handleInputChange} className="w-full text-sm px-3 py-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. 512GB SSD" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Serial Number (S/N)</label>
              <input type="text" name="serialNumber" value={formData.serialNumber} onChange={handleInputChange} required className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none" placeholder="e.g. C02XL198HF21" />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Reported Symptoms / Failures</label>
              <textarea name="issue" value={formData.issue} onChange={handleInputChange} rows="3" maxLength={30} className="w-full text-sm px-3 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none" placeholder="Describe faults..."></textarea>
              <p className="text-[11px] text-slate-500 mt-1">Fault prints on one line — anything past ~27 characters is cut with an ellipsis.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                type="button"
                disabled={loading}
                onClick={() => handleSaveAndPrint('inventory')}
                className={`${isReprintMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-blue-600 hover:bg-blue-700'} text-white font-semibold text-sm py-3.5 px-4 rounded-xl transition-all shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none`}
              >
                {loading ? 'Processing...' : (isReprintMode ? 'Re-Print Inventory Label' : 'Print Inventory Label')}
              </button>
              <button
                type="button"
                disabled={loading}
                onClick={() => handleSaveAndPrint('customer')}
                className="bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm py-3.5 px-4 rounded-xl transition-all shadow-sm active:scale-[0.99] disabled:opacity-50 disabled:pointer-events-none"
              >
                {loading ? 'Processing...' : (isReprintMode ? 'Re-Print Customer Label' : 'Print Customer Label')}
              </button>
            </div>

            {statusMessage.text && (
              <div className={`p-4 rounded-xl text-sm font-medium border ${statusMessage.type === 'success' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' : 'bg-rose-50 text-rose-800 border-rose-200'}`}>
                {statusMessage.text}
              </div>
            )}
          </div>
        </div>

        {/* Live label previews */}
        <div className="lg:col-span-6 flex flex-col gap-8 items-center">

          {/* 1. INTERNAL INVENTORY LABEL */}
          <div className="lbl-frame">
            <div className="lbl" ref={inventoryLabelRef}>
              <div className="lbl-head">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/divvylogo-nav.svg" alt="Divvy" className="lbl-logo" />
                <span className="lbl-tag">{formData.assetTag || 'DC-XXXXXXXX-XXXXX'}</span>
              </div>

              <div className="lbl-body">
                <div className="lbl-col">
                  <div className="lbl-hero">
                    <span className="lbl-cpu" style={{ fontSize: fitPx(cpuLine, 36, 24, 14) }}>{cpuLine}</span>
                    <span className="lbl-mem" style={{ fontSize: fitPx(memoryLine, 30, 24, 17) }}>{memoryLine}</span>
                  </div>

                  <div className="lbl-sub">
                    <span className="lbl-k">Model</span>
                    <span className="lbl-model">{formData.model || '—'}</span>
                  </div>
                </div>

                <div className="lbl-qr">
                  <QRCodeCanvas
                    id="inventory-canvas-target"
                    value={structuredQRString}
                    size={120}
                    level="M"
                    includeMargin={false}
                  />
                </div>
              </div>

              <div className="lbl-rows">
                <div className="lbl-row">
                  <span className="lbl-k">Type</span>
                  <span className="lbl-row-v">{displayDeviceClassification}</span>
                </div>
                <div className="lbl-row">
                  <span className="lbl-k">S/N</span>
                  <span className="lbl-row-v lbl-mono">{formData.serialNumber || '—'}</span>
                </div>
                <div className="lbl-row">
                  <span className="lbl-k lbl-k-alert">Fault</span>
                  <span className="lbl-row-v lbl-italic">{formData.issue || 'No fault reported'}</span>
                </div>
              </div>

              <div className="lbl-foot lbl-foot-inv">
                <span className="lbl-foot-name">{formData.customerName || '—'}</span>
                <span className="lbl-foot-right">
                  {formData.isForSale && formData.maxSalePrice && (
                    <span className="lbl-price"><span className="lbl-rupee">₹</span>{Number(formData.maxSalePrice).toLocaleString('en-IN')}</span>
                  )}
                  <span>{currentDateString}</span>
                </span>
              </div>
            </div>
            <span className="lbl-caption">Inventory label — 203 DPI Native Mapping</span>
          </div>

          {/* 2. CUSTOMER COUNTER LABEL */}
          <div className="lbl-frame">
            <div className="lbl" ref={customerLabelRef}>
              <div className="lbl-head">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/divvylogo-nav.svg" alt="Divvy" className="lbl-logo" />
                <span className="lbl-slip">Customer Tag</span>
              </div>

              <div className="lbl-body lbl-body-cust">
                <div className="lbl-col lbl-col-cust">
                  <div>
                    <span className="lbl-k">Asset ID</span>
                    <span className="lbl-cust-id">{formData.assetTag || 'DC-XXXXXXXX-XXXXX'}</span>
                  </div>
                  <div>
                    <span className="lbl-k">Customer</span>
                    <span className="lbl-v">{formData.customerName || '—'}</span>
                  </div>
                  <div>
                    <span className="lbl-k">Contact</span>
                    <span className="lbl-v lbl-mono">{formData.customerNumber || '—'}</span>
                  </div>
                </div>

                <div className="lbl-qr">
                  <QRCodeCanvas
                    id="customer-canvas-target"
                    value={structuredQRString}
                    size={120}
                    level="M"
                    includeMargin={false}
                  />
                </div>
              </div>

              <div className="lbl-rows lbl-rows-cust">
                <div className="lbl-row">
                  <span className="lbl-k">Device</span>
                  <span className="lbl-row-v">{formData.model || '—'}</span>
                </div>
                <div className="lbl-row">
                  <span className="lbl-k">Booked in</span>
                  <span className="lbl-row-v lbl-mono">{currentDateString}</span>
                </div>
              </div>

              <div className="lbl-foot lbl-foot-center">
                <span className="lbl-mono">+91 9312247627 / +91 8810223137</span>
              </div>
            </div>
            <span className="lbl-caption">Customer label — 203 DPI Native Mapping</span>
          </div>

        </div>

      </div>

      <style jsx global>{`
        .lbl {
          box-sizing: border-box;
          width: 480px;
          height: 320px;
          padding: 6px 12px;
          background: #fff;
          color: #000;
          border: 2px solid #000;
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
        }

        .lbl-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          height: 30px;
          padding-bottom: 4px;
          border-bottom: 2px solid #000;
          flex: 0 0 auto;
        }
        .lbl-logo {
          height: 24px;
          width: auto;
          max-width: 150px;
          object-fit: contain;
          filter: grayscale(1) contrast(3);
        }
        .lbl-tag {
          font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
          font-size: 24px;
          line-height: 24px;
          font-weight: 700;
          letter-spacing: 0;
          white-space: nowrap;
        }
        .lbl-slip {
          font-size: 22px;
          line-height: 22px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          border: 2px solid #000;
          border-radius: 5px;
          padding: 1px 8px;
          white-space: nowrap;
        }

        .lbl-body {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          height: 137px;
          padding-top: 6px;
          flex: 0 0 auto;
        }
        .lbl-body-cust { height: 170px; }

        .lbl-col {
          flex: 1 1 auto;
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }
        .lbl-col-cust { gap: 4px; }

        .lbl-hero {
          display: flex;
          flex-direction: column;
          flex: 0 0 auto;
        }
        .lbl-cpu {
          display: block;
          line-height: 40px;
          font-weight: 800;
          letter-spacing: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .lbl-mem {
          display: block;
          line-height: 33px;
          font-weight: 800;
          letter-spacing: 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .lbl-sub {
          margin-top: 2px;
          padding-top: 4px;
          border-top: 2px dashed #000;
          min-width: 0;
          flex: 0 0 auto;
        }
        .lbl-model {
          display: block;
          font-size: 26px;
          line-height: 30px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .lbl-k {
          display: block;
          font-size: 20px;
          line-height: 20px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #000;
        }
        .lbl-k-alert { color: #000; }
        .lbl-v {
          color: #000; 
          display: block;
          font-size: 28px;
          line-height: 32px;
          font-weight: 800;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .lbl-cust-id {
          display: block;
          font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
          font-size: 28px;
          line-height: 32px;
          font-weight: 800;
          letter-spacing: 0;
          white-space: nowrap;
        }
        .lbl-mono { font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace; }
        .lbl-italic { font-style: italic; }

        .lbl-rows {
          flex: 0 0 auto;
          height: 95px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          padding-top: 5px;
          border-top: 2px solid #000;
          overflow: hidden;
        }
        .lbl-rows-cust { height: 67px; }

        .lbl-row {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 28px;
          min-width: 0;
          flex: 0 0 auto;
        }
        .lbl-rows-cust .lbl-row { height: 28px; }
        .lbl-row .lbl-k { flex: 0 0 118px; }

        .lbl-row-v {
          flex: 1 1 auto;
          min-width: 0;
          font-size: 24px;
          line-height: 28px;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .lbl-qr {
          flex: 0 0 120px;
          width: 120px;
          height: 120px;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
        }
        .lbl-qr canvas {
          width: 120px !important;
          height: 120px !important;
          display: block;
        }

        .lbl-foot {
          flex: 0 0 auto;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 4px;
          padding-top: 4px;
          border-top: 2px solid #000;
          font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
          font-size: 22px;
          line-height: 26px;
          font-weight: 700;
          white-space: nowrap;
          overflow: hidden;
        }
        .lbl-foot-center { justify-content: center; }
        .lbl-foot-name {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .lbl-foot-right { display: flex; align-items: center; gap: 8px; flex: 0 0 auto; }
        .lbl-price {
          background: #000;
          color: #fff;
          padding: 0 6px;
          border-radius: 4px;
          font-weight: 800;
          font-size: 26px;
          line-height: 30px;
        }

        .lbl-frame {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          border-radius: 8px;
          background: #fff;
        }
        .lbl-caption {
          font-size: 0.75rem;
          font-weight: 600;
          color: #64748b;
          text-align: center;
          padding: 4px;
        }
        .lbl-foot-inv { height: 40px; }       
        .lbl-rupee {
          font-family: ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif;
          font-weight: 700;
          font-size: 28px;
          margin-right: 2px;
        }
      `}</style>
    </div>
  );
}