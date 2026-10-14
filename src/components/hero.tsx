"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const HEADLINE_PREFIX = "Better banking starts here — empowering";
const AUDIENCES = ["Banks", "Microfinance Banks", "Fintechs"];
const HEADLINE_SUFFIX = "with smarter, faster, and more reliable technology.";
const ROTATE_INTERVAL_MS = 3000;

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % AUDIENCES.length);
    }, ROTATE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="relative flex flex-col overflow-hidden lg:min-h-[calc(100svh-4rem)] bg-white font-sans text-[#171717] selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black dark:bg-black dark:text-white">
      {/* Background image */}
      <Image
        src="/image/herobanner01.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none z-0 object-cover object-bottom-right select-none dark:brightness-[0.6] dark:saturate-125"
      />

      {/* Dark mode overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden bg-linear-to-b from-black from-15% via-black/40 via-45% to-transparent dark:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden bg-linear-to-r from-black/80 via-black/30 to-transparent dark:block"
      />
      <div className="relative z-10 flex flex-1">
        <div className="relative z-10 mx-auto flex w-full max-w-7xl items-start px-6 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:items-center lg:py-20">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-7 inline-flex items-center space-x-3 rounded-full border border-black/15 bg-white/60 px-4 py-2 backdrop-blur-xl dark:border-white/20 dark:bg-white/10">
              <span className="text-xs font-normal text-zinc-700 sm:text-sm dark:text-zinc-200">
                Insolify Platform 2.0: Next-gen core infrastructure for banks &
                fintechs
              </span>
            </div>

            {/* Rotating headline */}
            <h1
              aria-label={`${HEADLINE_PREFIX} Banks, Fintechs, and Neobanks ${HEADLINE_SUFFIX}`}
              className="mb-8 text-4xl leading-[1.3] font-medium tracking-[-0.02em] text-[#171717] sm:mb-9 dark:text-white"
            >
              <span aria-hidden className="block">
                <span className="block">{HEADLINE_PREFIX}</span>
                {/* All words stack in one grid cell, so the box is always as wide as the widest word */}
                <span className="grid overflow-hidden py-[0.06em] whitespace-nowrap">
                  {AUDIENCES.map((word, i) => {
                    const isActive = i === active;
                    const isPrev =
                      i === (active - 1 + AUDIENCES.length) % AUDIENCES.length;
                    return (
                      <span
                        key={word}
                        className={`col-start-1 row-start-1 text-black dark:text-white ${
                          isActive
                            ? "translate-y-0 opacity-100 transition-all duration-700 ease-out"
                            : isPrev
                              ? "-translate-y-full opacity-0 transition-all duration-700 ease-in"
                              : "translate-y-full opacity-0 transition-none"
                        }`}
                      >
                        {word}
                      </span>
                    );
                  })}
                </span>
                <span className="block">{HEADLINE_SUFFIX}</span>
              </span>
            </h1>

            {/* Action Buttons */}
            <div className="mb-14 flex flex-col items-stretch space-y-4 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-5">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full border border-white/15 bg-black px-7 py-3.5 text-sm font-medium text-white backdrop-blur-lg transition-colors hover:bg-white/90 dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                <span>Contact Sales</span>
                <svg
                  className="ml-2 h-4 w-4 text-white transition-transform group-hover:translate-x-1 dark:text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Product Pillars Feature Strip */}
            <div className="grid max-w-xl grid-cols-3 gap-6 border-t border-black/10 pt-8 dark:border-white/10">
              <div className="space-y-1">
                <div className="text-xs font-medium tracking-wider uppercase">
                  01. Fincore
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  12 Core Banking Engines
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium tracking-wider uppercase">
                  02. SAFI AI
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  Automated Fraud & Analytics
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-xs font-medium tracking-wider uppercase">
                  03. Settle Africa
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  Instant Cross-Border Payments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 border-t border-black/10 bg-white/30 py-6 backdrop-blur-md dark:border-white/10 dark:bg-black/30">
        <div className="mx-auto max-w-7xl px-6">
          <p className="mb-5 text-center text-xs font-medium tracking-widest text-zinc-600 uppercase md:text-left dark:text-zinc-400">
            POWERING LEADING INSTITUTIONAL BANKS, MFBs, FINTECHS & PAYMENT
            GATEWAYS ACROSS AFRICA
          </p>
          <div className="grid grid-cols-2 items-center justify-items-center gap-6 opacity-80 sm:grid-cols-4">
          <div className="flex items-center space-x-2 text-sm font-medium tracking-tight text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white">
              <div className="h-3.5 w-3.5 rotate-45 transform bg-black dark:bg-white" />
              <span>Institutional Banks</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium tracking-tight text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white">
              <div className="h-3.5 w-3.5 rotate-45 transform bg-black dark:bg-white" />
              <span>Microfinance Banks</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium tracking-tight text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white">
              <div className="h-3.5 w-3.5 rotate-45 transform bg-black dark:bg-white" />
              <span>AGILE FINTECHS</span>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium tracking-tight text-zinc-700 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-white">
              <div className="h-3.5 w-3.5 rotate-45 transform bg-black dark:bg-white" />
              <span>Payment Infrastructure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
