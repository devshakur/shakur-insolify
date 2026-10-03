"use client";

import { motion } from "framer-motion";
import { GlyphIcon } from "@/features/products/icons";
import { safiViews } from "@/features/products/products";
import { SafiDemo } from "@/features/products/safi-demo";
import type { SafiView } from "@/features/products/types";

const viewLabels: { id: SafiView; label: string }[] = [
  { id: "apps", label: "Apps" },
  { id: "features", label: "Features" },
  { id: "demo", label: "Demo" },
];

function nextView(current: SafiView, key: string) {
  const index = viewLabels.findIndex((item) => item.id === current);
  if (key === "ArrowRight" || key === "ArrowDown") return viewLabels[(index + 1) % viewLabels.length].id;
  if (key === "ArrowLeft" || key === "ArrowUp") {
    return viewLabels[(index - 1 + viewLabels.length) % viewLabels.length].id;
  }
  if (key === "Home") return viewLabels[0].id;
  if (key === "End") return viewLabels[viewLabels.length - 1].id;
  return null;
}

type FeatureListProps = {
  view: SafiView;
  onViewChange: (view: SafiView) => void;
};

export function FeatureList({ view, onViewChange }: FeatureListProps) {
  const items = view === "demo" ? [] : safiViews[view];

  return (
    <div className="relative rounded-[28px] border border-[#E6E2D6] bg-white/90 p-4 shadow-[0_20px_80px_rgba(20,16,10,0.06)] backdrop-blur-md sm:p-5 dark:border-[#2A2D35] dark:bg-[#12141a]/85 dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
      <div
        role="tablist"
        aria-label="Safi AI views"
        className="mx-auto mb-4 flex w-fit items-center gap-1 rounded-full border border-[#E6E2D6] bg-[#F6F4EE] p-1 dark:border-white/10 dark:bg-[#0d0f13]"
      >
        {viewLabels.map((item) => {
          const selected = view === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              id={`safi-view-${item.id}`}
              aria-selected={selected}
              aria-controls="safi-view-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => onViewChange(item.id)}
              onKeyDown={(event) => {
                const next = nextView(item.id, event.key);
                if (!next) return;
                event.preventDefault();
                onViewChange(next);
                document.getElementById(`safi-view-${next}`)?.focus();
              }}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                selected
                  ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                  : "text-[#6B7280] hover:text-[#16181D] dark:text-[#9CA3AF] dark:hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div role="tabpanel" id="safi-view-panel" aria-labelledby={`safi-view-${view}`}>
        {view === "demo" ? (
          <SafiDemo />
        ) : (
          <ul className="space-y-3">
            {items.map((item) => (
              <motion.li
                key={item.title}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 rounded-2xl border border-[#E6E2D6] bg-[#F8F6F1] px-3 py-3 transition hover:border-[#D4AF37]/50 hover:shadow-[0_0_28px_rgba(212,175,55,0.16)] dark:border-[#2A2D35] dark:bg-[#16181D]"
              >
                <GlyphIcon name={item.glyph} tone={item.tone} />
                <span className="min-w-0">
                  <span className="block text-sm font-medium text-[#16181D] dark:text-white">{item.title}</span>
                  <span className="mt-0.5 block text-xs leading-5 text-[#6B7280] dark:text-[#9CA3AF]">{item.detail}</span>
                </span>
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
