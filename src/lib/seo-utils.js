export function generateMetadataAndSchema(blog) {
  const keywords = [
    "laptop repair", "laptop repair delhi ncr", "laptop repair delhi",
    "laptop repair new delhi", "Macbook repair Delhi", "Macbook repair",
    "Macbook repair Delhi NCR", "second hand laptops", "refurbished laptops",
    "second hand laptops delhi", "refurbished laptops delhi",
    "second hand laptops delhi ncr", "refurbished laptops delhi ncr"
  ];

  const metaTitle = `${blog.title} | Laptop & MacBook Repair in Delhi NCR - Divvy Computronix`;
  const metaDescription =
    blog.description?.slice(0, 160) ||
    'Explore expert insights on laptop repair, MacBook service, refurbished laptops and more in Delhi NCR from Divvy Computronix.';

  const wordCount = blog.content?.split(/\s+/)?.length || 0;

  const articleSections = extractSections(blog.title);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.description,
    "articleSection": articleSections,
    "wordCount": wordCount,
    "image": blog.image,
    "author": {
      "@type": "Person",
      "name": blog.author || "Divvy Computronix",
      "image": blog.authorImage || "https://www.divvycomputronix.com/divvylogo-nav.svg"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Divvy Computronix",
      "logo": {
        "@type": "ImageObject",
        "url": "https://divvycomputronix.com/divvylogo-nav.svg",
        "width": 600,
        "height": 60
      }
    },
    "datePublished": blog.date,
    "dateModified": blog.lastModified || blog.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.divvycomputronix.com/blogpost/${blog.slug}`
    },
    "keywords": keywords.join(', ')
  };

  return {
    metaTitle,
    metaDescription,
    keywords,
    wordCount,
    schema,
  };
}

function extractSections(title) {
  const lowerTitle = title.toLowerCase();
  const sections = [];

  if (lowerTitle.includes('ssd') || lowerTitle.includes('hdd'))
    sections.push('Storage Upgrades', 'HDD vs SSD');

  if (lowerTitle.includes('macbook'))
    sections.push('MacBook Repair');

  if (lowerTitle.includes('laptop'))
    sections.push('Laptop Repair');

  if (lowerTitle.includes('refurbished') || lowerTitle.includes('second hand'))
    sections.push('Refurbished Devices');

  return sections.length > 0 ? sections : ['Tech Tips'];
}

