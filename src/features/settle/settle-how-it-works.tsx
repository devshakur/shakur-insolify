"use client";

import { useState } from "react";

const steps = [
  {
    step: "01",
    title: "Choose recipient",
    desc: "Pick a saved contact or enter their local account number, mobile money phone, or digital ID.",
  },
  {
    step: "02",
    title: "Enter amount",
    desc: "See the live mid-market exchange rate and exact transfer fee upfront. What you see is exactly what they receive.",
  },
  {
    step: "03",
    title: "Confirm securely",
    desc: "Authenticate the payment instantly with your biometric face/fingerprint or secure 6-digit transaction PIN.",
  },
  {
    step: "04",
    title: "Instant delivery",
    desc: "Funds land in the destination wallet or account within seconds. Both parties receive real-time SMS & email receipts.",
  },
];

export function SettleHowItWorks() {
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section id="how-it-works" className="scroll-mt-28 px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Section title */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/10 px-4 py-1 text-xs font-semibold tracking-wider text-black uppercase dark:text-white">
            How It Works
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
            Four steps. No paperwork.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            Designed to replace complex foreign exchange forms, branch queues, and correspondent bank delays with a seamless digital experience.
          </p>
        </div>

        {/* 4 Steps Banner */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, index) => (
            <div
              key={s.step}
              onClick={() => setActiveStep(index)}
              className={`cursor-pointer rounded-2xl border p-5 transition-all ${
                activeStep === index
                  ? "border-[#000000] bg-black/5 dark:bg-white/5 shadow-sm"
                  : "border-black/5 bg-white hover:border-black/20 dark:border-white/20 dark:border-white/10 dark:bg-[#111111]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex size-8 items-center justify-center rounded-full text-xs font-bold ${
                    activeStep === index
                      ? "bg-[#000000] text-black"
                      : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
                  }`}
                >
                  {s.step}
                </span>
                <span className="text-[11px] font-mono text-neutral-400">STEP {index + 1}</span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-black dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Split Demo Showcase */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-12">
          {/* Left: Mobile simulated transfer card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2.5rem] border border-black/10 bg-black p-6 text-white shadow-2xl dark:border-white/15 dark:bg-[#111111]">
              {/* Phone speaker notch */}
              <div className="mx-auto mb-6 h-1 w-16 rounded-full bg-white/20" />

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-medium text-white/60">Review Transfer</span>
                  <h3 className="text-lg font-semibold tracking-tight text-white">Nairobi to Abuja</h3>
                </div>
                <span className="rounded-full bg-black/10 dark:bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-black dark:text-white">
                  Live Preview
                </span>
              </div>

              {/* Amount Display */}
              <div className="mt-6 rounded-2xl bg-white/5 p-4 text-center">
                <p className="text-xs text-white/60">Transfer Amount</p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-white">KES 10,000</p>
                <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">
                  <span>Recipient gets:</span>
                  <strong className="text-black dark:text-white">₦118,000</strong>
                </div>
              </div>

              {/* Line items */}
              <div className="mt-5 space-y-2.5 border-t border-white/10 pt-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-white/60">Recipient</span>
                  <span className="font-semibold text-white">Amina Bello (GTBank ••4821)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Exchange Rate</span>
                  <span className="font-mono text-white/90">1 KES = 11.80 NGN</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Transfer Fee</span>
                  <span className="text-black dark:text-white font-semibold">Zero Fee (Promo)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">Estimated Delivery</span>
                  <span className="font-semibold text-white">Instant (&lt; 45s)</span>
                </div>
              </div>

              {/* Status Tracker */}
              <div className="mt-6">
                <div className="flex justify-between text-[11px] text-white/60">
                  <span>Initiated</span>
                  <span>Screened</span>
                  <span>Settled</span>
                  <span>Delivered</span>
                </div>
                <div className="mt-2 flex gap-1.5">
                  <div className="h-1.5 flex-1 rounded-full bg-[#000000]" />
                  <div className="h-1.5 flex-1 rounded-full bg-[#000000]" />
                  <div className="h-1.5 flex-1 rounded-full bg-[#000000] animate-pulse" />
                  <div className="h-1.5 flex-1 rounded-full bg-white/20" />
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6">
                <button
                  type="button"
                  className="w-full rounded-full bg-[#000000] py-3.5 text-center text-sm font-semibold text-black transition-opacity hover:opacity-90"
                >
                  Confirm &amp; Send Securely
                </button>
              </div>

              <p className="mt-3 text-center text-[11px] text-white/40">
                Protected by 256-bit encryption &amp; Safi AI screening
              </p>
            </div>
          </div>

          {/* Right: Key Value Points */}
          <div className="space-y-6 lg:col-span-7 lg:pl-6">
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111111]">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-black/10 dark:bg-white/10 text-black dark:text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    No hidden fees or unexpected markups
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Unlike traditional banks that inflate the FX spread or deduct landing fees from the receiver, Settle locks the exact conversion and transparent charge before you hit send.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111111]">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-black/10 dark:bg-white/10 text-black dark:text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    Live end-to-end tracking with TVerify
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Never wonder where funds are. Query any transaction with our built-in TVerify tracking tool or through automated SMS and in-app webhook alerts.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#111111]">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-black/10 dark:bg-white/10 text-black dark:text-white">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    Saved recipients &amp; recurring payroll
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Send again to family, suppliers, and team members in a single tap. Enterprises can schedule automated bulk settlements across 10+ countries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
