"use client";

import Link from "next/link";
import { useState, type KeyboardEvent } from "react";

const docsHref = "https://docs.insolify.com/";

const figures = [
  {
    id: "fincore",
    label: "Fincore",
    title: "Core banking",
    href: "/fincore",
    detail:
      "Run accounts, lending, and digital channels from one core. Add the modules an institution needs and integrate them into the systems it already uses.",
  },
  {
    id: "safi",
    label: "Safi AI",
    title: "Intelligence for finance teams",
    href: "/safi",
    detail:
      "Put support, risk checks, and research in one assistant. Teams keep the decisions. Safi takes the work they repeat.",
  },
  {
    id: "settle",
    label: "Settle Africa",
    title: "Payments across Africa",
    href: "/settle",
    detail:
      "Move money on local and cross-border rails built for African markets. Settlement and reconciliation sit in the same platform.",
  },
] as const;

type FigureId = (typeof figures)[number]["id"];

const marks: Record<FigureId, { kicker: string; value: string; rows: [string, string][] }> = {
  fincore: {
    kicker: "Ledger",
    value: "₦12.48m",
    rows: [
      ["Accounts", "Live"],
      ["Lending", "Live"],
      ["Channels", "Live"],
    ],
  },
  safi: {
    kicker: "Review",
    value: "₦2.40m",
    rows: [
      ["Transfer", "Held"],
      ["Risk", "Clear"],
      ["Decision", "Approve"],
    ],
  },
  settle: {
    kicker: "Transfer",
    value: "₦850,000",
    rows: [
      ["From", "Lagos"],
      ["To", "Nairobi"],
      ["Status", "Settled"],
    ],
  },
};

export function ProductFigures() {
  const [active, setActive] = useState<FigureId>("fincore");
  const selected = figures.find((figure) => figure.id === active) ?? figures[0];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const index = figures.findIndex((figure) => figure.id === active);
    const next =
      event.key === "ArrowDown" || event.key === "ArrowRight"
        ? figures[(index + 1) % figures.length]
        : event.key === "ArrowUp" || event.key === "ArrowLeft"
          ? figures[(index - 1 + figures.length) % figures.length]
          : event.key === "Home"
            ? figures[0]
            : event.key === "End"
              ? figures[figures.length - 1]
              : null;
    if (!next) return;
    event.preventDefault();
    setActive(next.id);
    document.getElementById(`product-tab-${next.id}`)?.focus();
  }

  return (
    <section aria-label="Products" className="bg-black px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-stretch gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-12">
        <div
          role="tablist"
          aria-label="Products"
          aria-orientation="vertical"
          className="flex flex-col gap-1"
          onKeyDown={onKeyDown}
        >
          {figures.map((figure) => {
            const selectedTab = figure.id === active;
            return (
              <button
                key={figure.id}
                id={`product-tab-${figure.id}`}
                type="button"
                role="tab"
                aria-selected={selectedTab}
                aria-controls="product-panel"
                tabIndex={selectedTab ? 0 : -1}
                onClick={() => setActive(figure.id)}
                className={`border-l-2 px-4 py-3 text-left text-[15px] transition-colors ${
                  selectedTab
                    ? "border-white text-white"
                    : "border-transparent text-[#8a8a8a] hover:text-white"
                }`}
              >
                {figure.label}
              </button>
            );
          })}
        </div>

        <div
          id="product-panel"
          role="tabpanel"
          aria-labelledby={`product-tab-${selected.id}`}
          className="rounded-2xl bg-white px-6 py-8 text-black sm:px-8 sm:py-10 lg:px-10"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-black sm:text-[1.7rem]">{selected.title}</h2>
              <p className="mt-4 max-w-md text-[15px] leading-7 text-[#5c5c5c]">{selected.detail}</p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <Link
                  href={selected.href}
                  className="inline-flex h-11 items-center rounded-md bg-black px-5 text-sm font-semibold text-white transition-colors hover:bg-[#2a2a2a]"
                >
                  Learn more
                </Link>
                <a
                  href={docsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-black/70"
                >
                  Documentation
                  <span aria-hidden="true">›</span>
                </a>
              </div>
            </div>
            <ProductMark id={selected.id} label={selected.label} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductMark({ id, label }: { id: FigureId; label: string }) {
  const mark = marks[id];

  return (
    <div className="flex min-h-56 items-center rounded-xl bg-black px-6 py-7">
      <div className="w-full" aria-hidden>
        <p className="text-[11px] tracking-[0.18em] text-white/45 uppercase">{mark.kicker}</p>
        <p className="mt-3 text-[1.65rem] leading-none font-medium tracking-tight text-white tabular-nums">
          {mark.value}
        </p>
        <div className="mt-5 border-t border-white/15">
          {mark.rows.map(([name, value]) => (
            <div key={name} className="flex h-10 items-center justify-between border-b border-white/15 text-[13px]">
              <span className="text-white/55">{name}</span>
              <span className="text-white">{value}</span>
            </div>
          ))}
        </div>
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}
