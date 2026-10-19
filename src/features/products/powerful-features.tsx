
// "use client";

// import Link from "next/link";
// import { useState } from "react";

// const features = [
//   {
//     id: "speed",
//     kicker: "Speed",
//     title: "Sub-15ms Core Execution",
//     metric: "< 15ms",
//     excerpt:
//       "High-throughput atomic ledger posting and instant multi-channel event routing powered by Fincore.",
//     href: "/fincore",
//   },
//   {
//     id: "intelligence",
//     kicker: "Intelligence",
//     title: "Autonomous AI Operations",
//     metric: "99.8% Acc",
//     excerpt:
//       "Real-time fraud screening, automated AML monitoring, and multi-lingual customer assistant via SAFI AI.",
//     href: "/safi",
//   },
//   {
//     id: "security",
//     kicker: "Security",
//     title: "Institutional Compliance",
//     metric: "SOC 2 Type II",
//     excerpt:
//       "Bank-grade ledger immutability, automated CBN/NDIC regulatory exports, and FIDO2 authentication.",
//     href: "/fincore",
//   },
//   {
//     id: "integration",
//     kicker: "Integration",
//     title: "Pan-African Payout Rails",
//     metric: "24+ Countries",
//     excerpt:
//       "Unified cross-border transfers, mobile money clearing, and TVerify audit receipts via Settle Africa.",
//     href: "/settle",
//   },
// ] as const;

// export function PowerfulFeatures() {
//   const [active, setActive] = useState<string>(features[0].id);

//   return (
//     <section
//       aria-label="Platform Features"
//       className="bg-white px-4 py-3 text-black sm:px-6 sm:py-5 lg:px-8 dark:bg-black dark:text-white"
//     >
//       <div className="mx-auto w-full ">
//         <div className="flex flex-col gap-2 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between dark:border-white/10">
//           <div>
//             <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">
//               Platform Features
//             </p>
//             <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
//               Engineered for Enterprise FinTech
//             </h2>
//           </div>
//           <p className="max-w-xs text-xs text-[#5c5c5c] dark:text-[#b5b5b5]">
//             Speed, intelligence, security, and pan-African payment integration built into one core infrastructure.
//           </p>
//         </div>

//         {/* Accordion Grid */}
//         <div className="mt-8 grid w-full gap-4 md:grid-cols-2 xl:grid-cols-4">
//           {features.map((feature) => {
//             const open = feature.id === active;
//             return (
//               <article
//                 key={feature.id}
//                 className="group relative flex flex-col"
//                 onMouseEnter={() => setActive(feature.id)}
//                 onFocus={() => setActive(feature.id)}
//                 tabIndex={0}
//               >
//                 <div
//                   className={`flex flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
//                     open
//                       ? "border-black bg-black text-white shadow-md dark:border-white dark:bg-white dark:text-black"
//                       : "border-black/10 bg-black/2 text-black hover:border-black/30 dark:border-white/15 dark:bg-white/3 dark:text-white dark:hover:border-white/30"
//                   }`}
//                 >
//                   {/* Top Bar */}
//                   <div className="flex items-center justify-between">
//                     <span
//                       className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${
//                         open
//                           ? "text-white/60 dark:text-black/60"
//                           : "text-[#6d6d6d] dark:text-white/50"
//                       }`}
//                     >
//                       {feature.kicker}
//                     </span>
//                     <span
//                       className={`rounded-md px-2 py-0.5 text-[10px] font-mono font-bold ${
//                         open
//                           ? "bg-white/15 text-white dark:bg-black/10 dark:text-black"
//                           : "bg-black/5 text-black dark:bg-white/10 dark:text-white"
//                       }`}
//                     >
//                       {feature.metric}
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h3 className="mt-4 text-base font-bold tracking-tight sm:text-lg">
//                     {feature.title}
//                   </h3>

//                   {/* Expandable Excerpt & Link */}
//                   <div
//                     className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
//                       open
//                         ? "mt-3 grid-rows-[1fr] opacity-100"
//                         : "mt-0 grid-rows-[0fr] opacity-0"
//                     }`}
//                   >
//                     <div className="overflow-hidden">
//                       <p
//                         className={`text-xs leading-5 ${
//                           open
//                             ? "text-white/80 dark:text-black/80"
//                             : "text-[#5c5c5c] dark:text-white/70"
//                         }`}
//                       >
//                         {feature.excerpt}
//                       </p>

//                       <Link
//                         href={feature.href}
//                         className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold underline underline-offset-4 ${
//                           open
//                             ? "decoration-white/40 hover:decoration-white dark:decoration-black/40 dark:hover:decoration-black"
//                             : "decoration-black/30 hover:decoration-black dark:decoration-white/30 dark:hover:decoration-white"
//                         }`}
//                       >
//                         <span>Learn more</span>
//                         <span aria-hidden="true">→</span>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

const features = [
  {
    id: "speed",
    kicker: "Speed",
    title: "Sub-15ms Core Execution",
    metric: "< 15ms",
    excerpt:
      "High-throughput atomic ledger posting and instant multi-channel event routing powered by Fincore.",
    href: "/fincore",
  },
  {
    id: "intelligence",
    kicker: "Intelligence",
    title: "Autonomous AI Operations",
    metric: "99.8% Acc",
    excerpt:
      "Real-time fraud screening, automated AML monitoring, and multi-lingual customer assistant via SAFI AI.",
    href: "/safi",
  },
  {
    id: "security",
    kicker: "Security",
    title: "Institutional Compliance",
    metric: "SOC 2 Type II",
    excerpt:
      "Bank-grade ledger immutability, automated CBN/NDIC regulatory exports, and FIDO2 authentication.",
    href: "/fincore",
  },
  {
    id: "integration",
    kicker: "Integration",
    title: "Pan-African Payout Rails",
    metric: "24+ Countries",
    excerpt:
      "Unified cross-border transfers, mobile money clearing, and TVerify audit receipts via Settle Africa.",
    href: "/settle",
  },
] as const;

type Feature = (typeof features)[number];

export function PowerfulFeatures() {
  const [deck, setDeck] = useState<Feature[]>(() => [...features]);
  const [active, setActive] = useState<string>(features[0].id);
  const [isCycling, setIsCycling] = useState(false);

  // Start the transition first; reorder only after it has finished.
  const cycleCard = () => {
    if (isCycling) return;
    setIsCycling(true);
  };

  const completeCycle = () => {
    setDeck((prev) => {
      const [top, ...rest] = prev;
      if (!top) return prev;
      return [...rest, top];
    });
    setIsCycling(false);
  };

  return (
    <section
      aria-label="Platform Features"
      className="bg-white px-4 py-6 text-black sm:px-6 sm:py-8 lg:px-8 dark:bg-black dark:text-white"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-2 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between dark:border-white/10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">
              Platform Features
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
              Engineered for Enterprise FinTech
            </h2>
          </div>
          <p className="max-w-xs text-xs text-[#5c5c5c] dark:text-[#b5b5b5]">
            Speed, intelligence, security, and pan-African payment integration built into one core infrastructure.
          </p>
        </div>

        {/* ========================================== */}
        {/* MOBILE: Interactive Stacked Photo Deck     */}
        {/* ========================================== */}
        <div className="mt-8 block md:hidden">
          <div className="relative mx-auto h-65 w-full max-w-sm px-2">
            <AnimatePresence initial={false}>
              {deck.map((feature, index) => {
                const isTop = index === 0;

                return (
                  <SwipeableCard
                    key={feature.id}
                    feature={feature}
                    index={index}
                    total={deck.length}
                    isTop={isTop}
                    isCycling={isCycling}
                    onSwipe={cycleCard}
                    onCycleComplete={completeCycle}
                  />
                );
              })}
            </AnimatePresence>
          </div>

          {/* Swipe Indicator Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {features.map((f, i) => (
              <button
                key={f.id}
                disabled={isCycling}
                onClick={() => {
                  const targetIdx = deck.findIndex((item) => item.id === f.id);
                  if (targetIdx > 0) {
                    setDeck((prev) => [...prev.slice(targetIdx), ...prev.slice(0, targetIdx)]);
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  deck[0].id === f.id
                    ? "w-6 bg-black dark:bg-white"
                    : "w-1.5 bg-black/20 dark:bg-white/20"
                }`}
                aria-label={`Go to feature ${i + 1}`}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-[10px] text-black/40 dark:text-white/40">
            Swipe or tap top card to reveal next feature
          </p>
        </div>

        {/* ========================================== */}
        {/* DESKTOP: Grid Accordion                    */}
        {/* ========================================== */}
        <div className="mt-8 hidden w-full gap-4 md:grid md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const open = feature.id === active;
            return (
              <article
                key={feature.id}
                className="group relative flex flex-col"
                onMouseEnter={() => setActive(feature.id)}
                onFocus={() => setActive(feature.id)}
                tabIndex={0}
              >
                <div
                  className={`flex flex-col overflow-hidden rounded-2xl border p-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    open
                      ? "border-black bg-black text-white shadow-md dark:border-white dark:bg-white dark:text-black"
                      : "border-black/10 bg-black/2 text-black hover:border-black/30 dark:border-white/15 dark:bg-white/3 dark:text-white dark:hover:border-white/30"
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${
                        open
                          ? "text-white/60 dark:text-black/60"
                          : "text-[#6d6d6d] dark:text-white/50"
                      }`}
                    >
                      {feature.kicker}
                    </span>
                    <span
                      className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-bold ${
                        open
                          ? "bg-white/15 text-white dark:bg-black/10 dark:text-black"
                          : "bg-black/5 text-black dark:bg-white/10 dark:text-white"
                      }`}
                    >
                      {feature.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-base font-bold tracking-tight sm:text-lg">
                    {feature.title}
                  </h3>

                  {/* Excerpt & Link */}
                  <div
                    className={`grid transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      open
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`text-xs leading-5 ${
                          open
                            ? "text-white/80 dark:text-black/80"
                            : "text-[#5c5c5c] dark:text-white/70"
                        }`}
                      >
                        {feature.excerpt}
                      </p>

                      <Link
                        href={feature.href}
                        className={`mt-4 inline-flex items-center gap-1 text-xs font-semibold underline underline-offset-4 ${
                          open
                            ? "decoration-white/40 hover:decoration-white dark:decoration-black/40 dark:hover:decoration-black"
                            : "decoration-black/30 hover:decoration-black dark:decoration-white/30 dark:hover:decoration-white"
                        }`}
                      >
                        <span>Learn more</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Sub-component for individual gesture-enabled stacked card
function SwipeableCard({
  feature,
  index,
  total,
  isTop,
  isCycling,
  onSwipe,
  onCycleComplete,
}: {
  feature: Feature;
  index: number;
  total: number;
  isTop: boolean;
  isCycling: boolean;
  onSwipe: () => void;
  onCycleComplete: () => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);

  // During a cycle, the top card travels to the final slot while every
  // card beneath it moves one position toward the viewer.
  const visualIndex = isCycling
    ? isTop
      ? total - 1
      : index - 1
    : index;
  const translateY = visualIndex * 10;
  const scale = 1 - visualIndex * 0.04;
  const opacity = 1 - visualIndex * 0.15;
  const zIndex = isCycling && isTop ? 0 : total - visualIndex;

  return (
    <motion.div
      style={{ zIndex }}
      initial={{ scale: 0.9, y: 30, opacity: 0 }}
      animate={{
        x: isCycling && isTop ? 42 : 0,
        scale,
        y: translateY,
        opacity,
        rotate: isCycling && isTop ? 4 : 0,
      }}
      transition={{ type: "spring", stiffness: 180, damping: 22 }}
      onAnimationComplete={() => {
        if (isTop && isCycling) onCycleComplete();
      }}
      className="absolute inset-x-0 top-0"
    >
      <motion.div
        style={{ x: isTop ? x : 0, rotate: isTop ? rotate : 0 }}
        drag={isTop && !isCycling ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.6}
        onDragEnd={(_, info) => {
          if (Math.abs(info.offset.x) > 80) onSwipe();
        }}
        onClick={() => isTop && !isCycling && onSwipe()}
        className={`cursor-grab rounded-2xl border p-5 shadow-xl transition-colors duration-200 active:cursor-grabbing ${
          isTop
            ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
            : "border-black/10 bg-[#f4f4f6] text-black dark:border-white/10 dark:bg-[#1a1a1e] dark:text-white"
        }`}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between">
        <span
          className={`text-[10px] font-semibold tracking-[0.18em] uppercase ${
            isTop ? "text-white/60 dark:text-black/60" : "text-[#6d6d6d] dark:text-white/50"
          }`}
        >
          {feature.kicker}
        </span>
        <span
          className={`rounded-md px-2 py-0.5 font-mono text-[10px] font-bold ${
            isTop
              ? "bg-white/15 text-white dark:bg-black/10 dark:text-black"
              : "bg-black/5 text-black dark:bg-white/10 dark:text-white"
          }`}
        >
          {feature.metric}
        </span>
        </div>

        {/* Content */}
        <h3 className="mt-3 text-base font-bold tracking-tight">{feature.title}</h3>
        <p
          className={`mt-2 text-xs leading-5 ${
            isTop ? "text-white/80 dark:text-black/80" : "text-[#5c5c5c] dark:text-white/70"
          }`}
        >
          {feature.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <Link
            href={feature.href}
            onClick={(e) => e.stopPropagation()}
            className={`inline-flex items-center gap-1 text-xs font-semibold underline underline-offset-4 ${
              isTop
                ? "decoration-white/40 hover:decoration-white dark:decoration-black/40 dark:hover:decoration-black"
                : "decoration-black/30 hover:decoration-black dark:decoration-white/30 dark:hover:decoration-white"
            }`}
          >
            <span>Learn more</span>
            <span aria-hidden="true">→</span>
          </Link>
          <span className="font-mono text-[10px] opacity-40">
            {index + 1}/{total}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}