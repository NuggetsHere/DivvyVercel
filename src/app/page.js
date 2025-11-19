
import React from "react";
import Image from "next/image";
import {
  IconBrandAmazon,
} from "@tabler/icons-react";
import Link from 'next/link'

import {
  Testimonials,
  CallToAction,
  Features,
  VisitUsOffline,
  AccordionDemo,
  SignupFormDemo,
  InfiniteMovingCardsDemo,
} from './components/lazycomp-landing.js';




export const metadata = {
  title: 'Laptop & MacBook Repair Experts in Delhi NCR | Second-Hand & Refurbished Laptops | Divvy Computronix',
  description:
    'Fast laptop repair in Nehru Place, Delhi. Get SAME DAY service, free pickup & diagnosis. Experts in MacBook, Windows & PC repair. Expert Laptop Repair in Nehru Place, Delhi. Fast, affordable service for MacBooks, Windows laptops, gaming PCs & more. Home pickup & diagnosis available!',
  keywords: [
    // Apple & MacBook Focus
    'MacBook repair Nehru Place',
    'iMac repair Delhi NCR',
    'Apple repair experts in Delhi',
    'MacBook screen replacement Nehru Place',
    'MacBook Air and Pro repair',
    'Apple motherboard repair Delhi',
    'MacBook liquid damage repair',
    'MacBook keyboard replacement Delhi',

    // Laptop Repair
    'laptop repair Nehru Place',
    'trusted laptop repair technicians Delhi NCR',
    'affordable laptop service center Delhi',
    'fast laptop repair Nehru Place',
    'certified laptop repair experts in Delhi',

    // Phone Repair
    'iPhone repair Nehru Place',
    'reliable phone repair center Delhi',
    'Android phone repair Nehru Place',
    'cracked screen phone repair Delhi',
    'quick and affordable phone repair Delhi NCR',

    // Gaming PC
    'gaming PC repair Nehru Place',
    'high-end gaming PC repair Delhi NCR',
    'gaming laptop repair in Delhi',
    'custom gaming PC service Nehru Place',

    // Refurbished Devices
    'refurbished MacBooks Delhi NCR',
    'affordable refurbished laptops Delhi',
    'certified second-hand laptops Nehru Place',
    'budget MacBooks with warranty Delhi',
  ],
  openGraph: {
    title: 'Laptop & MacBook Repair Experts in Delhi NCR | Second-Hand & Refurbished Laptops | Divvy Computronix',
    description:
      'Fast laptop repair in Nehru Place, Delhi. Get 24-hour service, free pickup & diagnosis. Experts in MacBook, Windows & PC repair. Expert MacBook, iPhone, and laptop repair services in Nehru Place since 2009. Trusted for motherboard repair, screen replacements, and refurbished Apple devices.',
    url: 'https://divvycomputronix.com', // Replace with your domain
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://divvycomputronix.com/og-image.png', // Replace with your OG image
        width: 1200,
        height: 630,
        alt: 'Divvy Computronix Repair Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laptop & MacBook Repair Experts in Delhi NCR | Second-Hand & Refurbished Laptops | Divvy Computronix',
    description:
      'Fast laptop repair in Nehru Place, Delhi. Get 24-hour service, free pickup & diagnosis. Experts in MacBook, Windows & PC repair. Specialists in MacBook, iMac, iPhone, and laptop repair in Delhi NCR. Fast 24-hour service, refurbished devices, and Apple motherboard repair experts.',
    images: ['https://divvycomputronix.com/og-image.png'], // Same as OG image
  },
  metadataBase: new URL('https://divvycomputronix.com'), // Replace with your domain
  alternates: {
    canonical: 'https://divvycomputronix.com', // Relative path
  },
};



// export default function Home() {
//   return (

export default function Home() {
  return (
    <>


 <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.divvycomputronix.com",
              "name": "Divvy Computronix",
              "image": "https://www.divvycomputronix.com/divvylogo-nav.svg",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.divvycomputronix.com/divvylogo-nav.svg",
                "width": 600,
                "height": 60
              },
              "url": "https://www.divvycomputronix.com",
              "telephone": "+91-9312247627",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "102-B, 1st Floor, Dohil Chamber, 46, Nehru Place",
                "addressLocality": "New Delhi",
                "addressRegion": "Delhi",
                "postalCode": "110019",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.5495,
                "longitude": 77.2513
              },
              "openingHours": ["Mo-Sa 10:00-21:00"],
              "priceRange": "₹₹",
              "description": "Fast laptop repair in Nehru Place, Delhi. Get 24-hour service, free pickup & diagnosis. Experts in MacBook, Windows & PC repair. Divvy Computronix is a trusted repair and service center in Nehru Place, Delhi NCR, specializing in premium refurbished MacBooks, laptops, and expert repair for MacBooks, iPhones, iMacs, Mac Minis, Surface devices, gaming PCs, and more. Known for fast turnaround, expert diagnostics, and a no fix, no fee policy, we serve individual and business clients across India with courier pickup options.",
              "founder": {
                "@type": "Person",
                "name": "Prakash Kumar"
              },
              "foundingDate": "2009",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-9312247627",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi"],
                  "name": "Prakash Kumar"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8810223137",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Hindi"],
                  "name": "Prakash Kumar"
                },
                {
                  "@type": "ContactPoint",
                  "url": "https://wa.me/919312247627",
                  "contactType": "customer support via WhatsApp",
                  "name": "Prakash Kumar"
                }
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Refurbished MacBooks and Laptops",
                    "areaServed": [
                      { "@type": "Place", "name": "Nehru Place" },
                      { "@type": "Place", "name": "Delhi NCR" }
                    ]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "MacBook Repair Services",
                    "areaServed": [
                      { "@type": "Place", "name": "Nehru Place" },
                      { "@type": "Place", "name": "Delhi NCR" }
                    ]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iPhone Repair",
                    "areaServed": [
                      { "@type": "Place", "name": "Nehru Place" },
                      { "@type": "Place", "name": "Delhi NCR" }
                    ]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "iMac and Mac Mini Repair",
                    "areaServed": [
                      { "@type": "Place", "name": "Nehru Place" },
                      { "@type": "Place", "name": "Delhi NCR" }
                    ]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Surface Device Repair",
                    "areaServed": [
                      { "@type": "Place", "name": "Nehru Place" },
                      { "@type": "Place", "name": "Delhi NCR" }
                    ]
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Gaming PC Repair and Custom Builds",
                    "areaServed": [
                      { "@type": "Place", "name": "Nehru Place" },
                      { "@type": "Place", "name": "Delhi NCR" }
                    ]
                  }
                }
              ]
            })
          }}
        />
    <div className="flex flex-col items-center text-shadow-none w-full overflow-x-hidden">
      
    <section
  id="hero"
  className="md:pt-48 pt-32 py-24 px-10 pl-12 md:pl-0 w-full bg-gradient-to-b from-transparent via-[#00BFFF]/30 to-transparent bg-white"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:pl-8 gap-12 items-center">
    <div>
      <h1>
        Trusted and affordable SAME-DAY Laptop Repair & Macbook Repair in Nehru Place, Delhi NCR
      </h1>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
        Complex Problems.
        <br />
        Simple Solutions.
      </h2>
      <h2 className="text-lg text-gray-600 mb-6 max-w-xl">
        At Divvy Computronix, we specialize in solving the most complicated
        repair issues with ease. From liquid-damaged MacBooks to dead
        motherboards, graphic card failures, and non-booting PCs, we’ve
        seen (and fixed) it all.
      </h2>
<Link href="tel:+919312247627">
<button className="button1">
   GET A FREE QUOTE!  
  <svg fill="currentColor" viewBox="0 0 24 24" className="icon1">
    <path
      clipRule="evenodd"
      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
      fillRule="evenodd"
    ></path>
  </svg>
</button>
</Link>
    </div>

    <div className="hidden md:block">
      <Image
        src="/hero-illustration.webp"
        alt="Hero Illustration"
        width={500}
        height={500}
        priority
        fetchPriority="high"
        className="rounded-2xl shadow-lg"
        sizes="(max-width: 1024px) 50vw, 500px"
      />
    </div>
  </div>
</section>

<div className="text-4xl md:text-5xl underline decoration-1 underline-offset-4 text-center mb-12">
  Repair services we offer
</div>

<div className="flex flex-wrap md:flex-nowrap justify-center items-start gap-6 max-w-7xl px-4">
  {[
    {
      title: "MacBook Repair",
      src: "macbook-repair.webp",
      seo: "Screen replacements, logic board fixes, water damage MacBook repair",
      link: "/services/macbook-repair",
    },
    {
      title: "Laptop Repair",
      src: "laptop-repair.webp",
      seo: "Laptop diagnostics for all brands with 24hr repair service",
      link: "/services/laptop-repair",
    },
    {
      title: "iMac Repair",
      src: "imac-repair.webp",
      seo: "Expert iMac servicing, SSD upgrades, GPU fixes in Nehru Place",
      link: "/services/imac-repair",
    },    
    {
      title: "iPhone Repair",
      src: "phone-repair.webp",
      seo: "iPhone screen, battery and motherboard-level repair in Delhi",
      link: "/services/iphone-repair",
    },
    {
      title: "Gaming PC Repair",
      src: "gaming-pc-repair.webp",
      seo: "Custom gaming PC repair including GPU and fan issues",
      link: "/services/gaming-pc-repair",
    },
    {
      title: "Mac Mini Repair",
      src: "mac-mini-repair.webp",
      seo: "Mac Mini SSD, RAM, logic board repair in Delhi",
      link: "/services/mac-mini-repair",
    },
    {
      title: "Surface Repair",
      src: "surface-repair.webp",
      seo: "Surface Pro screen, battery and motherboard repair",
      link: "/services/surface-repair",
    },
  ].map((service, i) => (
    <Link key={i} href={service.link} passHref>
      <div className="flex flex-col items-center gap-2 shadow-lg rounded-xl w-[10rem] hover:bg-[#c8edff]  group hover:scale-[1.1]  duration-300">
        <div className="relative w-full overflow-clip aspect-square -mb-1 ">
          <Image
            src={`/services/${service.src}`}
            fill
            className="group-hover:scale-105 duration-300 rounded-t-xl object-cover"
            alt={service.seo}
            sizes="180px"
          />
        </div>
        <h2 className="my-2 h-full text-center text-sm font-semibold px-2 ">
          {service.title}
        </h2>
        <span className="sr-only">{service.seo}</span>
      </div>
    </Link>
  ))}
</div>



{/* Products Section */}

{/* Products Section */}
<div
  id="products"
  className="h-full border-dashed border-2 border-spacing rounded-3xl pt-16 pb-16 flex flex-col items-center justify-center w-11/12 mt-10"
>
  <h1 className="text-3xl md:text-5xl text-black font-bold text-center px-4 leading-snug">
    Buy Refurbished & Second-Hand MacBooks, iPhones & Laptops in Delhi NCR
  </h1>
  <p className="text-gray-800 mt-4 text-center text-sm md:text-base px-4 max-w-3xl">
    Professionally tested, certified second-hand devices with warranty and expert support.
  </p>

  <div className="mt-10 flex flex-wrap md:flex-nowrap justify-center items-start gap-6 w-full max-w-7xl px-4">
    {[
      {
        title: "MacBook",
        src: "macbook.webp",
        seo: "Certified second-hand and refurbished MacBooks with warranty – MacBook Air, Pro, M1, M2 models in Delhi NCR",
      },
      {
        title: "Surface Devices",
        src: "surface.webp",
        seo: "Refurbished and second-hand Microsoft Surface Pro & Surface Laptop – tested and verified in Delhi",
      },
      {
        title: "Windows Laptops",
        src: "windows-laptop.webp",
        seo: "Second-hand Windows laptops from HP, Dell, Lenovo, Asus – tested, refurbished and warrantied",
      },
      {
        title: "iPhone",
        src: "iphone.webp",
        seo: "Buy second-hand iPhones in Nehru Place – battery tested and certified with warranty",
      },
      {
        title: "iPad",
        src: "ipad.webp",
        seo: "Second-hand iPads with verified battery and screen quality – iPad Air, Pro and Mini",
      },
    ].map((product, i) => (
      <div
        key={i}
        className="bg-neutral-100 flex flex-col items-center gap-2 shadow-lg rounded-xl w-[180px]"
      >
        <div className="relative w-full aspect-square">
          <Image
            src={`/products/${product.src}`}
            fill
            className="rounded-t-xl object-cover"
            alt={product.seo}
            sizes="180px"
            loading="lazy"
          />
        </div>
        <h2 className="my-2 text-center text-sm font-semibold px-2">
          {product.title}
        </h2>
        <span className="sr-only">{product.seo}</span> {/* SEO keyword support */}
      </div>
    ))}
  </div>

  <Link href="tel:+919312247627">
    <button
      type="button"
      className="flex justify-center gap-2 items-center text-sm bg-gray-50 backdrop-blur-md font-semibold border border-gray-50 
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 
        before:rounded-full before:bg-[#e0f2fe] hover:text-black before:-z-10 before:aspect-square before:hover:scale-150 
        before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden rounded-full group mt-10"
    >
      Enquire About Availability
      <svg
        className="w-6 h-6 group-hover:rotate-90 text-gray-800 ease-linear duration-300 rounded-full border border-gray-700 p-1 rotate-45"
        viewBox="0 0 16 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
          className="fill-gray-800 group-hover:fill-gray-800"
        />
      </svg>
    </button>
  </Link>
</div>


      {/* Features Section */}
      <div
        id="features"
        className="h-full mt-32 flex flex-col items-center justify-center w-full bg-white"
      >
        <h2 className="text-4xl font-bold px-10">Why choose Divvy Computronix?</h2>
        <Features />
      </div>

      {/* Certifications Section */}

      <InfiniteMovingCardsDemo />

      {/* Testimonials Section */}
      <div
        id="testimonials"
        className="lg:h-[70vh] h-full w-full pb-16 md:px-32 px-10 lg:grid lg:grid-cols-2 bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb] gap-20"
      >
        <div className="h-full w-full flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-6xl tracking-tighter uppercase border-b-2 font-serif pt-10">
            Testimonials
          </h2>
          <p className="md:text-xl text-lg mt-8 text-center">
            Hear what people have to say about us
          </p>
        </div>
        <Testimonials />
      </div>
      {/* Clientele Section */}
      <div className="h-full p-16 my-16 flex flex-col items-center justify-center w-full">
        <h2 className="text-4xl font-bold mb-10">Our Clientele</h2>
        <div className="flex flex-wrap justify-center bg-neutral-100 p-4 rounded-full">
          <IconBrandAmazon strokeWidth={1.5} className="text-neutral-500 h-8 w-8" />
        </div>
      </div>

      {/* Signup Section */}
      <div id="contactform">
        <div className="md:flex items-center justify-center md:gap-16 px-6 hidden">
          <Image
            src="/broken-laptop.webp"
            className="md:w-1/4 md:h-1/2 rounded-2xl h-1/2 w-full object-cover mb-10"
            alt="broken surface contact image"
            width={1000}
            height={1000}
          />
          <SignupFormDemo />
        </div>
        <div className="md:hidden flex items-center justify-center px-6 -mt-10">
          <Image
            src="/broken-surface-sm.webp"
            className="rounded-2xl h-1/2 w-full object-cover mb-10"
            alt="broken surface contact image"
            width={1000}
            height={1000}
            
          />
          </div>
          <div className="md:hidden">
          <SignupFormDemo />
        </div>
      </div>

      {/* FAQs Section */}
      <div
        id="faqs"
        className="w-full flex flex-col items-center justify-center my-32 mb-16"
      >
        <div className="border-b-2 border-neutral-300 mb-8">
          <h3 className="text-3xl font-bold text-neutral-800">FAQs</h3>
        </div>
        <div className="w-3/4">
          <AccordionDemo />
        </div>
      </div>
 <div>




          
</div>
      {/* Final CTA + Visit Us Offline */}
      <div className="bg-[#0F162B] rounded-3xl">
        <CallToAction />
        <VisitUsOffline />
      </div>
    </div>
    </>
  );
}

