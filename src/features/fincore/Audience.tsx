"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    id: "banks",
    title: "Banks",
    subtitle: "Financial institutions",
    svg: (
      <svg viewBox="0 0 120 120" fill="none" className="h-full w-full max-w-[200px] text-black dark:text-white">
        {/* Classic Bank Architecture Sketch */}
        <path d="M 15 45 L 60 15 L 105 45 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M 10 45 L 110 45" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Columns */}
        <rect x="25" y="45" width="12" height="45" stroke="currentColor" strokeWidth="2" />
        <rect x="54" y="45" width="12" height="45" stroke="currentColor" strokeWidth="2" />
        <rect x="83" y="45" width="12" height="45" stroke="currentColor" strokeWidth="2" />
        
        {/* Steps */}
        <path d="M 15 90 L 105 90" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M 5 98 L 115 98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        
        {/* Sketch Details (Dashed lines) */}
        <path d="M 60 15 L 60 45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
        <path d="M 31 45 L 31 90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
        <path d="M 60 45 L 60 90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
        <path d="M 89 45 L 89 90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: "microfinance",
    title: "Microfinance Banks",
    subtitle: "Community lenders",
    svg: (
      <svg
        viewBox="0 0 120 120"
        fill="none"
        className="h-full w-full max-w-[200px] text-black dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bank Roof */}
        <path
          d="M18 39 L60 17 L102 39 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
  
        {/* Roof Base */}
        <path
          d="M15 42 H105"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
  
        {/* Bank Columns */}
        <path
          d="M27 45 V79 M43 45 V79 M77 45 V79 M93 45 V79"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
  
        {/* Building Foundation */}
        <path
          d="M20 82 H100 M16 88 H104"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
  
        {/* Central Door */}
        <rect
          x="49"
          y="58"
          width="22"
          height="24"
          rx="1"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="65" cy="70" r="1" fill="currentColor" />
  
        {/* Community / Customers */}
        <circle
          cx="29"
          cy="99"
          r="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M21 112 V109 C21 105 24 103 29 103 C34 103 37 105 37 109 V112"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
  
        <circle
          cx="60"
          cy="98"
          r="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M52 112 V108 C52 104 55 102 60 102 C65 102 68 104 68 108 V112"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
  
        <circle
          cx="91"
          cy="99"
          r="4"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M83 112 V109 C83 105 86 103 91 103 C96 103 99 105 99 109 V112"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
  
        {/* Financial Growth Symbol */}
        <path
          d="M86 18 L94 10 M88 10 H94 V16"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "developers",
    title: "Developers",
    subtitle: "Builders & engineers",
    svg: (
      <svg viewBox="0 0 120 120" fill="none" className="h-full w-full max-w-[200px] text-black dark:text-white">
        {/* Terminal / Laptop Sketch */}
        <rect x="20" y="25" width="80" height="55" rx="3" stroke="currentColor" strokeWidth="2" />
        
        {/* Screen Base */}
        <path d="M 15 80 L 105 80 L 100 90 L 20 90 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        
        {/* Code Brackets */}
        <path d="M 45 45 L 35 52 L 45 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 75 45 L 85 52 L 75 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M 65 38 L 55 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Sketch details (Internal code lines) */}
        <path d="M 30 35 L 50 35" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
        <path d="M 70 70 L 90 70" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" strokeOpacity="0.5" />
      </svg>
    ),
  },
];

export function Audience() {
  return (
    <section className="bg-white py-16 sm:py-24 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-5xl px-6">
        
        {/* Header */}
        <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-white">
          Built for the teams shaping the future of finance
        </h2>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          
          {audiences.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group flex h-[420px] w-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-all hover:border-black/20 hover:shadow-xl dark:border-white/10 dark:bg-[#111111] dark:hover:border-white/20"
            >
              
              {/* Sketch Area (Top) */}
              <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-neutral-50/50 p-8 dark:bg-[#161616]">
                {/* Subtle background grid pattern */}
                <div 
                  className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
                  style={{ 
                    backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)", 
                    backgroundSize: "16px 16px" 
                  }} 
                />
                
                {/* The Sketch SVG */}
                <div className="relative z-10 flex h-full w-full items-center justify-center transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                  {item.svg}
                </div>
              </div>

              {/* Animated Text Area (Bottom) */}
              <div className="flex flex-col items-center justify-center border-t border-black/5 p-8 text-center dark:border-white/5">
                
                <motion.h3 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
                  className="text-xl font-semibold tracking-tight text-black dark:text-white"
                >
                  {item.title}
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="mt-1 text-sm text-neutral-500 dark:text-neutral-400"
                >
                  {item.subtitle}
                </motion.p>
                
                {/* Animated Accent Line (Black & White) */}
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "32px" }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                  className="mt-4 h-1 rounded-full bg-black dark:bg-white"
                />
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}