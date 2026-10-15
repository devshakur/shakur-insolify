import Link from "next/link";
import { NodesIcon } from "@/features/products/icons";
import { getProduct } from "@/features/products/products";
import { getProductModules } from "@/features/pricing/modules";

const stats = [
  { value: "12", label: "Modules" },
  { value: "Per module", label: "Pricing" },
  { value: "Phased", label: "Rollout" },
] as const;

export function FincoreSection() {
  const product = getProduct("fincore");

  return (
    <section id="fincore" className="px-4 pb-8 sm:px-6 lg:px-10">
      <div className="rounded-4xl bg-white px-5 py-12 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-14 lg:py-16 dark:bg-[#141418] dark:shadow-none">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-[15px] font-semibold tracking-tight text-[#111] dark:text-white">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111]">
                <NodesIcon />
              </span>
              Fincore
            </p>
            <h1 className="mt-6 max-w-xl text-[2.15rem] leading-[1.08] font-semibold tracking-tight text-[#111] sm:text-5xl dark:text-white">
              A modern core for financial institutions
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#6B7280] sm:text-[15px] dark:text-[#9CA3AF]">
              A modular, scalable core banking system — 12 deployable modules
              covering accounts, lending, cards, and digital and agency banking.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <Link
                href="mailto:sales@insolify.com?subject=Fincore%20demo"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#111] px-5 text-sm font-medium text-white transition-colors hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
              >
                Request a demo
                <ArrowIcon />
              </Link>
              <Link
                href="#fincore-modules"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#f2f2f4] px-5 text-sm font-medium text-[#111] transition-colors hover:bg-[#e8e8ec] dark:bg-[#2a2a30] dark:text-white dark:hover:bg-[#33333a]"
              >
                View modules
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

          <FincoreHub />
        </div>
      </div>
    </section>
  );
}

// One core, twelve modules — drawn as a wheel instead of a fake dashboard,
// since "twelve modules around one core" is literally what Fincore is.
// Dots sit on the guide circle; labels sit outside it, aligned away from
// the center so left-half and right-half text never crowd the middle.
function FincoreHub() {
  const modules = getProductModules("fincore");
  const dotRadius = 36;
  const labelRadius = 47;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[34rem] py-6">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full text-[#e9e9ee] dark:text-white/10"
        aria-hidden
      >
        <circle cx="50" cy="50" r={dotRadius} fill="none" stroke="currentColor" strokeWidth="0.4" />
        {modules.map((_, i) => {
          const angle = (i / modules.length) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + dotRadius * Math.cos(angle);
          const y = 50 + dotRadius * Math.sin(angle);
          return (
            <line key={`spoke-${i}`} x1="50" y1="50" x2={x} y2={y} stroke="currentColor" strokeWidth="0.35" />
          );
        })}
        {modules.map((_, i) => {
          const angle = (i / modules.length) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + dotRadius * Math.cos(angle);
          const y = 50 + dotRadius * Math.sin(angle);
          return (
            <circle key={`dot-${i}`} cx={x} cy={y} r="1.1" className="fill-[#111] dark:fill-white" />
          );
        })}
      </svg>

      {/* Core */}
      <div className="absolute top-1/2 left-1/2 flex size-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full bg-[#111] text-center text-white shadow-[0_12px_40px_rgba(17,17,17,0.25)] dark:bg-white dark:text-[#111]">
        <NodesIcon />
        <span className="text-[11px] leading-tight font-semibold tracking-tight">
          Core
          <br />
          Banking
        </span>
      </div>

      {/* Module labels — anchored outside the dot, aligned away from center */}
      {modules.map((module, i) => {
        const angle = (i / modules.length) * 2 * Math.PI - Math.PI / 2;
        const cos = Math.cos(angle);
        const x = 50 + labelRadius * cos;
        const y = 50 + labelRadius * Math.sin(angle);
        const align = cos > 0.25 ? "items-start text-left" : cos < -0.25 ? "items-end text-right" : "items-center text-center";
        return (
          <div
            key={module.id}
            className={`absolute flex w-24 -translate-x-1/2 -translate-y-1/2 flex-col ${align}`}
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span className="text-[11px] leading-tight font-medium text-[#6B7280] dark:text-[#9CA3AF]">
              {module.name}
            </span>
          </div>
        );
      })}
    </div>
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