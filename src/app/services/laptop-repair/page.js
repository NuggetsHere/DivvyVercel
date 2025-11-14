
// //app/services/laptop-repair
// import Link from "next/link";
// import { SignupFormDemo } from "../../components/form";
// import ServiceCard from "../../components/servicecard";
// import { FaqAccordionn } from "../../components/faq-gaming"; // shared client component

// export const metadata = {
//   title: "Laptop Repair Delhi | Pickup & Expert Diagnosis - Divvy Computronix",
//   description:
//     "Affordable laptop repair in Delhi NCR with home pickup, free diagnosis, and fast turnaround. We fix all brands – Dell, HP, Lenovo, ASUS, Acer, and more.",
//   keywords: [
//     "laptop repair Delhi",
//     "laptop repair Delhi NCR",
//     "laptop repair New Delhi",
//     "best laptop service center Delhi",
//     "Dell HP Lenovo laptop repair",
//     "laptop overheating fix",
//     "laptop screen replacement",
//     "laptop repair near me",
//     "Divvy Computronix",
//   ].join(", "),
//   alternates: {
//     canonical: "https://divvycomputronix.com/services/laptop-repair", // ✅ updated to match route
//   },
// };

// export default function LaptopRepairPage() {
//   // ✅ Page-specific FAQs
//   const faqs = [
//     {
//       question: "Do you repair all laptop brands?",
//       answer: "Yes, we service all major laptop brands including Dell, HP, Lenovo, ASUS, Acer, MSI, and others."
//     },
//     {
//       question: "Do you offer home pickup for laptop repairs?",
//       answer: "Yes, we provide free pickup and delivery across most areas of Delhi NCR."
//     },
//     {
//       question: "How long does a typical laptop repair take?",
//       answer: "Basic repairs like battery or RAM replacement can be done same-day, complex motherboard might take some time."
//     },
//     {
//       question: "Do you use original parts?",
//       answer: "We use original parts or high-quality tested replacements, depending on availability and your choice."
//     }
//   ];

//   // ✅ FAQ Schema for SEO
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": faqs.map(faq => ({
//       "@type": "Question",
//       "name": faq.question,
//       "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
//     }))
//   };

//   return (
//     <main className="relative bg-white text-black overflow-hidden">
      
//       {/* Hero Section */}
//       <section className="relative w-full min-h-screen overflow-hidden">
//         <div
//           className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
//           style={{ backgroundImage: "url('/images/laptop.png')" }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
//           <div className="flex-1 max-w-xl">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
//               Laptop Not Working? <br /> We&apos;ll Fix It — Fast &amp; On-Site
//             </h1>
//             <p className="text-lg text-gray-700 mb-6">
//               Expert laptop repair in Delhi NCR with free pickup &amp; diagnosis
//             </p>
//           </div>
//           <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
//             <h3 className="text-lg font-semibold mb-4">Laptop issues?</h3>
//             <p className="text-sm text-gray-600 mb-6">Let our experts help. Request a callback.</p>
//             <SignupFormDemo service="Laptop Repair" />
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-10">Laptop Repair Services We Offer</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           <ServiceCard icon="/icons/screen-repair.png" title="Screen Replacement" description="Fix cracked, broken, or flickering displays." />
//           <ServiceCard icon="/icons/battery.png" title="Battery Issues" description="Battery not holding charge? We replace with OEM cells." />
//           <ServiceCard icon="/icons/hinge-broken.png" title="Broken Hinges" description="Repair or replace damaged or stiff laptop hinges." />
//           <ServiceCard icon="/icons/overheat.png" title="Overheating" description="Fan cleaning, thermal paste, and cooling optimization." />
//           <ServiceCard icon="/icons/boot.png" title="Stuck at Boot" description="Resolve OS boot errors, blue screen &amp; BIOS issues." />
//           <ServiceCard icon="/icons/liquid-damage.png" title="Liquid Damage" description="Motherboard-level repair and corrosion cleaning." />
//           <ServiceCard icon="/icons/keyboard-repair.png" title="Keyboard Fault" description="Replace unresponsive, broken, or stuck keys." />
//           <ServiceCard icon="/icons/usb-not.png" title="Port Not Working" description="Fix loose charging, USB, or headphone jacks." />
//           <ServiceCard icon="/icons/ram-upgrade.png" title="SSD / RAM Upgrade" description="Boost performance with upgraded SSD and memory." />
//           <ServiceCard icon="/icons/data-recovery.jpg" title="Data Recovery" description="Recover files from dead laptops or failed hard drives." />
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trusted Laptop Repair in Delhi NCR</h2>
//         <p className="text-gray-700 mb-4">
//           Divvy Computronix offers professional <strong>laptop repair in Delhi NCR</strong> for all major brands including Dell, HP, Lenovo, ASUS, Acer, and more.
//         </p>
//         <p className="text-gray-700 mb-4">
//           We provide <strong>pickup &amp; delivery services</strong> across Delhi NCR. All repairs are handled in ESD-safe labs using genuine or top-grade parts.
//         </p>
//         <p className="text-gray-700 mb-4">
//           Our team has years of experience fixing both Windows and Linux systems, including gaming laptops, workstations, and ultrabooks.
//         </p>
//         <p className="text-gray-700">
//           Visit our <Link href="/blogs" className="text-blue-600 underline">blog</Link>, explore <Link href="/services" className="text-blue-600 underline">all services</Link>, or <Link href="/contact" className="text-blue-600 underline">contact us</Link> to schedule a repair.
//         </p>
//       </section>

//       {/* Problems Table */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common Laptop Problems We Solve</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
//             <thead className="bg-gray-100">
//               <tr>
//                 <th className="px-4 py-3 border-b">Symptom</th>
//                 <th className="px-4 py-3 border-b">Our Fix</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b"><td className="px-4 py-3">Laptop won&apos;t start</td><td className="px-4 py-3">Motherboard check, RAM reseat, power IC check</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Cracked display</td><td className="px-4 py-3">Full screen replacement with OEM panel</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Battery not charging</td><td className="px-4 py-3">Battery replacement &amp; charging circuit check</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">No display</td><td className="px-4 py-3">LVDS cable, display fuse, or GPU issue</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Keyboard not working</td><td className="px-4 py-3">Keyboard matrix test and flex replacement</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Laptop overheating</td><td className="px-4 py-3">Thermal paste reapplication and fan service</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Water spilled on laptop</td><td className="px-4 py-3">Full internal drying and board cleaning</td></tr>
//               <tr><td className="px-4 py-3">Laptop slow or freezing</td><td className="px-4 py-3">SSD upgrade and OS reinstallation</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Frequently Asked Questions – Laptop Repair</h2>
//         <FaqAccordionn faqs={faqs} /> {/* Pass page-specific FAQs */}
//       </section>

//       {/* Inject FAQ Schema JSON-LD */}
//       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
//     </main>
//   );
// }


//app/services/laptop-repair/page.js
import Link from "next/link";
import { SignupFormDemo } from "../../components/form";
import ServiceCard from "../../components/servicecard";
import { FaqAccordionn } from "../../components/faq-gaming"; // shared client component

export const metadata = {
  title: "Laptop Repair Delhi | Pickup & Expert Diagnosis - Divvy Computronix",
  description:
    "Affordable laptop repair in Delhi NCR with home pickup, free diagnosis, and fast turnaround. We fix all brands – Dell, HP, Lenovo, ASUS, Acer, and more.",
  keywords: [
    "laptop repair Delhi",
    "laptop repair Delhi NCR",
    "laptop repair New Delhi",
    "best laptop service center Delhi",
    "Dell HP Lenovo laptop repair",
    "laptop overheating fix",
    "laptop screen replacement",
    "laptop repair near me",
    "Divvy Computronix",
  ].join(", "),
  alternates: {
    canonical: "https://divvycomputronix.com/services/laptop-repair",
  },
};

export default function LaptopRepairPage() {
  const faqs = [
    {
      question: "Do you repair all laptop brands?",
      answer: "Yes, we service all major laptop brands including Dell, HP, Lenovo, ASUS, Acer, MSI, and others.",
    },
    {
      question: "Do you offer home pickup for laptop repairs?",
      answer: "Yes, we provide free pickup and delivery across most areas of Delhi NCR.",
    },
    {
      question: "How long does a typical laptop repair take?",
      answer: "Basic repairs like battery or RAM replacement can be done same-day, complex motherboard might take some time.",
    },
    {
      question: "Do you use original parts?",
      answer: "We use original parts or high-quality tested replacements, depending on availability and your choice.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="relative bg-white text-black overflow-hidden mt-12">
      {/* Hero Section */}
      <section className="relative w-full lg:min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-20 lg:pt-24 pb-10">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('/images/laptop.png')" }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
          <div className="w-full lg:flex-1 lg:max-w-xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight mb-4 lg:leading-tight">
              Laptop Not Working? <br /> We&apos;ll Fix It — Fast &amp; On-Site
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-6 md:text-lg">
              Expert laptop repair in Delhi NCR with free pickup &amp; diagnosis
            </p>
          </div>
          <div className="w-full sm:w-4/5 md:w-2/3 lg:w-auto bg-white border border-gray-200 shadow-xl rounded-2xl p-6 lg:p-8">
            <h3 className="text-lg font-semibold mb-3">Laptop issues?</h3>
            <p className="text-sm text-gray-600 mb-4">Let our experts help. Request a callback.</p>
            <SignupFormDemo service="Laptop Repair" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 sm:px-12 py-16 md:py-20 max-w-7xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8">
          Laptop Repair Services We Offer
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <ServiceCard icon="/icons/screen-repair.png" title="Screen Replacement" description="Fix cracked, broken, or flickering displays." />
          <ServiceCard icon="/icons/battery.png" title="Battery Issues" description="Battery not holding charge? We replace with OEM cells." />
          <ServiceCard icon="/icons/hinge-broken.png" title="Broken Hinges" description="Repair or replace damaged or stiff laptop hinges." />
          <ServiceCard icon="/icons/overheat.png" title="Overheating" description="Fan cleaning, thermal paste, and cooling optimization." />
          <ServiceCard icon="/icons/boot.png" title="Stuck at Boot" description="Resolve OS boot errors, blue screen &amp; BIOS issues." />
          <ServiceCard icon="/icons/liquid-damage.png" title="Liquid Damage" description="Motherboard-level repair and corrosion cleaning." />
          <ServiceCard icon="/icons/keyboard-repair.png" title="Keyboard Fault" description="Replace unresponsive, broken, or stuck keys." />
          <ServiceCard icon="/icons/usb-not.png" title="Port Not Working" description="Fix loose charging, USB, or headphone jacks." />
          <ServiceCard icon="/icons/ram-upgrade.png" title="SSD / RAM Upgrade" description="Boost performance with upgraded SSD and memory." />
          <ServiceCard icon="/icons/data-recovery.jpg" title="Data Recovery" description="Recover files from dead laptops or failed hard drives." />
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-6 sm:px-12 py-12 md:py-16 max-w-5xl mx-auto">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-4">Trusted Laptop Repair in Delhi NCR</h2>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Divvy Computronix offers professional <strong>laptop repair in Delhi NCR</strong> for all major brands including Dell, HP, Lenovo, ASUS, Acer, and more.
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          We provide <strong>pickup &amp; delivery services</strong> across Delhi NCR. All repairs are handled in ESD-safe labs using genuine or top-grade parts.
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          Our team has years of experience fixing both Windows and Linux systems, including gaming laptops, workstations, and ultrabooks.
        </p>
        <p className="text-sm sm:text-base text-gray-700">
          Visit our <Link href="/blogs" className="text-blue-600 underline">blog</Link>, explore <Link href="/services" className="text-blue-600 underline">all services</Link>, or <Link href="/contact" className="text-blue-600 underline">contact us</Link> to schedule a repair.
        </p>
      </section>

      {/* Problems Table */}
      <section className="relative px-6 sm:px-12 py-12 md:py-16 max-w-5xl mx-auto">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-6">Common Laptop Problems We Solve</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 border-b">Symptom</th>
                <th className="px-4 py-3 border-b">Our Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">Laptop won&apos;t start</td><td className="px-4 py-3">Motherboard check, RAM reseat, power IC check</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Cracked display</td><td className="px-4 py-3">Full screen replacement with OEM panel</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Battery not charging</td><td className="px-4 py-3">Battery replacement &amp; charging circuit check</td></tr>
              <tr className="border-b"><td className="px-4 py-3">No display</td><td className="px-4 py-3">LVDS cable, display fuse, or GPU issue</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Keyboard not working</td><td className="px-4 py-3">Keyboard matrix test and flex replacement</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Laptop overheating</td><td className="px-4 py-3">Thermal paste reapplication and fan service</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Water spilled on laptop</td><td className="px-4 py-3">Full internal drying and board cleaning</td></tr>
              <tr><td className="px-4 py-3">Laptop slow or freezing</td><td className="px-4 py-3">SSD upgrade and OS reinstallation</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 sm:px-12 py-12 md:py-16 max-w-5xl mx-auto">
        <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold mb-6">Frequently Asked Questions – Laptop Repair</h2>
        <FaqAccordionn faqs={faqs} />
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </main>
  );
}
