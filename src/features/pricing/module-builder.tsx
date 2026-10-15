import Link from "next/link";
import { formatPrice, type PricingProductId } from "@/features/pricing/plans";
import {
  getProductModules,
  summarizeEstimate,
  type PricingModule,
} from "@/features/pricing/modules";

const catalogCopy: Record<PricingProductId, { title: string; subtitle: string }> = {
  fincore: {
    title: "Assemble your Fincore stack",
    subtitle: "Core banking software for microfinance and commercial banks.",
  },
  safi: {
    title: "Assemble your Safi stack",
    subtitle: "Conversational AI for support, operations, and institutional work.",
  },
  settle: {
    title: "Assemble your Settle stack",
    subtitle: "Payments infrastructure for transfers across African rails.",
  },
};

type ModuleBuilderProps = {
  productId: PricingProductId;
  selectedIds: string[];
  onToggle: (id: string) => void;
};

export function ModuleBuilder({ productId, selectedIds, onToggle }: ModuleBuilderProps) {
  const modules = getProductModules(productId);
  const estimate = summarizeEstimate(productId, selectedIds);
  const copy = catalogCopy[productId];

  return (
    <div className="mt-16 border-t border-[#eeeef2] pt-14 dark:border-white/8 lg:mt-20 lg:pt-16">
      <div className="max-w-xl">
        <p className="text-[13px] font-medium text-[#8b8b93] dark:text-[#9A9AA3]">
          Custom estimate
        </p>
        <h2 className="mt-2 text-[1.85rem] leading-[1.15] font-semibold tracking-tight text-[#111] sm:text-4xl dark:text-white">
          {copy.title}
        </h2>
        <p className="mt-3 text-sm leading-6 text-[#8a8a8a] dark:text-[#9CA3AF]">
          {copy.subtitle} Add modules and watch the yearly total update live.
        </p>
      </div>

      <div className="mt-10 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-8">
        <ul className="flex flex-col gap-3">
          {modules.map((module) => (
            <ModuleRow
              key={module.id}
              module={module}
              selected={selectedIds.includes(module.id)}
              currency={estimate.currency}
              onToggle={() => onToggle(module.id)}
            />
          ))}
        </ul>

        <aside className="lg:sticky lg:top-28">
          <div className="rounded-[1.75rem] bg-[#111] px-6 py-7 text-white dark:bg-[#1a1a20]">
            <h3 className="text-lg font-semibold tracking-tight">Your estimate</h3>
            <p className="mt-1 text-sm leading-6 text-white/55">
              Setup is one-time. The annual fee renews each year.
            </p>

            <ul className="mt-6 flex flex-col gap-3">
              {estimate.modules.map((module) => (
                <li key={module.id} className="flex items-start justify-between gap-4 text-sm">
                  <span className="text-white/80">
                    {module.name}
                    {module.included ? (
                      <span className="text-white/40"> (base)</span>
                    ) : null}
                  </span>
                  <span className="shrink-0 tabular-nums">
                    {formatPrice(module.yearly, estimate.currency)}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2 border-t border-white/10 pt-5 text-sm">
              <div className="flex justify-between gap-4 text-white/70">
                <span>One-time setup</span>
                <span className="tabular-nums">{formatPrice(estimate.setup, estimate.currency)}</span>
              </div>
              <div className="flex justify-between gap-4 text-white/70">
                <span>Annual subtotal</span>
                <span className="tabular-nums">{formatPrice(estimate.yearly, estimate.currency)}</span>
              </div>
            </div>

            <div className="mt-5 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs tracking-[0.16em] text-white/40 uppercase">
                  Estimated total
                </p>
                <p className="mt-1 text-[1.85rem] leading-none font-semibold tracking-tight">
                  {formatPrice(estimate.setup + estimate.yearly, estimate.currency)}
                </p>
                <p className="mt-2 text-xs text-white/40">setup + annual</p>
              </div>
            </div>

            <Link
              href="https://dash.insolify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-[#111] transition-colors hover:bg-[#f3f3f3]"
            >
              Get Started
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="mailto:sales@insolify.com"
              className="mt-3 inline-flex h-11 w-full items-center justify-center rounded-full text-sm text-white/70 transition-colors hover:text-white"
            >
              Talk to sales
            </Link>
          </div>
          <p className="mt-4 px-2 text-xs leading-5 text-[#9CA3AF]">
            This is an estimate. Final pricing may vary based on deployment,
            customization, and contract terms.
          </p>
        </aside>
      </div>
    </div>
  );
}

function ModuleRow({
  module,
  selected,
  currency,
  onToggle,
}: {
  module: PricingModule;
  selected: boolean;
  currency: ReturnType<typeof summarizeEstimate>["currency"];
  onToggle: () => void;
}) {
  return (
    <li>
      <button
        type="button"
        role="checkbox"
        aria-checked={selected}
        aria-disabled={module.included}
        onClick={module.included ? undefined : onToggle}
        className={`flex w-full flex-col rounded-[1.6rem] px-5 py-5 text-left transition-colors sm:flex-row sm:items-start sm:gap-5 ${
          selected
            ? "border border-black bg-black/5 dark:border-white dark:bg-white/10"
            : "border border-[#eeeef2] bg-[#fafafa] hover:bg-[#f4f4f7] dark:border-white/8 dark:bg-[#18181d] dark:hover:bg-[#1c1c22]"
        } ${module.included ? "cursor-default" : ""}`}
      >
        <span
          className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border ${
            selected
              ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
              : "border-[#d5d5dc] bg-white text-transparent dark:border-white/20 dark:bg-transparent"
          }`}
        >
          <CheckMini />
        </span>

        <span className="mt-3 min-w-0 flex-1 sm:mt-0">
          <span className="flex flex-wrap items-center gap-2">
            <span className="text-base font-semibold tracking-tight text-[#111] dark:text-white">
              {module.name}
            </span>
            {module.included ? (
              <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-black dark:bg-white/10 dark:text-white">
                Included
              </span>
            ) : null}
            {module.popular ? (
              <span className="rounded-full bg-[#111] px-2 py-0.5 text-[11px] font-medium text-white dark:bg-white dark:text-[#111]">
                Popular
              </span>
            ) : null}
          </span>
          <span className="mt-2 block text-sm leading-6 text-[#8a8a8a] dark:text-[#9CA3AF]">
            {module.description}
          </span>
          <span className="mt-3 flex flex-wrap gap-1.5">
            {module.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] text-[#6d6d6d] dark:bg-white/8 dark:text-[#C8C8C8]"
              >
                {tag}
              </span>
            ))}
          </span>
        </span>

        <span className="mt-4 shrink-0 text-left sm:mt-0 sm:text-right">
          {module.setup > 0 ? (
            <span className="block text-xs text-[#8a8a8a] dark:text-[#9CA3AF]">
              {formatPrice(module.setup, currency)} setup
            </span>
          ) : null}
          <span className="block text-sm font-semibold text-[#111] dark:text-white">
            {formatPrice(module.yearly, currency)}
            <span className="font-medium text-[#8a8a8a] dark:text-[#9CA3AF]">/yr</span>
          </span>
        </span>
      </button>
    </li>
  );
}

function CheckMini() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.6 6.2 4.8 8.4 9.4 3.6"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
