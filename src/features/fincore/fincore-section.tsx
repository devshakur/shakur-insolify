import Link from "next/link";
import { NodesIcon } from "@/features/products/icons";
import { getProduct } from "@/features/products/products";

const stats = [
  { value: "12", label: "Modules" },
  { value: "4–6", label: "Weeks to deploy" },
  { value: "100%", label: "Modular" },
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
              {product.description} Built on secure, scalable cloud architecture
              with 12 deployable modules — from teller operations and cards to
              digital and agency banking.
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

          <FincoreDashboard />
        </div>
      </div>
    </section>
  );
}

function FincoreDashboard() {
  return (
    <div className="overflow-hidden rounded-4xl border border-[#ececf1] bg-[#f8f8fa] shadow-[0_24px_80px_rgba(20,16,40,0.08)] dark:border-white/10 dark:bg-[#16161b] dark:shadow-none">
      <div className="flex items-center justify-between bg-[#111] px-5 py-4 text-white">
        <span className="inline-flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-full bg-white/10">
            <NodesIcon />
          </span>
          <span>
            <span className="block text-sm font-semibold tracking-tight">Fincore Dashboard</span>
            <span className="mt-0.5 block text-[11px] text-white/60">Real-time banking operations</span>
          </span>
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] text-white/80">
          <span className="size-1.5 rounded-full bg-[#3DDC84]" />
          Optimal
        </span>
      </div>

      <div className="grid gap-3 p-4 sm:grid-cols-3">
        {[
          { label: "Total deposits", value: "₦85.2M" },
          { label: "Active customers", value: "4.2K" },
          { label: "Transactions / day", value: "12.4K" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-[1.3rem] bg-white px-4 py-4 dark:bg-[#1c1c22]"
          >
            <p className="text-[11px] text-[#8a8a8a] dark:text-[#9CA3AF]">{item.label}</p>
            <p className="mt-2 text-xl font-semibold tracking-tight text-[#111] dark:text-white">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="px-4 pb-4">
        <div className="rounded-[1.3rem] bg-white px-4 py-4 dark:bg-[#1c1c22]">
          <p className="text-[11px] font-medium tracking-wide text-[#8a8a8a] uppercase dark:text-[#9CA3AF]">
            System status
          </p>
          <ul className="mt-3 space-y-3">
            {[
              { label: "Last backup", value: "2 minutes ago" },
              { label: "Security", value: "Secure" },
              { label: "Ledger sync", value: "Posted in real time" },
            ].map((item) => (
              <li key={item.label} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-[#6B7280] dark:text-[#9CA3AF]">{item.label}</span>
                <span className="font-medium text-[#111] dark:text-white">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
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
