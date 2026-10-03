"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { DropletIcon } from "@/features/products/icons";

type DemoScript = {
  prompt: string;
  label: string;
  subject?: string;
  lines: string[];
};

const demos: DemoScript[] = [
  {
    prompt: "Draft an email to the marketing team",
    label: "Here's a draft:",
    subject: "Subject: Q4 Campaign Kickoff",
    lines: [
      "Hi Team,",
      "Excited to launch our Q4 initiatives! Let's sync tomorrow at 2pm to align on targets and creative direction.",
      "Best,",
      "[Your name]",
    ],
  },
  {
    prompt: "Summarize this morning's client call",
    label: "Meeting notes:",
    lines: [
      "Client wants mobile onboarding live before quarter end.",
      "Action: share a revised timeline by Thursday.",
      "Risk: KYC review is still blocking two markets.",
    ],
  },
  {
    prompt: "Flag anything unusual on the settlement account",
    label: "Fraud check:",
    lines: [
      "3 transfers to a new beneficiary in the last hour.",
      "Amount is 4× the 30-day average.",
      "Recommended: hold and request a second approval.",
    ],
  },
];

type Phase = "typing" | "loading" | "answer";

export function SafiDemo() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>(reduceMotion ? "answer" : "typing");
  const [typed, setTyped] = useState(reduceMotion ? demos[0].prompt : "");
  const demo = demos[index];

  useEffect(() => {
    if (reduceMotion) {
      setTyped(demo.prompt);
      setPhase("answer");
      return;
    }

    setTyped("");
    setPhase("typing");
    let count = 0;
    let loadTimer = 0;

    const typeTimer = window.setInterval(() => {
      count += 1;
      setTyped(demo.prompt.slice(0, count));
      if (count < demo.prompt.length) return;

      window.clearInterval(typeTimer);
      setPhase("loading");
      loadTimer = window.setTimeout(() => setPhase("answer"), 1100);
    }, 42);

    return () => {
      window.clearInterval(typeTimer);
      window.clearTimeout(loadTimer);
    };
  }, [demo.prompt, reduceMotion]);

  function show(nextIndex: number) {
    setIndex(nextIndex);
    if (reduceMotion) {
      setTyped(demos[nextIndex].prompt);
      setPhase("answer");
      return;
    }
    setTyped("");
    setPhase("typing");
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#E6E2D6] bg-[#F8F6F1] dark:border-[#2A2D35] dark:bg-[#1a1c20]">
      <div className="flex items-center gap-3 px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white dark:bg-white">
          <DropletIcon />
        </span>
        <span>
          <span className="block text-sm font-semibold text-[#16181D] dark:text-white">Safi AI</span>
          <span className="mt-0.5 flex items-center gap-1.5 text-xs text-[#3DDC84]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3DDC84]" />
            Online
          </span>
        </span>
      </div>
      <div className="mx-4 border-t border-black/10 dark:border-white/10" />

      <div className="min-h-72 px-4 py-4" aria-live="polite">
        <p className="ml-auto w-fit max-w-[85%] rounded-full bg-[#111] px-4 py-2.5 text-sm text-white dark:bg-white dark:text-[#1a1a1a]">
          {typed}
          {phase === "typing" ? <span className="demo-caret">|</span> : null}
        </p>

        {phase === "loading" ? (
          <div className="mt-4 flex items-center gap-3 rounded-2xl border border-[#E6E2D6] bg-white px-4 py-3 text-sm text-[#6B7280] dark:border-white/10 dark:bg-[#2a2d33] dark:text-white/70">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
              <DropletIcon />
            </span>
            <span>Safi is writing</span>
            <span className="demo-dots" aria-hidden>
              <i />
              <i />
              <i />
            </span>
          </div>
        ) : null}

        {phase === "answer" ? (
          <div className="mt-4 rounded-2xl border border-[#E6E2D6] bg-white px-4 py-4 text-sm text-[#16181D] dark:border-white/10 dark:bg-[#2a2d33] dark:text-white">
            <p className="flex items-center gap-2 text-[#7C5CBF] dark:text-[#C4B5FD]">
              <MailIcon />
              {demo.label}
            </p>
            {demo.subject ? <p className="mt-4 font-medium">{demo.subject}</p> : null}
            <div className="mt-4 space-y-3 leading-6 text-[#3F3F46] dark:text-white/90">
              {demo.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="mx-4 border-t border-black/10 dark:border-white/10" />
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Demo examples">
          {demos.map((item, dotIndex) => (
            <button
              key={item.prompt}
              type="button"
              role="tab"
              aria-selected={dotIndex === index}
              aria-label={`Example ${dotIndex + 1}`}
              onClick={() => show(dotIndex)}
              className={`h-1.5 w-1.5 rounded-full ${dotIndex === index ? "bg-[#16181D] dark:bg-white" : "bg-[#16181D]/25 dark:bg-white/30"}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => show((index + 1) % demos.length)}
          className="text-sm text-[#52525B] transition hover:text-[#16181D] dark:text-white/80 dark:hover:text-white"
        >
          Try another →
        </button>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="1.5" y="3" width="11" height="8" rx="1.2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2 4.2 7 7.6 12 4.2" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
