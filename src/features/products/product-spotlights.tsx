"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Radio, CreditCard, MousePointerBanIcon, PlantPotIcon, Plane } from "lucide-react";

export function ProductSpotlights() {
  return (
    <div className="w-full">
      {/* 1. FinCore Section */}
      <section className="border-t border-black/5 bg-[#fafafa] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 dark:border-white/10 dark:bg-[#0f1013]">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase">
                FinCore / Financial Infrastructure
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
                The financial platform institutions run on.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                A core banking platform for banks, fintechs, and MFIs—from general ledger to digital channels.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-neutral-700 dark:text-neutral-300" />
                  <span>Multi-currency general ledger &amp; real-time journals</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-neutral-700 dark:text-neutral-300" />
                  <span>Savings, deposits, and automated lending</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-neutral-700 dark:text-neutral-300" />
                  <span>Central bank reporting &amp; payment network connectivity</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/fincore"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-semibold text-white transition-opacity hover:opacity-85 dark:bg-white dark:text-black"
                >
                  <span>Explore FinCore</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual: Operations Grid */}
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#15161a]">
              <div className="flex items-center justify-between border-b border-black/5 pb-4 dark:border-white/5">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Financial Operations Engine
                </span>
                <span className="rounded-full bg-gray-200 px-2.5 py-0.5 text-[10px] font-semibold text-black dark:bg-gray-800 dark:text-white">
                  Active Core
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-black/5 bg-neutral-50 p-4 transition-colors hover:border-[#EFB338]/50 dark:border-white/5 dark:bg-[#1a1c22]">
                  <span className="text-lg"><CheckCircle2 className="size-4 shrink-0 text-neutral-700 dark:text-neutral-300" /></span>
                  <p className="mt-2 text-sm font-semibold text-black dark:text-white">Core Banking</p>
                  <p className="mt-1 text-[11px] text-neutral-500">General ledger, charts of accounts &amp; deposits</p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-neutral-50 p-4 transition-colors hover:border-[#EFB338]/50 dark:border-white/5 dark:bg-[#1a1c22]">
                  <span className="text-lg"><MousePointerBanIcon className="size-4 shrink-0 text-neutral-700 dark:text-neutral-300" /></span>
                  <p className="mt-2 text-sm font-semibold text-black dark:text-white">Digital Channels</p>
                  <p className="mt-1 text-[11px] text-neutral-500">Mobile apps, web portals &amp; USSD banking</p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-neutral-50 p-4 transition-colors hover:border-[#EFB338]/50 dark:border-white/5 dark:bg-[#1a1c22]">
                  <span className="text-lg"><CreditCard className="size-4 shrink-0 text-neutral-700 dark:text-neutral-300" /></span>
                  <p className="mt-2 text-sm font-semibold text-black dark:text-white">Payments &amp; Cards</p>
                  <p className="mt-1 text-[11px] text-neutral-500">Instant NIP settlement, card issuing &amp; QR</p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-neutral-50 p-4 transition-colors hover:border-[#EFB338]/50 dark:border-white/5 dark:bg-[#1a1c22]">
                  <span className="text-lg"><Plane className="size-4 shrink-0 text-neutral-700 dark:text-neutral-300" /></span>
                  <p className="mt-2 text-sm font-semibold text-black dark:text-white">Integrations</p>
                  <p className="mt-1 text-[11px] text-neutral-500">NIBSS, Interswitch, eTranzact &amp; custom APIs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Safi AI Section */}
      <section className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 dark:border-white/10 dark:bg-black">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Visual: Voice & Intelligence */}
            <div className="order-2 lg:order-1 rounded-3xl border border-black/10 bg-[#fafafa] p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#121316]">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded-xl bg-[#EFB338]/15 text-[#EFB338]">
                  <Radio className="size-4 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-black dark:text-white">
                    Speak. Safi understands and acts.
                  </h4>
                  <p className="text-[11px] text-neutral-500">Real-time financial speech understanding</p>
                </div>
              </div>

              {/* Animated Waveform */}
              <div className="my-8 flex items-center justify-center gap-1.5 h-16" aria-label="Audio Waveform">
                {[14, 32, 58, 40, 72, 90, 50, 68, 85, 44, 28, 54, 78, 36, 18].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-1.5 rounded-full bg-[#EFB338] transition-all duration-300"
                  />
                ))}
              </div>

              {/* Language Chips */}
              <p className="mb-2.5 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                Supported Native Dialects
              </p>
              <div className="flex flex-wrap gap-2">
                {["English", "Kiswahili", "Hausa", "العربية", "Yorùbá", "Igbo"].map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-neutral-800 shadow-2xs dark:border-white/10 dark:bg-[#1a1c22] dark:text-neutral-200"
                  >
                    {lang}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4 text-xs text-neutral-500 dark:border-white/5">
                <span>Autonomous fraud detection</span>
                <span className="font-semibold text-black dark:text-[#EFB338]">&lt; 50ms screening</span>
              </div>
            </div>

            {/* Narrative */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-widest text-black dark:text-white  uppercase">
                Safi / Intelligence for Finance
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
                Intelligence that understands financial context.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                Safi is an AI engine for modern finance—powering fraud detection, multilingual voice interactions, and plain-language bookkeeping.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-black dark:text-white" />
                  <span>Voice understanding in 6 African languages</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-black dark:text-white" />
                  <span>Real-time transaction anomaly screening</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-black dark:text-white" />
                  <span>Automated bookkeeping from voice or text</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/safi"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-semibold text-white transition-opacity hover:opacity-85 dark:bg-[#EFB338] dark:text-black"
                >
                  <span>Explore Safi</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Settle Africa Section */}
      <section className="border-t border-black/5 bg-[#fafafa] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 dark:border-white/10 dark:bg-[#0f1013]">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold tracking-widest text-black dark:text-white uppercase">
                Settle / Pan-African Payments
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
                Transactions across Africa, made simple.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                A payments rail for frictionless cross-border settlement, transparent FX, and instant payouts.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-black dark:text-white" />
                  <span>Send any currency—recipient gets theirs, zero markup</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-black dark:text-white" />
                  <span>Multi-rail payouts: M-Pesa, MTN MoMo, Airtel &amp; bank clearing</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-black dark:text-white" />
                  <span>Live tracking with cryptographic receipts via TVerify</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/settle"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-semibold text-white transition-opacity hover:opacity-85 dark:bg-black dark:text-white"
                >
                  <span>Explore Settle</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>

            {/* Visual: Live Transfer Corridor Card */}
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#15161a]">
              <div className="flex items-center justify-between border-b border-black/5 pb-4 dark:border-white/5">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-black dark:bg-white animate-pulse" />
                  <span className="text-xs font-semibold text-black dark:text-white">Active Corridor: KES → NGN</span>
                </div>
                <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                  Instant (&lt; 45s)
                </span>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-neutral-50 p-3.5 text-xs dark:bg-[#1a1c22]">
                  <span className="text-neutral-500">You send from Nairobi</span>
                  <span className="font-bold text-black dark:text-white">KES 10,000</span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-[#EFB338]/30 bg-[#EFB338]/5 p-3.5 text-xs">
                  <span className="text-neutral-600 dark:text-neutral-400">Recipient gets in Abuja</span>
                  <span className="font-bold text-black dark:text-[#EFB338]">₦118,000</span>
                </div>
              </div>

              <div className="mt-6 border-t border-black/5 pt-4 text-xs text-neutral-500 dark:border-white/5">
                <div className="flex justify-between py-1">
                  <span>Guaranteed FX Rate</span>
                  <span className="font-mono text-black dark:text-white">1 KES = 11.80 NGN</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Transfer Fee</span>
                  <span className="font-semibold text-black dark:text-[#EFB338]">Transparent $1.50</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Skynet Section */}
      <section className="border-t border-black/5 bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 dark:border-white/10 dark:bg-black">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Visual: Nodes & Edge Infrastructure */}
            <div className="order-2 lg:order-1 rounded-3xl border border-black/10 bg-[#fafafa] p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-[#121316]">
              <div className="flex items-center justify-between border-b border-black/5 pb-4 dark:border-white/5">
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Interconnected Regional Nodes
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-black dark:text-[#EFB338]">
                  <span className="size-1.5 rounded-full bg-black dark:bg-white animate-pulse" />
                  <span>99.99% Uptime</span>
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-black/5 bg-white p-3.5 dark:border-white/5 dark:bg-[#1a1c22]">
                  <p className="text-xs font-bold text-black dark:text-white">Lagos Node</p>
                  <p className="text-[11px] text-neutral-500">High-volume payment ingestion</p>
                  <span className="mt-2 inline-block font-mono text-[10px] text-black dark:text-white">latency: 4ms</span>
                </div>
                <div className="rounded-xl border border-black/5 bg-white p-3.5 dark:border-white/5 dark:bg-[#1a1c22]">
                  <p className="text-xs font-bold text-black dark:text-white">Nairobi Node</p>
                  <p className="text-[11px] text-neutral-500">Mobile money settlement hub</p>
                  <span className="mt-2 inline-block font-mono text-[10px] text-black dark:text-white">latency: 6ms</span>
                </div>
                <div className="rounded-xl border border-black/5 bg-white p-3.5 dark:border-white/5 dark:bg-[#1a1c22]">
                  <p className="text-xs font-bold text-black dark:text-white">Johannesburg Node</p>
                  <p className="text-[11px] text-neutral-500">Enterprise banking failover</p>
                  <span className="mt-2 inline-block font-mono text-[10px] text-black dark:text-white">latency: 9ms</span>
                </div>
                <div className="rounded-xl border border-black/5 bg-white p-3.5 dark:border-white/5 dark:bg-[#1a1c22]">
                  <p className="text-xs font-bold text-black dark:text-white">Cairo Node</p>
                  <p className="text-[11px] text-neutral-500">North Africa &amp; Maghreb gateway</p>
                  <span className="mt-2 inline-block font-mono text-[10px] text-black dark:text-white">latency: 11ms</span>
                </div>
              </div>
            </div>

            {/* Narrative */}
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold tracking-widest text-black dark:text-white uppercase">
                Skynet / Cloud Infrastructure
              </p>
              <h3 className="mt-3 text-3xl font-bold tracking-tight text-black sm:text-4xl dark:text-white">
                A network of interconnected data nodes.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
                Regional nodes route traffic around faults, keeping financial data close to your customers with sub-10ms response times.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-neutral-700 dark:text-neutral-300">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-black dark:text-white" />
                  <span>Self-healing architecture with zero-downtime failover</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-black dark:text-white" />
                  <span>GPU clusters optimized for high-concurrency banking</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 shrink-0 text-black dark:text-white" />
                  <span>Data sovereignty compliance across African jurisdictions</span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/status"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-xs font-semibold text-white transition-opacity hover:opacity-85 dark:bg-black dark:text-white"
                >
                  <span>Explore Skynet &amp; Status</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
