import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import PrintJob from '@/models/PrintJob';
// Python script polls this to get the next pending job
export async function GET() {
  try {
    await dbConnect();

    // Find the oldest pending job and mark it as 'processing' so it isn't grabbed twice
    const job = await PrintJob.findOneAndUpdate(
      { status: 'pending' },
      { $set: { status: 'processing', processingAt: new Date() } },
      { sort: { createdAt: 1 }, new: true } // new: true returns the updated document
    );

    if (!job) {
      return NextResponse.json({ hasJob: false });
    }

    return NextResponse.json({
      hasJob: true,
      jobId: job._id.toString(),
      imageBase64: job.imageBase64
    });
  } catch (error) {
    console.error('Print queue GET error:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}

// Python script calls this to mark a job as completed
export async function POST(req) {
  try {
    const { jobId } = await req.json();
    
    if (!jobId) {
      return NextResponse.json({ success: false, error: 'No jobId provided' }, { status: 400 });
    }

    await dbConnect();

    await PrintJob.findByIdAndUpdate(
      jobId,
      { $set: { status: 'completed', completedAt: new Date() } }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Print queue POST error:', error);
    return NextResponse.json({ success: false, error: 'Database error' }, { status: 500 });
  }
}