// // app/blogs/page.js
// import dbConnect from '@/lib/mongodb';
// import Blog from '@/models/Blog';
// import Marquee from "react-fast-marquee";
// import Image from "next/image";
// import Link from "next/link";

// export default async function Blogs() {
//   await dbConnect();
//   const blogPosts = await Blog.find({}).lean();

//   return (
//     <div className="bg-[#EEEEEE] min-h-screen w-screen overflow-auto">
//       <div className="flex-col md:text-9xl grid grid-cols-5 grid-rows-5 max-h-screen pt-4 lg:pt-12" id="head">
//         <div className="row-start-1 text-[120px] lg:text-[350px] col-end-6 col-start-1 mt-16 lg:row-start-2 z-0">
//           <Marquee>BLOGS &nbsp;</Marquee>
//         </div>

//         <div className="text-lg ml-3 mr-3 mb-10 mt-20 my-10 lg:mt-64 row-start-2 col-end-6 col-start-1 lg:text-4xl lg:col-start-1 lg:col-end-3 lg:row-start-3" id="subhead">
//           Tech Solutions, Repair Tips, and Technology Trends – Stay Updated with Divvy Computronix
//         </div>

//         <div id="blogs" className="rounded-3xl bg-black row-start-3 row-end-6 col-start-1 lg:col-start-4 lg:row-start-1 lg:translate-y-[60px] lg:row-end-6 col-end-6 z-10 p-4 space-y-6 overflow-y-auto mt-14">
//           {blogPosts.map((post, index) => (
//             <Link key={index} href={`/blogpost/${post.slug}`}>
//               <div className="bg-[#EEEEEE] rounded-3xl shadow-lg flex flex-col md:flex-row items-center p-4 gap-4 mb-4">
//                 <div className="w-full md:w-1/3 h-[180px] relative">
//                   <Image src={post.image} alt={post.title} fill className="object-cover rounded-2xl" />
//                 </div>
//                 <div className="w-full md:w-2/3">
//                   <h2 className="text-xl font-bold mb-2">{post.title}</h2>
//                   <p className="text-gray-700 text-xl">{post.description}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// app/blogs/page.tsx



// "use client";

// import Image from "next/image";
// import Link from "next/link";

// export default function BlogPage() {
//   const blogs = [
//     {
//       title: "5 Effective Brain Recharging Activities No One Is Talking About",
//       description:
//         "Unconventional yet powerful methods to give your brain the refresh it deserves."
//       ,
//       date: "June 5, 2024",
//       author: {
//         name: "Olivia Rhye",
//         image:
//           "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2Fcd477178ed12f28ef668adaf9fcae6b8fc351a08-4480x6415.jpg%3Frect%3D0%2C0%2C4480%2C3760%26w%3D2000%26auto%3Dformat&w=48&q=75",
//       },
//       image:
//         "https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F2fda477a7e32f813abb9a8ef425939e6a91c7973-987x1481.png%3Frect%3D0%2C279%2C987%2C607%26w%3D987%26auto%3Dformat&w=3840&q=75",
//       link: "/blogpost/brain-recharging",
//     },
//   ];

//   return (
//     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <Link href={blog.link} key={index} className="group block border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
//             <div className="relative h-64 w-full overflow-hidden">
//               <Image
//                 src={blog.image}
//                 alt={blog.title}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//             <div className="p-6">
//               <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
//               <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
//                 {blog.title}
//               </h2>
//               <p className="mt-2 text-gray-600 text-sm">{blog.description}</p>
//               <div className="flex items-center gap-2 mt-4">
//                 <Image
//                   src={blog.author.image}
//                   alt={blog.author.name}
//                   width={24}
//                   height={24}
//                   className="rounded-full"
//                 />
//                 <span className="text-sm text-gray-700">{blog.author.name}</span>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </main>
//   );
// }




import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

async function getBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get-blogs`, {
    cache: 'no-store',
  });
  if (!res.ok) throw new Error('Failed to fetch blogs');
  return res.json();
}

export default async function BlogsPage() {
  const { blogs } = await getBlogs();

  return (
    <div className="min-h-screen bg-white px-4 py-10 md:px-12 lg:px-20 pt-[120px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-black text-center">Our Latest Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog._id} href={`/blogpost/${blog.slug}`}>
              <div className="group rounded-lg overflow-hidden shadow hover:shadow-xl transition duration-300 border border-gray-200">
                {blog.image && (
                  <div className="relative h-52 w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="p-4">
                  <p className="text-sm text-gray-500">{blog.date}</p>
                  <div className="relative group">
  <h2 className="text-xl font-semibold text-black mb-2 relative z-10">
    {blog.title}
  </h2>
  <span className="absolute -left-2 bottom-1 h-full w-full bg-purple-300 opacity-60 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0"></span>
</div>

                  <p className="text-gray-700 text-sm">{blog.description.slice(0, 120)}...</p>
                  <div className="mt-4 flex items-center space-x-2">
                    {blog.authorImage && (
                      <Image
                        src={blog.authorImage}
                        alt={blog.author}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                      />
                    )}
                    <div className="text-sm text-gray-600">{blog.author}</div>
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

