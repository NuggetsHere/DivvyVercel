



import Image from "next/image";
import Link from "next/link";
import { SignupFormDemo } from "../components/form";
import { AccordionDemo } from "../components/faq";

export const metadata = {
  title: "MacBook Repair Delhi | Certified Apple Mac Repair - Divvy Computronix",
  description:
    "Fast, affordable MacBook repair in Delhi NCR by certified experts. Get pickup and drop, original parts, and same-day service at Divvy Computronix.",
  keywords: [
    "MacBook repair Delhi",
    "MacBook repair",
    "MacBook repair Delhi NCR",
    "laptop repair Delhi NCR",
    "Mac repair near me",
    "Apple laptop service center Delhi",
    "MacBook air repair Delhi",
    "MacBook pro screen replacement Delhi",
    "certified mac repair delhi",
    "macbook not turning on",
  ].join(", "),
  alternates: {
    canonical: "https://divvycomputronix.com/macbook-repair",
  },
};

export default function MacBookRepairPage() {
  return (
    <main className="relative bg-white text-black overflow-hidden">
      {/* Hero Section */}
<section className="relative w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
  {/* Background Image */}
  <Image
    src="/images/macbook2.png"
    alt="MacBook"
    fill
    className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
  />

  {/* Content Container */}
  <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
    {/* Left Text */}
    <div className="flex-1 max-w-xl">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
        MacBook Not Working? <br /> We&apos;ll Fix It Fast
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Same-day certified Mac repair in Delhi NCR
      </p>
    </div>

    {/* Form Card */}
    <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8 ">
      <h3 className="text-lg font-semibold mb-4">Need a quick fix?</h3>
      <p className="text-sm text-gray-600 mb-6">Start a callback.</p>
      <SignupFormDemo service="MacBook Repair" />
    </div>
  </div>
</section>



      {/* Services */}
      <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Our Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <ServiceCard
      icon="/icons/motherboard-repair.png"
      title="Motherboard Repair"
      description="Repairs for all MacBook models: Air, Pro, Intel, and M-series."
    />
    <ServiceCard
      icon="/icons/screen-repair.png"
      title="Screen Flicker / Blackout"
      description="We fix Flexgate, black screens, and damaged displays."
    />
    <ServiceCard
      icon="/icons/power.png"
      title="MacBook Won&apos;t Turn On"
      description="Power, logic board, or charging circuit issues diagnosed."
    />
    <ServiceCard
      icon="/icons/battery.png"
      title="Battery Not Charging"
      description="Original battery replacement & calibration for all models."
    />
    <ServiceCard
      icon="/icons/overheat.png"
      title="Overheating & Fan Noise"
      description="Cleanups & thermal fixes for overheating MacBooks."
    />
    <ServiceCard
      icon="/icons/keyboard-repair.png"
      title="Keyboard / Trackpad"
      description="We fix butterfly keyboard & trackpad responsiveness."
    />
    <ServiceCard
      icon="/icons/liquid-damage.png"
      title="Liquid Damage Repair"
      description="Internal cleaning, diagnostics & logic board repair."
    />
    <ServiceCard
      icon="/icons/boot.png"
      title="macOS Stuck on Boot"
      description="Fix frozen Apple logo, kernel panics & boot loops."
    />
    <ServiceCard
      icon="/icons/wifi.png"
      title="WiFi / Bluetooth Issue"
      description="Network hardware & macOS connectivity problems solved."
    />
    <ServiceCard
      icon="/icons/data-recovery.jpg"
      title="Data Recovery"
      description="Recover files from dead Macs, SSD failures & more."
    />
        </div>
      </section>

      {/* About Repair Services */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Trusted MacBook Repair Experts in Delhi NCR</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          At Divvy Computronix, we provide fast and reliable <strong>MacBook repair services in Delhi NCR</strong> — trusted by professionals, students, and businesses across the city. Whether you&apos;re facing hardware issues like screen flickering, keyboard failure, or battery problems, or software issues like macOS crashes or boot loops, we&apos;ve got you covered.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          We service all MacBook models — including MacBook Air, MacBook Pro, Intel-based systems, and Apple M1/M2 machines. Our technicians are Apple-certified and trained in ESD-safe practices to protect your device during the repair process. We use <strong>genuine Apple parts</strong> for replacements and offer <strong>warranty-backed services</strong> to ensure peace of mind.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          You can drop off your Mac at our Delhi service center or request a <strong>pickup and delivery service</strong> across Noida, Gurugram, Dwarka, Rohini, and nearby areas. Most issues are diagnosed the same day, and we follow a transparent, no-fix-no-fee policy.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          Looking to buy or upgrade? We also provide <Link href="/services" className="text-blue-600 underline">refurbished MacBooks</Link> and <Link href="/services" className="text-blue-600 underline">second-hand laptops</Link> at the best prices in Delhi NCR. For regular maintenance tips and updates, check out our <Link href="/blogs" className="text-blue-600 underline">MacBook care blog</Link>. Have questions? <Link href="/contact" className="text-blue-600 underline">Get in touch with us</Link> today.
        </p>
      </section>

      {/* Symptoms & Fixes Table */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common MacBook Problems We Solve</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-4 py-3 border-b">Symptom</th>
                <th className="px-4 py-3 border-b">Our Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">MacBook not turning on</td><td className="px-4 py-3">Power IC or logic board diagnosis and replacement</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Battery draining fast / not charging</td><td className="px-4 py-3">Battery replacement and SMC calibration</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Overheating or loud fan noise</td><td className="px-4 py-3">Thermal paste reapplication and fan cleaning</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Screen flickering / black screen</td><td className="px-4 py-3">Screen and flex cable replacement</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Keyboard / trackpad not working</td><td className="px-4 py-3">Butterfly keyboard replacement or trackpad repair</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Liquid spill damage</td><td className="px-4 py-3">Logic board cleaning and component replacement</td></tr>
              <tr className="border-b"><td className="px-4 py-3">macOS stuck on boot</td><td className="px-4 py-3">OS repair, data backup, and clean reinstall</td></tr>
              <tr className="border-b"><td className="px-4 py-3">WiFi or Bluetooth not working</td><td className="px-4 py-3">WiFi card or logic board component fix</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Data recovery from dead MacBook</td><td className="px-4 py-3">SSD/logic board recovery and external extraction</td></tr>
              <tr><td className="px-4 py-3">Speaker crackling or no audio</td><td className="px-4 py-3">Speaker module replacement or connector reflow</td></tr>
            </tbody>
          </table>
        </div>
      </section>

{/* service areas */}
{/* Service Area Grid */}
<section className="relative px-6 sm:px-12 py-20 max-w-5xl mx-auto">
  <h2 className="text-2xl md:text-3xl font-semibold mb-6">
    Service Areas We Cover in Delhi NCR
  </h2>
  <p className="text-gray-700 mb-6">
    We offer doorstep MacBook repair and pickup in these locations:
  </p>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-800">
    {[
      "Dwarka",
      "Rohini",
      "Saket",
      "Janakpuri",
      "Rajouri Garden",
      "Lajpat Nagar",
      "Karol Bagh",
      "Connaught Place",
      "Noida Sector 18",
      "Noida Sector 62",
      "Gurugram Sector 14",
      "Gurugram Cyber Hub",
      "Ghaziabad",
      "Vasant Kunj",
      "Patel Nagar",
      "Preet Vihar"
    ].map((area) => (
      <Link
        href="/service-areas"
        key={area}
        className="hover:underline hover:text-blue-600 transition-colors"
      >
        MacBook Repair in {area}
      </Link>
    ))}
  </div>
</section>
    </main>
  );
}




// ServiceCard Component
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center">
      <Image src={icon} alt={title} width={40} height={40} className="mb-4" />
      <h3 className="font-semibold text-base mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}




