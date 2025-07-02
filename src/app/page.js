
import React from "react";
import Image from "next/image";
import {
  IconBrandAmazon,
  // Add more icons as needed
} from "@tabler/icons-react";
import Link from 'next/link'
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/callToAction";
import Features from "./components/Features";
import VisitUsOffline from "./components/VistUsOffline";
import { AccordionDemo } from "./components/faq";
import { SignupFormDemo } from "./components/form";
import { InfiniteMovingCardsDemo }from "./components/certifications";
import Head from "next/head";


export const metadata = {
  title: 'Divvy Computronix | Apple, MacBook & Laptop Repair Experts in Nehru Place, Delhi NCR',
  description:
    'Expert Laptop Repair in Nehru Place, Delhi. Fast, affordable service for MacBooks, Windows laptops, gaming PCs & more. Home pickup & diagnosis available!',
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
    title: 'Divvy Computronix | Apple, MacBook & Laptop Repair in Delhi NCR',
    description:
      'Expert MacBook, iPhone, and laptop repair services in Nehru Place since 2009. Trusted for motherboard repairs, screen replacements, and refurbished Apple devices.',
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
    title: 'Divvy Computronix | MacBook & Apple Repair Experts in Nehru Place',
    description:
      'Specialists in MacBook, iMac, iPhone, and laptop repairs in Delhi NCR. Fast 24-hour service, refurbished devices, and Apple motherboard repair experts.',
    images: ['https://divvycomputronix.com/og-image.png'], // Same as OG image
  },
  metadataBase: new URL('https://divvycomputronix.com'), // Replace with your domain
};



// export default function Home() {
//   return (

export default function Home() {
  return (
    <>
      <Head>
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
              "description": "Divvy Computronix is a trusted repair and service center in Nehru Place, Delhi NCR, specializing in premium refurbished MacBooks, laptops, and expert repairs for MacBooks, iPhones, iMacs, Mac Minis, Surface devices, gaming PCs, and more. Known for fast turnaround, expert diagnostics, and a no fix, no fee policy, we serve individual and business clients across India with courier pickup options.",
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
                    "name": "iPhone Repairs",
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
                    "name": "iMac and Mac Mini Repairs",
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
                    "name": "Surface Device Repairs",
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
      </Head>
    <div className="flex flex-col items-center text-shadow-none w-full overflow-x-hidden">
      
    <section
  id="hero"
  className="md:pt-48 pt-32 py-24 px-10 pl-12 md:pl-0 w-full bg-gradient-to-b from-transparent via-[#e0f2fe] to-transparent bg-white"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 md:pl-8 gap-12 items-center">
    <div>
      <h1>
        Trusted SAME-DAY Laptop Repair in Nehru Place, Delhi NCR
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
      <Link href="/contact">
        <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all">
          Fix Now!
        </button>
      </Link>
    </div>

    <div className="hidden md:block">
      <Image
        src="/hero-illustration.png"
        alt="Hero Illustration"
        width={500}
        height={500}
        priority
        className="rounded-2xl shadow-lg"
        sizes="(max-width: 1024px) 50vw, 500px"
      />
    </div>
  </div>
</section>


      {/* Services Section */}
      <div
        id="services"
        className="h-full bg-[#171717] rounded-3xl pt-16 pb-16 flex flex-col items-center justify-center w-11/12 bg-black"
      >
        <h1 className="text-3xl text-white font-bold mb-10 md:text-5xl">
          Our Repair Services
        </h1>
        <div className="flex flex-wrap justify-center text-xl gap-8 gap-y-10">
          {[
            { title: "MacBook Repairs", src: "macbook-repair.jpg" },
            { title: "iPhone Repairs", src: "phone-repair.jpg" },
            { title: "iMac Repairs", src: "imac-repair.jpg" },
            { title: "Laptop Repair", src: "laptop-repair.jpg" },
            { title: "Gaming PC Repairs", src: "gaming-pc-repair.jpg" },
            { title: "Mac Mini Repairs", src: "mac-mini-repair.jpg" },
            { title: "Surface Repairs", src: "surface-repair.jpeg" },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-neutral-100 flex flex-col items-center gap-2 shadow-lg relative rounded-xl"
            >
                 <div className="relative w-[250px] aspect-square sm:w-[250px]">
                <Image
                  src={`/services/${service.src}`}
                  fill
                  className="rounded-t-xl mb-4 object-cover"
                  alt={service.title}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                />
              </div>
              <h2 className="my-4">{service.title}</h2>
            </div>
          ))}
        </div>
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
          <h1 className="text-3xl md:text-6xl tracking-tighter uppercase border-b-2 font-serif pt-10">
            Testimonials
          </h1>
          <p className="md:text-xl mt-8 text-center">
            Hear what people have to say about us
          </p>
        </div>
        <Testimonials />
      </div>
      {/* Clientele Section */}
      <div className="h-full p-16 my-16 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold mb-10">Our Clientele</h1>
        <div className="flex flex-wrap justify-center bg-neutral-100 p-4 rounded-full">
          <IconBrandAmazon strokeWidth={1.5} className="text-neutral-500 h-8 w-8" />
        </div>
      </div>

      {/* Signup Section */}
      <div id="contactform">
        <div className="md:flex items-center justify-center md:gap-16 px-6 hidden">
          <Image
            src="/broken-laptop.jpg"
            className="md:w-1/4 md:h-1/2 rounded-2xl h-1/2 w-full object-cover mb-10"
            alt="broken surface contact image"
            width={1000}
            height={1000}
          />
          <SignupFormDemo />
        </div>
        <div className="md:hidden flex items-center justify-center px-6 -mt-10">
          <Image
            src="/broken-surface-sm.jpg"
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
          <h1 className="text-3xl font-bold text-neutral-800">FAQs</h1>
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

