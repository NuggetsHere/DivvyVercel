import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PrintJob from '@/models/PrintJob';

export async function POST(req) {
  try {
    const { zpl } = await req.json(); // Front-end sends base64 string in 'zpl'

    if (!zpl) {
      return NextResponse.json({ success: false, error: 'No image data provided' }, { status: 400 });
    }

    await dbConnect();

    await PrintJob.create({
      imageBase64: zpl,
      status: 'pending',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Print queue error:', error);
    return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 });
  }
}