// // app/blogpost/[slug]/page.js
// import Navbar from '@/app/components/navbar';
// import dbConnect from '@/lib/mongodb';
// import Blog from '@/models/Blog';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';

// export async function generateStaticParams() {
//   await dbConnect();
//   const posts = await Blog.find({}, 'slug').lean();
//   return posts.map((post) => ({ slug: post.slug }));
// }

// export default async function BlogPost({ params }) {
//   await dbConnect();
//   const post = await Blog.findOne({ slug: params.slug }).lean();

//   if (!post) return notFound();

//   return (
    

//     <main className="min-h-screen w-full bg-neutral-950 text-white">
//       <Navbar className="dark:invert"/>
//       <section className="relative h-[50vh] md:h-[60vh] w-full overflow-hidden flex items-center justify-center">
//         <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" className="absolute inset-0 opacity-60 blur-sm" />
//         <h1 className="text-5xl md:text-7xl font-extrabold z-10 text-white text-center px-4 uppercase">{post.title}</h1>
//       </section>
//       <div className="px-6 md:px-20 -mt-10 relative z-30">
//         <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl px-6 py-5 flex items-center gap-4">
//           <div className="w-14 h-14 rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-white flex items-center justify-center text-xl font-bold">
//             {post.author[0]}
//           </div>
//           <div>
//             <p className="text-md font-semibold">{post.author}</p>
//             <p className="text-sm text-neutral-300">Published on {post.date}</p>
//           </div>
//         </div>
//       </div>

//       <article className="relative z-20 mt-10 px-6 md:px-20 pb-20">
//         <div className="max-w-4xl mx-auto backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl p-10 shadow-2xl text-white">
//           <div
//             className="prose prose-invert prose-lg max-w-none"
//             dangerouslySetInnerHTML={{ __html: post.content }}
//           />
//         </div>
//       </article>
//     </main>
//   );
// }


// import Navbar from '@/app/components/navbar';
// import dbConnect from '@/lib/mongodb';
// import Blog from '@/models/Blog';
// import Image from 'next/image';
// import { notFound } from 'next/navigation';
// import { motion } from 'framer-motion';

// export async function generateStaticParams() {
//   await dbConnect();
//   const posts = await Blog.find({}, 'slug').lean();
//   return posts.map((post) => ({ slug: post.slug }));
// }

// export default async function BlogPost({ params }) {
//   await dbConnect();
//   const post = await Blog.findOne({ slug: params.slug }).lean();

//   if (!post) return notFound();

//   return (
//     <div className="relative min-h-screen w-full bg-gradient-to-tr from-white to-[#f0f9ff] overflow-hidden text-gray-800">
//       <Navbar />

//       {/* Glowing BG Blobs */}
//       <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
//       <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-pink-100 rounded-full filter blur-2xl opacity-20 animate-pulse"></div>

//       {/* Header Image with Glass Layer */}
//       <div className="relative h-[55vh] w-full">
//         <Image
//           src={post.coverImage || '/default-cover.jpg'}
//           alt={post.title}
//           layout="fill"
//           objectFit="cover"
//           className="brightness-95"
//         />
//         <div className="absolute inset-0 bg-white/40 backdrop-blur-lg flex items-center justify-center">
//           <motion.h1
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl md:text-6xl font-bold text-gray-900 drop-shadow-xl text-center px-6"
//           >
//             {post.title}
//           </motion.h1>
//         </div>
//       </div>

//       {/* Main Content Glass Card */}
//       <main className="flex justify-center px-4 md:px-10 lg:px-20 -mt-24 z-10 relative">
//         <motion.article
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="max-w-4xl w-full bg-white/30 backdrop-blur-2xl border border-white/50 shadow-2xl rounded-3xl p-10 md:p-14 mt-4"
//         >
//           <p className="text-sm text-gray-500 mb-4 italic">
//             Published on {new Date(post.createdAt).toLocaleDateString()}
//           </p>
//           <div
//             className="prose prose-xl prose-sky max-w-none text-gray-800"
//             dangerouslySetInnerHTML={{ __html: post.content }}
//           />
//         </motion.article>
//       </main>
//     </div>
//   );
// }


// "use client";

// import Image from "next/image";
// import { useParams } from "next/navigation";

// export default function BlogPostPage() {
//   const { slug } = useParams();

//   return (
//     <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <article>
//         {/* Title */}
//         <div className="text-5xl text-gray-900 mt-[100px] mb-6 text-center leading-[45px] md:leading-[60px]">
//           5 Effective Brain-Recharging Activities No One Is Talking About
//         </div>

//         {/* Author Section */}
//         <div className="flex items-center space-x-4 mb-10 justify-center ">
//           <Image
//             src="https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=48&q=75"
//             alt="Author"
//             width={48}
//             height={48}
//             className="rounded-full"
//           />
//           <div>
//             <p className="text-sm font-semibold text-gray-900 ">Cody Fisher</p>
//             <p className="text-sm text-gray-500">Published on May 12, 2023</p>
//           </div>
//         </div>

//         {/* Featured Image */}
//         <div className="mb-10">
//           <Image
//             src="https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=3840&q=75"
//             alt="Blog banner"
//             width={987}
//             height={607}
//             className="rounded-lg w-full"
//           />
//         </div>

//         {/* Blog Content */}
//         <div className="prose prose-lg max-w-none">
//           <p>
//             Our brains are our most powerful tools, yet they are constantly bombarded with information,
//             decisions, and stressors. In our fast-paced world, it's crucial to find activities that help
//             recharge and reset our minds.
//           </p>

//           <h2>1. Forest Bathing</h2>
//           <p>
//             This Japanese practice involves immersing yourself in nature. The sights, sounds, and smells
//             of the forest can reduce stress hormones and improve mental clarity.
//           </p>

//           <h2>2. Doing Nothing</h2>
//           <p>
//             Embracing idleness—even for a few minutes—can spark creativity and reduce burnout. Let your
//             mind wander without a goal.
//           </p>

//           <h2>3. Visual Thinking Exercises</h2>
//           <p>
//             Doodle, sketch, or use mind maps to let your brain process ideas in non-linear ways. It
//             enhances memory and problem-solving.
//           </p>

//           <h2>4. Breath Work</h2>
//           <p>
//             Simple breathing exercises like box breathing (inhale, hold, exhale, hold) regulate your
//             nervous system and sharpen focus.
//           </p>

//           <h2>5. Listening to Silence</h2>
//           <p>
//             Disconnect from devices and external sounds. Silence creates space for introspection and
//             deep relaxation.
//           </p>
//         </div>
//       </article>
//     </main>
//   );
// }


// app/blogpost/[slug]/page.js
import dbConnect from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { sanitize } from '@/lib/sanitize-html';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import parse from 'html-react-parser';

export async function generateMetadata({ params }) {
  const { slug } = params;
  await dbConnect();
  const blog = await Blog.findOne({ slug });

  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = params;
  await dbConnect();

  const blog = await Blog.findOne({ slug }).lean();

  if (!blog) return notFound();

  const sanitizedContent = sanitize(blog.content);

  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article>
        {/* Title */}
        <h1 className="text-3xl md:text-5xl text-gray-900 mt-[100px] mb-6 text-center leading-[35px] md:leading-[60px]">
          {blog.title}
        </h1>

        {/* Author Section */}
        <div className="flex items-center space-x-4 mb-10 justify-center ">
          <Image
            src={blog.authorImage}
            alt={blog.author}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">{blog.author}</p>
            <p className="text-sm text-gray-500">Published on {blog.date}</p>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-10">
          <Image
            src={blog.image}
            alt="Blog banner"
            width={987}
            height={607}
            className="rounded-lg w-full"
          />
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none mb-16">
          {parse(sanitizedContent)}
        </div>

        {/* About the Author */}
        <div className="border-t pt-10">
          <div className="flex items-center space-x-6">
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
