"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// --- Icons ---
const LedgerIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const AccountsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
  </svg>
);

const ChannelsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const ConnectivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// --- Data ---
const capabilities = [
  {
    title: "Accounting & Ledger",
    description: "Real-time journals and general ledger for all financial operations.",
    icon: <LedgerIcon />,
  },
  {
    title: "Accounts & Lending",
    description: "Savings, current accounts, fixed deposits, and complete lending workflows.",
    icon: <AccountsIcon />,
  },
  {
    title: "Digital Channels",
    description: "Internet, mobile, USSD, and SMS banking channels.",
    icon: <ChannelsIcon />,
  },
  {
    title: "Interbank & Cards",
    description: "NIBSS, Interswitch, eTranzact connectivity, plus ATM, POS, and agency banking.",
    icon: <ConnectivityIcon />,
  },
];

const stats = [
  { value: "50x", label: "Faster transactions" },
  { value: "24/7", label: "Real-time posting" },
  { value: "99.99%", label: "Uptime design target" },
  { value: "1-click", label: "Migration start" },
];

export function FincoreSection() {
  return (
    <div className="bg-white text-black dark:bg-[#0a0a0a] dark:text-white">
      
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
        {/* Subtle background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#EFB338]/10 blur-[120px] dark:bg-[#EFB338]/5" />
        
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EFB338]/30 bg-[#EFB338]/10 px-4 py-1.5 text-sm font-medium text-black dark:text-[#EFB338]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EFB338]" />
              FinCore
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            The financial platform <br className="hidden sm:block" />
            institutions run on.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl"
          >
            A comprehensive core banking platform for banks, fintechs, and lenders. Move from batch-bound legacy processing to real-time posting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href="/contact"
              className="w-full rounded-full bg-black px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-80 sm:w-auto dark:bg-white dark:text-black dark:hover:bg-neutral-200"
            >
              Talk to our team
            </Link>
            <Link
              href="#capabilities"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-black/15 px-8 py-3.5 text-sm font-medium text-black transition-colors hover:border-black/30 sm:w-auto dark:border-white/20 dark:text-white dark:hover:border-white/40"
            >
              Explore capabilities
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ================= CAPABILITIES ================= */}
      <section id="capabilities" className="border-t border-black/5 bg-neutral-50/50 py-20 sm:py-24 dark:border-white/5 dark:bg-[#0f0f0f]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A connected platform for financial operations.
            </h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              Bring essential institution operations and customer channels together on one foundation.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:border-[#EFB338]/50 hover:shadow-md dark:border-white/5 dark:bg-[#111111] dark:hover:border-[#EFB338]/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFB338]/10 text-[#EFB338]">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PERFORMANCE STATS ================= */}
      <section className="border-y border-black/5 py-16 sm:py-20 dark:border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RELIABILITY & FRAUD ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            {/* Reliability */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-semibold uppercase tracking-wider text-[#EFB338]">
                Reliability
              </span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Extreme uptime, by design.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                Redundant infrastructure, automatic failover, and zero-downtime releases keep customers transacting when it matters most.
              </p>
              <ul className="mt-8 space-y-4">
                {["Multi-zone redundancy", "Automatic failover", "Zero-downtime releases"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EFB338]/20 text-[#EFB338]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Fraud Protection */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-black/10 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-[#111111]"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EFB338]/10 text-[#EFB338]">
                <ShieldIcon />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight">Advanced fraud detection, powered by Safi.</h3>
              <p className="mt-3 text-neutral-500 dark:text-neutral-400">
                Every FinCore transaction is screened by Safi in real time, catching edge cases that rules-only systems miss.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Behavioural analysis", "Real-time decisions", "Edge-case scenarios", "Case management"].map((tag) => (
                  <span key={tag} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-black px-6 py-20 text-center sm:px-16 dark:bg-[#151515]">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build your institution on a connected foundation.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-neutral-400">
            Talk with our team about FinCore and your operating requirements.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#EFB338] px-8 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}