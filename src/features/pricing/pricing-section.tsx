"use client";

import Link from "next/link";
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
      <div className="relative overflow-hidden rounded-4xl bg-black px-5 pt-14 pb-36 text-white sm:rounded-[2.75rem] sm:px-10 sm:pt-16 sm:pb-40 lg:px-16 dark:bg-white dark:text-black">
        <PricingBackdrop />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/60 dark:text-black/60">
            <SparkIcon />
            Pricing
          </p>
          <h1 className="mx-auto mt-4 max-w-xl text-balance text-[1.85rem] leading-[1.15] font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-white/65 sm:text-[15px] dark:text-black/65">
            {catalog.blurb}
          </p>
        </div>

        <div className="relative z-10 mt-9 flex justify-center">
          <div
            role="tablist"
            aria-label="Pricing products"
            className="inline-flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-white/20 bg-white p-1 dark:border-black/20 dark:bg-black"
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
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selected
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "text-black/60 hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  <ToggleMark id={product.id} />
                  {product.name}
                </button>
              );
            })}
          </div>
        </div>

      </div>

      <div className="relative z-20 mx-auto -mt-28 max-w-5xl px-3 sm:-mt-32 sm:px-6">
        <div
          role="tabpanel"
          id="pricing-plans"
          aria-labelledby={`pricing-tab-${active}`}
          className="grid items-stretch gap-5 lg:grid-cols-3"
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

        <div className="mt-10 rounded-4xl bg-white px-2 py-1 shadow-[0_24px_80px_rgba(0,0,0,0.08)] sm:px-6 dark:bg-black dark:shadow-[0_24px_80px_rgba(255,255,255,0.04)]">
          <ModuleBuilder
            productId={active}
            selectedIds={selectedIds}
            onToggle={toggleModule}
          />
        </div>
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
      className={`group relative flex cursor-pointer flex-col rounded-3xl border bg-white px-6 pt-7 pb-7 text-black shadow-[0_18px_50px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_70px_rgba(0,0,0,0.16)] sm:px-7 dark:bg-black dark:text-white dark:shadow-[0_18px_50px_rgba(255,255,255,0.06)] ${
        recommended
          ? "border-black dark:border-white"
          : "border-black/10 dark:border-white/15"
      } ${applied ? "ring-2 ring-black ring-offset-2 ring-offset-white dark:ring-white dark:ring-offset-black" : ""}`}
      onClick={onApply}
    >
      <div className="mb-5 flex min-h-8 items-center justify-between gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-semibold text-white transition-transform duration-300 group-hover:scale-110 dark:bg-white dark:text-black">
          {plan.id === "starter" ? "01" : plan.id === "growth" ? "02" : "03"}
        </span>
        {recommended ? (
          <span className="inline-flex items-center gap-1.5 text-[12px] font-medium">
            <SparkIcon />
            Most Recommended
          </span>
        ) : null}
      </div>

      <h2 className="text-[1.65rem] leading-none font-semibold tracking-tight">
        {plan.name}
      </h2>
      <p className="mt-4 text-[2rem] leading-none font-semibold tracking-tight sm:text-[2.15rem]">
        {formatPrice(plan.yearly, currency)}
        <span className="text-[1.05rem] font-medium text-black/50 dark:text-white/50">
          /yr
        </span>
      </p>
      {plan.setup > 0 ? (
        <p className="mt-2 text-sm text-black/50 dark:text-white/50">
          {formatPrice(plan.setup, currency)} one-time setup
        </p>
      ) : (
        <p className="mt-2 text-sm text-transparent select-none max-lg:hidden">
          No setup fee
        </p>
      )}
      <p className="mt-4 min-h-12 text-sm leading-6 text-black/60 dark:text-white/60">
        {plan.description}
      </p>

      <Link
        href={plan.href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
        className={`mt-6 inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-medium transition-colors ${
          recommended
            ? "bg-black text-white hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
            : "border border-black/15 bg-white text-black hover:bg-black hover:text-white dark:border-white/20 dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        }`}
      >
        {plan.cta}
      </Link>

      <ul className="mt-7 flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-sm text-black/65 dark:text-white/65"
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
      className="mt-0.5 shrink-0 text-black/35 dark:text-white/35"
    >
      <circle cx="9" cy="9" r="7.15" stroke="currentColor" strokeWidth="1.4" />
      <path d="m6 9 2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PricingBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -bottom-10 -left-10 h-48 w-24 rounded-t-3xl bg-white/8 dark:bg-black/8" />
      <div className="absolute -bottom-8 left-12 h-36 w-24 rounded-t-3xl bg-white/8 dark:bg-black/8" />
      <div className="absolute -bottom-6 left-32 h-24 w-24 rounded-t-3xl bg-white/8 dark:bg-black/8" />
      <div className="absolute -right-10 -bottom-10 h-48 w-24 rounded-t-3xl bg-white/8 dark:bg-black/8" />
      <div className="absolute right-12 -bottom-8 h-36 w-24 rounded-t-3xl bg-white/8 dark:bg-black/8" />
      <div className="absolute right-32 -bottom-6 h-24 w-24 rounded-t-3xl bg-white/8 dark:bg-black/8" />
    </div>
  );
}
