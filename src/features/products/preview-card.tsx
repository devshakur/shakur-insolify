"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CurrencyVisual, ModulesVisual, NetworkVisual } from "@/features/products/visuals";
import type { ProductPreview } from "@/features/products/types";

const visuals = {
  network: NetworkVisual,
  currency: CurrencyVisual,
  modules: ModulesVisual,
};

export function PreviewCard({ preview }: { preview: ProductPreview }) {
  const Visual = visuals[preview.visual];

  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="flex h-full flex-col rounded-3xl border border-[#E6E2D6] bg-white p-5 shadow-[0_0_40px_rgba(212,175,55,0.05)] transition hover:border-[#D4AF37]/45 hover:shadow-[0_0_32px_rgba(212,175,55,0.16)] dark:border-[#2A2D35] dark:bg-[#16181D]/90"
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 text-[#E2B857] dark:border-white/10">
          <LinkIcon />
        </span>
      </div>
      <h4 className="text-lg font-semibold text-[#16181D] dark:text-white">{preview.title}</h4>
      <p className="mt-2 flex-1 text-sm leading-6 text-[#6B7280] dark:text-[#9CA3AF]">{preview.summary}</p>
      <div className="mt-4">
        <Visual />
      </div>
      <Link
        href="#how-it-works"
        className="mt-4 inline-flex text-sm text-[#E2B857] transition hover:text-[#F6E3A4]"
      >
        {preview.linkLabel} →
      </Link>
    </motion.article>
  );
}

function LinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M6 8.2 8.2 6M5.2 3.4l.8-.8a2.6 2.6 0 1 1 3.7 3.7l-.8.8M8.8 10.6l-.8.8a2.6 2.6 0 1 1-3.7-3.7l.8-.8"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
