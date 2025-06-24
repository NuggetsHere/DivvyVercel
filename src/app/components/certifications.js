"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] max-w-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative sm:overflow-hidden overflow-hidden ">
      <h1 className="text-4xl border-b-2">Certifications (Click to view)</h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>
  );
}

const testimonials = [
  {
    name: "MSME-Certificate",
    image: "/certs/msme.png",
    link: "/certs/ISO-9001.pdf" // or an external link
  },
  {
    name: "ISO-9001-Certificate",
    image: "/certs/iso-cert.png",
    link: "/certs/ISO-9001.pdf"
  },
  {
    name: "ISO-20000-Certificate",
    image: "/certs/ISO-20000.png",
    link: "/certs/ISO-20000.pdf"
  }
];
