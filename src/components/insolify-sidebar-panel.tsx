"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

type InsolifySidebarPanelProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

export function InsolifySidebarPanel({ open, onClose, children }: InsolifySidebarPanelProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.aside
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          id="insolify-sidebar"
          className="fixed inset-0 z-60 flex flex-col bg-white px-5 pt-5 pb-6 text-[#111] dark:bg-[#0B0B0D] dark:text-white"
        >
          <div className="flex items-center justify-between">
            <a href="#top" onClick={onClose} className="flex items-center">
              <Image
                src="/insolify-logo.png"
                alt="Insolify"
                width={423}
                height={126}
                className="h-7 w-auto dark:brightness-0 dark:invert"
              />
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex size-10 items-center justify-center text-[#6d6d6d] transition hover:text-[#111] dark:text-white/80 dark:hover:text-white"
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mt-10 flex min-h-0 flex-1 flex-col overflow-y-auto">
            {children}
          </div>
        </motion.aside>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
