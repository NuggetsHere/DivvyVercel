"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
// import React from "react";
// import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
          image={item.image} />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ image }) => (

  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"> 
  <Image src={image} height={600} width={600} className="rounded-xl object-cover" alt="repair service" /> </div> );
   
const items = [
  {
    title: "MacBook Repair",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/macbook-repair.jpg"/>,

  },
  {
    title: "iMac Repair",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/imac-repair.jpg"/>
  },
  {
    title: "Mac Mini Repair",
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/mac-mini-repair.jpg"/>
  },
  {
    title: "iPhone Repair",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/phone-repair.jpg"/>
  },
  {
    title: "Microsoft Surface Repair",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/surface-repair.jpeg"/>
  },
  {
    title: "Gaming PC Repair",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/gaming-pc-repair.jpg"/>
  },
  {
    title: "Device Maintainance/Device Servicing",
    description:
      "Understand the impact of effective communication in our lives.",
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/macbook-repair.jpg"/>
  },
];