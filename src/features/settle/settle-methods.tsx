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

        <ul className="mt-10 flex flex-col">
          {methods.map((method, i) => (
            <li
              key={method.id}
              className={`flex flex-col gap-4 border-t border-[#eeeef2] py-6 sm:flex-row sm:items-baseline sm:gap-10 dark:border-white/10 ${
                i === methods.length - 1 ? "border-b" : ""
              }`}
            >
              <h3 className="shrink-0 text-base font-semibold text-[#111] sm:w-48 dark:text-white">
                {method.name}
              </h3>
              <p className="text-sm leading-6 text-[#6B7280] dark:text-[#9CA3AF]">
                {method.description} {method.tags.slice(0, 3).join(", ")}.
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <h3 className="text-[1.35rem] font-semibold tracking-tight text-[#111] dark:text-white">
            How a transfer works
          </h3>
          <ol className="relative mt-8 flex flex-col gap-10 border-l border-[#eeeef2] pl-8 dark:border-white/10 lg:flex-row lg:gap-6 lg:border-l-0 lg:border-t lg:pt-8 lg:pl-0">
            {steps.map((step) => (
              <li key={step.n} className="relative flex-1">
                <span className="absolute top-0 -left-[2.55rem] flex size-6 items-center justify-center rounded-full bg-[#111] text-[10px] font-semibold text-white lg:-top-[2.55rem] lg:left-0 dark:bg-white dark:text-[#111]">
                  {step.n.replace("0", "")}
                </span>
                <p className="text-sm font-semibold text-[#111] dark:text-white">{step.title}</p>
                <p className="mt-2 text-sm leading-6 text-[#6B7280] dark:text-[#9CA3AF]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:gap-10">
          {trust.map((item) => (
            <div key={item.title} className="flex-1">
              <h3 className="text-sm font-semibold text-[#111] dark:text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#6B7280] dark:text-[#9CA3AF]">{item.body}</p>
            </div>
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