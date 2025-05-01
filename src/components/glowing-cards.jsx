"use client";;
import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingEffectDemoSecond() {
  return (
<ul
  className="relative grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-12 md:grid-rows-3 xl:max-h-[34rem] xl:grid-rows-2">

  <div
    id="leftbox"
    className="z-10 bg-black text-white md:[grid-area:1/1/3/5] p-5 text-xl md:text-2xl flex items-center rounded-3xl border border-0.75">
    With over 3 decades of experience, our skilled technicians can diagnose and fix any issue, from hardware failures to complex motherboard repairs. Whether it’s a MacBook, iMac, iPad, iPhone, gaming PC, desktop, or laptop, we ensure fast, reliable, and high-quality repairs—often within 24 hours.
  </div>

 
  <div className="hidden md:block z-0 [grid-area:1/5/3/13] bg-black rounded-3xl" />


  <div className="z-10 grid grid-cols-1 sm:grid-cols-2 md:[grid-area:1/5/3/13] md:grid-cols-12 gap-4 px-0 md:px-6 pt-6 pb-4">

    <GridItem
      area="col-span-1 sm:col-span-2 md:col-span-12"
      icon={<Lock className="h-4 w-4 text-white dark:text-neutral-400" />}
      title="No Fix, No Fee Guarantee!!"
      description="If we can’t fix it, you don’t pay!" />


    <GridItem
      area="col-span-1 sm:col-span-1 md:col-span-4"
      icon={<Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />}
      title="Fast Turnaround Time"
      description="We fix most issues within 24 hours." />

    <GridItem
      area="col-span-1 sm:col-span-1 md:col-span-4"
      icon={<Search className="h-4 w-4 text-white dark:text-neutral-400" />}
      title="Affordable & Transparent Pricing"
      description="No hidden charges." />

    <GridItem
      area="col-span-1 sm:col-span-1 md:col-span-4"
      icon={<Search className="h-4 w-4 text-white dark:text-neutral-400" />}
      title="Expert Technicians"
      description="10+ years of experience handling MacBooks, gaming PCs, and high-end devices." />
  </div>
</ul>

      
    // <ul
    //   className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
      
    //   <div id="leftbox" className="bg-black text-white [grid-area:1/1/3/5] p-5 text-2xl flex items-center rounded-3xl border border-0.75 z-1 ">
    //   With over 3 decade of experience, our skilled technicians can diagnose and fix any issue, from hardware failures to complex motherboard repairs. Whether it’s a MacBook, iMac, iPad, iPhone, gaming PC, desktop, or laptop, we ensure fast, reliable, and high-quality repairs—often within 24 hours.
    //   </div>
      
    //   <GridItem
    //     area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
    //     icon={<Lock className="h-4 w-4 text-white dark:text-neutral-400" />}
    //     title="You should buy Aceternity UI Pro"
    //     description="It's the best money you'll ever spend" />
    //   <GridItem
    //     area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
    //     icon={<Sparkles className="h-4 w-4 text-white dark:text-neutral-400" />}
    //     title="This card is also built by Cursor"
    //     description="I'm not even kidding. Ask my mom if you don't believe me." />
    //   <GridItem
    //     area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
    //     icon={<Search className="h-4 w-4 text-white dark:text-neutral-400" />}
    //     title="Coming soon on Aceternity UI"
    //     description="I'm writing the code as I record this, no shit." />
        
        
    // </ul>
    
  );
}

const GridItem = ({
  area,
  icon,
  title,
  description
}) => {
  return (
    <li className={`min-h-[14rem] text-white list-none ${area}`}>
      <div
        className="relative h-full rounded-2.5xl border bg-black p-2  md:rounded-3xl md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01} />
        <div
          className="relative text-white flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2 ">
              {icon}
            </div>
            <div className="space-y-3">
              <h3
                className="pt-0.5 text-white text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem] dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
