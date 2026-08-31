//src/models/Inventory.js
import mongoose from 'mongoose';

const InventorySchema = new mongoose.Schema({
  customerName: { type: String, default: '' },
  customerNumber: { type: String, default: '' },
  deviceType: { type: String, required: true },
  partType: { type: String, default: '' },
  processor: { type: String, default: '' },
  issue: { type: String, required: false },
  model: { type: String, required: true },
  ram: { type: String, default: '' },
  ssd: { type: String, default: '' },
  serialNumber: { type: String, required: true },
  assetTag: { type: String, required: true, unique: true },
  isForSale: { type: Boolean, default: false },
  salePrice: { type: String, default: '' },
  qrCodeImage: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['IN', 'OUT'], 
    default: 'IN' 
  },
  outReason: { 
    type: String, 
    enum: ['SOLD', 'THIRD_PARTY', ''], 
    default: '' 
  },
  thirdPartyName: { type: String, default: '' },
  outDate: { type: Date, default: null }, // Timestamp when asset leaves the shop
  createdAt: { type: Date, default: Date.now }
}, { 
  collection: 'inventory' 
});

export default mongoose.models.Inventory || mongoose.model('Inventory', InventorySchema);