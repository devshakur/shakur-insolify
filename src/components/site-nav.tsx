"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { InsolifySidebar } from "@/components/insolify-sidebar";

const links = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/tverify", label: "TVerify" },
  { href: "/contact", label: "Contact" },
];

function subscribeToTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerThemeSnapshot() {
  return false;
}

function subscribeToScroll(onStoreChange: () => void) {
  window.addEventListener("scroll", onStoreChange, { passive: true });
  return () => window.removeEventListener("scroll", onStoreChange);
}

function getScrollFixedSnapshot() {
  return window.scrollY > 24;
}

function getServerScrollFixedSnapshot() {
  return false;
}

export function SiteNav() {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const fixed = useSyncExternalStore(
    subscribeToScroll,
    getScrollFixedSnapshot,
    getServerScrollFixedSnapshot,
  );

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const measure = () => setNavHeight(nav.offsetHeight);
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(nav);
    return () => observer.disconnect();
  }, []);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="relative z-40 mx-auto flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-3 px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
      <Link href="/" className="flex items-center">
        <Image
          src="/insolify-logo.png"
          alt="Insolify"
          width={423}
          height={126}
          priority
          className="h-7 w-auto dark:brightness-0 dark:invert"
        />
      </Link>

      <div className="order-3 hidden w-full flex-col items-center lg:order-2 lg:flex lg:w-auto lg:flex-1">
        {fixed ? <div aria-hidden style={{ height: navHeight }} /> : null}
        <nav
          ref={navRef}
          aria-label="Primary"
          className={`flex items-center justify-center gap-0.5 rounded-full bg-[#f2f2f4] px-1.5 py-1.5 sm:gap-1 sm:px-2 sm:py-2 dark:bg-[#2a2a30] ${
            fixed
              ? "fixed top-4 left-1/2 z-50 -translate-x-1/2 shadow-[0_10px_30px_rgba(20,16,40,0.12)]"
              : "relative"
          }`}
        >
          {links.map((link) => {
            const active = link.href === pathname;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-2.5 py-2 text-[13px] whitespace-nowrap transition-colors sm:px-4 sm:text-sm ${
                  active
                    ? "text-[#1a1a1a] dark:text-white"
                    : "text-[#6d6d6d] hover:text-[#1a1a1a] dark:text-[#c8c8c8] dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="order-2 flex items-center gap-2 lg:order-3">
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          className="inline-flex size-10 items-center justify-center rounded-full border border-[#ececf1] bg-white text-[#2b2b2b] transition-colors hover:bg-[#f6f6f6] dark:border-white/15 dark:bg-[#1c1c22] dark:text-white dark:hover:bg-[#2a2a30]"
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          aria-expanded={sidebarOpen}
          aria-controls="insolify-sidebar"
          aria-label="Open menu"
          className="inline-flex size-10 items-center justify-center rounded-full border border-[#ececf1] bg-white text-[#2b2b2b] transition-colors hover:bg-[#f6f6f6] lg:hidden dark:border-white/15 dark:bg-[#1c1c22] dark:text-white dark:hover:bg-[#2a2a30]"
        >
          <MenuIcon />
        </button>
        <Link
          href="https://www.insolify.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden h-10 items-center rounded-full bg-[#7b61ff] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#6a4ff0] lg:inline-flex sm:px-5"
        >
          Account
        </Link>
      </div>

      <InsolifySidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M3.5 5h11M3.5 9h11M3.5 13h11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20 14.5A8.5 8.5 0 0 1 9.5 4 7 7 0 1 0 20 14.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5 5l1.6 1.6M17.4 17.4 19 19M19 5l-1.6 1.6M6.6 17.4 5 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
