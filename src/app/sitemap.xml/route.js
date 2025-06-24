import { NextResponse } from 'next/server';
import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

const BASE_URL = 'https://divvycomputronix.com';

export async function GET() {
  await connectMongoDB();

  const staticPages = [
    {
      loc: '/',
      priority: 1.0,
      lastmod: '2025-06-20',
    },
    {
      loc: '/services',
      priority: 0.9,
      lastmod: '2025-06-22',
    },
    {
      loc: '/contact',
      priority: 0.9,
      lastmod: '2025-06-01',
    },
    {
      loc: '/about',
      priority: 0.6,
      lastmod: '2025-05-15',
    },
    {
      loc: '/blogs',
      priority: 0.7,
      lastmod: '2025-06-21',
    },
  ];

  const blogs = await Blog.find({}, 'slug date').lean();

  const blogPages = blogs.map((blog) => {
    let lastmod;
    if (blog.date) {
      try {
        const parsedDate = new Date(blog.date);
        if (!isNaN(parsedDate)) {
          lastmod = parsedDate.toISOString().split('T')[0];
        }
      } catch (_) {
        // Invalid date, skip
      }
    }

    return {
      loc: `/blogpost/${blog.slug}`,
      priority: 0.6,
      ...(lastmod ? { lastmod } : {}), // include only if valid
    };
  });

  const urls = [...staticPages, ...blogPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(({ loc, priority, lastmod }) => {
    return `
  <url>
    <loc>${BASE_URL}${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <priority>${priority}</priority>
  </url>`;
  })
  .join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
