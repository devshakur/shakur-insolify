
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const systems = [
  {
    id: "fincore",
    name: "Fincore Engine",
    badge: "Core Infrastructure",
    href: "/fincore",
    description:
      "A modular core banking platform with 12 integrated engines running ledgers, deposits, and multi-channel delivery.",
    points: [
      "Core Ledger & Inter-Banking Engine",
      "Virtual Cards & Web/Mobile Digital Banking",
      "Native USSD Banking & POS Terminal Gateway",
      "Real-time Automated GL Reconciliation",
    ],
  },
  {
    id: "safi",
    name: "Safi AI Platform",
    badge: "Native Intelligence",
    href: "/safi",
    description:
      "Autonomous risk management and operational AI directly embedded into banking telemetry.",
    points: [
      "Real-Time AI Transaction Fraud Detection",
      "Multilingual AI Customer Support & Chatbot",
      "Autonomous Meeting & Compliance Assistant",
      "Deep Financial Research & Predictive Analytics",
    ],
  },
  {
    id: "settle",
    name: "Settle Africa Rail",
    badge: "Pan-African Payments",
    href: "/settle",
    description:
      "Optimized cross-border and local settlement rails with automated compliance built-in.",
    points: [
      "Cross-Border & Instant Local Cash Transfer",
      "Mobile Money & Airtime Topup Integration",
      "Business API for Automated Enterprise Payouts",
      "TVerify Real-Time Payout & Settlement Audit",
    ],
  },
] as const;

export function FeaturedProducts() {
  const desktopCards = useRef<Array<HTMLDivElement | null>>([]);
  const mobileCards = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const place = () => {
      frame = 0;
      const view = window.innerHeight;
      const apply = (node: HTMLElement | null, index: number, axis: "x" | "y") => {
        const anchor = node?.parentElement;
        if (!node || !anchor || anchor.getBoundingClientRect().height === 0) return;
        if (reduce) {
          node.style.transform = "none";
          node.style.filter = "none";
          node.style.opacity = "1";
          return;
        }
        const rect = anchor.getBoundingClientRect();
        const start = view * 0.96;
        const end = view * 0.46;
        const raw = (start - rect.top) / (start - end);
        const t = raw < 0 ? 0 : raw > 1 ? 1 : raw;
        const progress = t * t * (3 - 2 * t);
        const towardCenter = index % 2 === 0 ? 1 : -1;
        const shift = (1 - progress) * 48 * (axis === "x" ? towardCenter : 1);
        
        node.style.transform = axis === "x" ? `translate3d(${shift}px,0,0)` : `translate3d(0,${shift}px,0)`;
        node.style.filter = `blur(${(1 - progress) * 12}px)`;
        node.style.opacity = String(0.55 + progress * 0.45);
      };

      desktopCards.current.forEach((node, index) => apply(node, index, "x"));
      mobileCards.current.forEach((node, index) => apply(node, index, "y"));
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(place);
    };

    place();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="features" className="scroll-mt-20 bg-white px-4 py-5 text-black sm:px-6 sm:py-4 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">
              Platform Architecture
            </p>
            <h2 className="mt-1.5 text-2xl font-bold tracking-tight sm:text-3xl">
              Three Unified Core Pillars
            </h2>
          </div>
          <p className="max-w-xs text-xs text-[#5c5c5c] dark:text-white/60">
            A single, modular system engineered to power modern banks, MFBs, and agile fintech applications.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative mx-auto mt-10 hidden max-w-4xl md:block">
          <div className="absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-black/10 dark:bg-white/15" />
          <div className="flex flex-col gap-6">
            {systems.map((system, index) => {
              const onLeft = index % 2 === 0;
              return (
                <div key={system.id} className="relative grid grid-cols-2 items-center">
                  <div className={onLeft ? "pr-8" : "col-start-2 pl-8"}>
                    <div
                      ref={(node) => {
                        desktopCards.current[index] = node;
                      }}
                      className="will-change-[transform,filter]"
                    >
                      <SystemCard system={system} />
                    </div>
                  </div>
                  <span className="absolute top-1/2 left-1/2 flex h-7 w-7 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/20 bg-white text-xs font-semibold text-black shadow-sm dark:border-white/30 dark:bg-black dark:text-white">
                    {index + 1}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <ol className="relative mt-8 ml-2 border-l border-black/15 pl-6 md:hidden dark:border-white/20">
          {systems.map((system, index) => (
            <li key={system.id} className="relative pb-6 last:pb-0">
              <span className="absolute top-4 -left-6 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-black/20 bg-white text-xs font-semibold dark:border-white/30 dark:bg-black">
                {index + 1}
              </span>
              <div
                ref={(node) => {
                  mobileCards.current[index] = node;
                }}
                className="will-change-[transform,filter]"
              >
                <SystemCard system={system} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SystemCard({ system }: { system: (typeof systems)[number] }) {
  return (
    <article className="group rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition-all duration-200 hover:border-black/30 dark:border-white/15 dark:bg-black dark:shadow-none dark:hover:border-white/30">
      <div className="flex items-center justify-between gap-2 border-b border-black/5 pb-3 dark:border-white/10">
        <h3 className="text-base font-bold tracking-tight">{system.name}</h3>
        <span className="rounded-md bg-black/5 px-2 py-0.5 text-[11px] font-medium text-[#404040] dark:bg-white/10 dark:text-[#d4d4d4]">
          {system.badge}
        </span>
      </div>

      <p className="mt-3 text-xs leading-5 text-[#5c5c5c] dark:text-white/70">
        {system.description}
      </p>

      <ul className="mt-3.5 space-y-2">
        {system.points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-xs text-[#404040] dark:text-[#d4d4d4]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-black/40 dark:bg-white/50" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-4 pt-2">
        <Link
          href={system.href}
          className="inline-flex items-center gap-1.5 text-xs font-semibold underline decoration-black/20 underline-offset-4 transition-colors group-hover:decoration-black dark:decoration-white/30 dark:group-hover:decoration-white"
        >
          Explore {system.name} Capabilities →
        </Link>
      </div>
    </article>
  );
}
