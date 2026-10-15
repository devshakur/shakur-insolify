import Link from "next/link";
import { LoopIcon } from "@/features/products/icons";
import { getProduct } from "@/features/products/products";
import { SettlePreview } from "@/features/settle/settle-preview";

const stats = [
  { value: "Pan-African", label: "Coverage" },
  { value: "4", label: "Payout rails" },
  { value: "Lower fees", label: "Vs. banks" },
] as const;

export function SettleSection() {
  const product = getProduct("settle");

  return (
    <section id="settle" className="px-4 pb-8 sm:px-6 lg:px-10">
      <div className="rounded-4xl bg-white px-5 py-12 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-14 lg:py-16 dark:bg-[#141418] dark:shadow-none">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[#111] dark:text-white">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111]">
                <LoopIcon />
              </span>
              Settle Africa
            </p>
            <h1 className="mt-6 max-w-xl text-[2.15rem] leading-[1.08] font-semibold tracking-tight text-[#111] sm:text-5xl dark:text-white">
              Fast, flexible, and secure money transfers
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#6B7280] sm:text-[15px] dark:text-[#9CA3AF]">
              {product.description} Send across Africa and beyond with fees shown
              upfront, and track every payout in TVerify.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <Link
                href="https://dash.insolify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#111] px-5 text-sm font-medium text-white transition-colors hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
              >
                Start a transfer
                <ArrowIcon />
              </Link>
              <Link
                href="#settle-methods"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#f2f2f4] px-5 text-sm font-medium text-[#111] transition-colors hover:bg-[#e8e8ec] dark:bg-[#2a2a30] dark:text-white dark:hover:bg-[#33333a]"
              >
                Learn more
                <ArrowIcon />
              </Link>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-[#eeeef2] pt-8 dark:border-white/10">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[11px] text-[#8a8a8a] dark:text-[#9CA3AF]">{stat.label}</dt>
                  <dd className="mt-1 text-xl font-semibold tracking-tight text-[#111] sm:text-2xl dark:text-white">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <SettlePreview />
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3 7h8M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}