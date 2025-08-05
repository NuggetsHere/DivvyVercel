// import { NextResponse } from 'next/server';
// import connectMongoDB from '@/lib/mongodb';
// import Blog from '@/models/Blog';

// const BASE_URL = 'https://divvycomputronix.com';

// export async function GET() {
//   await connectMongoDB();

//   const staticPages = [
//     {
//       loc: '/',
//       priority: 1.0,
//       lastmod: '2025-06-20',
//     },
//     {
//       loc: '/services',
//       priority: 0.9,
//       lastmod: '2025-06-22',
//     },
//     {
//       loc: '/contact',
//       priority: 0.9,
//       lastmod: '2025-06-01',
//     },
//     {
//       loc: '/about',
//       priority: 0.6,
//       lastmod: '2025-05-15',
//     },
//     {
//       loc: '/blogs',
//       priority: 0.7,
//       lastmod: '2025-06-21',
//     },
//   ];

//   const blogs = await Blog.find({}, 'slug date').lean();

//   const blogPages = blogs.map((blog) => {
//     let lastmod;
//     if (blog.date) {
//       try {
//         const parsedDate = new Date(blog.date);
//         if (!isNaN(parsedDate)) {
//           lastmod = parsedDate.toISOString().split('T')[0];
//         }
//       } catch (_) {
//         // Invalid date, skip
//       }
//     }

//     return {
//       loc: `/blogpost/${blog.slug}`,
//       priority: 0.6,
//       ...(lastmod ? { lastmod } : {}), // include only if valid
//     };
//   });

//   const urls = [...staticPages, ...blogPages];

//   const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${urls
//   .map(({ loc, priority, lastmod }) => {
//     return `
//   <url>
//     <loc>${BASE_URL}${loc}</loc>
//     ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
//     <priority>${priority}</priority>
//   </url>`;
//   })
//   .join('')}
// </urlset>`;

//   return new NextResponse(sitemap, {
//     headers: {
//       'Content-Type': 'application/xml',
//     },
//   });
// }



export const runtime = 'nodejs';

import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

const BASE_URL = 'https://divvycomputronix.com';
const appDir = path.join(process.cwd(), 'src/app');

// 🔍 Recursively collect static routes
function getStaticRoutes(dir = '') {
  const entries = fs.readdirSync(path.join(appDir, dir), { withFileTypes: true });

  return entries.flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return getStaticRoutes(fullPath);
    }

    const isPage = entry.name === 'page.js' || entry.name === 'page.jsx';
    if (!isPage) return [];

    const route = '/' + dir.replace(/\/page\.(js|jsx)$/, '');

    const excluded =
      route.includes('[') || route.includes('blogpost') || route.includes('sitemap') || route.includes('robots');

    if (excluded) return [];

    return route === '/index' ? '/' : route;
  });
}

export async function GET() {
  // ✅ Step 1: Get blog routes from MongoDB
  try {
    await connectMongoDB();

    const blogs = await Blog.find({}, 'slug date').lean();

    const blogPages = blogs.map((blog) => {
      const lastmod = blog.date ? new Date(blog.date).toISOString().split('T')[0] : undefined;
      return {
        loc: `/blogpost/${blog.slug}`,
        priority: 0.6,
        changefreq: 'weekly',
        ...(lastmod && { lastmod }),
      };
    });

    // ✅ Step 2: Auto-detect static pages from /src/app
    const staticPaths = getStaticRoutes();

    const staticPages = staticPaths.map((loc) => ({
      loc,
      priority: loc === '/' ? 1.0 : 0.7,
      changefreq: 'monthly',
      lastmod: new Date().toISOString().split('T')[0],
    }));

    const urls = [...staticPages, ...blogPages];

    // ✅ Step 3: Generate XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(({ loc, priority, lastmod, changefreq }) => {
    return `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <priority>${priority}</priority>
    <changefreq>${changefreq}</changefreq>
  </url>`;
  })
  .join('')}
</urlset>`;

    // ✅ Step 4: Return response with caching
    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      },
    });
  } catch (error) {
    console.error('❌ Sitemap generation error:', error);
    return new NextResponse('Failed to generate sitemap', {
      status: 500,
    });
  }
}
