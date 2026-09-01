// //src/app/api/inventory/route.js
// import { NextResponse } from 'next/server';
// import dbConnect from '@/lib/mongodb';
// import Inventory from '@/models/Inventory';

// export async function POST(request) {
//   try {
//     await dbConnect();
//     const body = await request.json();
//     const { 
//       customerName, 
//       customerNumber, 
//       deviceType, 
//       partType, 
//       issue, 
//       model, 
//       processor, 
//       ram, 
//       ssd, 
//       serialNumber, 
//       assetTag, 
//       isForSale, 
//       salePrice, 
//       qrCodeImage 
//     } = body;

//     if (!deviceType || !model || !serialNumber || !assetTag || !qrCodeImage) {
//       return NextResponse.json({ success: false, error: 'Missing required hardware parameters.' }, { status: 400 });
//     }

//     if (deviceType === 'Parts' && !partType) {
//       return NextResponse.json({ success: false, error: 'Part specification is required for Parts.' }, { status: 400 });
//     }

//     const savedRecord = await Inventory.create({
//       customerName: customerName || '',
//       customerNumber: customerNumber || '',
//       deviceType,
//       partType: deviceType === 'Parts' ? partType : '',
//       issue : issue || '',
//       model,
//       processor: processor || '',
//       ram: ram || '',
//       ssd: ssd || '',
//       serialNumber,
//       assetTag,
//       isForSale: Boolean(isForSale),
//       salePrice: isForSale ? salePrice : '',
//       qrCodeImage,
//       status: 'IN',
//       outReason: '',
//       thirdPartyName: '',
//       outDate: null
//     });

//     return NextResponse.json({ success: true, data: savedRecord }, { status: 201 });
//   } catch (error) {
//     console.error('Inventory Save Error:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// export async function GET(request) {
//   try {
//     await dbConnect();
//     const { searchParams } = new URL(request.url);
//     const query = searchParams.get('query');

//     if (!query) {
//       return NextResponse.json({ success: false, error: 'Search query required.' }, { status: 400 });
//     }

//     const asset = await Inventory.findOne({
//       $or: [
//         { assetTag: query.trim() },
//         { serialNumber: query.trim() }
//       ]
//     });

//     if (!asset) {
//       return NextResponse.json({ success: false, error: 'Asset not found in database.' }, { status: 404 });
//     }

//     return NextResponse.json({ success: true, data: asset });
//   } catch (error) {
//     console.error('Inventory Fetch Error:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }

// export async function PUT(request) {
//   try {
//     await dbConnect();
//     const body = await request.json();
//     const { assetTag, action, outReason, thirdPartyName } = body;

//     if (!assetTag) {
//       return NextResponse.json({ success: false, error: 'Asset tag is required.' }, { status: 400 });
//     }

//     const asset = await Inventory.findOne({ assetTag: assetTag.trim() });
//     if (!asset) {
//       return NextResponse.json({ success: false, error: 'Asset not found in database.' }, { status: 404 });
//     }

//     // Checking device OUT: set status, reason, outDate timestamp
//     if (action === 'OUT') {
//       asset.status = 'OUT';
//       asset.outReason = outReason;
//       asset.outDate = new Date(); // Records checkout timestamp

//       if (outReason === 'THIRD_PARTY') {
//         if (!thirdPartyName || !thirdPartyName.trim()) {
//           return NextResponse.json({ success: false, error: 'Third-party name is required.' }, { status: 400 });
//         }
//         asset.thirdPartyName = thirdPartyName.trim();
//       } else {
//         asset.thirdPartyName = '';
//       }

//       await asset.save();
//       return NextResponse.json({ 
//         success: true, 
//         message: `Asset ${assetTag} marked OUT (${asset.outReason}${asset.thirdPartyName ? `: ${asset.thirdPartyName}` : ''}) on ${new Date().toLocaleDateString('en-IN')}.`, 
//         data: asset 
//       });
//     }

//     // Checking device back IN: reset out metadata
//     if (action === 'IN') {
//       asset.status = 'IN';
//       asset.outReason = '';
//       asset.thirdPartyName = '';
//       asset.outDate = null;
//       await asset.save();
//       return NextResponse.json({ success: true, message: `Asset ${assetTag} checked back IN to workshop.`, data: asset });
//     }

//     return NextResponse.json({ success: true, data: asset });
//   } catch (error) {
//     console.error('Inventory Update Error:', error);
//     return NextResponse.json({ success: false, error: error.message }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Inventory from '@/models/Inventory';

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { 
      customerName, 
      customerNumber, 
      deviceType, 
      partType, 
      issue, 
      model, 
      processor, 
      ram, 
      ssd, 
      serialNumber, 
      assetTag, 
      isForSale, 
      minSalePrice,
      maxSalePrice, 
      qrCodeImage 
    } = body;

    if (!deviceType || !model || !serialNumber || !assetTag || !qrCodeImage) {
      return NextResponse.json({ success: false, error: 'Missing required hardware parameters.' }, { status: 400 });
    }

    if (deviceType === 'Parts' && !partType) {
      return NextResponse.json({ success: false, error: 'Part specification is required for Parts.' }, { status: 400 });
    }

    const savedRecord = await Inventory.create({
      customerName: customerName || '',
      customerNumber: customerNumber || '',
      deviceType,
      partType: deviceType === 'Parts' ? partType : '',
      issue: issue || '',
      model,
      processor: processor || '',
      ram: ram || '',
      ssd: ssd || '',
      serialNumber,
      assetTag,
      isForSale: Boolean(isForSale),
      minSalePrice: isForSale ? minSalePrice || '' : '',
      maxSalePrice: isForSale ? maxSalePrice || '' : '',
      qrCodeImage,
      status: 'IN',
      outReason: '',
      thirdPartyName: '',
      outDate: null
    });

    return NextResponse.json({ success: true, data: savedRecord }, { status: 201 });
  } catch (error) {
    console.error('Inventory Save Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function GET(request) {
  try {
    await dbConnect();
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    if (!query) {
      return NextResponse.json({ success: false, error: 'Search query required.' }, { status: 400 });
    }

    const asset = await Inventory.findOne({
      $or: [
        { assetTag: query.trim() },
        { serialNumber: query.trim() }
      ]
    });

    if (!asset) {
      return NextResponse.json({ success: false, error: 'Asset not found in database.' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: asset });
  } catch (error) {
    console.error('Inventory Fetch Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function PUT(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { assetTag, action, outReason, thirdPartyName } = body;

    if (!assetTag) {
      return NextResponse.json({ success: false, error: 'Asset tag is required.' }, { status: 400 });
    }

    const asset = await Inventory.findOne({ assetTag: assetTag.trim() });
    if (!asset) {
      return NextResponse.json({ success: false, error: 'Asset not found in database.' }, { status: 404 });
    }

    if (action === 'OUT') {
      asset.status = 'OUT';
      asset.outReason = outReason;
      asset.outDate = new Date();

      if (outReason === 'THIRD_PARTY') {
        if (!thirdPartyName || !thirdPartyName.trim()) {
          return NextResponse.json({ success: false, error: 'Third-party name is required.' }, { status: 400 });
        }
        asset.thirdPartyName = thirdPartyName.trim();
      } else {
        asset.thirdPartyName = '';
      }

      await asset.save();
      return NextResponse.json({ 
        success: true, 
        message: `Asset ${assetTag} marked OUT (${asset.outReason}${asset.thirdPartyName ? `: ${asset.thirdPartyName}` : ''}) on ${new Date().toLocaleDateString('en-IN')}.`, 
        data: asset 
      });
    }

    if (action === 'IN') {
      asset.status = 'IN';
      asset.outReason = '';
      asset.thirdPartyName = '';
      asset.outDate = null;
      await asset.save();
      return NextResponse.json({ success: true, message: `Asset ${assetTag} checked back IN to workshop.`, data: asset });
    }

    return NextResponse.json({ success: true, data: asset });
  } catch (error) {
    console.error('Inventory Update Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
