import mongoose from 'mongoose';

const printJobSchema = new mongoose.Schema({
  imageBase64: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'processing', 'completed'], 
    default: 'pending' 
  },
  processingAt: { type: Date },
  completedAt: { type: Date },
}, { timestamps: true });

// Prevent Mongoose from compiling the model multiple times in Next.js development
export default mongoose.models.PrintJob || mongoose.model('PrintJob', printJobSchema);