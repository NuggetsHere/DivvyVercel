import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Blog from '@/models/Blog'; 

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');

    // Debugging logs to see what's happening in your terminal
    console.log("API /get-blog hit. Searching for slug:", slug);

    if (!slug) {
      return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
    }

    await connectDB();

    // specific search for the slug
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      console.log("Blog not found in Database for slug:", slug);
      return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}