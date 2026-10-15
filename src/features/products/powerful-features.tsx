
"use client";

import Link from "next/link";
import { useState } from "react";

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

export function PowerfulFeatures() {
  const [active, setActive] = useState<string>(features[0].id);

  return (
    <section
      aria-label="Platform Features"
      className="bg-white px-4 py-3 text-black sm:px-6 sm:py-5 lg:px-8 dark:bg-black dark:text-white"
    >
      <div className="mx-auto w-full ">
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

        {/* Accordion Grid */}
        <div className="mt-8 grid w-full gap-4 md:grid-cols-2 xl:grid-cols-4">
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
                      className={`rounded-md px-2 py-0.5 text-[10px] font-mono font-bold ${
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

                  {/* Expandable Excerpt & Link */}
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