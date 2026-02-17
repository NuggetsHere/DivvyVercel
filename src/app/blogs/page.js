//app/blogs/page.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getBaseUrl } from '@/lib/getBaseUrl';

export const metadata = {
  title: 'Divvy Computronix Blogs',
  description: 'Latest tech blogs, repair tips, and trends from Divvy Computronix.',
};

async function getBlogs() {
  const baseUrl = await getBaseUrl();
  const res = await fetch(`${baseUrl}/api/get-blogs`, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  return res.json();
}

function formatDateWithOrdinal(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th');

  const options = { weekday: 'long', month: 'long', year: 'numeric' };
  const formatted = date.toLocaleDateString('en-US', options);

  return formatted.replace(date.getFullYear(), `${dayWithSuffix} ${date.getFullYear()},`);
}

export default async function BlogsPage() {
  const { blogs } = await getBlogs();

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-12 lg:px-20 pt-[120px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-black text-center">Our Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog._id} href={`/blogs/${blog.slug}`}>
              <div className="group rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 border border-gray-200">
                {blog.image && (
                  <div className="relative h-52 w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <p className="text-sm text-gray-500">

                    {formatDateWithOrdinal(blog.date)}


                  </p>
                  <div className="relative group">
                    <h2 className="text-xl font-semibold text-black mb-2 relative z-10">
                      {blog.title}
                    </h2>
                    <span className="absolute -left-2 bottom-1 h-full w-full bg-purple-300 opacity-60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
                  </div>
                  <p className="text-gray-700 text-sm">
                    {blog.description?.slice(0, 120)}...
                  </p>
                  <div className="mt-4 flex items-center space-x-2">
                    {blog.authorImage && (
                      <Image
                        src={blog.authorImage}
                        alt={blog.author || 'Author'}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm text-gray-600">
                      {blog.author || 'Anonymous'}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
