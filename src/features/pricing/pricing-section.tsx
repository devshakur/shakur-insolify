"use client";

import { useState } from "react";
import { ModuleBuilder } from "@/features/pricing/module-builder";
import {
  includedModuleIds,
  moduleIdsForPlan,
  planMatchesSelection,
} from "@/features/pricing/modules";
import {
  formatPrice,
  getProductPricing,
  pricingProductIds,
  productPricing,
  type PricingCurrency,
  type PricingPlan,
  type PricingProductId,
} from "@/features/pricing/plans";

export function PricingSection() {
  const [active, setActive] = useState<PricingProductId>("fincore");
  const [selectedIds, setSelectedIds] = useState<string[]>(() => includedModuleIds("fincore"));
  const catalog = getProductPricing(active);

  function selectProduct(id: PricingProductId, shouldFocus = false) {
    setActive(id);
    setSelectedIds(includedModuleIds(id));
    if (shouldFocus) {
      document.getElementById(`pricing-tab-${id}`)?.focus();
    }
  }

  function applyPlan(plan: PricingPlan) {
    setSelectedIds(moduleIdsForPlan(active, plan));
  }

  function toggleModule(id: string) {
    const included = includedModuleIds(active);
    if (included.includes(id)) return;
    setSelectedIds((current) => {
      const next = current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id];
      return Array.from(new Set([...included, ...next]));
    });
  }

  return (
    <section id="pricing" className="px-4 pb-8 sm:px-6 lg:px-10">
      <div className="rounded-4xl bg-white px-5 py-14 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-16 lg:py-20 dark:bg-[#141418] dark:shadow-none">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#8b8b93] dark:text-[#9A9AA3]">
            <SparkIcon />
            Pricing
          </p>
          <h1 className="mx-auto mt-4 max-w-xl text-balance text-[1.85rem] leading-[1.15] font-semibold tracking-tight text-[#111] sm:text-4xl lg:text-5xl dark:text-white">
            Curated Pricing Structure
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-[#8a8a8a] sm:text-[15px] dark:text-[#9CA3AF]">
            {catalog.blurb}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Pricing products"
            className="inline-flex max-w-full items-center gap-1.5 overflow-x-auto"
            onKeyDown={(event) => {
              const index = pricingProductIds.indexOf(active);
              const next =
                event.key === "ArrowRight"
                  ? pricingProductIds[(index + 1) % pricingProductIds.length]
                  : event.key === "ArrowLeft"
                    ? pricingProductIds[(index - 1 + pricingProductIds.length) % pricingProductIds.length]
                    : event.key === "Home"
                      ? pricingProductIds[0]
                      : event.key === "End"
                        ? pricingProductIds[pricingProductIds.length - 1]
                        : null;
              if (!next) return;
              event.preventDefault();
              selectProduct(next, true);
            }}
          >
            {productPricing.map((product) => {
              const selected = product.id === active;
              return (
                <button
                  key={product.id}
                  type="button"
                  role="tab"
                  id={`pricing-tab-${product.id}`}
                  aria-selected={selected}
                  aria-controls="pricing-plans"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectProduct(product.id)}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                    selected
                      ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                      : "bg-[#f2f2f4] text-[#111] hover:bg-[#e8e8ec] dark:bg-[#2a2a30] dark:text-white dark:hover:bg-[#33333a]"
                  }`}
                >
                  <ToggleMark id={product.id} />
                  {product.name}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id="pricing-plans"
          aria-labelledby={`pricing-tab-${active}`}
          className="mx-auto mt-12 grid max-w-5xl items-stretch gap-4 lg:mt-14 lg:grid-cols-3 lg:gap-5"
        >
          {catalog.plans.map((plan) => (
            <PricingCard
              key={`${active}-${plan.id}`}
              plan={plan}
              currency={catalog.currency}
              applied={planMatchesSelection(active, plan, selectedIds)}
              onApply={() => applyPlan(plan)}
            />
          ))}
        </div>

        <ModuleBuilder
          productId={active}
          selectedIds={selectedIds}
          onToggle={toggleModule}
        />
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  currency,
  applied,
  onApply,
}: {
  plan: PricingPlan;
  currency: PricingCurrency;
  applied: boolean;
  onApply: () => void;
}) {
  const recommended = Boolean(plan.recommended);

  return (
    <article
      className={`relative flex cursor-pointer flex-col rounded-[1.75rem] px-6 pt-8 pb-7 sm:px-7 ${
        recommended
          ? "bg-[#eef0ff] dark:bg-[#1d1b2c]"
          : "border border-[#eeeef2] bg-white dark:border-white/8 dark:bg-[#18181d]"
      } ${applied ? "ring-2 ring-[#7b61ff] ring-offset-2 ring-offset-white dark:ring-offset-[#141418]" : ""}`}
      onClick={onApply}
    >
      <p
        className={`mb-4 inline-flex items-center gap-1.5 text-[13px] font-medium ${
          recommended ? "text-[#7b61ff]" : "invisible max-lg:hidden"
        }`}
      >
        <SparkIcon />
        Most Recommended
      </p>

      <h2 className="text-[1.65rem] leading-none font-semibold tracking-tight text-[#111] dark:text-white">
        {plan.name}
      </h2>
      <p className="mt-4 text-[2rem] leading-none font-semibold tracking-tight text-[#111] sm:text-[2.15rem] dark:text-white">
        {formatPrice(plan.yearly, currency)}
        <span className="text-[1.05rem] font-medium text-[#8a8a8a] dark:text-[#9CA3AF]">
          /yr
        </span>
      </p>
      {plan.setup > 0 ? (
        <p className="mt-2 text-sm text-[#8a8a8a] dark:text-[#9CA3AF]">
          {formatPrice(plan.setup, currency)} one-time setup
        </p>
      ) : (
        <p className="mt-2 text-sm text-transparent select-none max-lg:hidden">
          No setup fee
        </p>
      )}
      <p className="mt-4 min-h-12 text-sm leading-6 text-[#8a8a8a] dark:text-[#9CA3AF]">
        {plan.description}
      </p>

      <a
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
        className={`mt-6 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors ${
          recommended
            ? "bg-[#7b61ff] text-white hover:bg-[#6a4ff0]"
            : "border border-[#ececf1] bg-[#f7f7f9] text-[#111] hover:bg-[#f0f0f3] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
        }`}
      >
        {plan.cta}
      </a>

      <ul className="mt-7 flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-[#6d6d6d] dark:text-[#C8C8C8]"
          >
            <CheckIcon />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function ToggleMark({ id }: { id: PricingProductId }) {
  if (id === "safi") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path
          d="M8 1.6c1.9 2.4 3.7 4.5 3.7 7a3.7 3.7 0 1 1-7.4 0c0-2.5 1.8-4.6 3.7-7Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (id === "settle") {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <rect x="3.2" y="3.2" width="9.6" height="9.6" rx="2.4" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 1.4 8.85 7.15 14.6 8 8.85 8.85 8 14.6 7.15 8.85 1.4 8 7.15 7.15 8 1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M6 1.1 6.7 5.3 10.9 6 6.7 6.7 6 10.9 5.3 6.7 1.1 6 5.3 5.3 6 1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden
      className="mt-0.5 shrink-0 text-[#c5c5cc] dark:text-[#6B6B73]"
    >
      <circle cx="9" cy="9" r="7.15" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
