"use client"
import Testimonials from "./components/Testimonials";
import Image from "next/image";
import CallToAction from "./components/callToAction";
import { IconBrandAdobe, IconBrandAmazon, IconBrandApple, IconBrandChrome, IconBrandGithub, IconBrandGoogle, IconBrandLinkedin, IconBrandLinkedinFilled, IconBrandMeta, IconDeviceDesktop, IconDeviceGamepad, IconDeviceLaptop, IconDeviceTablet, IconPhone } from "@tabler/icons-react";
import Features from "./components/Features";
import VisitUsOffline from "./components/VistUsOffline";
import { AccordionDemo } from "./components/faq";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCardsDemo } from "./components/certifications";
import { SignupFormDemo } from "./components/form";

export default function Home() {
  const words = ["laptops", "phones", "tablets", "computers"];


  return (
    <>
    
      <div className="flex flex-col items-center w-full text-shadow-none [text-shadow:none]"> 
        {/* Hero Section */}
        <section id="hero" className="pt-48 py-24 pl-12 md:pl-0 w-full bg-gradient-to-b from-transparent via-[#e0f2fe] to-transparent section bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Complex Problems.<br />Simple Solutions.
              </h1>
              <p className="text-lg text-gray-600 mb-6 max-w-xl">
                At Divvy Computronix, we specialize in solving the most complicated repair issues with ease. From liquid-damaged MacBooks to dead motherboards, graphic card failures, and non-booting PCs, we’ve seen (and fixed) it all.
              </p>
              <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-all">
                Fix Now!
              </button>
            </div>

            <div className="hidden md:block">
              <Image
                
                src="/hero-illustration.png"
                alt="Hero Illustration"
                className="rounded-2xl shadow-lg"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <div id="services" className="h-full bg-[#171717] rounded-3xl pt-16 pb-16 flex flex-col items-center justify-center w-11/12 section bg-black">
          <h1 className="text-5xl text-white font-bold mb-10">Our Repair Services</h1>
          <div className="flex flex-wrap justify-center text-xl gap-8 gap-y-10">
            <div className="bg-neutral-100 flex flex-col items-center gap-2 shadow-lg relative rounded-xl">
              <div className="relative w-[250px] h-[250px]">
                <Image src={"/services/macbook-repair.jpg"} fill className="rounded-t-xl mb-4 object-cover" alt="phone repair" />
              </div>
              <h2 className="my-4">MacBook Repairs</h2>
            </div>
            <div className="bg-neutral-100 flex flex-col items-center gap-2 shadow-lg relative rounded-xl">
              <div className="relative w-[250px] h-[250px]">
                <Image src={"/services/phone-repair.jpg"} fill className="rounded-t-xl mb-4 object-cover" alt="laptop repair" />
              </div>
              <h2 className="my-4">iPhone Repairs</h2>
            </div>
            <div className="bg-neutral-100 flex flex-col items-center gap-2 shadow-lg relative rounded-xl">
              <div className="relative w-[250px] h-[250px]">
                <Image src={"/services/imac-repair.jpg"} fill className="rounded-t-xl mb-4 object-cover" alt="tablet repair" />
              </div>
              <h2 className="my-4">iMac Repairs</h2>
            </div>
            <div className="bg-neutral-100 flex flex-col items-center gap-2 shadow-lg relative rounded-xl">
              <div className="relative w-[250px] h-[250px]">
                <Image src={"/services/laptop-repair.jpg"} fill className="rounded-t-xl mb-4 object-cover" alt="desktop repair" />
              </div>
              <h2 className="my-4">Laptop Repair</h2>
            </div>
            <div className="bg-neutral-100 flex flex-col items-center gap-2 shadow-lg relative rounded-xl">
              <div className="relative w-[250px] h-[250px]">
                <Image src={"/services/gaming-pc-repair.jpg"} fill className="rounded-t-xl mb-4 object-cover" alt="desktop repair" />
              </div>
              <h2 className="my-4">Gaming PC Repairs</h2>
            </div>
            <div className="bg-neutral-100 flex flex-col items-center gap-2 shadow-lg relative rounded-xl">
              <div className="relative w-[250px] h-[250px]">
                <Image src={"/services/mac-mini-repair.jpg"} fill className="rounded-t-xl mb-4 object-cover" alt="desktop repair" />
              </div>
              <h2 className="my-4">Mac Mini Repairs</h2>
            </div>
            <div className="bg-neutral-100 flex flex-col items-center gap-2 shadow-lg relative rounded-xl">
              <div className="relative w-[250px] h-[250px]">
                <Image src={"/services/surface-repair.jpeg"} fill className="rounded-t-xl mb-4 object-cover" alt="desktop repair" />
              </div>
              <h2 className="my-4">Surface Repairs</h2>
            </div>s
          </div>
        </div>

        {/* Features */}
        <div id="features" className="h-full mt-32 flex flex-col items-center justify-center w-full section bg-white">
          <h1 className="text-4xl font-bold">Why Divvy Computronix?</h1>
          <Features />
        </div>

        {/* Certifications */}
        <InfiniteMovingCardsDemo />

        {/* Testimonials */}
        <div id="testimonials" className="lg:h-[70vh] h-full w-full pb-16 px-32 lg:grid lg:grid-cols-2 flex flex-col place-items-center bg-gradient-to-br from-[#f9fafb] via-[#f3f4f6] to-[#e5e7eb] section bg-white">
          <div className="h-full w-full flex flex-col items-center justify-center">
            <h1 className="text-6xl tracking-tighter uppercase border-b-2 font-serif">Testimonials</h1>
            <p className="text-xl mt-8">Hear what people have to say about us</p>
          </div>
          <Testimonials />
        </div>

        {/* Our Clientele */}
        <div className="h-full p-16 my-16 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl font-bold mb-10">Our Clientele</h1>
          <div className="flex flex-row gap-4">
            <div className="flex flex-wrap justify-center bg-neutral-100 p-4 rounded-full">
              <IconBrandAmazon strokeWidth={1.5} className="text-neutral-500 h-8 w-8"/>
            </div>
            {/* More icons here */}
          </div>
        </div>

        {/* Signup */}
        <div className="flex w-full gap-6 items-center justify-center">
          <div className="flex items-center justify-center gap-16 px-6">
            
            <Image
              src="/broken-laptop.jpg"
              className="w-1/4 rounded-2xl h-1/2 object-cover" 
              alt="broken surface contact image"
              width={1000}
              height={1000}
            />
            <SignupFormDemo />
          </div>
        </div>

        {/* FAQs */}
        <div id="faq" className="w-full flex flex-col items-center justify-center my-32 mb-16">
          <div className="border-b-2 border-neutral-300 mb-8">
            <h1 className="text-3xl font-bold text-neutral-800">FAQs</h1>
          </div>
          <div className="w-3/4">
            <AccordionDemo />
          </div>
        </div>

        <div className="bg-[#0F162B] rounded-3xl">
          {/* Call to action TBD */}
          <CallToAction />
          {/* VISIT OFFLINE */}
          <VisitUsOffline />
        </div>
      </div>
    </>
  );
}
