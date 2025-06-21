import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { sanitize } from '@/lib/sanitize-html';

export async function POST(request) {
  try {
    const data = await request.json();

    // Sanitize the HTML content
    const sanitizedContent = sanitize(data.content);

    await connectMongoDB();
    const blog = new Blog({ ...data, content: sanitizedContent });
    await blog.save();

    return NextResponse.json({ message: 'Blog saved' }, { status: 201 });
  } catch (err) {
    console.error('Error saving blog:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


export async function GET() {
  try {
    await connectMongoDB();
    const blogs = await Blog.find().sort({ date: -1 }); // newest first
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
