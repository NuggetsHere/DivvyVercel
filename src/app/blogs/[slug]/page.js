// import { notFound } from 'next/navigation';
// import Image from 'next/image';
// import Link from 'next/link';
// import { getBaseUrl } from '@/lib/getBaseUrl';

// // 1. Fetch Data Logic
// async function getBlog(slug) {
//   const baseUrl = await getBaseUrl();
//   try {
//     const res = await fetch(`${baseUrl}/api/get-blogpost?slug=${slug}`, { 
//       cache: 'no-store' 
//     });
    
//     if (!res.ok) return null;
//     return res.json();
//   } catch (error) {
//     return null;
//   }
// }

// // 2. Metadata Generation
// export async function generateMetadata({ params }) {
//   const { slug } = await params; 
//   const blog = await getBlog(slug);

//   if (!blog) return {};

//   const metaTitle = blog.metaTitle || blog.manualSeo?.metaTitle || blog.title;
//   const metaDesc = blog.metaDescription || blog.manualSeo?.metaDescription || blog.description;
//   const keywords = blog.keywords || blog.manualSeo?.keywords || [];

//   return {
//     title: metaTitle,
//     description: metaDesc,
//     keywords: keywords,
//     alternates: {
//       canonical: `/blogs/${blog.slug}`,
//     },
//     openGraph: {
//       title: metaTitle,
//       description: metaDesc,
//       url: `/blogs/${blog.slug}`,
//       images: [{ url: blog.image, alt: blog.title }],
//       type: 'article',
//       publishedTime: blog.date,
//       modifiedTime: blog.lastModified,
//       authors: [blog.author],
//     },
//   };
// }

// // 3. Page Component
// export default async function BlogPost({ params }) {
//   const { slug } = await params; 
//   const blog = await getBlog(slug);

//   if (!blog) return notFound();

//   const baseUrl = await getBaseUrl();
//   const blogUrl = `${baseUrl}/blogs/${blog.slug}`;
//   const authorId = `${baseUrl}/#author`;
//   const orgId = `${baseUrl}/#organization`;

//   // --- Data Normalization ---
//   const mentions = blog.mentions || blog.schemaData?.mentions || [];
//   const citations = blog.citations || blog.schemaData?.citations || [];
//   const faqs = blog.faqs || blog.schemaData?.faqs || [];
//   const videoUrl = blog.videoUrl || blog.schemaData?.videoUrl;
//   const articleSection = blog.articleSection || blog.schemaData?.articleSection || "Technology";

//   // --- Advanced Graph Schema ---
//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@graph": [
//       // 1. Organization (Publisher)
//       {
//         "@type": "Organization",
//         "@id": orgId,
//         "name": "Divvy Computronix",
//         "url": baseUrl,
//         "logo": {
//           "@type": "ImageObject",
//           "url": "https://divvycomputronix.com/divvylogo-nav.svg",
//           "contentUrl": "https://divvycomputronix.com/divvylogo-nav.svg",
//           "caption": "Divvy Computronix Logo",
//           "width": 600,
//           "height": 60
//         },
//         "sameAs": [
//           "https://www.facebook.com/divvycomputronix",
//           "https://linkedin.com/company/divvycomputronix"
//         ]
//       },
//       // 2. Person (Author)
//       {
//         "@type": "Person",
//         "@id": authorId,
//         "name": blog.author || "Divvy Tech Expert",
//         "image": {
//             "@type": "ImageObject",
//             "url": blog.authorImage,
//             "contentUrl": blog.authorImage,
//             "caption": blog.author
//         },
//         "description": blog.authorBio,
//         "worksFor": { "@id": orgId },
//         "jobTitle": blog.authorJobTitle || "Tech Specialist",
//         "sameAs": [blog.authorLinkedIn].filter(Boolean)
//       },
//       // 3. BreadcrumbList
//       {
//         "@type": "BreadcrumbList",
//         "itemListElement": [
//           { "@type": "ListItem", "position": 1, "item": { "@id": baseUrl, "name": "Home" } },
//           { "@type": "ListItem", "position": 2, "item": { "@id": `${baseUrl}/blogs`, "name": "Blogs" } },
          
//           // ✅ FIX 1: Explicitly define the current page item as a WebPage here too
//           { 
//             "@type": "ListItem", 
//             "position": 3, 
//             "item": { 
//               "@id": blogUrl, 
//               "name": blog.title,
//               "@type": "WebPage" // <--- Important change
//             } 
//           }
//         ]
//       },
//       // 4. BlogPosting
//       {
//         "@type": "BlogPosting",
//         "@id": `${blogUrl}/#article`,
        
//         // ✅ FIX 2: Explicitly define mainEntityOfPage as WebPage
//         "mainEntityOfPage": { 
//             "@type": "WebPage",
//             "@id": blogUrl 
//         },
        
//         "headline": blog.title,
//         "description": blog.description,
//         "image": { 
//             "@type": "ImageObject", 
//             "url": blog.image,
//             "contentUrl": blog.image,
//             "caption": blog.title
//         },
//         "datePublished": blog.date,
//         "dateModified": blog.lastModified || blog.date,
//         "author": { "@id": authorId },
//         "publisher": { "@id": orgId },
//         "isAccessibleForFree": "True",
//         "articleSection": articleSection,
//         "keywords": Array.isArray(blog.keywords) ? blog.keywords.join(', ') : "",
//       }
//     ]
//   };

//   // --- Injecting Optional Data ---

//   // Mentions
//   if (mentions.length > 0) {
//     const article = jsonLd["@graph"].find(item => item["@type"] === "BlogPosting");
//     if (article) {
//         article.mentions = mentions.map(m => ({
//             "@type": "Thing", 
//             "name": m.name, 
//             "sameAs": m.url
//         }));
//         article.about = mentions.map(m => ({
//             "@type": "Thing", 
//             "name": m.name, 
//             "sameAs": m.url
//         }));
//     }
//   }

//   // Citations
//   if (citations.length > 0) {
//     const article = jsonLd["@graph"].find(item => item["@type"] === "BlogPosting");
//     if (article) {
//         article.citation = citations;
//     }
//   }

//   // FAQPage Schema
//   if (faqs.length > 0) {
//     jsonLd["@graph"].push({
//       "@type": "FAQPage",
//       "mainEntity": faqs.map(faq => ({
//         "@type": "Question",
//         "name": faq.question,
//         "acceptedAnswer": { 
//             "@type": "Answer", 
//             "text": faq.answer 
//         }
//       }))
//     });
//   }

//   // VideoObject Schema
//   if (videoUrl && videoUrl !== "n/a") {
//     jsonLd["@graph"].push({
//       "@type": "VideoObject",
//       "name": `Video guide: ${blog.title}`,
//       "description": `Watch our detailed guide on ${blog.title}`,
//       "thumbnailUrl": blog.image,
//       "uploadDate": blog.date,
//       "contentUrl": videoUrl,
//       "embedUrl": videoUrl 
//     });
//   }

//   return (
//     <article className="min-h-screen bg-white pt-[120px] pb-20">
//       {/* Inject Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <div className="max-w-4xl mx-auto px-4 md:px-8">
//         <nav className="text-sm text-gray-500 mb-6">
//             <Link href="/" className="hover:underline">Home</Link> &gt; 
//             <Link href="/blogs" className="hover:underline mx-1">Blogs</Link> &gt; 
//             <span className="text-black ml-1 truncate">{blog.title}</span>
//         </nav>

//         <h1 className="text-3xl md:text-5xl font-bold text-black mb-6">{blog.title}</h1>
        
//         <div className="flex items-center gap-4 mb-8 border-b pb-8">
//            {blog.authorImage && (
//              <Image src={blog.authorImage} width={50} height={50} alt={blog.author} className="rounded-full" />
//            )}
//            <div>
//              <p className="font-semibold">{blog.author}</p>
//              <p className="text-sm text-gray-500">{new Date(blog.date).toLocaleDateString()}</p>
//            </div>
//         </div>

//         {blog.image && (
//           <div className="relative w-full h-[300px] md:h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg">
//             <Image src={blog.image} alt={blog.title} fill className="object-cover" priority />
//           </div>
//         )}

//         <div className="prose prose-lg max-w-none prose-img:rounded-lg prose-a:text-blue-600" dangerouslySetInnerHTML={{ __html: blog.content }} />

//         {/* Visual FAQs */}
//         {faqs.length > 0 && (
//             <div className="mt-16 bg-gray-50 p-8 rounded-xl">
//                 <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
//                 <div className="space-y-6">
//                     {faqs.map((faq, i) => (
//                         <div key={i}>
//                             <h3 className="font-bold text-lg text-black">{faq.question}</h3>
//                             <p className="text-gray-700 mt-2">{faq.answer}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         )}
//       </div>
//     </article>
//   );
// }


import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBaseUrl } from '@/lib/getBaseUrl';
import parse from 'html-react-parser'; // Ensure this is installed

// 1. Fetch Data Logic
async function getBlog(slug) {
  const baseUrl = await getBaseUrl();
  try {
    const res = await fetch(`${baseUrl}/api/get-blogpost?slug=${slug}`, { 
      cache: 'no-store' 
    });
    
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    return null;
  }
}

// 2. Metadata Generation
export async function generateMetadata({ params }) {
  const { slug } = await params; 
  const blog = await getBlog(slug);

  if (!blog) return {};

  const metaTitle = blog.metaTitle || blog.manualSeo?.metaTitle || blog.title;
  const metaDesc = blog.metaDescription || blog.manualSeo?.metaDescription || blog.description;
  const keywords = blog.keywords || blog.manualSeo?.keywords || [];

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: keywords,
    alternates: {
      canonical: `/blogs/${blog.slug}`,
    },
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: `/blogs/${blog.slug}`,
      images: [{ url: blog.image, alt: blog.title }],
      type: 'article',
      publishedTime: blog.date,
      modifiedTime: blog.lastModified,
      authors: [blog.author],
    },
  };
}

// 3. Page Component
export default async function BlogPost({ params }) {
  const { slug } = await params; 
  const blog = await getBlog(slug);

  if (!blog) return notFound();

  const baseUrl = await getBaseUrl();
  const blogUrl = `${baseUrl}/blogs/${blog.slug}`;
  const authorId = `${baseUrl}/#author`;
  const orgId = `${baseUrl}/#organization`;

  // --- Data Normalization ---
  const mentions = blog.mentions || blog.schemaData?.mentions || [];
  const citations = blog.citations || blog.schemaData?.citations || [];
  const faqs = blog.faqs || blog.schemaData?.faqs || [];
  const videoUrl = blog.videoUrl || blog.schemaData?.videoUrl;
  const articleSection = blog.articleSection || blog.schemaData?.articleSection || "Technology";

  // --- Advanced Graph Schema ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        "name": "Divvy Computronix",
        "url": baseUrl,
        "logo": {
          "@type": "ImageObject",
          "url": "https://divvycomputronix.com/divvylogo-nav.svg",
          "contentUrl": "https://divvycomputronix.com/divvylogo-nav.svg",
          "caption": "Divvy Computronix Logo",
          "width": 600,
          "height": 60
        },
        "sameAs": [
          "https://www.facebook.com/divvycomputronix",
          "https://linkedin.com/company/divvycomputronix"
        ]
      },
      {
        "@type": "Person",
        "@id": authorId,
        "name": blog.author || "Divvy Tech Expert",
        "image": {
            "@type": "ImageObject",
            "url": blog.authorImage,
            "contentUrl": blog.authorImage,
            "caption": blog.author
        },
        "description": blog.authorBio,
        "worksFor": { "@id": orgId },
        "jobTitle": blog.authorJobTitle || "Tech Specialist",
        "sameAs": [blog.authorLinkedIn].filter(Boolean)
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": baseUrl, "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": `${baseUrl}/blogs`, "name": "Blogs" } },
          { 
            "@type": "ListItem", 
            "position": 3, 
            "item": { 
              "@id": blogUrl, 
              "name": blog.title,
              "@type": "WebPage"
            } 
          }
        ]
      },
      {
        "@type": "BlogPosting",
        "@id": `${blogUrl}/#article`,
        "mainEntityOfPage": { 
            "@type": "WebPage",
            "@id": blogUrl 
        },
        "headline": blog.title,
        "description": blog.description,
        "image": { 
            "@type": "ImageObject", 
            "url": blog.image,
            "contentUrl": blog.image,
            "caption": blog.title
        },
        "datePublished": blog.date,
        "dateModified": blog.lastModified || blog.date,
        "author": { "@id": authorId },
        "publisher": { "@id": orgId },
        "isAccessibleForFree": "True",
        "articleSection": articleSection,
        "keywords": Array.isArray(blog.keywords) ? blog.keywords.join(', ') : "",
      }
    ]
  };

  // Schema Injection Logic (Mentions, Citations, FAQs, Video)
  if (mentions.length > 0) {
    const article = jsonLd["@graph"].find(item => item["@type"] === "BlogPosting");
    if (article) {
        article.mentions = mentions.map(m => ({ "@type": "Thing", "name": m.name, "sameAs": m.url }));
        article.about = mentions.map(m => ({ "@type": "Thing", "name": m.name, "sameAs": m.url }));
    }
  }
  if (citations.length > 0) {
    const article = jsonLd["@graph"].find(item => item["@type"] === "BlogPosting");
    if (article) article.citation = citations;
  }
  if (faqs.length > 0) {
    jsonLd["@graph"].push({
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    });
  }
  if (videoUrl && videoUrl !== "n/a") {
    jsonLd["@graph"].push({
      "@type": "VideoObject",
      "name": `Video guide: ${blog.title}`,
      "description": `Watch our detailed guide on ${blog.title}`,
      "thumbnailUrl": blog.image,
      "uploadDate": blog.date,
      "contentUrl": videoUrl,
      "embedUrl": videoUrl 
    });
  }

  // --- NEW UI IMPLEMENTATION (Using OLD Style) ---
  return (
    <main className="w-full px-4 sm:px-6 lg:px-20 xl:px-32 py-16 mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-5xl mx-auto text-gray-800">
        {/* Old Breadcrumb style integrated */}
        <nav className="text-sm text-gray-500 mb-6 text-center">
            <Link href="/" className="hover:underline">Home</Link> &gt; 
            <Link href="/blogs" className="hover:underline mx-1">Blogs</Link> &gt; 
            <span className="text-black ml-1">{blog.title}</span>
        </nav>

        <h1 className="text-3xl md:text-5xl text-center font-bold text-gray-900 mb-6 leading-tight">
          {blog.title}
        </h1>

        <div className="flex items-center justify-center space-x-4 mb-10">
          {blog.authorImage && (
            <Image
              src={blog.authorImage}
              alt={blog.author}
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
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
              priority
            />
          </div>
        )}

        <div className="prose prose-lg prose-gray max-w-none prose-img:rounded-lg prose-a:text-blue-600">
          {parse(blog.content)}
        </div>

        {/* Visual FAQs from New Code (Restyled to match Old UI) */}
        {faqs.length > 0 && (
            <div className="mt-16 border-t pt-10">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    {faqs.map((faq, i) => (
                        <div key={i} className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-bold text-lg text-gray-900">{faq.question}</h3>
                            <p className="text-gray-700 mt-2">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        )}

        {/* Old About Author section */}
        <div className="border-t pt-10 mt-12">
          <div className="flex items-center gap-6">
            {blog.authorImage && (
                <Image
                src={blog.authorImage}
                alt={blog.author}
                width={64}
                height={64}
                className="rounded-full"
                />
            )}
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