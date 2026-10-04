"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
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

const fallback: DemoScript = {
  prompt: "",
  label: "Here's how I can help:",
  lines: [
    "I can draft emails, summarize meetings, and flag unusual activity across your books.",
    "Open Safi from your Insolify account for a live workspace connected to your data.",
  ],
};

type Phase = "typing" | "loading" | "answer";

type SafiDemoProps = {
  className?: string;
};

export function SafiDemo({ className = "" }: SafiDemoProps) {
  const reduceMotion = useReducedMotion();
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const threadRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("typing");
  const [typed, setTyped] = useState("");
  const [draft, setDraft] = useState("");
  const [custom, setCustom] = useState<DemoScript | null>(null);
  const demo = custom ?? demos[index];
  const shownPhase = reduceMotion ? "answer" : phase;
  const shownTyped = reduceMotion ? demo.prompt : typed;

  useEffect(() => {
    if (reduceMotion) return;

    let count = 0;
    let loadTimer = 0;

    const typeTimer = window.setInterval(() => {
      count += 1;
      setTyped(demo.prompt.slice(0, count));
      if (count < demo.prompt.length) return;

      window.clearInterval(typeTimer);
      setPhase("loading");
      loadTimer = window.setTimeout(() => setPhase("answer"), 900);
    }, 36);

    return () => {
      window.clearInterval(typeTimer);
      window.clearTimeout(loadTimer);
    };
  }, [demo.prompt, reduceMotion]);

  useEffect(() => {
    threadRef.current?.scrollTo({ top: threadRef.current.scrollHeight, behavior: "smooth" });
  }, [shownPhase, shownTyped, demo.prompt]);

  function play(next: DemoScript) {
    const catalogIndex = demos.findIndex((item) => item.prompt === next.prompt);
    setCustom(catalogIndex >= 0 ? null : next);
    if (catalogIndex >= 0) setIndex(catalogIndex);
    setTyped("");
    setPhase("typing");
  }

  function show(nextIndex: number) {
    play(demos[nextIndex]);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    const matchIndex = demos.findIndex(
      (item) => item.prompt.toLowerCase() === text.toLowerCase(),
    );
    setDraft("");
    if (matchIndex >= 0) {
      show(matchIndex);
      return;
    }

    play({ ...fallback, prompt: text });
  }

  return (
    <div
      id="safi-demo"
      className={`flex min-h-96 scroll-mt-28 flex-col overflow-hidden rounded-4xl border border-[#ececf1] bg-white shadow-[0_24px_80px_rgba(20,16,40,0.08)] dark:border-white/10 dark:bg-[#16161b] dark:shadow-none ${className}`}
    >
      <div className="flex items-center gap-3 bg-[#111] px-5 py-4 text-white">
        <span className="flex size-8 items-center justify-center rounded-full bg-white/10">
          <DropletIcon />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold tracking-tight">Safi AI Assistant</span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/60">
            <span className="size-1.5 rounded-full bg-[#3DDC84]" />
            Online · Ready to help
          </span>
        </span>
      </div>

      <div ref={threadRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-5 sm:px-5" aria-live="polite">
        <p className="w-fit max-w-[88%] rounded-[1.2rem] rounded-tl-md bg-[#f3f4f6] px-4 py-3 text-sm leading-6 text-[#2b2b2b] dark:bg-[#2a2a30] dark:text-[#ededed]">
          Hello! I&apos;m Safi AI, your intelligent assistant. How can I help you today?
        </p>

        {shownTyped ? (
          <p className="ml-auto w-fit max-w-[88%] rounded-[1.2rem] rounded-tr-md bg-[#111] px-4 py-3 text-sm leading-6 text-white dark:bg-white dark:text-[#111]">
            {shownTyped}
            {shownPhase === "typing" ? <span className="demo-caret">|</span> : null}
          </p>
        ) : null}

        {shownPhase === "loading" ? (
          <div className="flex w-fit items-center gap-3 rounded-[1.2rem] rounded-tl-md bg-[#f3f4f6] px-4 py-3 text-sm text-[#6B7280] dark:bg-[#2a2a30] dark:text-white/70">
            <span className="flex size-7 items-center justify-center rounded-full bg-white dark:bg-[#16161b]">
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

        {shownPhase === "answer" ? (
          <div className="w-fit max-w-[92%] rounded-[1.2rem] rounded-tl-md bg-[#f3f4f6] px-4 py-3.5 text-sm text-[#16181D] dark:bg-[#2a2a30] dark:text-white">
            <p className="font-medium text-[#111] dark:text-white">{demo.label}</p>
            {demo.subject ? <p className="mt-2 font-medium">{demo.subject}</p> : null}
            <div className="mt-2 space-y-2 leading-6 text-[#3F3F46] dark:text-white/90">
              {demo.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <div className="border-t border-[#eeeef2] px-3 pt-3 pb-3 sm:px-4 dark:border-white/10">
        <div className="mb-3 flex flex-wrap gap-1.5" role="tablist" aria-label="Demo examples">
          {demos.map((item, dotIndex) => (
            <button
              key={item.prompt}
              type="button"
              role="tab"
              aria-selected={dotIndex === index && !custom}
              onClick={() => show(dotIndex)}
              className={`rounded-full px-3 py-1.5 text-[11px] transition ${
                dotIndex === index && !custom
                  ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                  : "bg-[#f3f4f6] text-[#6d6d6d] hover:text-[#111] dark:bg-white/10 dark:text-[#c8c8c8] dark:hover:text-white"
              }`}
            >
              {item.prompt.split(" ").slice(0, 3).join(" ")}…
            </button>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <label htmlFor={inputId} className="sr-only">
            Message Safi
          </label>
          <input
            ref={inputRef}
            id={inputId}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Type your message..."
            className="h-12 min-w-0 flex-1 rounded-full border-0 bg-[#f3f4f6] px-5 text-sm text-[#111] outline-none placeholder:text-[#9CA3AF] dark:bg-[#1c1c22] dark:text-white dark:placeholder:text-[#7A7A82]"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-[#111] text-white transition hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
          >
            <DropletIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
