"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    id: "what",
    question: "What can Safi AI do?",
    answer:
      "Safi drafts emails, takes meeting notes, researches your data, and flags unusual activity. It is built for finance and operations teams that already use Insolify.",
  },
  {
    id: "data",
    question: "Does Safi train on our customer data?",
    answer:
      "No. Safi runs with bank-level encryption and compliance controls. Your institution data stays in your workspace and is not used to train a shared model.",
  },
  {
    id: "languages",
    question: "Which languages does Safi support?",
    answer:
      "Safi supports multiple languages with real-time translation for support and internal teams — ask sales for the current list.",
  },
  {
    id: "connect",
    question: "How does Safi connect to Fincore or Settle?",
    answer:
      "When you open Safi from your Insolify account, it can read the same books, settlements, and support queues your team already uses.",
  },
  {
    id: "start",
    question: "How do we get started?",
    answer:
      "Use the preview on this page to see how conversations work, then open Safi from your Insolify account or contact sales for a guided rollout.",
  },
] as const;

export function SafiFaq() {
  const [openId, setOpenId] = useState<(typeof faqs)[number]["id"] | null>(faqs[0].id);

  return (
    <MotionConfig reducedMotion="user">
      <section id="safi-faq" className="relative px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto w-full max-w-2xl">
          <p className="text-center text-xs font-medium tracking-[0.32em] text-[#8F8F96] uppercase">
            Support
          </p>
          <h2 className="mt-5 text-center text-[2.15rem] leading-[1.1] font-semibold tracking-tight text-[#111] sm:text-5xl dark:text-white">
            Frequently asked
            <br />
            questions
          </h2>

          <div className="mt-14 flex flex-col gap-3">
            {faqs.map((faq) => {
              const open = faq.id === openId;

              return (
                <article
                  key={faq.id}
                  className={`overflow-hidden transition-colors duration-300 ${
                    open
                      ? "rounded-[28px] border border-black/5 bg-white shadow-[0_8px_30px_rgba(17,17,17,0.04)] dark:border-white/10 dark:bg-[#1A1C21]"
                      : "rounded-full bg-[#ECEEF3] dark:bg-[#1E2026]"
                  }`}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={`safi-faq-${faq.id}`}
                    onClick={() => setOpenId(open ? null : faq.id)}
                    className={`flex w-full items-center justify-between gap-4 text-left ${
                      open ? "px-6 pt-5 pb-2 sm:px-8 sm:pt-6" : "px-6 py-3.5 sm:px-7"
                    }`}
                  >
                    <span className="text-[15px] font-medium tracking-tight text-[#111] sm:text-base dark:text-white">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                        open
                          ? "bg-[#ECEEF3] text-[#111] dark:bg-[#2A2D35] dark:text-white"
                          : "bg-white text-[#111] dark:bg-[#2A2D35] dark:text-white"
                      }`}
                    >
                      {open ? <CloseIcon /> : <PlusIcon />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        id={`safi-faq-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-7">
                          <p className="max-w-2xl text-sm leading-6 text-[#6B6B73] dark:text-[#B5B5BD]">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 2.6v8.8M2.6 7h8.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M3.6 3.6l6.8 6.8M10.4 3.6l-6.8 6.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}