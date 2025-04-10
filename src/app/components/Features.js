import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCurrencyRupee,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconHours12,
  IconTruck,
  IconBolt,
  IconTool,
  IconThumbUp,
  IconRosetteDiscountCheckOff,
} from "@tabler/icons-react";

export default function Features() {
  const features = [
    {
      title: "Upto 12 Months of Warranty",
      description:
        "We provide warranty for upto 12 months on all our repairs.",
      icon: <IconHours12 />,
    },
    {
      title: "Free Home Pickup and Delivery",
      description:
        "We pick up your device from your home and deliver it back to you.",
      icon: <IconTruck />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the entire market.",
      icon: <IconCurrencyRupee />,
    },
    {
      title: "Same Day Service",
      description: "Get your device repaired within 24 hours.",
      icon: <IconBolt />,
    },
    {
      title: "Free Diagnosis and Estimates",
      description: "Know the issue and the charges before you pay.",
      icon: <IconTool />,
    },
    {
      title: "100% Customer Satisfaction Guarantee",
      description:
        "We are available for our customers whenever and wherever they want.",
      icon: <IconThumbUp />,
    },
    {
      title: "No Solution? No Charge!",
      description:
        "You only pay if we solve the problem.",
      icon: <IconRosetteDiscountCheckOff />,
    },
    {
      title: "More Than Just Repairs",
      description: "We’re Your Tech Lifeline",
      icon: <IconHeart />,
    },
  ];
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-4 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
