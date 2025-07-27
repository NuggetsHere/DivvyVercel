import Image from "next/image";
import Link from "next/link";
import { SignupFormDemo } from "../../components/form";
import { AccordionDemo } from "../../components/faq";

export const metadata = {
  title: "MacBook Screen Repair Delhi | Certified Display Replacement - Divvy Computronix",
  description:
    "Fast, affordable MacBook screen repair in Delhi NCR by certified technicians. Get cracked screen replaced with genuine parts and warranty.",
};

export default function MacBookScreenRepairPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-10 z-[-1]"
          style={{ backgroundImage: "url('/images/macbook.png')" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-12 pt-24">
          <div className="flex-1 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Cracked MacBook Screen? <br /> We Replace It Right.
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Certified display replacement for all Mac models.
            </p>
          </div>
          <div className="flex-1 w-full max-w-md bg-white border border-gray-200 shadow-xl rounded-2xl p-8">
            <h3 className="text-lg font-semibold mb-4">Need a screen fix?</h3>
            <p className="text-sm text-gray-600 mb-6">Request a callback now.</p>
            <SignupFormDemo service="MacBook Screen Repair" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 py-16">
        <h2 className="text-2xl font-semibold mb-8">Common Screen Issues We Fix</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            { icon: "screen.png", label: "Cracked Display" },
            { icon: "screen.png", label: "Flickering Screen" },
            { icon: "screen.png", label: "Black Display" },
            { icon: "screen.png", label: "Lines on Screen" },
            { icon: "screen.png", label: "Dim or No Backlight" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Image
                src={`/icons/${item.icon}`}
                alt={item.label}
                width={64}
                height={64}
              />
              <p className="mt-2 text-sm font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SEO Text Section */}
      <section className="bg-gray-50 py-16 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">MacBook Screen Repair in Delhi NCR</h2>
          <p className="text-gray-700 mb-4">
            A damaged MacBook screen not only hampers productivity but can also lead to further hardware issues if ignored. Whether it’s a minor flicker, color distortion, or a completely shattered display, Divvy Computronix offers reliable MacBook screen repair and replacement services in Delhi NCR. Our certified technicians use genuine Apple parts for all screen replacements, ensuring that your device looks and performs like new.
          </p>
          <p className="text-gray-700 mb-4">
            We handle all screen-related issues, including broken Retina displays, Flexgate problems, black screens, and more. From MacBook Air and MacBook Pro (Intel or M1/M2) to the latest models, we provide seamless replacements backed by warranty. You can opt for our convenient doorstep pickup and drop or visit our service center.
          </p>
          <p className="text-gray-700">
            Most screen replacements are done on the same day. If you're seeing ghost touches, vertical lines, or the display goes black after a flicker — bring it in before it gets worse. Call us today or fill the form above to get started.
          </p>
        </div>
      </section>

      {/* Symptoms & Fixes */}
      <section className="max-w-6xl mx-auto px-6 sm:px-12 py-16">
        <h2 className="text-2xl font-semibold mb-8">Symptoms & Fixes</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              symptom: "Cracked or shattered screen",
              fix: "Full display panel replacement with original part",
            },
            {
              symptom: "Flickering display or brightness issues",
              fix: "Diagnosis of display cable / flex issue and screen replacement",
            },
            {
              symptom: "Screen not turning on",
              fix: "Check for backlight IC or full screen unit swap",
            },
            {
              symptom: "Lines or ghosting on screen",
              fix: "Internal LCD damage fix or full top-case replacement",
            },
          ].map((item, i) => (
            <div key={i} className="p-4 border rounded-xl bg-white shadow-sm">
              <p className="font-semibold">{item.symptom}</p>
              <p className="text-gray-600 text-sm mt-1">{item.fix}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Internal Links */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 pb-16">
        <h2 className="text-xl font-semibold mb-6">Explore More</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/services"
            className="text-blue-600 hover:underline text-sm"
          >
            View All Repair Services →
          </Link>
          <Link
            href="/blogs"
            className="text-blue-600 hover:underline text-sm"
          >
            Read Our Repair Guides →
          </Link>
          <Link
            href="/contact"
            className="text-blue-600 hover:underline text-sm"
          >
            Contact Support →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16 px-6 sm:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
          <AccordionDemo />
        </div>
      </section>
    </main>
  );
}
