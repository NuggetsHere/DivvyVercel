import { BentoGridSecondDemo } from "../components/bentogrid";
import Script from "next/script";

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
      <Script id="jsonld-business" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Divvy Computronix",
    "image": "https://www.divvycomputronix.com/divvylogo-nav.svg",
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
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "priceRange": "₹₹",
    "sameAs": [
      "https://www.whatsapp.com", // Replace with actual WhatsApp link or remove if not public
      "https://www.divvycomputronix.com"
    ],
    "description": "Divvy Computronix offers laptop and MacBook repair services, motherboard-level repairs, screen replacements, and refurbished laptops in Delhi NCR."
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
