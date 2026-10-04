"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { InsolifySidebar } from "@/components/insolify-sidebar";

type NavIcon = "safi" | "fincore" | "settle" | "docs" | "status";

type NavItem = {
  href: string;
  label: string;
  icon?: NavIcon;
  external?: boolean;
};

type NavLink =
  | { label: string; href: string }
  | { label: string; items: NavItem[] };

const links: NavLink[] = [
   { href: "/#faq", label: "About" },
  {
    label: "Products",
    items: [
      { href: "/safi", label: "Safi AI", icon: "safi" },
      { href: "/fincore", label: "Fincore", icon: "fincore" },
      { href: "/settle", label: "Settle Africa", icon: "settle" },
    ],
  },
  {
    label: "Resources",
    items: [
      { href: "https://docs.insolify.com/", label: "Documentation", icon: "docs", external: true },
      { href: "/status", label: "Status", icon: "status" },
    ],
  },
  { href: "/pricing", label: "Pricing" },
  { href: "/tverify", label: "TVerify" },
  { href: "/contact", label: "Contact" },
];

const navLinkClass =
  "inline-flex items-center gap-1 rounded-full px-2.5 py-2 text-[13px] whitespace-nowrap transition-colors sm:px-4 sm:text-sm";

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
          className={`flex items-center justify-center gap-0.5 overflow-visible rounded-full bg-[#f2f2f4] px-1.5 py-1.5 sm:gap-1 sm:px-2 sm:py-2 dark:bg-[#2a2a30] ${
            fixed
              ? "fixed top-4 left-1/2 z-50 -translate-x-1/2 shadow-[0_10px_30px_rgba(20,16,40,0.12)]"
              : "relative"
          }`}
        >
          {links.map((link) =>
            "items" in link ? (
              <NavDropdown key={link.label} label={link.label} items={link.items} pathname={pathname} />
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`${navLinkClass} ${
                  link.href === pathname
                    ? "text-[#1a1a1a] dark:text-white"
                    : "text-[#6d6d6d] hover:text-[#1a1a1a] dark:text-[#c8c8c8] dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
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

function NavDropdown({
  label,
  items,
  pathname,
}: {
  label: string;
  items: NavItem[];
  pathname: string;
}) {
  const current = items.some((item) => item.href === pathname);

  return (
    <div className="group relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-label={`${label} menu`}
        className={`${navLinkClass} ${
          current
            ? "text-[#1a1a1a] dark:text-white"
            : "text-[#6d6d6d] group-hover:text-[#1a1a1a] group-focus-within:text-[#1a1a1a] dark:text-[#c8c8c8] dark:group-hover:text-white dark:group-focus-within:text-white"
        }`}
      >
        {label}
        <ChevronIcon />
      </button>
      <div className="pointer-events-none invisible absolute top-full left-1/2 z-50 min-w-55 -translate-x-1/2 pt-2 opacity-0 transition duration-150 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div
          role="menu"
          aria-label={label}
          className="rounded-[22px] border border-black/6 bg-white p-2 shadow-[0_10px_30px_rgba(20,16,40,0.12)] dark:border-white/10 dark:bg-[#2a2a30]"
        >
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              role="menuitem"
              aria-current={item.href === pathname ? "page" : undefined}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className={`flex items-center gap-3 rounded-2xl px-2.5 py-2.5 text-[13px] transition-colors sm:text-sm ${
                item.href === pathname
                  ? "bg-[#f2f2f4] text-[#1a1a1a] dark:bg-white/10 dark:text-white"
                  : "text-[#1a1a1a] hover:bg-[#f2f2f4] dark:text-white dark:hover:bg-white/10"
              }`}
            >
              {item.icon ? (
                <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-[#111] text-white dark:bg-white dark:text-[#111]">
                  <NavGlyph name={item.icon} />
                </span>
              ) : null}
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function NavGlyph({ name }: { name: NavIcon }) {
  if (name === "safi") return <SafiGlyph />;
  if (name === "fincore") return <FincoreGlyph />;
  if (name === "settle") return <SettleGlyph />;
  if (name === "docs") return <DocsGlyph />;
  return <StatusGlyph />;
}

function ChevronIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
      className="mt-px transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180"
    >
      <path
        d="M2.6 4.4 6 7.6l3.4-3.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SafiGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
      <path
        d="M7 1.4c1.8 2.2 3.3 4.1 3.3 6.3a3.3 3.3 0 1 1-6.6 0C3.7 5.5 5.2 3.6 7 1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FincoreGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path d="M7 2.2v9.6M2.2 7h9.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="7" cy="2.4" r="1.15" fill="currentColor" />
      <circle cx="7" cy="11.6" r="1.15" fill="currentColor" />
      <circle cx="2.4" cy="7" r="1.15" fill="currentColor" />
      <circle cx="11.6" cy="7" r="1.15" fill="currentColor" />
    </svg>
  );
}

function SettleGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M9.6 4.2a3.7 3.7 0 1 0 1.1 3.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DocsGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M3.8 2.3h4.2L10.2 4.6v7.1H3.8V2.3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M8 2.4V4.7h2.2" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  );
}

function StatusGlyph() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <path
        d="M2 8.6 4.8 5.7l2.3 2.4L12 3.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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
        d="M20.2 15.1A8.6 8.6 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z"
        fill="currentColor"
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
