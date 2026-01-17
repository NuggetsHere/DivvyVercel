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

// 🔍 Auto-detect static routes
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
  try {
    await connectMongoDB();

    // 📝 1. Dynamic blog URLs
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

    // 📝 2. Static routes with enhanced SEO logic
    const staticPaths = getStaticRoutes();
    const today = new Date().toISOString().split('T')[0];

    const staticPages = staticPaths.map((loc) => {
      let priority = 0.7;
      let changefreq = 'monthly';

      if (loc === '/') {
        priority = 1.0;
        changefreq = 'daily';
      } else if (loc === '/services') {
        priority = 0.9;
        changefreq = 'weekly';
      } else if (loc.startsWith('/services/')) {
        priority = 0.8;
        changefreq = 'weekly';
      } else if (loc === '/about' || loc === '/contact') {
        priority = 0.6;
        changefreq = 'monthly';
      }

      return {
        loc,
        priority,
        changefreq,
        lastmod: today,
      };
    });

    // 📝 3. Generate sitemap XML
    const urls = [...staticPages, ...blogPages];

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

    // ✅ 4. Serve sitemap with cache
    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 's-maxage=3600, stale-while-revalidate',
      },
    });
  } catch (err) {
    console.error('Sitemap generation error:', err);
    return new NextResponse('Failed to generate sitemap', { status: 500 });
  }
}
