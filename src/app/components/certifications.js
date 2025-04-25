"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div
      className="h-[40rem] max-w-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative sm:overflow-hidden overflow-hidden ">
      <h1 className="text-4xl border-b-2">Certifications</h1>
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" />
    </div>
  );
}

const testimonials = [
  {
    name:"1",
    image: "/certs/msme.png"
  },
  {
    name:"2",
    image: "certs/iso-cert.png"
  },
  {
    name:"3",
    image: "/certs/msme.png"
  },
  {
    name:"4",
    image: "certs/iso-cert.png"
  },
  
];
