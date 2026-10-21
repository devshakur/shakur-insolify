"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";

// --- Pure Names & Links (No labels, no descriptions) ---
const platformProducts = [
  {
    name: "FinCore",
    href: "/fincore",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    name: "Safi AI",
    href: "/safi",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
      </svg>
    ),
  },
  {
    name: "Settle Africa",
    href: "/settle",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    ),
  },
  {
    name: "TVerify",
    href: "/tverify",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
] as const;

const solutions = [
  { name: "Banks & Neobanks", href: "/fincore" },
  { name: "Fintechs", href: "/settle" },
  { name: "Enterprises", href: "/settle#corridors" },
] as const;

function subscribeToTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<"platform" | "solutions" | null>(null);
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const dark = useSyncExternalStore(
    subscribeToTheme,
    () => document.documentElement.classList.contains("dark"),
    () => false
  );

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  const handleMouseEnter = (menu: "platform" | "solutions") => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveMenu(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      ref={navRef}
      onMouseLeave={handleMouseLeave}
      className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-[#0c0c0f]/90"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Left: Brand Logo & Links */}
        <div className="flex items-center gap-8">
          <Link href="/" aria-label="Insolify Enterprise" className="shrink-0 transition-opacity hover:opacity-90">
            <Image
              src="/insolify-logo.png"
              alt="Insolify"
              width={423}
              height={126}
              priority
              unoptimized
              className="h-6 w-auto dark:brightness-0 dark:invert"
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
            {/* Platform Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("platform")}>
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "platform" ? null : "platform")}
                aria-expanded={activeMenu === "platform"}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${activeMenu === "platform"
                  ? "bg-neutral-100 text-black dark:bg-white/10 dark:text-white"
                  : "text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
                  }`}
              >
                <span>Platform</span>
                <ChevronDown className={`size-3 transition-transform duration-200 ${activeMenu === "platform" ? "rotate-180" : ""}`} />
              </button>

              {/* Minimal Popover Dropdown */}
              {activeMenu === "platform" && (
                <div
                  onMouseEnter={() => handleMouseEnter("platform")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute left-0 top-full mt-2 w-52 rounded-2xl border border-black/10 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-[#121316]"
                >
                  <div className="flex flex-col gap-1">
                    {platformProducts.map((p) => (
                      <Link
                        key={p.name}
                        href={p.href}
                        onClick={() => setActiveMenu(null)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-200 dark:hover:bg-white/10 dark:hover:text-white"
                      >
                        <span className="text-[black]">{p.icon}</span>
                        <span>{p.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("solutions")}>
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === "solutions" ? null : "solutions")}
                aria-expanded={activeMenu === "solutions"}
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors ${activeMenu === "solutions"
                  ? "bg-neutral-100 text-black dark:bg-white/10 dark:text-white"
                  : "text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white"
                  }`}
              >
                <span>Solutions</span>
                <ChevronDown className={`size-3 transition-transform duration-200 ${activeMenu === "solutions" ? "rotate-180" : ""}`} />
              </button>

              {/* Minimal Popover Dropdown */}
              {activeMenu === "solutions" && (
                <div
                  onMouseEnter={() => handleMouseEnter("solutions")}
                  onMouseLeave={handleMouseLeave}
                  className="absolute left-0 top-full mt-2 w-48 rounded-2xl border border-black/10 bg-white p-2 shadow-xl dark:border-white/10 dark:bg-[#121316]"
                >
                  <div className="flex flex-col gap-1">
                    {solutions.map((s) => (
                      <Link
                        key={s.name}
                        href={s.href}
                        onClick={() => setActiveMenu(null)}
                        className="rounded-xl px-3 py-2 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 hover:text-black dark:text-neutral-200 dark:hover:bg-white/10 dark:hover:text-white"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/pricing"
              onMouseEnter={() => setActiveMenu(null)}
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide text-neutral-600 hover:text-black transition-colors dark:text-neutral-300 dark:hover:text-white"
            >
              Pricing
            </Link>

            <Link
              href="/contact"
              onMouseEnter={() => setActiveMenu(null)}
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide text-neutral-600 hover:text-black transition-colors dark:text-neutral-300 dark:hover:text-white"
            >
              Contact Us
            </Link>
          </nav>
        </div>

        {/* Right Action Bar */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Theme switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex size-8 items-center justify-center rounded-full text-neutral-600 hover:bg-neutral-100 hover:text-black transition-colors dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>



          {/* CTA */}
          <Link
            href="/contact"
            className="inline-flex h-9 items-center gap-1.5 rounded-full bg-black dark:bg-white px-4 text-xs font-semibold text-white transition-opacity hover:opacity-85 dark:bg-[black] dark:text-black"
          >
            <span>Account</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="flex size-9 items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="flex size-9 items-center justify-center rounded-full text-black dark:text-white"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <MobileDrawer onClose={() => setMobileOpen(false)} />
      )}
    </header>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation"
      className="fixed inset-0 z-80 flex flex-col bg-white text-black dark:bg-[#0c0c0f] dark:text-white"
    >
      {/* Header */}
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-black/5 px-5 dark:border-white/10">
        <Link href="/" onClick={onClose} aria-label="Insolify home">
          <Image
            src="/insolify-logo.png"
            alt="Insolify"
            width={423}
            height={126}
            unoptimized
            className="h-6 w-auto dark:brightness-0 dark:invert"
          />
        </Link>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex size-10 items-center justify-center rounded-full text-black dark:text-white"
        >
          <CloseIcon />
        </button>
      </div>

      {/* Clean list of names only */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="flex flex-col divide-y divide-black/5 dark:divide-white/10">
          {/* Products */}
          <div className="py-2">
            {platformProducts.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                onClick={onClose}
                className="flex items-center justify-between py-3 text-base font-semibold text-black dark:text-white"
              >
                <span>{p.name}</span>
                <span className="text-neutral-400">&rarr;</span>
              </Link>
            ))}
          </div>

          {/* Solutions */}
          <div className="py-2">
            {solutions.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                onClick={onClose}
                className="flex items-center justify-between py-3 text-base font-semibold text-black dark:text-white"
              >
                <span>{s.name}</span>
                <span className="text-neutral-400">&rarr;</span>
              </Link>
            ))}
          </div>

          {/* Other links */}
          <div className="py-2">
            <Link
              href="/pricing"
              onClick={onClose}
              className="block py-3 text-base font-semibold text-black dark:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="block py-3 text-base font-semibold text-black dark:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="mt-8 flex flex-col gap-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-full bg-black text-sm font-semibold text-white dark:bg-[black] dark:text-black"
          >
            Book a Demo
          </Link>
          <Link
            href="https://dash.insolify.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-full border border-black/15 bg-white text-sm font-semibold text-black dark:border-white/20 dark:bg-black dark:text-white"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}