"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";
export default function Testimonials() {
  return (
    <div className="h-full pt-16 lg:pt-0 flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}>
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Elinaa Walia",
    designation: "Lead Designer",
    content: (
      <p>
        Bought a Second-hand dell laptop from here works smooth like brand new staff was<Highlight>polite and explained everything clearly</Highlight>
      </p>
    ),
  },
  {
    id: 1,
    name: "Ojasw Kant",
    designation: "Senior Shitposter",
    content: (
      <p>
        My laptop was not charging at all they checked it for free 
        and told me the issue and also gave options no pressure to 
        get it fixed best part was<Highlight>no fix no fee</Highlight> policy
      </p>
    ),
  },
  {
    id: 2,
    name: "Aryan Sharma",
    designation: "Full Stack Developer",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
