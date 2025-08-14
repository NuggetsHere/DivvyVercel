// import Image from "next/image";
// import Link from "next/link";
// import { SignupFormDemo } from "../../components/form";
// import ServiceCard from "../../components/servicecard";


// export const metadata = {
//   title: "Mac Mini Repair Delhi | M1, M2 & Intel Mac Mini Fix - Divvy Computronix",
//   description:
//     "Expert Mac Mini repair in Delhi NCR including SSD upgrades, no power fix, HDMI issues & data recovery. Pickup available. Certified technicians.",
//   keywords: [
//     "Mac Mini repair Delhi",
//     "Mac Mini M1 M2 repair",
//     "Mac Mini SSD upgrade",
//     "Mac Mini HDMI not working",
//     "Apple Mac Mini repair near me",
//     "Mac Mini repair Delhi NCR",
//     "Mac Mini boot issue",
//     "Mac Mini service center Delhi",
//     "Apple repair Delhi",
//   ].join(", "),
//   alternates: {
//     canonical: "https://divvycomputronix.com/mac-mini-repair",
//   },
// };

// export default function MacMiniRepairPage() {
//   return (
//     <main className="relative bg-white text-black overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative w-full min-h-screen overflow-hidden">
//         <div
//           className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
//           style={{ backgroundImage: "url('/images/macmini.png')" }}
//         />

//         <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
//           {/* Left */}
//           <div className="flex-1 max-w-xl">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
//               Mac Mini Not Booting? <br /> Get Fast & Certified Repairs
//             </h1>
//             <p className="text-lg text-gray-700 mb-6">
//               Delhi NCR’s reliable Mac Mini repair center — Intel & M1/M2
//             </p>
//           </div>

//           {/* Form */}
//           <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
//             <h3 className="text-lg font-semibold mb-4">Trouble with your Mac Mini?</h3>
//             <p className="text-sm text-gray-600 mb-6">We can help. Request a callback.</p>
//             <SignupFormDemo service="Mac Mini Repair" />
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-10">Mac Mini Repair Services</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           <ServiceCard
//             icon="/icons/mac-mini-power.png"
//             title="No Power / No Boot"
//             description="We diagnose logic board, power unit & SSD issues."
//           />
//           <ServiceCard
//             icon="/icons/mac-mini-display.png"
//             title="HDMI / Display Issue"
//             description="Fix no signal, black screen or flickering HDMI output."
//           />
//           <ServiceCard
//             icon="/icons/mac-mini-ssd.png"
//             title="SSD Upgrade"
//             description="Speed up your Mac Mini with NVMe/PCIe SSD installation."
//           />
//           <ServiceCard
//             icon="/icons/mac-mini-ports.png"
//             title="USB / Port Repair"
//             description="We fix loose, dead or malfunctioning I/O ports."
//           />
//           <ServiceCard
//             icon="/icons/mac-mini-overheat.png"
//             title="Fan Noise / Overheating"
//             description="Cleaning & thermal paste replacement for cooler operation."
//           />
//           <ServiceCard
//             icon="/icons/data-recovery.jpg"
//             title="Data Recovery"
//             description="Recover files from dead Mac Mini or failed SSD."
//           />
//           <ServiceCard
//             icon="/icons/boot.png"
//             title="macOS Stuck or Crashed"
//             description="We reinstall OS & recover important files if needed."
//           />
//           <ServiceCard
//             icon="/icons/mac-mini-wifi.png"
//             title="WiFi / Bluetooth Problems"
//             description="Fix connectivity problems in Intel & M-series units."
//           />
//           <ServiceCard
//             icon="/icons/mac-mini-ram.png"
//             title="RAM / Performance Upgrade"
//             description="RAM upgrades available for compatible Intel models."
//           />
//           <ServiceCard
//             icon="/icons/mac-mini-cleaning.png"
//             title="Internal Cleaning"
//             description="Prevent overheating and extend life with regular cleaning."
//           />
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Reliable Mac Mini Repair in Delhi NCR</h2>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           Divvy Computronix offers expert <strong>Mac Mini repair in Delhi NCR</strong> for Intel-based, M1, and M2 models. Whether your device isn’t turning on, has no HDMI output, or is making fan noise, we provide quick diagnosis and repair with pickup & drop support across the city.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           We offer both <strong>hardware and software solutions</strong> — including SSD/RAM upgrades, macOS reinstall, data recovery, and deep cleaning. All repairs are done by certified technicians using high-grade or original Apple-compatible parts.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           Our transparent pricing, no-fix-no-fee policy, and fast turnaround times make us the go-to for Mac Mini servicing in Delhi. We serve clients from Connaught Place to Dwarka, Noida to Gurugram, and beyond.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed">
//           Want to know more? Visit our <Link href="/blogs" className="text-blue-600 underline">blog for Mac tips</Link>, <Link href="/services" className="text-blue-600 underline">explore all repair services</Link>, or <Link href="/contact" className="text-blue-600 underline">talk to our team</Link>.
//         </p>
//       </section>

//       {/* Symptoms & Fixes Table */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common Mac Mini Issues We Fix</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
//             <thead className="bg-gray-100 text-gray-800">
//               <tr>
//                 <th className="px-4 py-3 border-b">Symptom</th>
//                 <th className="px-4 py-3 border-b">Our Fix</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b"><td className="px-4 py-3">Not turning on</td><td className="px-4 py-3">Logic board repair or PSU replacement</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">No HDMI display</td><td className="px-4 py-3">HDMI port repair or GPU output reflow</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Very slow performance</td><td className="px-4 py-3">SSD upgrade & macOS optimization</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Stuck at Apple logo</td><td className="px-4 py-3">Reinstall macOS, run disk utility & backup</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Fan noise or overheating</td><td className="px-4 py-3">Clean internal dust, replace thermal paste</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">USB/ports not working</td><td className="px-4 py-3">Repair or replace I/O board</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">WiFi / Bluetooth broken</td><td className="px-4 py-3">Replace WiFi card / antenna fix</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Data recovery needed</td><td className="px-4 py-3">Extract data from failed SSD/logic board</td></tr>
//               <tr><td className="px-4 py-3">macOS update failed</td><td className="px-4 py-3">Safe mode recovery or Time Machine restore</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </main>
//   );
// }



import Link from "next/link";
import { SignupFormDemo } from "../../components/form";
import ServiceCard from "../../components/servicecard";
import { FaqAccordionn } from "../../components/faq-gaming";

export const metadata = {
  title: "Mac Mini Repair Delhi | M1, M2 & Intel Mac Mini Fix - Divvy Computronix",
  description:
    "Expert Mac Mini repair in Delhi NCR including SSD upgrades, no power fix, HDMI issues & data recovery. Pickup available. Certified technicians.",
  keywords: [
    "Mac Mini repair Delhi",
    "Mac Mini M1 M2 repair",
    "Mac Mini SSD upgrade",
    "Mac Mini HDMI not working",
    "Apple Mac Mini repair near me",
    "Mac Mini repair Delhi NCR",
    "Mac Mini boot issue",
    "Mac Mini service center Delhi",
    "Apple repair Delhi",
  ].join(", "),
  alternates: {
    canonical: "https://divvycomputronix.com/services/mac-mini-repair", // ✅ matches route
  },
};

export default function MacMiniRepairPage() {
  // ✅ Page-specific FAQs
  const faqs = [
    {
      question: "Do you repair all Mac Mini models?",
      answer:
        "Yes, we service Intel‑based Mac Minis as well as Apple M1 and M2 models.",
    },
    {
      question: "Can you upgrade my Mac Mini’s storage and RAM?",
      answer:
        "Yes, we offer SSD upgrades for all models and RAM upgrades for compatible Intel versions.",
    },
    {
      question: "Do you provide pickup and delivery in Delhi NCR?",
      answer:
        "Yes, we offer free pickup and drop service for Mac Mini repairs across most of Delhi NCR.",
    },
    {
      question: "Do you use genuine or compatible parts?",
      answer:
        "We use either genuine Apple parts or high‑grade compatible replacements depending on your preference.",
    },
  ];

  // ✅ FAQ Schema for SEO
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
    <main className="relative bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
          style={{ backgroundImage: "url('/images/macmini.png')" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
          {/* Left */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Mac Mini Not Booting? <br /> Get Fast & Certified Repairs
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Delhi NCR’s reliable Mac Mini repair center — Intel & M1/M2
            </p>
          </div>
          {/* Form */}
          <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-4">Trouble with your Mac Mini?</h3>
            <p className="text-sm text-gray-600 mb-6">We can help. Request a callback.</p>
            <SignupFormDemo service="Mac Mini Repair" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Mac Mini Repair Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <ServiceCard icon="/icons/mac-mini-power.png" title="No Power / No Boot" description="We diagnose logic board, power unit & SSD issues." />
          <ServiceCard icon="/icons/mac-mini-display.png" title="HDMI / Display Issue" description="Fix no signal, black screen or flickering HDMI output." />
          <ServiceCard icon="/icons/mac-mini-ssd.png" title="SSD Upgrade" description="Speed up your Mac Mini with NVMe/PCIe SSD installation." />
          <ServiceCard icon="/icons/mac-mini-ports.png" title="USB / Port Repair" description="We fix loose, dead or malfunctioning I/O ports." />
          <ServiceCard icon="/icons/mac-mini-overheat.png" title="Fan Noise / Overheating" description="Cleaning & thermal paste replacement for cooler operation." />
          <ServiceCard icon="/icons/data-recovery.jpg" title="Data Recovery" description="Recover files from dead Mac Mini or failed SSD." />
          <ServiceCard icon="/icons/boot.png" title="macOS Stuck or Crashed" description="We reinstall OS & recover important files if needed." />
          <ServiceCard icon="/icons/mac-mini-wifi.png" title="WiFi / Bluetooth Problems" description="Fix connectivity problems in Intel & M-series units." />
          <ServiceCard icon="/icons/mac-mini-ram.png" title="RAM / Performance Upgrade" description="RAM upgrades available for compatible Intel models." />
          <ServiceCard icon="/icons/mac-mini-cleaning.png" title="Internal Cleaning" description="Prevent overheating and extend life with regular cleaning." />
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Reliable Mac Mini Repair in Delhi NCR</h2>
        <p className="text-gray-700 mb-4">
          Divvy Computronix offers expert <strong>Mac Mini repair</strong> in Delhi NCR for Intel-based, M1, and M2 models. Whether your device isn’t turning on, has no HDMI output, or is making fan noise, we provide quick diagnosis and repair with pickup & drop support.
        </p>
        <p className="text-gray-700 mb-4">
          We offer both <strong>hardware and software solutions</strong> — including SSD/RAM upgrades, macOS reinstall, data recovery, and deep cleaning. All repairs are done by certified technicians using high-grade or original Apple-compatible parts.
        </p>
        <p className="text-gray-700 mb-4">
          Our transparent pricing, no-fix-no-fee policy, and fast turnaround times make us the go-to for Mac Mini servicing in Delhi.
        </p>
        <p className="text-gray-700">
          Want to know more? Visit our <Link href="/blogs" className="text-blue-600 underline">blog for Mac tips</Link>, <Link href="/services" className="text-blue-600 underline">explore all repair services</Link>, or <Link href="/contact" className="text-blue-600 underline">talk to our team</Link>.
        </p>
      </section>

      {/* Symptoms & Fixes Table */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common Mac Mini Issues We Fix</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 border-b">Symptom</th>
                <th className="px-4 py-3 border-b">Our Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">Not turning on</td><td className="px-4 py-3">Logic board repair or PSU replacement</td></tr>
              <tr className="border-b"><td className="px-4 py-3">No HDMI display</td><td className="px-4 py-3">HDMI port repair or GPU output reflow</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Very slow performance</td><td className="px-4 py-3">SSD upgrade & macOS optimization</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Stuck at Apple logo</td><td className="px-4 py-3">Reinstall macOS, run disk utility & backup</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Fan noise or overheating</td><td className="px-4 py-3">Clean internal dust, replace thermal paste</td></tr>
              <tr className="border-b"><td className="px-4 py-3">USB/ports not working</td><td className="px-4 py-3">Repair or replace I/O board</td></tr>
              <tr className="border-b"><td className="px-4 py-3">WiFi / Bluetooth broken</td><td className="px-4 py-3">Replace WiFi card / antenna fix</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Data recovery needed</td><td className="px-4 py-3">Extract data from failed SSD/logic board</td></tr>
              <tr><td className="px-4 py-3">macOS update failed</td><td className="px-4 py-3">Safe mode recovery or Time Machine restore</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Frequently Asked Questions – Mac Mini Repair</h2>
        <FaqAccordionn faqs={faqs} />
      </section>

      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
