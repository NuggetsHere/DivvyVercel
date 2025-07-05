"use client";
import { GlowingEffectDemoSecond } from "@/components/glowing-cards";
import { TimelineDemo } from "../components/timeline";
import Link from "next/link";
import Image from "next/image";


export default function About() {
    return (
        <>
        <section className="bg-[#f4f4f4] text-black pt-36 py-16 px-6 md:px-20">
        <div className="mx-auto grid md:grid-cols-3 gap-12 items-center">
            {/* Left Content */}
                <div>
                <h1 className="text-5xl text-right md:text-6xl font-extrabold leading-tight">
                    REPAIRS
                    <br />
                    <span className="font-light">YOU CAN</span>
                    <br />
                    <span className="relative font-bold">
                    RELY UPON
                    <span className="absolute left-0 -bottom-1 h-1 w-full bg-purple-300"></span>
                    </span>
                </h1>

                <p className="mt-8 text-lg text-right text-gray-700 max-w-xl tracking-tighter font-medium ml-20">
                    At Divvy Computronix, we have been providing professional laptop and computer repair services since 2009. What started as a small repair shop has now grown into a one-stop solution for all device repairs, refurbishments, and sales.
                </p>
            </div>

            {/* Image */}
            <div className="overflow-hidden relative h-full w-full rounded-[2rem]">
                <Image
                src="/about-image.png"
                alt="Laptop"
                className="object-cover w-full h-full absolute inset-0"
                width={500}
                height={500}
                />
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-6">

            {/* Stats */}
            <div className="flex gap-4 justify-between text-left text-black font-medium">
                <div>
                <div className="text-2xl font-bold">
                    30<span className="text-purple-500">Y+</span>
                </div>
                <div className="text-xs uppercase tracking-wide">Experience</div>
                </div>
                <div>
                <div className="text-2xl font-bold">
                    1<span className="text-purple-500">L+</span>
                </div>
                <div className="text-xs uppercase tracking-wide">Customers Satisfied</div>
                </div>
                <div>
                <div className="text-2xl font-bold">
                    80<span className="text-purple-500">K+</span>
                </div>
                <div className="text-xs uppercase tracking-wide">Repaired Devices</div>
                </div>
            </div>

            {/* Right paragraph */}
            <div className="text-lg text-black mt-4 font-medium">
                <p className="mb-3">
                Looking for fast and reliable laptop or PC repair in Nehru Place?
                </p>
                <p>
                We proudly serve customers across the entire DELHI - NCR, ensuring high-quality services at affordable prices.
                </p>
            </div>

            {/* Button */}
            <div className="mt-6">
                <Link href="/contact">
                <button className="px-8 py-3 bg-black text-white rounded-full text-[20px] hover:bg-gray-800 transition-all">
                Get in Touch
                </button>
                </Link>
            </div>
            </div>
        </div>
        </section>

        <div className="px-4 my-16">
            <GlowingEffectDemoSecond />
        </div>

        {/* <div className="px-4 my-16 grid grid-cols-2 gap-4 mb-20">

            <div className="text-white p-5 text-2xl flex flex-col items-center rounded-3xl gap-4">

                <div className="w-full max-w-md mx-auto">
                    <div className="rounded-[50px] text-white px-8 py-10 transition-all duration-300 bg-black hover:bg-[#C9B99F] hover:shadow-xl">
                        <h2 className="text-3xl font-bold text-right leading-tight">
                            FAST TURN<br />AROUND TIME
                        </h2>
                        <p className="mt-6 text-left text-white/90 font-base text-base">
                            We fix most issues within 24 hours.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-md ">
                    <div className="rounded-[50px] text-white px-8 py-10 transition-all duration-300 bg-black hover:bg-[#C9B99F] hover:shadow-xl">
                        <h2 className="text-3xl font-bold text-right leading-tight">
                            EXPERT<br />TECHNICIANS
                        </h2>
                        <p className="mt-6 text-left text-white/90 font-base text-base">
                            30+ years of experience handling MacBooks,
                            <br />
                            gaming PCs, and high-end devices.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-md mx-auto">
                    <div className="rounded-[50px] text-white px-8 py-10 transition-all duration-300 bg-black hover:bg-[#C9B99F] hover:shadow-xl">
                        <h2 className="text-3xl font-bold text-right leading-tight">
                            NO SOLUTION?<br />NO CHARGE!
                        </h2>
                        <p className="mt-6 text-left text-white/90 font-base text-base">
                            You only pay if we solve the problem.
                        </p>
                    </div>
                </div>

            </div>

            <div className="relative w-5/6 h-full">
                <img
                src="/imac.jpg"
                alt="Laptop"
                className="object-cover w-full h-full absolute inset-0 rounded-3xl"
                />
            </div>

        </div> */}

        <TimelineDemo />

        <section className="max-w-6xl mx-auto my-12 px-6">
            <div className="relative rounded-[50px] overflow-hidden bg-black text-white shadow-xl">

                {/* Background Image Layer with Blur */}
                <div
                className="absolute inset-0 bg-center bg-cover blur-md scale-105"
                style={{
                    backgroundImage: "url('/grad-bg.avif')", // Replace with your image
                }}
                />

                {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Foreground Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-8 py-16 space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                    Nationwide Laptop Repair <br /> Services
                </h2>

                <p className="text-base sm:text-lg font-medium max-w-2xl">
                    We understand that not everyone can visit our service center, which is why
                    Divvy Computronix offers repair services across India through secure
                    courier delivery.
                </p>
                <Link href="/contact">
                <button className="mt-6 bg-[#171717] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
                    Get Started
                </button>
                </Link>

                </div>
            </div>
        </section>

        </>
    )
}