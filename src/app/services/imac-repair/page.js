
// //app/services/imac-repair
// import { SignupFormDemo } from "../../components/form";
// import Link from "next/link";
// import ServiceCard from "../../components/servicecard";
// import { FaqAccordionn } from "../../components/faq-gaming";

// export const metadata = {
//   title: "iMac Repair Delhi | Apple iMac Service Centre Alternative - Divvy Computronix",
//   description:
//     "Certified iMac repair in Delhi NCR with pickup, genuine parts, and warranty. We fix iMac boot issues, display problems, RAM upgrades, fan noise, and more.",
//   keywords: [
//     "iMac repair Delhi",
//     "iMac repair Delhi NCR",
//     "Apple iMac service center alternative",
//     "iMac screen repair",
//     "iMac upgrade",
//     "iMac repair near me",
//     "iMac not turning on",
//     "iMac data recovery",
//     "Apple repair Delhi",
//   ].join(", "),
//   alternates: {
//     canonical: "https://divvycomputronix.com/services/imac-repair",
//   },
// };

// export default function IMacRepairPage() {
//   // Page-specific FAQs for iMac repair
//   const faqs = [
//     {
//       question: "Do you service all iMac models?",
//       answer:
//         "Yes, we repair all iMac models including Intel-based and Apple M1/M3 iMacs.",
//     },
//     {
//       question: "Do you use original Apple parts?",
//       answer:
//         "We use genuine Apple parts or top-grade tested replacements with warranty.",
//     },
//     {
//       question: "Can you upgrade my iMac’s RAM or SSD?",
//       answer:
//         "Yes, we provide RAM and SSD upgrades for most iMac models to improve performance.",
//     },
//     {
//       question: "Do you provide home pickup?",
//       answer:
//         "Yes, we offer free pickup and drop service within most areas of Delhi NCR.",
//     },
//   ];

//   // JSON-LD FAQ schema for SEO
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((faq) => ({
//       "@type": "Question",
//       name: faq.question,
//       acceptedAnswer: { "@type": "Answer", text: faq.answer },
//     })),
//   };

//   return (
//     <main className="relative bg-white text-black overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative w-full min-h-screen overflow-hidden">
//         <div
//           className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
//           style={{ backgroundImage: "url('/images/imac.png')" }}
//         />
//         <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
//           <div className="flex-1 max-w-xl">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
//               iMac Issues? <br /> Let the Experts Handle It
//             </h1>
//             <p className="text-lg text-gray-700 mb-6">
//               Certified iMac repair in Delhi NCR with pickup & warranty
//             </p>
//           </div>
//           <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
//             <h3 className="text-lg font-semibold mb-4">Need help with your iMac?</h3>
//             <p className="text-sm text-gray-600 mb-6">Request a callback.</p>
//             <SignupFormDemo service="iMac Repair" />
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-10">iMac Repair Services We Offer</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           <ServiceCard icon="/icons/imac-power.png" title="iMac Won’t Turn On" description="Power supply or logic board failures diagnosed & fixed." />
//           <ServiceCard icon="/icons/imac-screen.png" title="Display Issues" description="Fix black screen, lines, or LED/retina screen problems." />
//           <ServiceCard icon="/icons/imac-overheat.png" title="Overheating / Fan Noise" description="Internal cleaning and thermal rework to fix heating." />
//           <ServiceCard icon="/icons/imac-ram.png" title="SSD / RAM Upgrade" description="Speed up your iMac with SSD and RAM upgrades." />
//           <ServiceCard icon="/icons/boot.png" title="macOS Not Loading" description="Stuck on boot? We reinstall macOS and backup your data." />
//           <ServiceCard icon="/icons/data-recovery.jpg" title="Data Recovery" description="Recover data from dead iMacs or failed drives." />
//           <ServiceCard icon="/icons/imac-port.png" title="Ports / Peripherals Not Working" description="Fix USB, HDMI, or SD card port issues on iMac." />
//           <ServiceCard icon="/icons/imac-sound.png" title="Speaker / Audio Problems" description="Resolve audio distortion or no sound issues." />
//           <ServiceCard icon="/icons/imac-wifi.png" title="WiFi / Bluetooth Issues" description="Solve connectivity issues related to macOS or hardware." />
//           <ServiceCard icon="/icons/imac-dust.png" title="Internal Dust Cleaning" description="Full internal cleaning to extend iMac’s lifespan." />
//         </div>
//       </section>

//       {/* About */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">iMac Repair in Delhi NCR You Can Rely On</h2>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           Divvy Computronix offers comprehensive <strong>iMac repair services in Delhi NCR</strong> for all models — from the older silver-body iMacs to the latest M1 and M3 iMacs in vibrant colors. Whether your device isn’t turning on, is running slow, or shows strange screen behavior, we can help.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           Our Apple-certified technicians diagnose both hardware and software issues quickly, and we use only <strong>genuine or grade-A replacement parts</strong> in all repairs. Our workshop is fully ESD-safe, and we back every iMac repair with a service warranty.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           We serve customers across Delhi NCR, including Noida, Gurugram, Rohini, and Dwarka — with <strong>home pickup and delivery</strong> available. From SSD upgrades and screen replacements to audio issues and macOS boot loops, our iMac service center alternative is trusted by hundreds.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed">
//           For regular tech tips, visit our <Link href="/blogs" className="text-blue-600 underline">Mac blog</Link>. To see all services we offer, visit the <Link href="/services" className="text-blue-600 underline">services page</Link>, or <Link href="/contact" className="text-blue-600 underline">contact us here</Link>.
//         </p>
//       </section>

//       {/* Symptoms Table */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common iMac Problems We Solve</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
//             <thead className="bg-gray-100 text-gray-800">
//               <tr>
//                 <th className="px-4 py-3 border-b">Symptom</th>
//                 <th className="px-4 py-3 border-b">Our Fix</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b"><td className="px-4 py-3">iMac doesn’t turn on</td><td className="px-4 py-3">PSU replacement, power button testing, logic board fix</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Black screen / no display</td><td className="px-4 py-3">Display cable, screen, or GPU reflow</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Loud fan noise</td><td className="px-4 py-3">Fan cleaning, sensor calibration, thermal repaste</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Running slow</td><td className="px-4 py-3">SSD upgrade, RAM boost, macOS optimization</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">macOS stuck at boot</td><td className="px-4 py-3">System reinstall, PRAM/SMC reset, drive repair</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">No audio</td><td className="px-4 py-3">Speaker or logic board repair</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">USB/ports not working</td><td className="px-4 py-3">Port cleaning or I/O board repair</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">WiFi/Bluetooth problems</td><td className="px-4 py-3">Antenna check, WiFi card replacement</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">iMac extremely dusty</td><td className="px-4 py-3">Full disassembly and internal dust cleaning</td></tr>
//               <tr><td className="px-4 py-3">Need data recovery</td><td className="px-4 py-3">HDD/SSD recovery or logic board-level repair</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Frequently Asked Questions – iMac Repair</h2>
//         <FaqAccordionn faqs={faqs} />
//       </section>

//       {/* Inject FAQ Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//     </main>
//   );
// }


//app/services/imac-repair/page.js
import { SignupFormDemo } from "../../components/form";
import Link from "next/link";
import ServiceCard from "../../components/servicecard";
import { FaqAccordionn } from "../../components/faq-gaming";

export const metadata = {
  title: "iMac Repair Delhi | Apple iMac Service Centre Alternative - Divvy Computronix",
  description:
    "Certified iMac repair in Delhi NCR with pickup, genuine parts, and warranty. We fix iMac boot issues, display problems, RAM upgrades, fan noise, and more.",
  keywords: [
    "iMac repair Delhi",
    "iMac repair Delhi NCR",
    "Apple iMac service center alternative",
    "iMac screen repair",
    "iMac upgrade",
    "iMac repair near me",
    "iMac not turning on",
    "iMac data recovery",
    "Apple repair Delhi",
  ].join(", "),
  alternates: {
    canonical: "https://divvycomputronix.com/services/imac-repair",
  },
};

export default function IMacRepairPage() {
  const faqs = [
    {
      question: "Do you service all iMac models?",
      answer: "Yes, we repair all iMac models including Intel-based and Apple M1/M3 iMacs.",
    },
    {
      question: "Do you use original Apple parts?",
      answer: "We use genuine Apple parts or top-grade tested replacements with warranty.",
    },
    {
      question: "Can you upgrade my iMac’s RAM or SSD?",
      answer: "Yes, we provide RAM and SSD upgrades for most iMac models to improve performance.",
    },
    {
      question: "Do you provide home pickup?",
      answer: "Yes, we offer free pickup and drop service within most areas of Delhi NCR.",
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
    <main className="relative bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
          style={{ backgroundImage: "url('/images/imac.png')" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24 pb-16">
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              iMac Issues? <br /> Let the Experts Handle It
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Certified iMac repair in Delhi NCR with pickup & warranty
            </p>
          </div>
          <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-4">Need help with your iMac?</h3>
            <p className="text-sm text-gray-600 mb-6">Request a callback.</p>
            <SignupFormDemo service="iMac Repair" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">iMac Repair Services We Offer</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <ServiceCard icon="/icons/imac-power.png" title="iMac Won’t Turn On" description="Power supply or logic board failures diagnosed & fixed." />
          <ServiceCard icon="/icons/imac-screen.png" title="Display Issues" description="Fix black screen, lines, or LED/retina screen problems." />
          <ServiceCard icon="/icons/imac-overheat.png" title="Overheating / Fan Noise" description="Internal cleaning and thermal rework to fix heating." />
          <ServiceCard icon="/icons/imac-ram.png" title="SSD / RAM Upgrade" description="Speed up your iMac with SSD and RAM upgrades." />
          <ServiceCard icon="/icons/boot.png" title="macOS Not Loading" description="Stuck on boot? We reinstall macOS and backup your data." />
          <ServiceCard icon="/icons/data-recovery.jpg" title="Data Recovery" description="Recover data from dead iMacs or failed drives." />
          <ServiceCard icon="/icons/imac-port.png" title="Ports / Peripherals Not Working" description="Fix USB, HDMI, or SD card port issues on iMac." />
          <ServiceCard icon="/icons/imac-sound.png" title="Speaker / Audio Problems" description="Resolve audio distortion or no sound issues." />
          <ServiceCard icon="/icons/imac-wifi.png" title="WiFi / Bluetooth Issues" description="Solve connectivity issues related to macOS or hardware." />
          <ServiceCard icon="/icons/imac-dust.png" title="Internal Dust Cleaning" description="Full internal cleaning to extend iMac’s lifespan." />
        </div>
      </section>

      {/* About */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">iMac Repair in Delhi NCR You Can Rely On</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Divvy Computronix offers comprehensive <strong>iMac repair services in Delhi NCR</strong> for all models — from the older silver-body iMacs to the latest M1 and M3 iMacs in vibrant colors. Whether your device isn’t turning on, is running slow, or shows strange screen behavior, we can help.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Our Apple-certified technicians diagnose both hardware and software issues quickly, and we use only <strong>genuine or grade-A replacement parts</strong> in all repairs. Our workshop is fully ESD-safe, and we back every iMac repair with a service warranty.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          We serve customers across Delhi NCR, including Noida, Gurugram, Rohini, and Dwarka — with <strong>home pickup and delivery</strong> available. From SSD upgrades and screen replacements to audio issues and macOS boot loops, our iMac service center alternative is trusted by hundreds.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          For regular tech tips, visit our <Link href="/blogs" className="text-blue-600 underline">Mac blog</Link>. To see all services we offer, visit the <Link href="/services" className="text-blue-600 underline">services page</Link>, or <Link href="/contact" className="text-blue-600 underline">contact us here</Link>.
        </p>
      </section>

      {/* Symptoms Table */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common iMac Problems We Solve</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-4 py-3 border-b">Symptom</th>
                <th className="px-4 py-3 border-b">Our Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">iMac doesn’t turn on</td><td className="px-4 py-3">PSU replacement, power button testing, logic board fix</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Black screen / no display</td><td className="px-4 py-3">Display cable, screen, or GPU reflow</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Loud fan noise</td><td className="px-4 py-3">Fan cleaning, sensor calibration, thermal repaste</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Running slow</td><td className="px-4 py-3">SSD upgrade, RAM boost, macOS optimization</td></tr>
              <tr className="border-b"><td className="px-4 py-3">macOS stuck at boot</td><td className="px-4 py-3">System reinstall, PRAM/SMC reset, drive repair</td></tr>
              <tr className="border-b"><td className="px-4 py-3">No audio</td><td className="px-4 py-3">Speaker or logic board repair</td></tr>
              <tr className="border-b"><td className="px-4 py-3">USB/ports not working</td><td className="px-4 py-3">Port cleaning or I/O board repair</td></tr>
              <tr className="border-b"><td className="px-4 py-3">WiFi/Bluetooth problems</td><td className="px-4 py-3">Antenna check, WiFi card replacement</td></tr>
              <tr className="border-b"><td className="px-4 py-3">iMac extremely dusty</td><td className="px-4 py-3">Full disassembly and internal dust cleaning</td></tr>
              <tr><td className="px-4 py-3">Need data recovery</td><td className="px-4 py-3">HDD/SSD recovery or logic board-level repair</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Frequently Asked Questions – iMac Repair</h2>
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
