

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

const customers = [
  { name: "MicroBiz Bank LTD", src: "/image/brands/microbiz.png" },
  { name: "Peace Microfinance Bank", src: "/image/brands/peace.jpg" },
  { name: "FidFund MicroFinance Bank", src: "/image/brands/fidfundslogo.png" },
  { name: "Wapia", src: "/image/brands/wapfi.png" },
  { name: "Abucoop", src: "/image/brands/Abucoop.png" },
  { name: "Pillar", src: "/image/brands/pillar.png" },
] as const;

// Duplicate for seamless marquee loop
const marqueeCustomers = [...customers, ...customers];

export function Hero() {
  const dashboardRef = useRef(null);

  // Scroll animation for the dashboard
  const { scrollYProgress } = useScroll({
    target: dashboardRef,
    offset: ["start end", "center center"], 
  });

  // Transforms: From tilted (flat) to straight (0deg) as you scroll
  const rotateX = useTransform(scrollYProgress, [0, 1], [35, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.6, 1]);

  // Initial load animations
  const textRevealVariant: Variants = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  return (
      <div className={`min-h-screen bg-white text-black dark:bg-black dark:text-white  overflow-hidden transition-colors duration-300`}>
      
      <section className="relative pt-20 pb-10 ">
        <div className="mx-auto max-w-5xl px-6 text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-1.5 text-[13px] font-medium text-neutral-600 shadow-sm transition-colors hover:border-black/20 dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-white/20">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
              <span>Introducing Insolify Next-Gen Core Banking</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={textRevealVariant}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-3xl text-balance text-4xl font-semibold tracking-tight text-[#0b0c2b] sm:text-5xl  lg:leading-[1.1] dark:text-white"
          >
            Manage Your Financial Operations with Clarity and Control
          </motion.h1>

          <motion.p 
            variants={textRevealVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2, duration: 1 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-base text-neutral-500 sm:text-lg dark:text-neutral-400"
          >
            Deliver scalable, intelligent technology that simplifies financial operations, modernizes legacy systems, and empowers your team.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Link
              href="#"
              className="w-full rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-80 sm:w-auto dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Book a Demo
            </Link>
            <Link
              href="#"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-black/10 bg-white px-7 py-3.5 text-sm font-medium text-black transition-colors hover:border-black/30 sm:w-auto dark:border-white/20 dark:bg-transparent dark:text-white dark:hover:border-white/40"
            >
              Contact Sales
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </motion.div>

        </div>
        <div 
  ref={dashboardRef}
  className="relative mx-auto -mt-2 max-w-4xl px-4 sm:px-6"
  style={{ perspective: "1200px" }}
>
  
  {/* Scaled down striped background */}
  <div className="absolute inset-x-0 top-8 bottom-0 -z-10 mx-auto w-full max-w-3xl overflow-hidden rounded-[3rem]">
    <div className="absolute inset-0 bg-[#EFB338]/15 dark:bg-[#EFB338]/5" />
    <div 
      className="absolute inset-0 opacity-40 dark:opacity-20"
      style={{
        backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 24px, #EFB338 24px, #EFB338 48px)",
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white dark:from-black dark:via-transparent dark:to-black" />
  </div>

  <motion.div 
    style={{ 
      rotateX, 
      scale, 
      opacity,
      transformStyle: "preserve-3d" 
    }}
    className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-neutral-950"
  >
    
    <div className="flex items-center justify-between border-b border-black/5 px-6 py-4 dark:border-white/5">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 rounded-full bg-black dark:bg-white" />
        <span className="text-sm font-semibold">Insolify</span>
      </div>
      <div className="hidden items-center gap-6 md:flex">
        <span className="rounded-full bg-black px-4 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-black">Overview</span>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Contacts</span>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Sales</span>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Tasks</span>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">Report</span>
      </div>
      <div className="flex items-center gap-3">
        <div className="h-6 w-6 rounded-full border border-neutral-200 dark:border-neutral-700" />
        <div className="h-6 w-6 rounded-full border border-neutral-200 dark:border-neutral-700" />
        <div className="h-6 w-6 rounded-full border border-neutral-200 dark:border-neutral-700" />
      </div>
    </div>

    <div className="p-6 md:p-8">
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Good Morning, Insolify!</h2>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Let&apos;s see your current financial work today.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-1.5 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            1–8 September 2024
          </div>
          <div className="flex items-center gap-2 rounded-md border border-neutral-200 px-3 py-1.5 text-xs text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
            Export Data
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid gap-4 md:grid-cols-2">
        
        <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-neutral-900">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Upcoming Schedule</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">Today</span>
          </div>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-3xl font-semibold">64%</span>
            <div className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-md dark:bg-green-500/10 dark:text-green-400">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
              12%
            </div>
          </div>
          
          <div className="mb-2 flex h-2 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
            <div className="h-full bg-[#EFB338]" style={{ width: '25%' }}></div>
            <div className="h-full bg-blue-500" style={{ width: '35%' }}></div>
          </div>
          <div className="mb-6 flex justify-between text-[10px] text-neutral-400 dark:text-neutral-500">
            <span>1h 30m</span>
            <span>45m</span>
            <span>1h 15m</span>
          </div>

          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-neutral-100 p-2.5 dark:border-neutral-800">
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-md bg-neutral-100 dark:bg-neutral-800" />
                  <div>
                    <div className="h-2 w-24 rounded bg-neutral-200 dark:bg-neutral-700" />
                    <div className="mt-1.5 h-1.5 w-16 rounded bg-neutral-100 dark:bg-neutral-800" />
                  </div>
                </div>
                <div className="h-2 w-2 rounded-full bg-[#EFB338]" />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-neutral-900">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Activity Time</span>
            <span className="text-xs text-neutral-400 dark:text-neutral-500">Last 7 days</span>
          </div>
          
          <div className="mb-6 flex h-40 items-end justify-between gap-2">
            <div className="flex w-full flex-col items-center gap-2">
              <div className="w-full rounded-t bg-blue-100 dark:bg-blue-900/30" style={{ height: '60px' }}></div>
              <div className="w-full rounded-t bg-blue-500" style={{ height: '40px' }}></div>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500">Mon</span>
            </div>
            <div className="flex w-full flex-col items-center gap-2">
              <div className="w-full rounded-t bg-blue-100 dark:bg-blue-900/30" style={{ height: '80px' }}></div>
              <div className="w-full rounded-t bg-blue-500" style={{ height: '50px' }}></div>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500">Tue</span>
            </div>
            <div className="flex w-full flex-col items-center gap-2">
              <div className="w-full rounded-t bg-blue-100 dark:bg-blue-900/30" style={{ height: '100px' }}></div>
              <div className="w-full rounded-t bg-blue-500" style={{ height: '70px' }}></div>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500">Wed</span>
            </div>
            <div className="flex w-full flex-col items-center gap-2">
              <div className="w-full rounded-t bg-[#EFB338]" style={{ height: '120px' }}></div>
              <div className="w-full rounded-t bg-black dark:bg-white" style={{ height: '80px' }}></div>
              <span className="text-[10px] font-medium text-black dark:text-white">Thu</span>
            </div>
            <div className="flex w-full flex-col items-center gap-2">
              <div className="w-full rounded-t bg-blue-100 dark:bg-blue-900/30" style={{ height: '90px' }}></div>
              <div className="w-full rounded-t bg-blue-500" style={{ height: '60px' }}></div>
              <span className="text-[10px] text-neutral-400 dark:text-neutral-500">Fri</span>
            </div>
          </div>

          <div className="flex justify-between border-t border-neutral-100 pt-4 dark:border-neutral-800">
            <div>
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 dark:text-neutral-400">
                <div className="h-2 w-2 rounded-full bg-blue-500" /> Total
              </div>
              <div className="mt-1 text-sm font-semibold">16.21</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 dark:text-neutral-400">
                <div className="h-2 w-2 rounded-full bg-blue-500" /> Meeting
              </div>
              <div className="mt-1 text-sm font-semibold">12.8</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 dark:text-neutral-400">
                <div className="h-2 w-2 rounded-full bg-blue-500" /> Focus
              </div>
              <div className="mt-1 text-sm font-semibold">9.30</div>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] text-neutral-500 dark:text-neutral-400">
                <div className="h-2 w-2 rounded-full bg-[#EFB338]" /> Break
              </div>
              <div className="mt-1 text-sm font-semibold">9.30</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </motion.div>

  {/* Floating "Use for Free" Badge */}
  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-[60%] lg:block">
     <div className="flex items-center gap-2 rounded-l-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-neutral-600 shadow-sm dark:border-white/10 dark:bg-neutral-900 dark:text-neutral-300">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        Use for Free
     </div>
  </div>

</div>
      </section>

      
      <section className=" bg-white py-4 overflow-hidden dark:border-white/5 dark:bg-black">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-10 text-sm font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Join the banks and microfinance banks across Africa that run better with Insolify
          </p>
          
          <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] dark:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              
              {marqueeCustomers.map((customer, index) => (
                <div 
                  key={`${customer.name}-${index}`} 
                  className="mx-8 sm:mx-12 flex h-14 shrink-0 items-center justify-center transition-opacity hover:opacity-100 opacity-60 dark:opacity-50 dark:hover:opacity-100 dark:invert dark:mix-blend-screen"
                >
                  <Image
                    src={customer.src}
                    alt={customer.name}
                    width={160}
                    height={48}
                    className="h-8 w-auto max-w-32 object-contain sm:h-10 sm:max-w-40"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* Add this style block to your globals.css or keep it here for the marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        /* Pause animation on hover */
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}