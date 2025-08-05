export function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://divvycomputronix.com';

  const content = `User-agent: *
Disallow: /admin
Disallow: /api
Disallow: /blogadmin

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 's-maxage=86400, stale-while-revalidate',
    },
  });
}
