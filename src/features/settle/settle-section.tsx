"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SettlePreview } from "@/features/settle/settle-preview";

const heroMetrics = [
  { value: "54+", label: "African markets reachable" },
  { value: "< 60s", label: "Average settlement time" },
  { value: "0.25%", label: "Starting transfer fee" },
  { value: "99.99%", label: "Uptime on payout rails" },
] as const;

export function SettleSection() {
  return (
    <section id="settle" className="relative px-4 pt-6 pb-12 sm:px-6 sm:pt-10 sm:pb-16 lg:px-10">
      {/* Background ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-black/10 dark:bg-white/10 blur-[120px] dark:bg-black/5 dark:bg-white/5" />

      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Narrative & CTAs */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 px-4 py-1.5 text-xs font-medium text-black dark:text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-[#000000]" />
                <span className="font-semibold">Settle Africa</span>
                <span className="text-black/30 dark:text-white/30">|</span>
                <span>By Insolify</span>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
                Transactions across Africa,{" "}
                <span className="italic font-light text-black dark:text-white">
                  made simple.
                </span>
              </h1>

              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
                A modern financial application and infrastructure designed for seamless cross-border settlement, transparent FX rates, and a connected view of your finances.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-black px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:bg-white dark:text-black"
                >
                  Learn About Settle
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="#corridors"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-black/10 bg-white px-6 text-sm font-medium text-black transition-colors hover:border-black/20 dark:border-white/20 dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:border-black/20 dark:border-white/20"
                >
                  Explore Corridors
                </Link>
                <Link
                  href="/tverify"
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-neutral-100 px-5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
                >
                  Track with TVerify
                </Link>
              </div>

              <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-500">
                Availability and supported corridors may vary by regulatory jurisdiction.
              </p>

              {/* Key metrics grid */}
              <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-black/5 pt-6 sm:grid-cols-4 dark:border-white/10">
                {heroMetrics.map((stat) => (
                  <div key={stat.label}>
                    <dd className="text-2xl font-bold tracking-tight text-black dark:text-white">
                      {stat.value}
                    </dd>
                    <dt className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                      {stat.label}
                    </dt>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>

          {/* Right Column: Live Interactive Settle Preview */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <SettlePreview />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}