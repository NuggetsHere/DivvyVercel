import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  customerName: { type: String, required: [true, 'Customer name is required'] },
  customerNumber: { type: String, required: [true, 'Customer phone number is required'] },
  issue: { type: String, required: [true, 'Device issue details are required'] },
  model: { type: String, required: [true, 'Device model is required'] },
  ram: { type: String, required: [true, 'RAM specifications are required'] },
  ssd: { type: String, required: [true, 'SSD/Storage capacity is required'] },
  serialNumber: { type: String, required: [true, 'Device serial number is required'] },
  assetTag: { type: String, required: [true, 'Asset tag is required'], unique: true }, // New dynamic tag field
  qrCodeImage: { type: String, required: [true, 'QR Code image string is required'] },
  createdAt: { type: Date, default: Date.now }
}, { 
  collection: 'inventory' 
});

export default mongoose.models.Inventory || mongoose.model('Inventory', InventorySchema);