"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const ctoProblems = [
  {
    title: "Monolithic Core Banking Infrastructure",
    description:
      "Legacy systems lock you into rigid schemas. New channels take months to integrate and reconciliation stays error-prone.",
  },
  {
    title: "Siloed Risk & Compliance Engines",
    description:
      "Fraud detection and AML run on disconnected tools. Teams lose time checking transactions across fragmented dashboards.",
  },
  {
    title: "Externalized Payment Rails",
    description:
      "Cross-border transfers sit outside the core ledger, causing delayed liquidity updates and complex multi-currency matching.",
  },
];

const solutions = [
  {
    id: "fincore",
    name: "Fincore Engine",
    href: "/fincore",
    body: "API-first core banking engine with real-time multi-currency ledgers, automated reconciliation, and modular channel orchestration.",
    turn: 210,
  },
  {
    id: "safi",
    name: "Safi AI Platform",
    href: "/safi",
    body: "AI risk engine wired into the core ledger. Real-time fraud detection, automated AML compliance, and multi-lingual support.",
    turn: 20,
  },
  {
    id: "settle",
    name: "Settle Africa Rail",
    href: "/settle",
    body: "Cross-border rails embedded beside the core. Instant mobile money, cash pickup, and pan-African settlement with built-in compliance.",
    turn: 200,
  },
] as const;

const circlePlace = [
  "z-0 lg:translate-y-2",
  "z-10 -mt-16 lg:mt-0 lg:-ml-12 lg:-translate-y-5 xl:-ml-16",
  "z-0 -mt-16 lg:mt-0 lg:-ml-12 lg:translate-y-2 xl:-ml-16",
] as const;

const copyPlace = [
  "items-start justify-center pt-9 lg:items-center lg:justify-start lg:pt-0 lg:pl-[9%]",
  "items-start justify-center pt-9 lg:items-center lg:justify-center lg:pt-0",
  "items-center justify-center px-[20%] py-[16%]",
] as const;

export function ProblemSolutions() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rings = [
      ...section.querySelectorAll<SVGCircleElement>("[data-arc]"),
    ].filter((ring) => ring.getTotalLength() > 0);
    rings.forEach((ring) => {
      const length = ring.getTotalLength();
      const gap = length * 0.2;
      ring.style.strokeDasharray = `${length - gap} ${gap}`;
      ring.style.strokeDashoffset = `${length}`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        rings.forEach((ring, index) => {
          ring.style.transition = `stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${
            index * 0.18
          }s`;
          ring.style.strokeDashoffset = "0";
        });
        observer.disconnect();
      },
      { threshold: 0.15 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="problems"
      className="relative overflow-hidden bg-white px-4 py-12 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white"
    >
      <Contours />
      <div className="relative mx-auto grid w-full  items-center gap-12 lg:grid-cols-[minmax(18rem,0.82fr)_minmax(0,1.45fr)] lg:gap-8">
        {/* Left Column: CTO Pain Points */}
        <article className="relative z-10 w-full rounded-3xl border border-black/10 bg-white/80 p-6 backdrop-blur-md sm:p-8 dark:border-white/15 dark:bg-black/80">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-black/50 dark:text-white/50">
                Architectural Bottlenecks
              </span>
              <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
                The Infrastructure Problem
              </h2>
            </div>
            <span
              aria-hidden="true"
              className="text-xl text-black/50 dark:text-white/70"
            >
              →
            </span>
          </div>

          <ul className="mt-6 space-y-4">
            {ctoProblems.map((prob) => (
              <li
                key={prob.title}
                className="rounded-2xl border border-black/10 bg-black/2 p-4 text-sm leading-6 dark:border-white/10 dark:bg-white/2"
              >
                <h3 className="font-semibold text-black dark:text-white">
                  {prob.title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#5c5c5c] dark:text-white/70 sm:text-sm">
                  {prob.description}
                </p>
              </li>
            ))}
          </ul>
        </article>

        {/* Right Column: Unified Solutions Displayed in Responsive Overlapping Circles */}
        <div className="relative">
          <div className="mb-10 space-y-1 text-center lg:mb-8 lg:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-black/50 dark:text-white/50">
              Unified Banking Stack
            </span>
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              The Insolify Advantage
            </h2>
          </div>
          <div className="relative flex flex-col items-center lg:flex-row lg:justify-center">
            {solutions.map((solution, index) => (
              <article
                key={solution.id}
                className={`relative size-64 shrink-0 sm:size-72 xl:size-80 ${circlePlace[index]}`}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="absolute inset-0 h-full w-full text-black dark:text-white"
                  aria-hidden="true"
                >
                  <circle
                    data-arc=""
                    cx="50"
                    cy="50"
                    r="47"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.8"
                    strokeLinecap="round"
                    transform={`rotate(${solution.turn} 50 50)`}
                  />
                </svg>
                <div className={`relative flex h-full ${copyPlace[index]}`}>
                  <div
                    className={`text-center ${index === 1 ? "w-[52%]" : index === 2 ? "w-full" : "w-[60%] lg:w-[54%]"}`}
                  >
                    <SolutionCopy solution={solution} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SolutionCopy({ solution }: { solution: (typeof solutions)[number] }) {
  return (
    <>
      <h3
        className={`font-semibold tracking-tight ${solution.id === "settle" ? "text-xs sm:text-sm" : "text-sm sm:text-base"}`}
      >
        <Link
          href={solution.href}
          className="underline decoration-black/30 underline-offset-4 hover:decoration-black dark:decoration-white/30 dark:hover:decoration-white"
        >
          {solution.name}
        </Link>
      </h3>
      <p
        className={`mt-2 text-[#5c5c5c] dark:text-white/70 ${solution.id === "settle" ? "text-[10px] leading-4 sm:text-[11px]" : "text-[11px] leading-4 sm:text-xs sm:leading-5"}`}
      >
        {solution.body}
        {solution.id === "settle" ? (
          <>
            {" "}
            Supported by{" "}
            <Link
              href="/tverify"
              className="font-medium underline decoration-black/30 underline-offset-4 dark:decoration-white/30"
            >
              TVerify
            </Link>{" "}
            for deterministic end-to-end receipt audit trails.
          </>
        ) : null}
      </p>
    </>
  );
}

function Contours() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 800"
      className="pointer-events-none absolute top-0 right-0 h-full w-1/2 overflow-hidden text-black dark:text-white"
      fill="none"
    >
      <g stroke="currentColor" strokeOpacity="0.08">
        <ellipse cx="330" cy="340" rx="250" ry="210" />
        <ellipse cx="370" cy="460" rx="220" ry="240" />
        <ellipse cx="290" cy="560" rx="190" ry="180" />
      </g>
    </svg>
  );
}
