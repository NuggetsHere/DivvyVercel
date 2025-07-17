import { BentoGridSecondDemo } from "../components/bentogrid";
import Script from "next/script";
import ServiceCard from "../../components/servicecard";


export const metadata = {
  title: "Best Laptop & MacBook Repair Services in Delhi NCR | Divvy Computronix",
  description:
    "Get expert Laptop & MacBook repairs in Delhi NCR from Divvy Computronix. We fix Apple MacBooks, laptops, PCs & more. Also offering second-hand & refurbished laptops in New Delhi. Free diagnostics. No Fix, No Fee.",
  keywords: [
    "laptop repair",
    "laptop repair Delhi",
    "MacBook repair",
    "MacBook repair Delhi NCR",
    "refurbished laptops",
    "second hand laptops Delhi",
    "Apple laptop service",
    "Mac repair center",
    "Divvy Computronix",
    "laptop repair near me",
    "motherboard repair",
    "laptop screen replacement",
    "New Delhi laptop service"
  ],
  alternates: {
    canonical: "https://www.divvycomputronix.com/services"
  },
  openGraph: {
    title: "Best Laptop & MacBook Repair Services in Delhi NCR | Divvy Computronix",
    description:
      "Reliable MacBook & Laptop repair services in Delhi NCR. Specializing in Apple, Dell, Lenovo & more. Also selling second-hand and refurbished laptops. Visit Divvy Computronix today!",
    url: "https://www.divvycomputronix.com/services",
    type: "website",
    images: [
      {
        url: "https://www.divvycomputronix.com/og-image-services.jpg",
        width: 1200,
        height: 630,
        alt: "Divvy Computronix - MacBook & Laptop Repair Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Laptop & MacBook Repair in Delhi NCR | Divvy Computronix",
    description:
      "Affordable Apple MacBook & Laptop repair in New Delhi. Fast, reliable service. Refurbished laptop deals available. Call Divvy Computronix now!",
    images: ["https://www.divvycomputronix.com/og-image-services.jpg"]
  }
};

export default function Services() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script id="jsonld-services" type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Divvy Computronix",
  "image": "https://www.divvycomputronix.com/divvylogo-nav.svg",
  "url": "https://www.divvycomputronix.com/services",
  "telephone": "+91-9312247627",
  "description": "Expert laptop and MacBook repair in Delhi NCR including refurbished laptops, motherboard repairs, and custom gaming PC builds. Serving Delhi, Gurgaon, Noida, Faridabad, and more with home pickup and fast service.",
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
    "longitude": 77.2510
  },
  "hasMap": "https://maps.google.com/?q=28.5495,77.2510",
  "priceRange": "₹₹",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    }
  ],
  "areaServed": [
    { "@type": "Place", "name": "Delhi" },
    { "@type": "Place", "name": "New Delhi" },
    { "@type": "Place", "name": "Delhi NCR" },
    { "@type": "Place", "name": "Gurgaon" },
    { "@type": "Place", "name": "Faridabad" },
    { "@type": "Place", "name": "Noida" },
    { "@type": "Place", "name": "Greater Noida" },
    { "@type": "Place", "name": "Ghaziabad" },
    { "@type": "Place", "name": "Haryana" }
  ],
  "serviceType": [
    {
      "@type": "Service",
      "name": "Laptop Repair in Delhi NCR",
      "description": "Reliable laptop repair services in Delhi NCR including screen replacement, overheating fix, battery change, and motherboard-level repairs.",
      "areaServed": { "@type": "Place", "name": "Delhi NCR" },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "price": "499",
        "eligibleRegion": { "@type": "Place", "name": "New Delhi" }
      },
      "additionalType": "https://en.wikipedia.org/wiki/Laptop_repair"
    },
    {
      "@type": "Service",
      "name": "MacBook Repair Delhi",
      "description": "MacBook Pro, Air, and iMac repairs including battery, SSD upgrades, screen and logic board services.",
      "areaServed": { "@type": "Place", "name": "Delhi" },
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/InStock",
        "priceCurrency": "INR",
        "price": "799",
        "eligibleRegion": { "@type": "Place", "name": "Delhi NCR" }
      },
      "additionalType": "https://en.wikipedia.org/wiki/MacBook"
    },
    {
      "@type": "Service",
      "name": "Refurbished and Second-hand Laptops",
      "description": "Buy refurbished and second-hand laptops with warranty in Delhi NCR, Gurgaon, Noida, and nearby areas.",
      "areaServed": { "@type": "Place", "name": "Delhi NCR" },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "8999",
        "highPrice": "49999",
        "priceCurrency": "INR",
        "availability": "https://schema.org/InStock"
      },
      "additionalType": "https://en.wikipedia.org/wiki/Refurbishment_(electronics)"
    },
    {
      "@type": "Service",
      "name": "iMac and Mac Mini Repair",
      "description": "iMac and Mac Mini SSD upgrades, macOS reinstallation, logic board services in New Delhi and NCR.",
      "areaServed": { "@type": "Place", "name": "New Delhi" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "999"
      }
    },
    {
      "@type": "Service",
      "name": "Custom Gaming PC Builds",
      "description": "Custom-built gaming PCs with top hardware. Available across Delhi, Noida, Gurgaon, and Ghaziabad.",
      "areaServed": { "@type": "Place", "name": "Delhi NCR" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "1999"
      }
    }
  ]
})}
</Script>



      <div className="bg-[#EEEEEE] py-16 px-6">
        <div className="max-w-7xl mx-auto my-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16 mt-20">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-sm bg-white px-3 py-1 rounded-full shadow text-black">
                🛠️ Laptop & MacBook Repair Services in Delhi NCR | Divvy Computronix
              </span>
              <h2 className="text-4xl font-semibold text-black mt-4 mb-4">
                What we can do for you
              </h2>
              <p className="text-gray-800 text-lg">
                From diagnosis to repair, we offer comprehensive solutions for all your devices with tech-focused precision.
              </p>
            </div>

            <a
              href="/contact"
              className="bg-[#C155F2]/90 text-white px-6 py-3 rounded-full text-xl shadow-md hover:bg-[#C155F2] transition"
            >
              Repair now ↗
            </a>
          </div>

          <div className="h-auto mt-auto w-full flex items-center justify-center">
            <BentoGridSecondDemo />
          </div>
        </div>
      </div>
    </>
  );
}
