import fs from 'fs';
import path from 'path';
import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export const dynamic = 'force-dynamic';
const BASE_URL = 'https://divvycomputronix.com';

export default async function sitemap() {
  // 1. Automatically fetch Static Routes from the 'app' folder
  const appDirectory = path.join(process.cwd(), 'src', 'app');  
  function getStaticRoutes(dir, routes = [], baseRoute = '') {
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const isDirectory = fs.statSync(filePath).isDirectory();

      if (isDirectory) {
        // Skip dynamic folders like [slug], route groups (folders with parenthesis), and API routes
        if (!file.startsWith('[') && !file.startsWith('(') && file !== 'api') {
          getStaticRoutes(filePath, routes, `${baseRoute}/${file}`);
        }
      } else if (file === 'page.js' || file === 'page.jsx') {
        routes.push(baseRoute || '/');
      }
    });

    return routes;
  }

  const staticPaths = getStaticRoutes(appDirectory);

  const staticUrls = staticPaths.map((route) => {
    // Priority logic
    let priority = 0.6;
    if (route === '/') priority = 1.0;
    else if (route === '/services') priority = 0.9;

    return {
      url: `${BASE_URL}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '/' ? 'daily' : 'monthly',
      priority: priority,
    };
  });

  // 2. Fetch Dynamic Blog Slugs from MongoDB
  try {
    await connectMongoDB();
    const blogs = await Blog.find({}, 'slug updatedAt').lean();

    const blogUrls = blogs.map((blog) => ({
      url: `${BASE_URL}/blogs/${blog.slug}`, // Updated to your new /blogs/ structure
      lastModified: blog.updatedAt ? new Date(blog.updatedAt) : new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

    return [...staticUrls, ...blogUrls];
  } catch (error) {
    console.error("Sitemap error:", error);
    return staticUrls; // Fallback to just static pages if DB fails
  }
}