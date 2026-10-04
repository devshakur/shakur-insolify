"use client";

import { MotionConfig, motion } from "framer-motion";
import { useState } from "react";

const capabilities = [
  {
    id: "accounts",
    title: "Account Management",
    description:
      "Multi-currency support, interest calculations, account hierarchies, and live balance control.",
  },
  {
    id: "payments",
    title: "Payment Processing",
    description:
      "Real-time transfers, international payments, batch processing, and scheduled payouts.",
  },
  {
    id: "risk",
    title: "Risk & Compliance",
    description:
      "Real-time monitoring, regulatory reporting, fraud detection, and complete audit trails.",
  },
  {
    id: "channels",
    title: "Digital Channels",
    description:
      "Mobile banking, API integration, digital wallets, and open-banking connectivity.",
  },
] as const;

export function FincoreCapabilities() {
  const [active, setActive] = useState(1);

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="capabilities"
        className="bg-white px-4 py-6 sm:px-6 lg:px-8 dark:bg-[#0c0c0f]"
      >
        <div className="mx-auto w-full rounded-4xl bg-[#E6EEE4] px-6 py-10 sm:rounded-[40px] sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-12 lg:gap-16">
            <h2 className="shrink-0 text-[2rem] leading-[1.08] font-semibold tracking-tight text-[#161616] sm:text-4xl lg:text-[2.75rem]">
              Fincore
              <br />
              Capabilities
            </h2>
            <p className="max-w-md pt-1 text-sm leading-6 text-[#5E665C] sm:text-[15px]">
              Comprehensive banking platform features for modern financial
              institutions — accounts, payments, risk, and digital channels in
              one modular core.
            </p>
          </div>

          <div
            role="radiogroup"
            aria-label="Fincore capabilities"
            className="mt-8 overflow-x-auto pt-8 pb-4 scrollbar-none lg:mt-10"
          >
            <div className="flex min-w-max items-end gap-3">
              <Marker icon="plus" className="relative z-20 -mr-6 mb-19" />

              {capabilities.map((capability, index) => {
                const featured = index === active;

                return (
                  <motion.button
                    key={capability.id}
                    type="button"
                    role="radio"
                    aria-checked={featured}
                    onClick={() => setActive(index)}
                    initial={false}
                    animate={{ zIndex: featured ? 20 : index + 1 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative w-64 shrink-0 rounded-[28px] p-6 text-left transition-all duration-300 sm:w-72 sm:p-7 ${
                      featured
                        ? "z-20 -mx-3 min-h-64 bg-[#171717] text-white shadow-[0_24px_48px_rgba(23,23,23,0.3)]"
                        : "min-h-48 bg-white text-[#171717] shadow-[0_10px_24px_rgba(23,23,23,0.08)] hover:bg-[#FBFCF8]"
                    }`}
                  >
                    <h3 className="max-w-[12ch] text-[1.35rem] leading-[1.15] font-semibold tracking-tight">
                      {capability.title}
                    </h3>
                    <p
                      className={`mt-3 max-w-[22ch] text-[13px] leading-5 ${
                        featured ? "text-white/70" : "text-[#6A7266]"
                      }`}
                    >
                      {capability.description}
                    </p>
                  </motion.button>
                );
              })}

              <Marker icon="close" className="relative z-20 -ml-6 mb-19" />
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

function Marker({
  icon,
  className,
}: {
  icon: "plus" | "close";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#171717] text-[#171717] ${className ?? ""}`}
    >
      {icon === "plus" ? <PlusIcon /> : <CloseIcon />}
    </span>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 3.2v9.6M3.2 8h9.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M4.2 4.2l7.6 7.6M11.8 4.2l-7.6 7.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
