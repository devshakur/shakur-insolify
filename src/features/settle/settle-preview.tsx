"use client";

import { useState } from "react";
import { LoopIcon } from "@/features/products/icons";

const methods = [
  { id: "bank", label: "Bank transfer", arrival: "Minutes" },
  { id: "mobile", label: "Mobile money", arrival: "Instant" },
  { id: "cash", label: "Cash pickup", arrival: "Same day" },
  { id: "airtime", label: "Airtime", arrival: "Instant" },
] as const;

export function SettlePreview() {
  const [method, setMethod] = useState<(typeof methods)[number]["id"]>("bank");
  const selected = methods.find((item) => item.id === method) ?? methods[0];

  return (
    <div
      id="settle-demo"
      className="flex min-h-136 scroll-mt-28 flex-col overflow-hidden rounded-4xl border border-[#ececf1] bg-white shadow-[0_24px_80px_rgba(20,16,40,0.08)] dark:border-white/10 dark:bg-[#16161b] dark:shadow-none"
    >
      <div className="flex items-center justify-between bg-[#111] px-5 py-4 text-white">
        <span className="inline-flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-full bg-white/10">
            <LoopIcon />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-tight">Send money</span>
            <span className="mt-0.5 block text-[11px] text-white/60">Live corridor preview · NGN → KES</span>
          </span>
        </span>
        <span className="text-[11px] text-white/60">Fees shown upfront</span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 sm:p-5">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-[1.3rem] bg-[#f3f4f6] px-4 py-4 dark:bg-[#1c1c22]">
            <p className="text-[11px] text-[#8a8a8a] dark:text-[#9CA3AF]">You send</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-[#111] dark:text-white">
              ₦250,000
            </p>
          </div>
          <div className="rounded-[1.3rem] bg-[#f3f4f6] px-4 py-4 dark:bg-[#1c1c22]">
            <p className="text-[11px] text-[#8a8a8a] dark:text-[#9CA3AF]">They get</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-[#111] dark:text-white">
              KES 21,840
            </p>
          </div>
        </div>

        <div>
          <p className="mb-2 text-[11px] font-medium tracking-wide text-[#8a8a8a] uppercase dark:text-[#9CA3AF]">
            Receive method
          </p>
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Receive methods">
            {methods.map((item) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === method}
                onClick={() => setMethod(item.id)}
                className={`rounded-full px-3 py-1.5 text-[11px] transition ${
                  item.id === method
                    ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                    : "bg-[#f3f4f6] text-[#6d6d6d] hover:text-[#111] dark:bg-white/10 dark:text-[#c8c8c8] dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <dl className="space-y-3 rounded-[1.3rem] bg-[#f8f8fa] px-4 py-4 text-sm dark:bg-[#1c1c22]">
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#6B7280] dark:text-[#9CA3AF]">Arrival</dt>
            <dd className="font-medium text-[#111] dark:text-white">{selected.arrival}</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#6B7280] dark:text-[#9CA3AF]">Settle Africa fee</dt>
            <dd className="font-medium text-[#111] dark:text-white">$2.99</dd>
          </div>
          <div className="flex items-center justify-between gap-3">
            <dt className="text-[#6B7280] dark:text-[#9CA3AF]">Typical bank fee</dt>
            <dd className="text-[#8a8a8a] line-through dark:text-[#7A7A82]">$15–25</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
