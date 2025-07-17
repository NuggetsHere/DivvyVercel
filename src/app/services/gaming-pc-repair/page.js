import Image from "next/image";
import Link from "next/link";
import { SignupFormDemo } from "../components/form";
import ServiceCard from "../../components/servicecard";


export const metadata = {
  title: "Gaming PC Repair Delhi | Custom Rig Fixes - Divvy Computronix",
  description:
    "Expert gaming PC repair in Delhi NCR — from GPU issues to liquid cooling, we handle it all. Pickup service available. Fix boot issues, FPS drops, and overheating now.",
  keywords: [
    "gaming PC repair Delhi",
    "custom PC repair",
    "high-end PC repair Delhi NCR",
    "GPU repair Delhi",
    "PC not booting fix",
    "overheating gaming PC fix",
    "liquid cooling repair",
    "RGB setup issues",
    "PC repair for gamers Delhi",
    "Divvy Computronix",
  ].join(", "),
  alternates: {
    canonical: "https://divvycomputronix.com/gaming-pc-repair",
  },
};

export default function GamingPcRepairPage() {
  return (
    <main className="relative bg-white text-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
          style={{ backgroundImage: "url('/images/gamingpc.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Gaming Rig Down? <br /> We’ll Get You Back in the Game
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Expert Gaming PC repair in Delhi NCR with pickup, upgrade & thermal fixes
            </p>
          </div>

          <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-4">PC not booting? GPU crash?</h3>
            <p className="text-sm text-gray-600 mb-6">We’ll diagnose and fix it fast.</p>
            <SignupFormDemo service="Gaming PC Repair" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative px-6 sm:px-12 py-20 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">Gaming PC Repair Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <ServiceCard icon="/icons/gpu.png" title="GPU Not Detected" description="Fix GPU crashes, black screen, or PCIe slot issues." />
          <ServiceCard icon="/icons/thermal.png" title="Overheating" description="Thermal repaste, cooler install & airflow correction." />
          <ServiceCard icon="/icons/bootloop.png" title="PC Not Booting" description="Troubleshoot BIOS, power rails & POST errors." />
          <ServiceCard icon="/icons/ram.png" title="RAM / Storage Fault" description="Fix random reboots or SSD detection problems." />
          <ServiceCard icon="/icons/fps.png" title="FPS Drop / Lag" description="Diagnose thermal throttling or bottlenecks." />
          <ServiceCard icon="/icons/psu.png" title="PSU / Power Issue" description="Check SMPS, surge damage or faulty cables." />
          <ServiceCard icon="/icons/liquidcooling.png" title="Liquid Cooling Issues" description="AIO not working? We replace or refill." />
          <ServiceCard icon="/icons/rgb.png" title="RGB / Fan Issues" description="Configure ARGB sync or replace faulty headers." />
          <ServiceCard icon="/icons/windows.png" title="Windows Crashes" description="Resolve blue screen errors, OS issues, drivers." />
          <ServiceCard icon="/icons/cable.png" title="Cable Management" description="Neat internal routing & airflow enhancement." />
        </div>
      </section>

      {/* About Section */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Gamers Trust Us for PC Repair in Delhi</h2>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          Divvy Computronix is Delhi’s most trusted destination for <strong>Gaming PC repair</strong>, upgrades, and optimization. Whether you’ve built a beast with an RTX 4090 or run a budget Ryzen setup — our team diagnoses and fixes performance, thermal, and hardware issues with care and precision.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          We handle advanced issues like <strong>liquid cooling pump failures</strong>, <strong>BIOS corruption</strong>, <strong>FPS drops</strong>, and <strong>blue screen crashes</strong>. Our in-house lab supports thermal imaging and diagnostics for high-end systems. All parts used are 100% original or vetted A-grade.
        </p>
        <p className="text-gray-700 text-base leading-relaxed mb-4">
          We also offer <strong>custom PC building</strong>, RAM/SSD upgrades, RGB configuration, and ESD-safe motherboard-level repair — across Delhi NCR.
        </p>
        <p className="text-gray-700 text-base leading-relaxed">
          Want expert tips? Explore our <Link href="/blogs" className="text-blue-600 underline">blog</Link>. Need service details? See all <Link href="/services" className="text-blue-600 underline">services we offer</Link>. Ready to fix? <Link href="/contact" className="text-blue-600 underline">Contact us here</Link>.
        </p>
      </section>

      {/* Table: Symptoms & Fixes */}
      <section className="relative px-6 sm:px-12 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Common Gaming PC Issues & Our Fix</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 text-sm text-left text-gray-700">
            <thead className="bg-gray-100 text-gray-800">
              <tr>
                <th className="px-4 py-3 border-b">Symptom</th>
                <th className="px-4 py-3 border-b">Our Fix</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b"><td className="px-4 py-3">No display / No boot</td><td className="px-4 py-3">Power rail check, GPU/CPU reseat, PSU test</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Overheating during gaming</td><td className="px-4 py-3">Cooler repaste, airflow fix, BIOS tweak</td></tr>
              <tr className="border-b"><td className="px-4 py-3">FPS drops mid-game</td><td className="px-4 py-3">Thermal bottleneck or driver-level tuning</td></tr>
              <tr className="border-b"><td className="px-4 py-3">RGB not syncing</td><td className="px-4 py-3">RGB controller config or software fix</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Windows blue screen</td><td className="px-4 py-3">Dump analysis, driver & hardware fix</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Liquid cooler failure</td><td className="px-4 py-3">AIO replace / coolant refill & seal check</td></tr>
              <tr className="border-b"><td className="px-4 py-3">Power loss mid-use</td><td className="px-4 py-3">Check PSU, surge, or thermal trip</td></tr>
              <tr><td className="px-4 py-3">RAM not detected</td><td className="px-4 py-3">RAM slot test, CMOS reset, reseat modules</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
