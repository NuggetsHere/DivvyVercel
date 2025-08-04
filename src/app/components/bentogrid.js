"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
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
        <Link key={i} href={item.href} className="contents">
          <BentoGridItem
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
            image={item.image}
            alt={item.alt}
          />
        </Link>
      ))}
    </BentoGrid>
  );
}

const Skeleton = ({ image, alt }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image src={image} height={600} width={600} className="rounded-xl object-cover w-full" alt={alt} />
  </div>
);

const items = [
  {
    title: <h2 className="text-xl font-semibold">MacBook Repair</h2>,
    description: "Explore the birth of groundbreaking ideas and inventions.",
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/macbook-repair.jpg" alt="MacBook-Repair" />,
    href: "/services/laptop-repair",
  },
  {
    title: <h2 className="text-xl font-semibold">iMac Repair</h2>,
    description: "Dive into the transformative power of technology.",
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/imac-repair.jpg" alt="iMac-Repair" />,
    href: "/services/imac-repair",
  },
  {
    title: <h2 className="text-xl font-semibold">Mac Mini Repair</h2>,
    description: "Discover the beauty of thoughtful and functional design.",
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/mac-mini-repair.jpg" alt="Mac Mini Repair" />,
    href: "/services/mac-mini-repair",
  },
  {
    title: <h2 className="text-xl font-semibold">iPhone Repair</h2>,
    description: "Understand the impact of effective communication in our lives.",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/phone-repair.jpg" alt="iPhone Repair" />,
    href: "/services/iphone-repair",
  },
  {
    title: <h2 className="text-xl font-semibold">Microsoft Surface Repair</h2>,
    description: "Understand the impact of effective communication in our lives.",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/surface-repair.jpeg" alt="Microsoft Surface Repair" />,
    href: "/services/microsoft-surface-repair",
  },
  {
    title: <h2 className="text-xl font-semibold">Gaming PC Repair</h2>,
    description: "Understand the impact of effective communication in our lives.",
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/gaming-pc-repair.jpg" alt="Gaming PC Repair" />,
    href: "/services/gaming-pc-repair",
  },
  {
    title: <h2 className="text-xl font-semibold">Device Maintenance/Device Servicing</h2>,
    description: "Understand the impact of effective communication in our lives.",
    className: "md:col-span-3 md:row-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    header: <Skeleton image="/services/device-servicing.jpg" alt="Device Maintenance/Device Servicing" />,
    href: "/services/device-servicing",
  },
];
