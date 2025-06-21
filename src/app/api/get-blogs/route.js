import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET() {
  try {
    await connectMongoDB();
    const blogs = await Blog.find({}).sort({ date: -1 });
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return NextResponse.json({ error: 'Failed to load blogs' }, { status: 500 });
  }
}
