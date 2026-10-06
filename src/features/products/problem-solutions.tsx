"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const problems = [
  "Cores are closed. A new product takes months, and the ledger still does not match.",
  "Support, risk, and reviews live in separate tools, so teams repeat the same checks.",
  "Payments across Africa are added later. Settlement and tracking sit outside the core.",
];

const solutions = [
  {
    id: "fincore",
    name: "Fincore",
    href: "/fincore",
    body: "Accounts, lending, and channels on one core. It plugs into the systems an institution already runs.",
    place: "self-end",
    turn: 210,
  },
  {
    id: "safi",
    name: "Safi AI",
    href: "/safi",
    body: "Support, fraud checks, and research in one assistant, on the same accounts and rules.",
    place: "self-start",
    turn: 20,
  },
  {
    id: "settle",
    name: "Settle Africa",
    href: "/settle",
    body: "Local and cross-border payments, with settlement beside the core.",
    place: "self-end",
    turn: 200,
  },
] as const;

export function ProblemSolutions() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rings = [...section.querySelectorAll<SVGCircleElement>("[data-arc]")].filter((ring) => ring.getTotalLength() > 0);
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
          ring.style.transition = `stroke-dashoffset 1.5s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.18}s`;
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
    <section ref={sectionRef} id="problems" className="relative overflow-hidden bg-white px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white">
      <Contours />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-8">
        <article className="relative z-10 max-w-md rounded-3xl border border-black/10 bg-white p-5 sm:p-6 dark:border-white/15 dark:bg-black">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-medium tracking-tight">Problems</h2>
            <span aria-hidden="true" className="text-black/50 dark:text-white/70">
              →
            </span>
          </div>
          <ul className="mt-5 space-y-3">
            {problems.map((problem) => (
              <li key={problem} className="rounded-2xl border border-black/10 px-4 py-3 text-sm leading-6 text-[#5c5c5c] dark:border-white/10 dark:text-white/75">
                {problem}
              </li>
            ))}
          </ul>
        </article>

        <div className="relative hidden flex-col gap-6 lg:flex">
          {solutions.map((solution) => (
            <article key={solution.id} className={`relative h-72 w-72 ${solution.place}`}>
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full text-black dark:text-white" aria-hidden="true">
                <circle
                  data-arc=""
                  cx="50"
                  cy="50"
                  r="47"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  transform={`rotate(${solution.turn} 50 50)`}
                />
              </svg>
              <div className="relative flex h-full items-center justify-center px-8">
                <div className="w-full text-center">
                  <SolutionCopy solution={solution} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <ol className="relative z-10 space-y-4 lg:hidden">
          {solutions.map((solution) => (
            <li key={solution.id} className="rounded-3xl border border-black/10 bg-white px-5 py-5 dark:border-white/15 dark:bg-black">
              <SolutionCopy solution={solution} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function SolutionCopy({ solution }: { solution: (typeof solutions)[number] }) {
  return (
    <>
      <h3 className="text-lg font-medium">
        <Link href={solution.href} className="underline decoration-black/30 underline-offset-4 dark:decoration-white/30">
          {solution.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-6 text-[#5c5c5c] dark:text-white/70">
        {solution.body}
        {solution.id === "settle" ? (
          <>
            {" "}
            <Link href="/tverify" className="underline decoration-black/30 underline-offset-4 dark:decoration-white/30">
              TVerify
            </Link>{" "}
            follows each transfer by reference or receipt.
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
      <g stroke="currentColor" strokeOpacity="0.12">
        <ellipse cx="330" cy="340" rx="250" ry="210" />
        <ellipse cx="370" cy="460" rx="220" ry="240" />
        <ellipse cx="290" cy="560" rx="190" ry="180" />
      </g>
    </svg>
  );
}
