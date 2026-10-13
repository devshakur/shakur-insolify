
"use client";

import Link from "next/link";
import { useState } from "react";

const caseStudies = [
  {
    id: "micobiz",
    institution: "Micobiz",
    type: "Tier-1 Commercial Bank",
    product: "Fincore Core Engine",
    metric: "5M+ Daily Txns",
    headline: "Migrated 3M+ active accounts to a unified real-time ledger without downtime",
    challenge:
      "Legacy core banking was bottlenecked during peak hours, causing GL reconciliation delays and slow digital channel performance.",
    solution:
      "Deployed Fincore’s modular core engine to power deposits, inter-bank transfers, and automated end-of-day ledger balancing.",
    outcomes: [
      "99.99% system uptime across web, mobile, and branch networks",
      "Sub-15ms transaction response time during peak hours",
      "Automated CBN regulatory reporting generated in minutes instead of days",
    ],
    href: "/fincore",
  },
  {
    id: "fidfund",
    institution: "Fidfund",
    type: "Regional MFB",
    product: "Fincore + Safi AI",
    metric: "60% Cost Reduction",
    headline: "Automated 84% of support tickets & fraud checks across 400,000 retail accounts",
    challenge:
      "High operational overhead for manual KYC verification, dispute resolutions, and customer support inquiries.",
    solution:
      "Integrated Safi AI natively into Fincore to automate multi-lingual support, real-time transaction risk scoring, and meeting notes.",
    outcomes: [
      "Customer support resolution time dropped from 48 hours to 3 minutes",
      "Real-time fraud screening blocked $1.2M in unauthorized transfers",
      "Operational expenditure reduced by 60% within 6 months of rollout",
    ],
    href: "/safi",
  },
  {
    id: "wapfi",
    institution: "Wapfi",
    type: "Cross-Border Payments App",
    product: "Settle Africa Rail",
    metric: "< 10s Payouts",
    headline: "Scaled cross-border remittance and mobile money payouts across 18 African markets",
    challenge:
      "Fragmented payment gateways across different African nations led to high settlement failure rates and delayed payouts.",
    solution:
      "Embedded Settle Africa API rails to execute direct mobile money top-ups, bank payouts, and TVerify receipt tracking.",
    outcomes: [
      "Instant cross-border settlement latency under 10 seconds",
      "100% deterministic payout verification via TVerify audit receipts",
      "Zero hidden FX fees with transparent upfront rate locks",
    ],
    href: "/settle",
  },
] as const;

export function ImpactStories() {
  const [activeTab, setActiveTab] = useState<string>(caseStudies[0].id);
  const selectedStory = caseStudies.find((s) => s.id === activeTab) || caseStudies[0];

  return (
    <section
      id="impact"
      className="bg-white px-4 py-16 text-black sm:px-6 sm:py-24 lg:px-8 dark:bg-black dark:text-white"
    >
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-2 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between dark:border-white/10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">
              Institutional Impact
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Proven in Production by Leading Institutions
            </h2>
          </div>
          <p className="max-w-xs text-xs text-[#5c5c5c] dark:text-[#b5b5b5]">
            Discover how banks, MFBs, and fintech platforms build and scale on Insolify&apos;s unified technology.
          </p>
        </div>

        {/* Institution Selector Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {caseStudies.map((story) => {
            const isActive = story.id === activeTab;
            return (
              <button
                key={story.id}
                onClick={() => setActiveTab(story.id)}
                className={`rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "border border-black/10 bg-black/2 text-[#5c5c5c] hover:border-black/30 hover:text-black dark:border-white/15 dark:bg-white/3 dark:text-white/70 dark:hover:border-white/40 dark:hover:text-white"
                }`}
              >
                {story.institution}
              </button>
            );
          })}
        </div>

        {/* Active Case Study Spotlight */}
        <div className="mt-6 rounded-3xl border border-black/10 bg-black/2 p-6 sm:p-10 dark:border-white/15 dark:bg-white/2">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-6 dark:border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="rounded-md border border-black/15 bg-white px-2.5 py-1 text-[11px] font-mono font-bold text-black dark:border-white/20 dark:bg-black dark:text-white">
                  {selectedStory.type}
                </span>
                <span className="text-xs text-[#6d6d6d] dark:text-white/50">
                  Powered by <strong className="text-black dark:text-white">{selectedStory.product}</strong>
                </span>
              </div>
              <h3 className="mt-3 text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl">
                {selectedStory.headline}
              </h3>
            </div>

            {/* Impact Metric Badge */}
            <div className="rounded-2xl border border-black/15 bg-white px-5 py-3 text-center dark:border-white/20 dark:bg-black">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#6d6d6d] dark:text-white/50">
                Key Result
              </span>
              <div className="text-lg font-bold text-black dark:text-white sm:text-2xl">
                {selectedStory.metric}
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* Left: Challenge & Solution */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6d6d6d] dark:text-white/50">
                  The Operational Challenge
                </h4>
                <p className="mt-2 text-xs leading-6 text-[#404040] dark:text-white/80 sm:text-sm">
                  {selectedStory.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#6d6d6d] dark:text-white/50">
                  The Insolify Architecture Solution
                </h4>
                <p className="mt-2 text-xs leading-6 text-[#404040] dark:text-white/80 sm:text-sm">
                  {selectedStory.solution}
                </p>
              </div>
            </div>

            {/* Right: Key Outcomes Checklist */}
            <div className="rounded-2xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-black">
              <h4 className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
                Verified Production Outcomes
              </h4>
              <ul className="mt-4 space-y-3">
                {selectedStory.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-xs text-[#404040] dark:text-[#d4d4d4] sm:text-sm">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-black text-[9px] font-bold text-white dark:bg-white dark:text-black">
                      ✓
                    </span>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-black/10 pt-4 dark:border-white/10">
                <Link
                  href={selectedStory.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold underline underline-offset-4 hover:opacity-80"
                >
                  Read full institutional case study →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
