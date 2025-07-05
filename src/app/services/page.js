import {BentoGridSecondDemo} from "../components/bentogrid";
export default function Services() {
    return (
        <>
        <div className="bg-[#EEEEEE] py-16 px-6">
        <div className="max-w-7xl mx-auto my-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mb-16 mt-20">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-sm bg-white px-3 py-1 rounded-full shadow text-black">
              🛠️ Laptop & MacBook Repair Services in Delhi NCR | Divvy Computronix
            </span>
            <h2 className="text-4xl font-semibold text-black mt-4 mb-4">
              What we can do for you
            </h2>
            <p className="text-gray-800 text-lg">
              From diagnosis to repair, we offer comprehensive solutions for all your devices with tech-focused precision.
            </p>
          </div>

          <a
            href="/contact"
            className="bg-[#C155F2]/90 text-white px-6 py-3 rounded-full text-xl shadow-md hover:bg-[#C155F2] transition"
          >
            Repair now ↗
          </a>
        </div>

        <div className="h-auto mt-auto w-full flex items-center justify-center">
                        <BentoGridSecondDemo />
                    </div>
        </div>
        </div>
        </>
        )
    
}