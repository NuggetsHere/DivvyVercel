



// import Image from "next/image";
// import Link from "next/link";
import { SignupFormDemo } from "../../components/form";
// import { AccordionDemo } from "../../components/faq";

// export const metadata = {
//   title: "MacBook Repair Delhi | Certified Apple Mac Repair - Divvy Computronix",
//   description:
//     "Fast, affordable MacBook repair in Delhi NCR by certified experts. Get pickup and drop, original parts, and same-day service at Divvy Computronix.",
//   keywords: [
//     "MacBook repair Delhi",
//     "MacBook repair",
//     "MacBook repair Delhi NCR",
//     "laptop repair Delhi NCR",
//     "Mac repair near me",
//     "Apple laptop service center Delhi",
//     "MacBook air repair Delhi",
//     "MacBook pro screen replacement Delhi",
//     "certified mac repair delhi",
//     "macbook not turning on",
//   ].join(", "),
//   alternates: {
//     canonical: "https://divvycomputronix.com/macbook-repair",
//   },
// };

// export default function MacBookRepairPage() {
//   return (
//     <main className="relative bg-white text-black overflow-hidden">
//       {/* Hero Section */}
// <section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
//   {/* Background Image */}
//   <Image
//     src="/images/imac1.png"
//     alt="MacBook"
//     fill
//     className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
//   />

//   {/* Content Container */}
//   <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
//     {/* Left Text */}
//     <div className="flex-1 max-w-xl">
//       <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
//         MacBook Not Working? <br /> We&apos;ll Fix It Fast
//       </h1>
//       <p className="text-lg text-gray-700 mb-6">
//         Same-day certified Mac repair in Delhi NCR
//       </p>
//     </div>

//     {/* Form Card */}
//     <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8 ">
//       <h3 className="text-lg font-semibold mb-4">Need a quick fix?</h3>
//       <p className="text-sm text-gray-600 mb-6">Start a callback.</p>
//       <SignupFormDemo service="MacBook Repair" />
//     </div>
//   </div>
// </section>



//       {/* Services */}
//       <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-10">Our Services</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           <ServiceCard
//       icon="/icons/motherboard-repair.png"
//       title="Motherboard Repair"
//       description="Repairs for all MacBook models: Air, Pro, Intel, and M-series."
//     />
//     <ServiceCard
//       icon="/icons/screen-repair.png"
//       title="Screen Flicker / Blackout"
//       description="We fix Flexgate, black screens, and damaged displays."
//     />
//     <ServiceCard
//       icon="/icons/power.png"
//       title="MacBook Won&apos;t Turn On"
//       description="Power, logic board, or charging circuit issues diagnosed."
//     />
//     <ServiceCard
//       icon="/icons/battery.png"
//       title="Battery Not Charging"
//       description="Original battery replacement & calibration for all models."
//     />
//     <ServiceCard
//       icon="/icons/overheat.png"
//       title="Overheating & Fan Noise"
//       description="Cleanups & thermal fixes for overheating MacBooks."
//     />
//     <ServiceCard
//       icon="/icons/keyboard-repair.png"
//       title="Keyboard / Trackpad"
//       description="We fix butterfly keyboard & trackpad responsiveness."
//     />
//     <ServiceCard
//       icon="/icons/liquid-damage.png"
//       title="Liquid Damage Repair"
//       description="Internal cleaning, diagnostics & logic board repair."
//     />
//     <ServiceCard
//       icon="/icons/boot.png"
//       title="macOS Stuck on Boot"
//       description="Fix frozen Apple logo, kernel panics & boot loops."
//     />
//     <ServiceCard
//       icon="/icons/wifi.png"
//       title="WiFi / Bluetooth Issue"
//       description="Network hardware & macOS connectivity problems solved."
//     />
//     <ServiceCard
//       icon="/icons/data-recovery.jpg"
//       title="Data Recovery"
//       description="Recover files from dead Macs, SSD failures & more."
//     />
//         </div>
//       </section>

//       {/* About Repair Services */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trusted MacBook Repair Experts in Delhi NCR</h2>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           At Divvy Computronix, we provide fast and reliable <strong>MacBook repair services in Delhi NCR</strong> — trusted by professionals, students, and businesses across the city. Whether you&apos;re facing hardware issues like screen flickering, keyboard failure, or battery problems, or software issues like macOS crashes or boot loops, we&apos;ve got you covered.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           We service all MacBook models — including MacBook Air, MacBook Pro, Intel-based systems, and Apple M1/M2 machines. Our technicians are Apple-certified and trained in ESD-safe practices to protect your device during the repair process. We use <strong>genuine Apple parts</strong> for replacements and offer <strong>warranty-backed services</strong> to ensure peace of mind.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           You can drop off your Mac at our Delhi service center or request a <strong>pickup and delivery service</strong> across Noida, Gurugram, Dwarka, Rohini, and nearby areas. Most issues are diagnosed the same day, and we follow a transparent, no-fix-no-fee policy.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed">
//           Looking to buy or upgrade? We also provide <Link href="/services" className="text-blue-600 underline">refurbished MacBooks</Link> and <Link href="/services" className="text-blue-600 underline">second-hand laptops</Link> at the best prices in Delhi NCR. For regular maintenance tips and updates, check out our <Link href="/blogs" className="text-blue-600 underline">MacBook care blog</Link>. Have questions? <Link href="/contact" className="text-blue-600 underline">Get in touch with us</Link> today.
//         </p>
//       </section>

//       {/* Symptoms & Fixes Table */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common MacBook Problems We Solve</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
//             <thead className="bg-gray-100 text-gray-800">
//               <tr>
//                 <th className="px-4 py-3 border-b">Symptom</th>
//                 <th className="px-4 py-3 border-b">Our Fix</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b"><td className="px-4 py-3">MacBook not turning on</td><td className="px-4 py-3">Power IC or logic board diagnosis and replacement</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Battery draining fast / not charging</td><td className="px-4 py-3">Battery replacement and SMC calibration</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Overheating or loud fan noise</td><td className="px-4 py-3">Thermal paste reapplication and fan cleaning</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Screen flickering / black screen</td><td className="px-4 py-3">Screen and flex cable replacement</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Keyboard / trackpad not working</td><td className="px-4 py-3">Butterfly keyboard replacement or trackpad repair</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Liquid spill damage</td><td className="px-4 py-3">Logic board cleaning and component replacement</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">macOS stuck on boot</td><td className="px-4 py-3">OS repair, data backup, and clean reinstall</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">WiFi or Bluetooth not working</td><td className="px-4 py-3">WiFi card or logic board component fix</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Data recovery from dead MacBook</td><td className="px-4 py-3">SSD/logic board recovery and external extraction</td></tr>
//               <tr><td className="px-4 py-3">Speaker crackling or no audio</td><td className="px-4 py-3">Speaker module replacement or connector reflow</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </section>

// {/* service areas */}
// {/* Service Area Grid */}
// <section className="relative px-6 sm:px-12 py-20 max-w-5xl mx-auto">
//   <h2 className="text-2xl md:text-3xl font-semibold mb-6">
//     Service Areas We Cover in Delhi NCR
//   </h2>
//   <p className="text-gray-700 mb-6">
//     We offer doorstep MacBook repair and pickup in these locations:
//   </p>
//   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-800">
//     {[
//       "Dwarka",
//       "Rohini",
//       "Saket",
//       "Janakpuri",
//       "Rajouri Garden",
//       "Lajpat Nagar",
//       "Karol Bagh",
//       "Connaught Place",
//       "Noida Sector 18",
//       "Noida Sector 62",
//       "Gurugram Sector 14",
//       "Gurugram Cyber Hub",
//       "Ghaziabad",
//       "Vasant Kunj",
//       "Patel Nagar",
//       "Preet Vihar"
//     ].map((area) => (
//       <Link
//         href="/contact"
//         key={area}
//         className="hover:underline hover:text-blue-600 transition-colors"
//       >
//         MacBook Repair in {area}
//       </Link>
//     ))}
//   </div>
// </section>
//     </main>
//   );
// }




// // ServiceCard Component
// function ServiceCard({ icon, title, description }) {
//   return (
//     <div className="bg-white shadow border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center">
//       <Image src={icon} alt={title} width={40} height={40} className="mb-4" />
//       <h3 className="font-semibold text-base mb-1">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   );
// }






// import Image from "next/image";
// import Link from "next/link";

// export const metadata = {
//   title: "iMac Repair Delhi NCR | Certified Apple iMac Repair - Divvy Computronix",
//   description:
//     "Affordable, same-day iMac repair in Delhi NCR by Apple-certified experts. We fix power issues, screen damage, macOS errors, and more.",
//   keywords: [
//     "iMac repair Delhi",
//     "iMac repair Delhi NCR",
//     "Apple desktop repair",
//     "iMac screen replacement",
//     "iMac not turning on",
//     "iMac overheating",
//     "Apple authorized iMac service Delhi",
//     "iMac repair near me",
//   ].join(", "),
//   alternates: {
//     canonical: "https://divvycomputronix.com/imac-repair",
//   },
// };

// export default function ImacRepairPage() {
//   return (
//     <main className="relative bg-white text-black overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative w-full min-h-screen overflow-hidden">
//         {/* Full-width background image */}
//         <div
//           className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
//           style={{ backgroundImage: "url('/images/imac-repair.png')" }}
//         />

//         {/* Foreground Content */}
//         <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
//           <div className="flex-1 max-w-xl">
//             <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
//               iMac Not Powering On? <br /> Let Experts Fix It.
//             </h1>
//             <p className="text-lg text-gray-700 mb-6">
//               Certified iMac Repairs in Delhi NCR · On-site Pickup Available
//             </p>
//           </div>
//           <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
//             <h3 className="text-lg font-semibold mb-4">Book a Repair Today</h3>
//             <p className="text-sm text-gray-600 mb-6">Get a free diagnosis with pickup & drop.</p>
//             <SignupFormDemo service="iMac Repair" />
//           </div>
//         </div>
//       </section>

//       {/* Service Cards */}
//       <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-10">Our iMac Repair Services</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
//           <ServiceCard
//             icon="/icons/imac-power.png"
//             title="iMac Not Turning On"
//             description="Diagnosis of power supply, PRAM, or logic board issues."
//           />
//           <ServiceCard
//             icon="/icons/imac-screen.png"
//             title="Screen Flicker / No Display"
//             description="Fix broken LCDs, loose display connectors, or flickering."
//           />
//           <ServiceCard
//             icon="/icons/imac-heat.png"
//             title="Overheating / Fan Noise"
//             description="Dust cleaning, thermal repaste, and fan module servicing."
//           />
//           <ServiceCard
//             icon="/icons/imac-drive.png"
//             title="Slow iMac / Drive Issues"
//             description="HDD to SSD upgrade, OS reinstall, and storage fixes."
//           />
//           <ServiceCard
//             icon="/icons/imac-upgrade.png"
//             title="RAM / SSD Upgrade"
//             description="Boost speed with compatible RAM and SSD expansion."
//           />
//           <ServiceCard
//             icon="/icons/imac-os.png"
//             title="macOS Not Booting"
//             description="Resolve OS stuck, kernel panic, or reinstall issues."
//           />
//           <ServiceCard
//             icon="/icons/imac-usb.png"
//             title="Ports / Peripherals Not Working"
//             description="Repair damaged USB ports, SD card readers, or Ethernet."
//           />
//           <ServiceCard
//             icon="/icons/imac-data.png"
//             title="Data Recovery"
//             description="Recover data from dead drives or damaged systems."
//           />
//           <ServiceCard
//             icon="/icons/imac-audio.png"
//             title="No Sound / Audio Crackle"
//             description="Speaker diagnostics and replacement for iMacs."
//           />
//           <ServiceCard
//             icon="/icons/imac-stand.png"
//             title="Stand / Hinge Repair"
//             description="Fix tilt and stand issues in older and newer iMacs."
//           />
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Apple iMac Repair Specialists in Delhi NCR</h2>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           At Divvy Computronix, we specialize in <strong>iMac repair in Delhi NCR</strong> for individuals, studios, and creative professionals who rely on performance machines. Whether your iMac is running slow, showing graphical glitches, or refuses to boot, we diagnose and fix it using genuine parts and certified tools.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           Our technicians are experienced with both Intel and M1-based iMacs, including 21.5", 24", and 27" models. We follow static-safe protocols and use Apple-grade adhesives and glass removal tools to ensure safe and precise repairs.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed mb-4">
//           We offer <Link href="/services" className="text-blue-600 underline">pickup & drop</Link> service across Delhi, Noida, Gurugram, and surrounding areas. Most repairs are completed in 24–48 hours with a <strong>no-fix-no-fee</strong> guarantee. Need an upgrade instead? We also provide SSD and RAM upgrades for older iMacs.
//         </p>
//         <p className="text-gray-700 text-base leading-relaxed">
//           Browse our <Link href="/blogs" className="text-blue-600 underline">Mac blog</Link> for repair guides, or <Link href="/contact" className="text-blue-600 underline">get in touch</Link> to book a free diagnosis.
//         </p>
//       </section>

//       {/* Symptom Table */}
//       <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common iMac Issues We Fix</h2>
//         <div className="overflow-x-auto">
//           <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
//             <thead className="bg-gray-100 text-gray-800">
//               <tr>
//                 <th className="px-4 py-3 border-b">Symptom</th>
//                 <th className="px-4 py-3 border-b">Our Fix</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b"><td className="px-4 py-3">No power or chime</td><td className="px-4 py-3">Power supply, logic board, or PRAM reset</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">iMac heating up</td><td className="px-4 py-3">Internal cleaning and thermal repaste</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Screen not lighting up</td><td className="px-4 py-3">Backlight repair or display replacement</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">macOS not loading</td><td className="px-4 py-3">Reinstall macOS or fix corrupted OS</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">Slow performance</td><td className="px-4 py-3">SSD upgrade and RAM installation</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">USB or audio port dead</td><td className="px-4 py-3">Port board or I/O flex cable replacement</td></tr>
//               <tr className="border-b"><td className="px-4 py-3">No sound / speaker crackle</td><td className="px-4 py-3">Speaker or audio board replacement</td></tr>
//               <tr><td className="px-4 py-3">Data lost on iMac</td><td className="px-4 py-3">Drive imaging and logical data recovery</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </main>
//   );
// }

// // ServiceCard Component (reused)
// function ServiceCard({ icon, title, description }) {
//   return (
//     <div className="bg-white shadow border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center">
//       <Image src={icon} alt={title} width={40} height={40} className="mb-4" />
//       <h3 className="font-semibold text-base mb-1">{title}</h3>
//       <p className="text-sm text-gray-600">{description}</p>
//     </div>
//   );
// }



import Image from "next/image";
import Link from "next/link";
// import { SignupFormDemo } from "../components/form";
import ServiceCard from "../../components/servicecard";


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
    canonical: "https://divvycomputronix.com/imac-repair",
  },
};

export default function IMacRepairPage() {
  return (
    <main className="relative bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
          style={{ backgroundImage: "url('/images/imac.png')" }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
          {/* Left Text */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              iMac Issues? <br /> Let the Experts Handle It
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Certified iMac repair in Delhi NCR with pickup & warranty
            </p>
          </div>

          {/* Form */}
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <ServiceCard
            icon="/icons/imac-power.png"
            title="iMac Won’t Turn On"
            description="Power supply or logic board failures diagnosed & fixed."
          />
          <ServiceCard
            icon="/icons/imac-screen.png"
            title="Display Issues"
            description="Fix black screen, lines, or LED/retina screen problems."
          />
          <ServiceCard
            icon="/icons/imac-fan.png"
            title="Overheating / Fan Noise"
            description="Internal cleaning and thermal rework to fix heating."
          />
          <ServiceCard
            icon="/icons/imac-upgrade.png"
            title="SSD / RAM Upgrade"
            description="Speed up your iMac with SSD and RAM upgrades."
          />
          <ServiceCard
            icon="/icons/imac-os.png"
            title="macOS Not Loading"
            description="Stuck on boot? We reinstall macOS and backup your data."
          />
          <ServiceCard
            icon="/icons/imac-data.png"
            title="Data Recovery"
            description="Recover data from dead iMacs or failed drives."
          />
          <ServiceCard
            icon="/icons/imac-usb.png"
            title="Ports / Peripherals Not Working"
            description="Fix USB, HDMI, or SD card port issues on iMac."
          />
          <ServiceCard
            icon="/icons/imac-audio.png"
            title="Speaker / Audio Problems"
            description="Resolve audio distortion or no sound issues."
          />
          <ServiceCard
            icon="/icons/imac-network.png"
            title="WiFi / Bluetooth Issues"
            description="Solve connectivity issues related to macOS or hardware."
          />
          <ServiceCard
            icon="/icons/imac-cleaning.png"
            title="Internal Dust Cleaning"
            description="Full internal cleaning to extend iMac’s lifespan."
          />
        </div>
      </section>

      {/* About iMac Services */}
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
    </main>
  );
}
