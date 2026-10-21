"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Corridor {
  id: string;
  fromName: string;
  fromCode: string;
  fromSymbol: string;
  toName: string;
  toCode: string;
  toSymbol: string;
  rate: number;
  defaultAmount: number;
}

const corridors: Corridor[] = [
  {
    id: "kes-ngn",
    fromName: "Kenya",
    fromCode: "KES",
    fromSymbol: "KSh ",
    toName: "Nigeria",
    toCode: "NGN",
    toSymbol: "₦",
    rate: 11.8,
    defaultAmount: 10000,
  },
  {
    id: "ngn-kes",
    fromName: "Nigeria",
    fromCode: "NGN",
    fromSymbol: "₦",
    toName: "Kenya",
    toCode: "KES",
    toSymbol: "KSh ",
    rate: 0.0847,
    defaultAmount: 250000,
  },
  {
    id: "ngn-ghs",
    fromName: "Nigeria",
    fromCode: "NGN",
    fromSymbol: "₦",
    toName: "Ghana",
    toCode: "GHS",
    toSymbol: "GH₵ ",
    rate: 0.0102,
    defaultAmount: 200000,
  },
  {
    id: "zar-rwf",
    fromName: "South Africa",
    fromCode: "ZAR",
    fromSymbol: "R ",
    toName: "Rwanda",
    toCode: "RWF",
    toSymbol: "FRw ",
    rate: 76.5,
    defaultAmount: 2500,
  },
];

const payoutMethods = [
  { id: "mobile", label: "Mobile Money", badge: "Instant", fee: "Free promo" },
  { id: "bank", label: "Bank Account", badge: "5–10 mins", fee: "0.25%" },
  { id: "cash", label: "Cash Pickup", badge: "Same day", fee: "0.5%" },
] as const;

export function SettlePreview() {
  const [selectedCorridor, setSelectedCorridor] = useState<Corridor>(corridors[0]);
  const [amount, setAmount] = useState<number>(corridors[0].defaultAmount);
  const [payoutMethod, setPayoutMethod] = useState<(typeof payoutMethods)[number]["id"]>("mobile");

  const calculatedReceive = Math.round(amount * selectedCorridor.rate);
  const activeMethod = payoutMethods.find((m) => m.id === payoutMethod) ?? payoutMethods[0];

  const handleCorridorChange = (corridor: Corridor) => {
    setSelectedCorridor(corridor);
    setAmount(corridor.defaultAmount);
  };

  return (
    <div
      id="settle-demo"
      className="flex w-full flex-col overflow-hidden rounded-3xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-[#111111] dark:shadow-none"
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-black/5 bg-[#0a0a0a] px-5 py-3.5 text-white dark:border-white/10 dark:bg-[#151515]">
        <div className="flex items-center gap-2.5">
          <span className="flex size-7 items-center justify-center rounded-full bg-[#000000] text-xs font-bold text-black">
            ⚡
          </span>
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase text-neutral-200">
              Instant Settlement Simulator
            </p>
            <p className="text-[11px] text-neutral-400">
              Live rate preview · {selectedCorridor.fromCode} → {selectedCorridor.toCode}
            </p>
          </div>
        </div>
        <span className="hidden rounded-full bg-black/10 dark:bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-black dark:text-white sm:inline-block">
          Zero Hidden Markup
        </span>
      </div>

      <div className="p-5 sm:p-6">
        {/* Corridor Selector pills */}
        <div className="mb-5">
          <p className="mb-2 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            Select Active Corridor
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {corridors.map((c) => {
              const active = c.id === selectedCorridor.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => handleCorridorChange(c)}
                  className={`rounded-xl px-3 py-2 text-left text-xs font-medium transition-all ${
                    active
                      ? "bg-black text-white shadow-sm dark:bg-[#000000] dark:text-black"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800/70 dark:text-neutral-300 dark:hover:bg-neutral-800"
                  }`}
                >
                  <span className="block font-semibold">
                    {c.fromCode} → {c.toCode}
                  </span>
                  <span className="text-[10px] opacity-75">
                    {c.fromName} to {c.toName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Currency Input Card */}
        <div className="space-y-3">
          {/* Send Box */}
          <div className="relative rounded-2xl border border-black/5 bg-neutral-50 p-4 transition-all focus-within:border-black/20 focus-within:bg-white dark:border-white/5 dark:bg-[#161616] dark:focus-within:border-white/20">
            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
              <span>You send</span>
              <span className="font-semibold text-black dark:text-white">
                {selectedCorridor.fromName} ({selectedCorridor.fromCode})
              </span>
            </div>
            <div className="mt-2 flex items-baseline justify-between gap-3">
              <span className="text-xl font-medium text-neutral-400 sm:text-2xl">
                {selectedCorridor.fromSymbol}
              </span>
              <input
                type="number"
                value={amount}
                min={100}
                max={50000000}
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                className="w-full bg-transparent text-right text-2xl font-semibold tracking-tight text-black outline-none sm:text-3xl dark:text-white"
              />
            </div>
          </div>

          {/* Rate indicator connector */}
          <div className="flex items-center justify-between px-2 text-xs text-neutral-500 dark:text-neutral-400">
            <div className="flex items-center gap-1.5 font-mono text-[11px]">
              <span className="inline-block size-1.5 rounded-full bg-[#000000]" />
              <span>
                1 {selectedCorridor.fromCode} = {selectedCorridor.rate} {selectedCorridor.toCode}
              </span>
            </div>
            <span className="text-[11px] text-black dark:text-white font-medium">
              Guaranteed for 15 mins
            </span>
          </div>

          {/* Receive Box */}
          <div className="relative rounded-2xl border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/5 p-4 dark:border-black/20 dark:border-white/20 dark:bg-black/5 dark:bg-white/5">
            <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
              <span>Recipient receives</span>
              <span className="font-semibold text-black dark:text-white">
                {selectedCorridor.toName} ({selectedCorridor.toCode})
              </span>
            </div>
            <div className="mt-2 flex items-baseline justify-between gap-3">
              <span className="text-xl font-medium text-black dark:text-white sm:text-2xl">
                {selectedCorridor.toSymbol}
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={`${selectedCorridor.id}-${calculatedReceive}`}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="text-2xl font-bold tracking-tight text-black sm:text-3xl dark:text-white"
                >
                  {calculatedReceive.toLocaleString()}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Payout Rail Tabs */}
        <div className="mt-5">
          <p className="mb-2 text-[11px] font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
            Payout Rail
          </p>
          <div className="grid grid-cols-3 gap-2">
            {payoutMethods.map((m) => {
              const active = m.id === payoutMethod;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPayoutMethod(m.id)}
                  className={`flex flex-col items-center justify-center rounded-xl p-2.5 text-center transition-all ${
                    active
                      ? "border border-[#000000] bg-black/10 dark:bg-white/10 text-black dark:text-white"
                      : "border border-black/5 bg-neutral-50 text-neutral-600 hover:bg-neutral-100 dark:border-white/5 dark:bg-[#161616] dark:text-neutral-400 dark:hover:bg-neutral-800"
                  }`}
                >
                  <span className="text-xs font-semibold">{m.label}</span>
                  <span className="mt-0.5 text-[10px] text-black dark:text-white">
                    {m.badge}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Fee & Arrival Summary */}
        <div className="mt-5 rounded-2xl bg-neutral-100/70 p-4 text-xs dark:bg-[#161616]">
          <div className="flex items-center justify-between py-1">
            <span className="text-neutral-500 dark:text-neutral-400">Estimated Arrival</span>
            <span className="font-semibold text-black dark:text-white">
              {activeMethod.badge} via {activeMethod.label}
            </span>
          </div>
          <div className="flex items-center justify-between py-1">
            <span className="text-neutral-500 dark:text-neutral-400">Settle Transfer Fee</span>
            <span className="font-semibold text-black dark:text-white">
              {activeMethod.fee}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-black/5 pt-1.5 dark:border-white/5">
            <span className="text-neutral-500 dark:text-neutral-400">Traditional Bank Fee</span>
            <span className="text-neutral-400 line-through dark:text-neutral-500">
              $15.00 – $35.00 + 4% FX spread
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
