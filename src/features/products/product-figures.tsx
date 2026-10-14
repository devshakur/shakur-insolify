"use client";

import Image from "next/image";

const customers = [
  { name: "MicroBiz Bank LTD", src: "/image/brands/microbiz.png" },
  { name: "Peace Microfinance Bank", src: "/image/brands/peace.png" },
  { name: "FidFund MicroFinance Bank", src: "/image/brands/fidfund.png" },
  { name: "Wapia", src: "/image/brands/wapfi.png" },
  { name: "AC-Nardos Finance Limited", src: "/image/brands/ac-nardos.svg" },
] as const;

// Each half of the track must be wider than the viewport so the loop never shows a gap.
const half = [...customers, ...customers];

export function ProductFigures() {
  return (
    <section
      aria-label="Our customers"
      className="bg-white px-4 py-14 text-black sm:px-6 sm:py-16 lg:px-8 dark:bg-black dark:text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        <h2 className="max-w-xl text-2xl leading-snug font-semibold tracking-tight sm:text-3xl">
          <span className="text-black dark:text-white">
            Join the banks and microfinance banks across Africa that run better
            with Insolify
          </span>{" "}
          <span className="text-[#888888]">
            — one platform for accounts, collections, transfers, and
            settlement.
          </span>
        </h2>

        {/* Flat, sliding customer logos */}
        <div className="customer-marquee-window relative min-w-0 overflow-hidden">
          <div className="customer-marquee flex w-max">
            <LogoRow />
            <LogoRow hidden />
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 pr-12 sm:gap-16 sm:pr-16"
      aria-hidden={hidden || undefined}
    >
      {half.map((customer, index) => (
        <li
          key={`${customer.name}-${index}`}
          className="flex h-14 shrink-0 items-center"
        >
          <Image
            src={customer.src}
            alt={hidden || index >= customers.length ? "" : customer.name}
            width={160}
            height={48}
            className="h-9 w-auto max-w-36 object-contain sm:h-11 sm:max-w-40"
          />
        </li>
      ))}
    </ul>
  );
}
