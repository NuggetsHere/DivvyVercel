import Image from "next/image";
import Link from "next/link";
import { SignupFormDemo } from "../../components/form";
import ServiceCard from "../../components/servicecard";

export const metadata = {
  title: "Microsoft Surface Repair Delhi | Screen & Battery Fix - Divvy Computronix",
  description:
    "Certified Microsoft Surface repair in Delhi NCR. Get screen replacement, battery fix, and SSD upgrade for Surface Pro, Laptop & Studio. Pickup & same-day repair.",
  keywords: [
    "Surface repair Delhi",
    "Surface Pro screen replacement",
    "Surface battery replacement",
    "Surface repair Delhi NCR",
    "Microsoft Surface service center",
    "Surface Pro not turning on",
    "Surface not charging",
    "Surface SSD upgrade",
    "Divvy Computronix",
  ].join(", "),
  alternates: {
    canonical: "https://divvycomputronix.com/surface-repair",
  },
};

export default function SurfaceRepairPage() {
  return (
    <main className="relative bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
          style={{ backgroundImage: "url('/images/surface.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Surface Not Responding? <br /> We Repair It – Fast & Safely
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Certified Surface repair in Delhi NCR with original parts & pickup
            </p>
          </div>

          <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-4">Surface Pro / Laptop repair</h3>
            <p className="text-sm text-gray-600 mb-6">Request expert support from Divvy.</p>
            <SignupFormDemo service="Surface Repair" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Microsoft Surface Repairs We Offer</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
  <ServiceCard icon="/icons/surface-screen.png" title="Screen Replacement" description="Fix cracked or unresponsive touchscreens." />
  <ServiceCard icon="/icons/surface-battery.png" title="Battery Replacement" description="Resolve battery drain, swelling, or not powering on." />
  <ServiceCard icon="/icons/surface-charging.png" title="Charging Port Repair" description="Fix loose charging port or charging failures." />
  <ServiceCard icon="/icons/surface-keyboard.png" title="Keyboard / Touchpad Fix" description="Solve Type Cover or touchpad connectivity issues." />
  <ServiceCard icon="/icons/surface-boot-new.png" title="Boot / Logo Stuck Repair" description="Fix stuck on Surface logo or Windows boot errors." />
  <ServiceCard icon="/icons/surface-touch.png" title="Touchscreen Repair" description="Fix ghost touches or unresponsive areas." />
  <ServiceCard icon="/icons/surface-overheat.png" title="Overheating Fix" description="Thermal paste, cleaning & airflow optimization." />
  <ServiceCard icon="/icons/surface-wifi.png" title="Wi-Fi / Bluetooth Repair" description="Fix network card issues or wireless connectivity." />
  <ServiceCard icon="/icons/surface-software.png" title="Software / OS Reinstall" description="Fix slow devices, OS errors & driver updates." />
  <ServiceCard icon="/icons/data-recovery.jpg" title="Data Recovery" description="Recover files from dead or damaged Surface devices." />
</div>

      </section>

      {/* About Section */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Microsoft Surface Repair in Delhi NCR</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Divvy Computronix specializes in <strong>Microsoft Surface repair</strong> for Pro, Laptop, Go, and Studio series. From a cracked touchscreen to firmware issues, our certified technicians diagnose and repair complex problems in a safe, static-free environment.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          We use original-grade parts for <strong>screen replacement</strong>, <strong>battery swaps</strong>, and <strong>SSD upgrades</strong>. Our team handles BIOS errors, charging issues, keyboard failures, and <strong>data recovery from dead Surfaces</strong>.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Free pickup & delivery is available across Delhi NCR. Same-day service possible for most issues.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          Check out our <Link href="/blogs" className="text-blue-600 underline">blog</Link> for Surface tips, visit <Link href="/services" className="text-blue-600 underline">all services</Link>, or <Link href="/contact" className="text-blue-600 underline">get in touch</Link> for quick assistance.
        </p>
      </section>

      {/* Table: Symptoms & Fixes */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common Surface Problems We Fix</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-4 py-3 border-b">Symptom</th>
                <th className="px-4 py-3 border-b">Our Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">Surface screen cracked</td><td className="px-4 py-3">Touchscreen panel replaced with OEM-quality part</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Device not turning on</td><td className="px-4 py-3">Check motherboard, charging port, power IC</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Battery drains fast</td><td className="px-4 py-3">Battery replaced and firmware recalibrated</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Logo stuck on boot</td><td className="px-4 py-3">Fix OS corruption or recovery mode errors</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Touchpad not working</td><td className="px-4 py-3">Replace type cover or trackpad module</td></tr>
              <tr className="border-b"><td className="px-4 py-3">No charging</td><td className="px-4 py-3">Surface Connect port / DC jack replaced</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Overheating during use</td><td className="px-4 py-3">Fan service and thermal repasting</td></tr>
              <tr><td className="px-4 py-3">Data needed from dead Surface</td><td className="px-4 py-3">Internal SSD accessed via custom tools</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
