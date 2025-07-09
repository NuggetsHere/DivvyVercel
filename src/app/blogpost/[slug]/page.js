// ✅ 4. blogpost/[slug]/page.js
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { sanitize } from '@/lib/sanitize-html';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';
import Script from 'next/script';

export async function generateMetadata(props) {
  const { slug } = await props.params;
  await dbConnect();
  const blog = await Blog.findOne({ slug });

  if (!blog || !blog.seo) return {};

  return {
    title: blog.seo.metaTitle,
    description: blog.seo.metaDescription,
  };
}

export default async function BlogPostPage(props) {
  const { slug } = await props.params;
  await dbConnect();

  const blog = await Blog.findOne({ slug }).lean();
  if (!blog) return notFound();

  let sanitizedContent = sanitize(blog.content);
  sanitizedContent = sanitizedContent
    .replace(/max-w-\w+/g, '')
    .replace(/mx-auto/g, '')
    .replace(/class="[^"]*"/g, (match) => {
      return match
        .replace(/max-w-[^ ]+|mx-auto/g, '')
        .replace(/\s+/g, ' ')
        .replace('class=" ', 'class="');
    });

  return (
    <main className="w-full px-4 sm:px-6 lg:px-20 xl:px-32 py-16 mt-20">
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(blog.seo?.schema || {})}
      </Script>

      <article className="max-w-5xl mx-auto text-gray-800">
        <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center justify-center space-x-4 mb-10">
          <Image
            src={blog.authorImage}
            alt={blog.author}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">{blog.author}</p>
            <p className="text-sm text-gray-500">Published on {new Date(blog.date).toLocaleDateString()}</p>
          </div>
        </div>

        {blog.image && (
          <div className="flex justify-center mb-12">
            <Image
              src={blog.image}
              alt={`Banner for ${blog.title}`}
              width={960}
              height={540}
              className="rounded-xl shadow-md max-w-full h-auto"
            />
          </div>
        )}

        <div className="prose prose-lg prose-gray max-w-none">
          {parse(sanitizedContent)}
        </div>

        <div className="border-t pt-10 mt-12">
          <div className="flex items-center gap-6">
            <Image
              src={blog.authorImage}
              alt={blog.author}
              width={64}
              height={64}
              className="rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">About the Author</h3>
              <p className="text-gray-700 text-sm mt-1">{blog.authorBio}</p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
