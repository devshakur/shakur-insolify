import Link from "next/link";
import { getProductModules } from "@/features/pricing/modules";

const steps = [
  {
    n: "01",
    title: "Create an account",
    body: "Sign up on the app or web, then lock the workspace with a strong password.",
  },
  {
    n: "02",
    title: "Verify your details",
    body: "We confirm who you are in a few minutes so every payout stays compliant.",
  },
  {
    n: "03",
    title: "Start the transfer",
    body: "Pick the corridor and receive method. Fees, rates, and arrival time stay visible.",
  },
] as const;

const trust = [
  {
    title: "Licensed & regulated",
    body: "Authorised by financial regulators in multiple countries.",
  },
  {
    title: "Secure transactions",
    body: "Transfers are protected with encryption and ongoing screening.",
  },
  {
    title: "24/7 support",
    body: "Help is available around the clock, including in-app chat.",
  },
] as const;

export function SettleMethods() {
  const methods = getProductModules("settle").filter((module) => module.id !== "transfer-platform");

  return (
    <section id="settle-methods" className="scroll-mt-28 px-4 pb-4 sm:px-6 lg:px-10">
      <div className="rounded-4xl bg-white px-5 py-12 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-14 dark:bg-[#141418] dark:shadow-none">
        <div className="max-w-2xl">
          <p className="text-[13px] font-medium text-[#8b8b93] dark:text-[#9A9AA3]">Rails</p>
          <h2 className="mt-2 text-[1.85rem] leading-[1.15] font-semibold tracking-tight text-[#111] sm:text-4xl dark:text-white">
            Ways to send money
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#6B7280] dark:text-[#9CA3AF]">
            Cost and speed depend on the receiving country, the payout rail, and
            how the transfer is paid for. There are no hidden fees.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {methods.map((method) => (
            <li
              key={method.id}
              className="rounded-3xl border border-[#eeeef2] bg-[#f8f8fa] p-5 dark:border-white/10 dark:bg-[#1c1c22]"
            >
              <h3 className="text-sm font-semibold text-[#111] dark:text-white">{method.name}</h3>
              <p className="mt-2 text-xs leading-5 text-[#6B7280] dark:text-[#9CA3AF]">
                {method.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {method.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-2.5 py-1 text-[11px] text-[#6d6d6d] dark:bg-white/10 dark:text-[#c8c8c8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <h3 className="text-[1.35rem] font-semibold tracking-tight text-[#111] dark:text-white">
            How a transfer works
          </h3>
          <ol className="mt-6 grid gap-3 lg:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.n}
                className="rounded-3xl border border-[#eeeef2] px-5 py-5 dark:border-white/10"
              >
                <p className="text-[11px] font-medium tracking-[0.18em] text-[#8a8a8a] uppercase">
                  {step.n}
                </p>
                <p className="mt-3 text-sm font-semibold text-[#111] dark:text-white">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280] dark:text-[#9CA3AF]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10 grid gap-3 lg:grid-cols-3">
          {trust.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-[#f8f8fa] px-5 py-5 dark:bg-[#1c1c22]"
            >
              <h3 className="text-sm font-semibold text-[#111] dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280] dark:text-[#9CA3AF]">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          <Link
            href="/tverify"
            className="inline-flex h-11 items-center rounded-full bg-[#111] px-5 text-sm font-medium text-white transition-colors hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
          >
            Track a payment
          </Link>
          <Link
            href="/pricing"
            className="inline-flex h-11 items-center rounded-full bg-[#f2f2f4] px-5 text-sm font-medium text-[#111] transition-colors hover:bg-[#e8e8ec] dark:bg-[#2a2a30] dark:text-white dark:hover:bg-[#33333a]"
          >
            See Settle pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
