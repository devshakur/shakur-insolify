"use client";

import Image from "next/image";
import type { CSSProperties } from "react";

const brands = [
  { name: "MicroBiz Bank LTD", src: "/image/brands/microbiz.png" },
  { name: "Peace Microfinance Bank", src: "/image/brands/peace.png" },
  { name: "FidFund MicroFinance Bank", src: "/image/brands/fidfund.png" },
  { name: "Wapia", src: "/image/brands/wapfi.png" },
  { name: "AC-Nardos Finance Limited", src: "/image/brands/ac-nardos.svg" },
] as const;

const step = 360 / brands.length;
const duration = 36;

export function TrustedBrands() {
  return (
    <section
      id="trusted-brands"
      className="relative overflow-x-clip bg-white px-4  sm:px-6  lg:px-8 dark:bg-[#0c0c0f]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-136 w-136 -translate-x-1/2 translate-y-[-42%] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_68%)]"
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <h2 className="text-center text-[2.4rem] leading-[1.1] font-semibold tracking-tight text-[#111] sm:text-5xl dark:text-white">
          Brands that trust us
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-6 text-[#6B7280] sm:text-[15px] dark:text-[#B5B5B5]">
          Join financial institutions across Nigeria that rely on Insolify to
          power lending, banking, and everyday operations.
        </p>

        <div className="trusted-orbit relative mx-auto mt-10 h-88 w-full max-w-160 sm:mt-12 sm:h-112">
          <a
            href="#features"
            className="absolute top-[42%] left-0 z-10 hidden items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm text-[#111] shadow-sm sm:inline-flex dark:border-white/10 dark:bg-[#16181D] dark:text-white"
          >
            Get Started
            <span aria-hidden>→</span>
          </a>
          <div className="absolute top-[38%] right-0 z-10 hidden max-w-38 text-right sm:block">
            <p className="text-3xl font-semibold tracking-tight text-[#111] dark:text-white">5+</p>
            <p className="mt-1 text-xs leading-4 text-[#6B7280] dark:text-[#9CA3AF]">
              institutions running on Insolify
            </p>
          </div>

          <div className="trusted-orbit-spin absolute top-1/2 left-1/2 size-74 -translate-x-1/2 -translate-y-1/2 sm:size-90">
            <svg viewBox="0 0 360 360" className="h-full w-full">
              <circle
                cx="180"
                cy="180"
                r="168"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeDasharray="1.5 8"
                className="text-[#B8B8C0] dark:text-white/25"
              />
            </svg>

            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className="absolute top-1/2 left-1/2"
                style={{ transform: `rotate(${index * step}deg) translateY(calc(-1 * var(--orbit-r)))` }}
              >
                <div className="-translate-x-1/2 -translate-y-1/2">
                <div
                  className="trusted-orbit-pulse"
                  style={{ animationDelay: `${-index * (duration / brands.length)}s` }}
                >
                  <div
                    className="trusted-orbit-reverse flex size-18 items-center justify-center rounded-full bg-white shadow-[0_12px_32px_rgba(17,17,17,0.1)] ring-1 ring-black/5 sm:size-20 dark:bg-[#16181D] dark:ring-white/10"
                    style={{ "--orbit-offset": index * step } as CSSProperties}
                  >
                    <Image
                      src={brand.src}
                      alt={brand.name}
                      width={56}
                      height={56}
                      className="size-11 object-contain sm:size-12"
                    />
                  </div>
                </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <Image
              src="/insolify-logo.png"
              alt="Insolify"
              width={160}
              height={48}
              className="h-8 w-auto sm:h-10"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-5 border-t border-black/5 pt-8 sm:flex-row sm:gap-8 dark:border-white/10">
          <p className="max-w-32 text-center text-sm leading-5 font-medium text-[#111] sm:text-left dark:text-white">
            Trusted by leading institutions
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-[#6B7280] dark:text-[#9CA3AF]">
            {brands.map((brand) => (
              <li key={brand.name} className="inline-flex items-center gap-2">
                <Image src={brand.src} alt="" width={22} height={22} className="h-5 w-5 object-contain" />
                {brand.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
