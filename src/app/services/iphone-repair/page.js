import Image from "next/image";
import Link from "next/link";
import { SignupFormDemo } from "../../components/form";

export const metadata = {
  title: "iPhone Repair Delhi | Screen, Battery & Water Damage Fix – Divvy Computronix",
  description:
    "Trusted iPhone repair in Delhi NCR with pickup & same-day service. We fix broken screens, battery issues, water damage & more. Original parts, expert service.",
  keywords: [
    "iPhone repair Delhi",
    "iPhone screen replacement",
    "iPhone battery replacement Delhi",
    "iPhone repair near me",
    "iPhone water damage repair",
    "iPhone motherboard repair",
    "iPhone repair Delhi NCR",
    "Apple repair Delhi",
  ].join(", "),
  alternates: {
    canonical: "https://divvycomputronix.com/iphone-repair",
  },
};

export default function IPhoneRepairPage() {
  return (
    <main className="relative bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
          style={{ backgroundImage: "url('/images/iphone.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Broken iPhone? <br /> We’ll Repair It — Fast & Certified
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Same-day iPhone repair in Delhi NCR with pickup & warranty
            </p>
          </div>

          <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-4">iPhone not working?</h3>
            <p className="text-sm text-gray-600 mb-6">Book your repair today.</p>
            <SignupFormDemo service="iPhone Repair" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">iPhone Repairs We Handle</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <ServiceCard icon="/icons/iphone-screen.png" title="Screen Replacement" description="Fix cracked or unresponsive touch screens." />
          <ServiceCard icon="/icons/iphone-battery.png" title="Battery Replacement" description="Quick battery swaps with original-grade parts." />
          <ServiceCard icon="/icons/iphone-water.png" title="Water Damage Repair" description="Full cleaning and board-level repair for spills." />
          <ServiceCard icon="/icons/iphone-camera.png" title="Camera Not Working" description="Front/back camera repair & lens replacement." />
          <ServiceCard icon="/icons/iphone-speaker.png" title="Speaker / Mic Issues" description="Fix muffled audio, no sound, or mic not working." />
          <ServiceCard icon="/icons/iphone-charging.png" title="Charging Port Fix" description="Repair slow charging or non-responsive ports." />
          <ServiceCard icon="/icons/iphone-boot.png" title="Boot Loop / Logo Stuck" description="Restore system after update or software failure." />
          <ServiceCard icon="/icons/iphone-button.png" title="Buttons Not Working" description="Fix power, volume, or home button issues." />
          <ServiceCard icon="/icons/iphone-network.png" title="Network / SIM Issues" description="Solve ‘No Service’, SIM errors, and signal drops." />
          <ServiceCard icon="/icons/iphone-data.png" title="Data Recovery" description="Recover files from dead or damaged iPhones." />
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">iPhone Repair Experts in Delhi NCR</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Divvy Computronix offers fast, reliable, and affordable <strong>iPhone repair in Delhi NCR</strong> with pickup and same-day service. From <strong>screen replacements</strong> to <strong>battery swaps</strong>, <strong>water damage</strong> fixes to <strong>data recovery</strong> — our Apple-trained technicians handle it all.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          We use original-grade replacement parts, offer ESD-safe repairs, and back our work with a service warranty. Whether you have an iPhone 11, 12, 13, 14 or the latest 15 Pro Max, you’re in safe hands.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Serving Connaught Place, Dwarka, Rohini, Noida, Gurugram & beyond — <strong>Divvy Computronix</strong> is your trusted Apple service alternative.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          Visit our <Link href="/blogs" className="text-blue-600 underline">blog</Link> for iPhone tips, check all <Link href="/services" className="text-blue-600 underline">services we offer</Link>, or <Link href="/contact" className="text-blue-600 underline">contact us here</Link> for support.
        </p>
      </section>

      {/* Table: Symptoms & Fixes */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common iPhone Issues We Fix</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-4 py-3 border-b">Symptom</th>
                <th className="px-4 py-3 border-b">Our Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">Broken screen</td><td className="px-4 py-3">Original-grade screen replacement</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Battery drains quickly</td><td className="px-4 py-3">Battery replacement with new cell</td></tr>
              <tr className="border-b"><td className="px-4 py-3">No charging</td><td className="px-4 py-3">Charging port or motherboard repair</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Water damage</td><td className="px-4 py-3">Board cleaning + circuit rework</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Face ID not working</td><td className="px-4 py-3">Sensor ribbon or Face ID reset</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Camera blurry / not opening</td><td className="px-4 py-3">Camera module replacement</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Phone stuck on logo</td><td className="px-4 py-3">iOS restore, boot loop fix</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Mic not working</td><td className="px-4 py-3">Mic flex or motherboard audio IC fix</td></tr>
              <tr><td className="px-4 py-3">No SIM / No network</td><td className="px-4 py-3">SIM tray, antenna, or baseband repair</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}

// Reusable ServiceCard
function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center">
      <Image src={icon} alt={title} width={40} height={40} className="mb-4" />
      <h3 className="font-semibold text-base mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}
