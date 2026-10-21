// "use client";

// import Link from "next/link";
// import { useEffect, useRef } from "react";

// const ctoProblems = [
//   {
//     title: "Monolithic Core Banking Infrastructure",
//     description:
//       "Legacy systems lock you into rigid schemas. New channels take months to integrate and reconciliation stays error-prone.",
//   },
//   {
//     title: "Siloed Risk & Compliance Engines",
//     description:
//       "Fraud detection and AML run on disconnected tools. Teams lose time checking transactions across fragmented dashboards.",
//   },
//   {
//     title: "Externalized Payment Rails",
//     description:
//       "Cross-border transfers sit outside the core ledger, causing delayed liquidity updates and complex multi-currency matching.",
//   },
// ];

// const solutions = [
//   {
//     id: "fincore",
//     name: "Fincore Engine",
//     href: "/fincore",
//     body: "API-first core banking engine with real-time multi-currency ledgers, automated reconciliation, and modular channel orchestration.",
//     turn: 210,
//   },
//   {
//     id: "safi",
//     name: "Safi AI Platform",
//     href: "/safi",
//     body: "AI risk engine wired into the core ledger. Real-time fraud detection, automated AML compliance, and multi-lingual support.",
//     turn: 20,
//   },
//   {
//     id: "settle",
//     name: "Settle Africa Rail",
//     href: "/settle",
//     body: "Cross-border rails embedded beside the core. Instant mobile money, cash pickup, and pan-African settlement with built-in compliance.",
//     turn: 200,
//   },
// ] as const;

// const circlePlace = [
//   "z-0 lg:translate-y-2",
//   "z-10 -mt-16 lg:mt-0 lg:-ml-12 lg:-translate-y-5 xl:-ml-16",
//   "z-0 -mt-16 lg:mt-0 lg:-ml-12 lg:translate-y-2 xl:-ml-16",
// ] as const;

// const copyPlace = [
//   "items-start justify-center pt-9 lg:items-center lg:justify-start lg:pt-0 lg:pl-[9%]",
//   "items-start justify-center pt-9 lg:items-center lg:justify-center lg:pt-0",
//   "items-center justify-center px-[20%] py-[16%]",
// ] as const;

// export function ProblemSolutions() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const section = sectionRef.current;
//     if (!section) return;
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

//     const rings = [
//       ...section.querySelectorAll<SVGCircleElement>("[data-arc]"),
//     ].filter((ring) => ring.getTotalLength() > 0);
//     rings.forEach((ring) => {
//       const length = ring.getTotalLength();
//       const gap = length * 0.2;
//       ring.style.strokeDasharray = `${length - gap} ${gap}`;
//       ring.style.strokeDashoffset = `${length}`;
//     });

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (!entry?.isIntersecting) return;
//         rings.forEach((ring, index) => {
//           ring.style.transition = `stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${
//             index * 0.18
//           }s`;
//           ring.style.strokeDashoffset = "0";
//         });
//         observer.disconnect();
//       },
//       { threshold: 0.15 },
//     );
//     observer.observe(section);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="problems"
//       className="relative overflow-hidden bg-white px-4 py-12 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white"
//     >
//       <Contours />
//       <div className="relative mx-auto grid w-full  items-center gap-12 lg:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.45fr)] lg:gap-8">
//         {/* Left Column: CTO Pain Points */}
//         <article className="relative z-10 w-full rounded-3xl border border-black/10 bg-white/80 p-6 backdrop-blur-md sm:p-8 dark:border-white/15 dark:bg-black/80">
//           <div className="flex items-center justify-between gap-4">
//             <div className="space-y-1">
//               <span className="text-xs font-semibold uppercase tracking-wider text-black/50 dark:text-white/50">
//                 Architectural Bottlenecks
//               </span>
//               <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
//                 The Infrastructure Problem
//               </h2>
//             </div>
//             <span
//               aria-hidden="true"
//               className="text-xl text-black/50 dark:text-white/70"
//             >
//               →
//             </span>
//           </div>

//           <ul className="mt-6 space-y-4">
//             {ctoProblems.map((prob) => (
//               <li
//                 key={prob.title}
//                 className="rounded-2xl border border-black/10 bg-black/2 p-4 text-sm leading-6 dark:border-white/10 dark:bg-white/2"
//               >
//                 <h3 className="font-semibold text-black dark:text-white">
//                   {prob.title}
//                 </h3>
//                 <p className="mt-1 text-xs leading-5 text-[#5c5c5c] dark:text-white/70 sm:text-sm">
//                   {prob.description}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </article>

//         {/* Right Column: Unified Solutions Displayed in Responsive Overlapping Circles */}
//         <div className="relative">
//           <div className="mb-10 space-y-1 text-center lg:mb-8 lg:text-left">
//             <span className="text-xs font-semibold uppercase tracking-wider text-black/50 dark:text-white/50">
//               Unified Banking Stack
//             </span>
//             <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
//               The Insolify Advantage
//             </h2>
//           </div>
//           <div className="relative flex flex-col items-center lg:flex-row lg:justify-center">
//             {solutions.map((solution, index) => (
//               <article
//                 key={solution.id}
//                 className={`relative size-64 shrink-0 sm:size-72 xl:size-80 ${circlePlace[index]}`}
//               >
//                 <svg
//                   viewBox="0 0 100 100"
//                   className="absolute inset-0 h-full w-full text-black dark:text-white"
//                   aria-hidden="true"
//                 >
//                   <circle
//                     data-arc=""
//                     cx="50"
//                     cy="50"
//                     r="47"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="0.8"
//                     strokeLinecap="round"
//                     transform={`rotate(${solution.turn} 50 50)`}
//                   />
//                 </svg>
//                 <div className={`relative flex h-full ${copyPlace[index]}`}>
//                   <div
//                     className={`text-center ${index === 1 ? "w-[52%]" : index === 2 ? "w-full" : "w-[60%] lg:w-[54%]"}`}
//                   >
//                     <SolutionCopy solution={solution} />
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function SolutionCopy({ solution }: { solution: (typeof solutions)[number] }) {
//   return (
//     <>
//       <h3
//         className={`font-semibold tracking-tight ${solution.id === "settle" ? "text-xs sm:text-sm" : "text-sm sm:text-base"}`}
//       >
//         <Link
//           href={solution.href}
//           className="underline decoration-black/30 underline-offset-4 hover:decoration-black dark:decoration-white/30 dark:hover:decoration-white"
//         >
//           {solution.name}
//         </Link>
//       </h3>
//       <p
//         className={`mt-2 text-[#5c5c5c] dark:text-white/70 ${solution.id === "settle" ? "text-[10px] leading-4 sm:text-[11px]" : "text-[11px] leading-4 sm:text-xs sm:leading-5"}`}
//       >
//         {solution.body}
//         {solution.id === "settle" ? (
//           <>
//             {" "}
//             Supported by{" "}
//             <Link
//               href="/tverify"
//               className="font-medium underline decoration-black/30 underline-offset-4 dark:decoration-white/30"
//             >
//               TVerify
//             </Link>{" "}
//             for deterministic end-to-end receipt audit trails.
//           </>
//         ) : null}
//       </p>
//     </>
//   );
// }

// function Contours() {
//   return (
//     <svg
//       aria-hidden="true"
//       viewBox="0 0 600 800"
//       className="pointer-events-none absolute top-0 right-0 h-full w-1/2 overflow-hidden text-black dark:text-white"
//       fill="none"
//     >
//       <g stroke="currentColor" strokeOpacity="0.08">
//         <ellipse cx="330" cy="340" rx="250" ry="210" />
//         <ellipse cx="370" cy="460" rx="220" ry="240" />
//         <ellipse cx="290" cy="560" rx="190" ry="180" />
//       </g>
//     </svg>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom Icons
const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const WorkflowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V5" />
    <path d="M8 17v-3" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const SparkleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.2 1.2L3 12l5.8 1.9a2 2 0 0 1 1.2 1.2L12 21l1.9-5.8a2 2 0 0 1 1.2-1.2L21 12l-5.8-1.9a2 2 0 0 1-1.2-1.2L12 3Z" />
  </svg>
);

const features = [
  {
    id: "intelligence",
    title: "Real-time intelligence",
    description: "Get instant insights and forecasts powered by Safi AI so your team can make decisions with clarity.",
    icon: <ClockIcon />,
    aiTitle: "Forecast for next quarter's earnings",
    aiData: { title: "Apple Store", category: "E-commerce, Marketplace", value: "$54,000", label: "Investment Value" },
  },
  {
    id: "workflow",
    title: "Effortless workflow",
    description: "Automate manual data entry and reconciliation with Safi's intelligent document processing and routing.",
    icon: <WorkflowIcon />,
    aiTitle: "Analyze this invoice document",
    aiData: { title: "AWS Cloud Services", category: "Infrastructure, Software", value: "$12,450", label: "Invoice Amount" },
  },
  {
    id: "accuracy",
    title: "Reliable accuracy",
    description: "Eliminate errors with AI-driven anomaly detection, continuous ledger matching, and automated risk scoring.",
    icon: <ShieldIcon />,
    aiTitle: "Check for anomalies in ledger",
    aiData: { title: "Unusual Transfer", category: "High Risk, Outbound", value: "$9,200", label: "Flagged Amount" },
  },
];

export function ProblemSolutions() {
  const [activeTab, setActiveTab] = useState(features[0].id);

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section className="bg-white py-16 sm:py-24 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          
          {/* Left Column: Navigation & Copy */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
              Why teams <br />
              <span className="relative inline-block">
                choose us
                {/* Subtle highlight accent behind text */}
                <span className="absolute bottom-1 left-0 -z-10 h-3 w-full bg-[#000000]/30 dark:bg-black/10 dark:bg-white/10" />
              </span>
            </h2>
            <p className="mt-6 max-w-md text-lg text-neutral-600 dark:text-neutral-400">
              A smarter AI engine and financial workflow built to help teams move with clarity.
            </p>

            <div className="mt-10 flex flex-col space-y-3">
              {features.map((feature) => {
                const isActive = activeTab === feature.id;
                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveTab(feature.id)}
                    className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-200 ${
                      isActive
                        ? "border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 shadow-sm dark:border-black/20 dark:border-white/20 dark:bg-black/10 dark:bg-white/10"
                        : "border-transparent bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800"
                    }`}
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isActive ? "bg-[#000000] text-white" : "bg-white text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400"
                    }`}>
                      {feature.icon}
                    </div>
                    <span className={`text-[15px] font-medium ${
                      isActive ? "text-black dark:text-white" : "text-neutral-700 dark:text-neutral-300"
                    }`}>
                      {feature.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Safi AI Agent Mockup */}
          <div className="relative flex h-full flex-col justify-center">
            <div className="rounded-[2rem] border border-black/5 bg-neutral-50/50 p-6 sm:p-8 dark:border-white/5 dark:bg-[#111111]">
              
              <div className="mb-8">
                <h3 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
                  {activeFeature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {activeFeature.description}
                </p>
              </div>

              {/* Agent UI Container */}
              <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-neutral-100/80 shadow-inner dark:border-white/10 dark:bg-[#1a1a1a]">
                
                {/* Safi Header */}
                <div className="flex items-center gap-3 border-b border-black/5 bg-white px-5 py-4 dark:border-white/5 dark:bg-[#151515]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#000000] text-white">
                    <SparkleIcon />
                  </div>
                  <span className="font-semibold text-black dark:text-white">Safi AI</span>
                </div>

                {/* Chat/Data Area */}
                <div className="p-5 sm:p-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-xl border border-black/5 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-[#222]"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-500">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                              <circle cx="8.5" cy="8.5" r="1.5" />
                              <polyline points="21 15 16 10 5 21" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-black dark:text-white">{activeFeature.aiData.title}</p>
                            <p className="text-xs text-neutral-500">{activeFeature.aiData.category}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-black dark:text-white">{activeFeature.aiData.value}</p>
                          <p className="text-xs text-neutral-500">{activeFeature.aiData.label}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Input Box (Typing Effect Mockup) */}
                  <div className="mt-4 flex items-center justify-between rounded-lg bg-[#1a1a1a] px-4 py-3 shadow-lg dark:bg-black">
                    <span className="text-sm text-white/90">
                      {activeFeature.aiTitle}
                    </span>
                    {/* Blinking cursor */}
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="ml-1 h-4 w-[2px] bg-[#000000]"
                    />
                  </div>
                </div>

                {/* Faint background UI elements at bottom */}
                <div className="pointer-events-none absolute -bottom-6 left-0 right-0 flex justify-center gap-4 px-6 opacity-20 dark:opacity-10">
                  <div className="h-10 w-full rounded-t-lg border border-black/20 bg-white" />
                  <div className="h-10 w-full rounded-t-lg border border-black/20 bg-white" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}