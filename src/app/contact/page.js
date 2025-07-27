import {SignupFormDemo} from "../../components/form";
import Script from "next/script";

export const metadata = {
  title:
    'Contact Divvy Computronix | Laptop & MacBook Repair in Delhi NCR | Refurbished & Second-Hand Laptops',
  description:
    'Contact Divvy Computronix in Nehru Place, Delhi for expert laptop repair, MacBook servicing, and refurbished laptop sales. Call now or visit us for fast, affordable repairs and device pickup in Delhi NCR.',
  keywords: [
    // Core Service Keywords
    'laptop repair',
    'laptop repair delhi ncr',
    'laptop repair delhi',
    'laptop repair new delhi',
    'Macbook repair Delhi',
    'Macbook repair',
    'Macbook repair Delhi NCR',

    // Refurbished & Second-Hand
    'second hand laptops',
    'refurbished laptops',
    'second hand laptops delhi',
    'refurbished laptops delhi',
    'second hand laptops delhi ncr',
    'refurbished laptops delhi ncr',

    // Contact & Location Specific
    'Divvy Computronix contact number',
    'Divvy Computronix Nehru Place address',
    'visit Divvy Computronix',
    'Divvy Computronix phone support',
    'laptop pickup service delhi',
    'MacBook repair near me',
    'repair center Nehru Place Delhi',
  ],
  openGraph: {
    title:
      'Contact Divvy Computronix | Laptop & MacBook Repair in Delhi NCR | Refurbished & Second-Hand Laptops',
    description:
      'Looking for fast, affordable laptop or MacBook repair in Delhi NCR? Contact Divvy Computronix — trusted repair center in Nehru Place. Call now for pickup, support, and expert service.',
    url: 'https://divvycomputronix.com/contact',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: 'https://divvycomputronix.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Divvy Computronix Contact Page',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Contact Divvy Computronix | Laptop & MacBook Repair in Delhi NCR | Refurbished & Second-Hand Laptops',
    description:
      'Get in touch with Divvy Computronix – Delhi’s trusted laptop and MacBook repair center. We offer quick device pickup, expert repairs, and refurbished laptop deals in Delhi NCR.',
    images: ['https://divvycomputronix.com/og-image.png'],
  },
  metadataBase: new URL('https://divvycomputronix.com'),
};


export default function Contact() {
    return (
        <>
        <Script id="jsonld-contact" type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Us - Divvy Computronix",
  "url": "https://divvycomputronix.com/contact",
  "description": "Get in touch with Divvy Computronix – your trusted laptop and MacBook repair center in Delhi NCR. Contact us for fast repairs, pickup services, and refurbished laptop purchases.",
  "about": {
    "@type": "LocalBusiness",
    "name": "Divvy Computronix",
    "image": "https://www.divvycomputronix.com/divvylogo-nav.svg",
    "url": "https://www.divvycomputronix.com",
    "telephone": "+91-9312247627",
    "description": "Divvy Computronix offers expert laptop and MacBook repair services in Delhi NCR. We also provide second-hand and refurbished laptops with warranty.",
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
        "name": "Laptop Repair",
        "description": "Laptop repair in Delhi NCR including screen replacement, battery change, keyboard repair, and motherboard-level service."
      },
      {
        "@type": "Service",
        "name": "MacBook Repair",
        "description": "MacBook Air and Pro repair in Delhi NCR – screen, battery, SSD, and liquid damage solutions."
      },
      {
        "@type": "Service",
        "name": "Refurbished & Second-hand Laptops",
        "description": "Shop second-hand and refurbished laptops in Delhi NCR with warranty. Ideal for students, professionals, and budget buyers."
      }
    ]
  },
  "keywords": [
    "laptop repair",
    "laptop repair delhi ncr",
    "laptop repair delhi",
    "laptop repair new delhi",
    "Macbook repair Delhi",
    "Macbook repair",
    "Macbook repair Delhi NCR",
    "second hand laptops",
    "refurbished laptops",
    "second hand laptops delhi",
    "refurbished laptops delhi",
    "second hand laptops delhi ncr",
    "refurbished laptops delhi ncr"
  ]
})}
</Script>

            <div className="h-[100vh] mt-10 w-full flex items-center justify-center">
                <SignupFormDemo />
            </div>

        </>
    )
}   