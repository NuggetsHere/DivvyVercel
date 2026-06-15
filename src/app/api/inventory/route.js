import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Inventory from '@/models/Inventory';

export async function POST(request) {
  try {
    await dbConnect();
    
    const body = await request.json();
    const { customerName, customerNumber, issue, model, ram, ssd, serialNumber, assetTag, qrCodeImage } = body;

    if (!customerName || !customerNumber || !issue || !model || !ram || !ssd || !serialNumber || !assetTag || !qrCodeImage) {
      return NextResponse.json({ success: false, error: 'Missing required parameters.' }, { status: 400 });
    }

    // Double check that asset tag doesn't collide
    const existingAsset = await Inventory.findOne({ assetTag });
    if (existingAsset) {
      return NextResponse.json({ success: false, error: 'Generated Asset Tag already exists.' }, { status: 400 });
    }

    const savedRecord = await Inventory.create({
      customerName,
      customerNumber,
      issue,
      model,
      ram,
      ssd,
      serialNumber,
      assetTag,
      qrCodeImage
    });

    return NextResponse.json({ success: true, data: savedRecord }, { status: 201 });

  } catch (error) {
    console.error('Inventory Save Error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Internal server error' }, { status: 500 });
  }
}