import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Blog from '@/models/Blog'; 

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export const dynamic = 'force-dynamic'; // Ensure this endpoint is not cached at build time

export async function GET() {
  try {
    await connectDB();
    
    // Fetch all blogs, sorted by date (newest first)
    const blogs = await Blog.find({}).sort({ date: -1 });

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
  }
}