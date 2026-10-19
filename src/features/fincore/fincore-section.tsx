"use client";

import Link from "next/link";
import { motion, type Variants } from 'framer-motion';
import { ShieldCheck, Target, Zap, Building2, Server, Key, CreditCard, MapPin } from 'lucide-react';
import React from "react";
// A generic hexagon container to match the target image style
const HexNode = ({ icon: Icon, label, status = null, isLarge = false }: {
  icon: React.ElementType;
  label: string;
  status?: 'NEW' | 'LIVE' | null;
  isLarge?: boolean;
}) => (
  <div className={`relative flex flex-col items-center justify-center text-center ${isLarge ? 'w-24 h-28' : 'w-16 h-20'}`}>
    {/* Hexagon Shape via clip-path */}
    <div className="absolute inset-0 border border-black/15 bg-white transition-colors group-hover:border-black/45 dark:border-white/15 dark:bg-black dark:group-hover:border-white/45" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }} />
    
    {/* Content */}
    <div className="relative z-10 flex flex-col items-center p-2">
      <div className={`flex items-center justify-center rounded-lg border border-black/15 bg-black/5 text-black dark:border-white/15 dark:bg-white/10 dark:text-white ${isLarge ? 'p-3 mb-2' : 'p-2 mb-1'}`}>
        <Icon className={isLarge ? "w-6 h-6" : "w-4 h-4"} />
      </div>
      <p className={`font-medium tracking-tight text-black dark:text-white ${isLarge ? 'text-xs' : 'text-[9px]'} leading-tight`}>{label}</p>
      {status && (
        <span className="absolute -top-2 -right-2 rounded bg-black px-1.5 py-0.5 text-[8px] font-bold text-white uppercase dark:bg-white dark:text-black">
          {status}
        </span>
      )}
    </div>
  </div>
);

// The main service groups matching the diagram
const CoreAccounts = () => (
  <div className="relative flex flex-col items-center group">
    <div className="flex gap-3 mb-4">
      <HexNode icon={Server} label="Accounts" status="LIVE" />
      <HexNode icon={Server} label="Ledger" status="NEW" />
    </div>
    <HexNode icon={Building2} label="Fincore Engine" isLarge />
  </div>
);

// The animated visual centerpiece
const FincoreDiagramHub = () => {
  const groups = [
    { title: "Digital", nodes: [{ icon: Building2, label: "Digital Banking" }, { icon: Key, label: "Fintech API" }, { icon: MapPin, label: "Agency Banking" }] },
    { title: "Agency", nodes: [{ icon: CreditCard, label: "Card Issuing" }, { icon: Target, label: "POS Management" }, { icon: Target, label: "USSD Banking" }] },
    { title: "Payments", nodes: [{ icon: Zap, label: "Agency Banking" }, { icon: ShieldCheck, label: "Payments Risk" }, { icon: Target, label: "Payments Risk" }] }
  ];

  return (
    <div className="relative grid min-h-112 grid-cols-[7rem_minmax(0,1fr)] items-center gap-8 py-5 sm:grid-cols-[8rem_minmax(0,1fr)]">
      
      {/* 1. Left: Core Accounts */}
      <div className="relative z-10">
        <CoreAccounts />
      </div>

      {/* 2. Middle: Infinite Electrical Lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <AnimatedElectricalLines />
      </div>

      {/* 3. Right: Service Groups */}
      <div className="relative z-10 flex flex-col gap-6 pl-4 sm:pl-8">
        {groups.map((group, idx) => (
          <div key={idx} className="rounded-xl border border-black/15 bg-white/90 p-4 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-black/90">
            <h4 className="mb-3 pl-1 text-[11px] font-bold tracking-widest text-black/50 uppercase dark:text-white/50">{group.title}</h4>
            <div className="flex flex-wrap gap-3">
              {group.nodes.map((node, nIdx) => (
                <HexNode key={nIdx} icon={node.icon} label={node.label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


const defaultStats = [
  { label: 'Ledger Latency', value: '<15ms' },
  { label: 'SLA Uptime', value: '99.9%' },
  { label: 'Core Modules', value: '12' },
  // { label: 'Certified', value: 'ISO 27001' },
];

export function FincoreSection({ stats = defaultStats }) {
  return (
    <section id="fincore" className="px-4 pb-12 antialiased selection:bg-black selection:text-white sm:px-6 lg:px-10 dark:selection:bg-white dark:selection:text-black">
      <div className="rounded-3xl border border-black/10 bg-white p-8 text-black shadow-2xl backdrop-blur-sm sm:rounded-[2.5rem] sm:p-12 lg:p-16 dark:border-white/10 dark:bg-black dark:text-white">
        
        <div className="mb-12 flex items-center justify-between border-b border-black/10 pb-8 dark:border-white/10">
          <h2 className="text-xl font-bold tracking-tight">Overview</h2>
          <Link
            href="mailto:sales@insolify.com?subject=Fincore%20demo"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-black px-5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
          >
            Request Demo
          </Link>
        </div>

        {/* Content Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          
          {/* Left Column: Text & Stats */}
          <div className="space-y-8">
            <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tighter sm:text-5xl lg:text-6xl">
              Fincore. Modular.<br /> Scalable. Interoperable.
            </h1>
            
            <p className="max-w-xl text-base leading-relaxed text-black/60 dark:text-white/60">
              A modern core engine with 12 micro-services, designed to decouple primitives 
              and accelerate financial innovation. Plug-and-play across accounts, payments, and risk.
            </p>
            
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <Link
                href="mailto:sales@insolify.com?subject=Fincore%20demo"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-black px-6 text-sm font-bold text-white shadow-xl transition-all hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
              >
                Request a demo
                <Zap className="w-4 h-4" />
              </Link>
             
            </div>
            
            {/* Stats: New layout matching the 'Value Strip' from image */}
            <div className="border-t border-black/10 pt-10 dark:border-white/10">
              <h4 className="mb-6 pl-1 text-xs font-bold tracking-widest text-black/50 uppercase dark:text-white/50">Performance & Compliance</h4>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-xs font-medium text-black/55 dark:text-white/55">{stat.label}</dt>
                    <dd className="mt-1.5 font-mono text-3xl font-extrabold tracking-tight">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>


          <div className="relative h-full w-full overflow-hidden rounded-3xl border border-black/10 bg-black/2.5 p-4 dark:border-white/10 dark:bg-white/[0.035]">
            
            <div className="pointer-events-none absolute inset-0 rounded-full bg-black/5 blur-[120px] dark:bg-white/5" />
            
            <FincoreDiagramHub />
          </div>

        </div>
      </div>
    </section>
  );
}



const AnimatedElectricalLines = () => {
  const destinations = [16.5, 50, 83.5];

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: [0, 0.85, 0.85, 0],
      transition: {
        pathLength: {
          duration: 1.8,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 0.8,
        },
        opacity: {
          duration: 2.6,
          times: [0, 0.12, 0.78, 1],
          repeat: Infinity,
          repeatDelay: 0.8,
        },
      },
    },
  };

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden
      className="h-full w-full text-black dark:text-white"
    >
      <defs>
        <filter id="fincore-line-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.2" result="lineBlur" />
          <feMerge>
            <feMergeNode in="lineBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {destinations.map((destination, index) => {
        const path = `M 18 50 C 31 50, 32 ${destination}, 48 ${destination}`;

        return (
          <React.Fragment key={destination}>
            <path
              d={path}
              stroke="currentColor"
              strokeWidth="0.45"
              strokeOpacity="0.18"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d={path}
              stroke="currentColor"
              strokeWidth="1.35"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              filter="url(#fincore-line-glow)"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.22 }}
            />
          </React.Fragment>
        );
      })}
    </svg>
  );
};