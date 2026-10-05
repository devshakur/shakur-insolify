"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const docsHref = "https://docs.insolify.com/";

const featured = [
  [
    {
      href: "/fincore",
      title: "Fincore",
      detail: "Accounts, lending, and channels in one core",
    },
    {
      href: "/safi",
      title: "Safi AI",
      detail: "Support, risk checks, and research for finance teams",
    },
  ],
  [
    {
      href: "/settle",
      title: "Settle Africa",
      detail: "Local and cross-border payments across Africa",
    },
    {
      href: "/tverify",
      title: "TVerify",
      detail: "Confirm a payment from the receipt",
    },
  ],
] as const;

const menuLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: docsHref, label: "Documentation", external: true },
  { href: "/status", label: "Status" },
  { href: "/contact", label: "Contact" },
] as const;

const barLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/status", label: "Status" },
  { href: "/contact", label: "Contact" },
] as const;

export function Hero() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!productsOpen) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setProductsOpen(false);
    }

    function onPointer(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setProductsOpen(false);
    }

    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [productsOpen]);

  return (
    <section id="top" className="flex min-h-svh flex-col bg-black text-white">
      <header className="relative z-40 border-b border-white/10">
        <div className="flex h-16 w-full items-center justify-between gap-6 px-5 sm:px-8">
          <Link href="/" aria-label="Insolify home" className="shrink-0">
            <Image
              src="/insolify-logo.png"
              alt=""
              width={423}
              height={126}
              priority
              className="h-6 w-auto brightness-0 invert"
            />
          </Link>

          <div
            ref={menuRef}
            className="relative hidden items-center gap-6 lg:flex"
            onMouseLeave={() => setProductsOpen(false)}
          >
            <nav aria-label="Primary" className="flex items-center gap-6">
              <button
                type="button"
                aria-expanded={productsOpen}
                aria-controls="products-menu"
                onMouseEnter={() => setProductsOpen(true)}
                onClick={() => setProductsOpen((value) => !value)}
                className={`text-[13px] transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  productsOpen ? "text-white" : "text-[#b5b5b5] hover:text-white"
                }`}
              >
                Products
              </button>
              <span className="flex items-center gap-6" onMouseEnter={() => setProductsOpen(false)}>
                {barLinks.map((link) => (
                  <TextLink key={link.href} href={link.href}>
                    {link.label}
                  </TextLink>
                ))}
              </span>
            </nav>
            <span
              aria-hidden
              className="h-4 w-px bg-white/15"
              onMouseEnter={() => setProductsOpen(false)}
            />
            <span onMouseEnter={() => setProductsOpen(false)}>
              <TextLink href={docsHref} external>
                Docs
              </TextLink>
            </span>
            <Link
              href="/contact"
              className="inline-flex h-8 items-center rounded-full bg-white px-3.5 text-[13px] font-medium text-black transition-colors hover:bg-[#e8e8e8] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Talk to us
            </Link>

            {productsOpen ? <ProductsPanel onNavigate={() => setProductsOpen(false)} /> : null}
          </div>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls="hero-menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {mobileOpen ? <MobileMenu onNavigate={() => setMobileOpen(false)} /> : null}
      </header>

      <div className="flex w-full flex-1 flex-col justify-end px-5 pt-16 pb-8 sm:px-8 sm:pb-12">
        <h1 className="max-w-[10em] text-[2.35rem] leading-[1.02] font-medium tracking-[-0.04em] text-white sm:max-w-[12em] sm:text-6xl lg:max-w-none lg:text-[4.25rem] lg:tracking-[-0.045em]">
          <span className="lg:block">The financial infrastructure</span>{" "}
          <span className="lg:block">companies integrate</span>
        </h1>

        <div className="mt-8 flex flex-col gap-6 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
          <p className="text-sm leading-6 text-[#8d8d93] sm:text-[15px]">
            <span className="block">Purpose-built for banks and fintechs.</span>
            <span className="block">Designed to plug into your systems.</span>
          </p>
          <Link
            href="/fincore"
            className="inline-flex shrink-0 items-center gap-2 self-end text-sm text-[#d0d0d4] transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:self-auto"
          >
            <span className="rounded-md border border-white/15 px-1.5 py-0.5 text-[11px] leading-none text-[#9a9aa1]">
              Core
            </span>
            Fincore
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div aria-hidden className="h-5 rounded-t-2xl bg-[#F6F4EE] dark:bg-[#0B0C10]" />
    </section>
  );
}

function ProductsPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="absolute top-full right-0 z-50 w-[min(52rem,calc(100vw-8rem))] pt-3">
      <div id="products-menu" className="overflow-hidden rounded-xl border border-white/10 bg-[#161618] shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
        <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_13rem] divide-x divide-white/10">
          {featured.map((column) => (
            <div key={column[0].href} className="flex flex-col gap-1 p-3">
              {column.map((item) => (
                <FeatureLink key={item.href} {...item} onNavigate={onNavigate} />
              ))}
            </div>
          ))}
          <div className="flex flex-col p-3">
            {menuLinks.map((link) => (
              <PlainLink key={link.label} {...link} onNavigate={onNavigate} />
            ))}
          </div>
        </div>
        <MenuFooter onNavigate={onNavigate} />
      </div>
    </div>
  );
}

function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onNavigate();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onNavigate]);

  return createPortal(
    <div
      id="hero-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-80 flex h-dvh w-screen flex-col bg-black text-white"
    >
      <div className="flex h-16 shrink-0 items-center justify-between px-5">
        <Link href="/" onClick={onNavigate} aria-label="Insolify home">
          <Image
            src="/insolify-logo.png"
            alt=""
            width={423}
            height={126}
            className="h-6 w-auto brightness-0 invert"
          />
        </Link>
        <button
          type="button"
          onClick={onNavigate}
          aria-label="Close menu"
          className="inline-flex size-10 items-center justify-center"
        >
          <CloseIcon />
        </button>
      </div>

      <nav aria-label="Primary" className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pt-6 pb-8">
        <div className="flex flex-col">
          {featured.flat().map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="border-b border-white/10 py-4"
            >
              <span className="block text-lg font-medium text-white">{item.title}</span>
              <span className="mt-1 block text-sm leading-5 text-[#8d8d93]">{item.detail}</span>
            </Link>
          ))}
        </div>
        <div className="mt-2 flex flex-col">
          {menuLinks.map((link) =>
            "external" in link ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-white/10 py-4 text-lg text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={onNavigate}
                className="border-b border-white/10 py-4 text-lg text-white"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="mt-auto inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-medium text-black"
        >
          Talk to us
        </Link>
      </nav>
    </div>,
    document.body,
  );
}

function FeatureLink({
  href,
  title,
  detail,
  onNavigate,
}: {
  href: string;
  title: string;
  detail: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="block rounded-lg px-3 py-3 transition-colors hover:bg-white/6 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
    >
      <span className="block text-sm font-medium text-white">{title}</span>
      <span className="mt-1 block max-w-[18rem] text-[13px] leading-5 text-[#8d8d93]">{detail}</span>
    </Link>
  );
}

function PlainLink({
  href,
  label,
  external,
  onNavigate,
}: {
  href: string;
  label: string;
  external?: boolean;
  onNavigate: () => void;
}) {
  const className =
    "block rounded-lg px-3 py-2.5 text-sm text-white transition-colors hover:bg-white/6 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} onClick={onNavigate} className={className}>
      {label}
    </Link>
  );
}

function MenuFooter({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-3">
      <p className="flex min-w-0 items-center gap-2 text-[13px] text-[#c6c6c6]">
        <span className="shrink-0 rounded-md border border-white/15 px-1.5 py-0.5 text-[11px] leading-none text-[#9a9aa1]">
          Platform
        </span>
        <span className="truncate">Core banking, payments, and AI in one suite</span>
      </p>
      <Link
        href="/#features"
        onClick={onNavigate}
        className="shrink-0 text-[13px] text-[#d0d0d4] transition-colors hover:text-white"
      >
        Learn more <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

function TextLink({
  href,
  external,
  children,
}: {
  href: string;
  external?: boolean;
  children: string;
}) {
  const className =
    "text-[13px] text-[#b5b5b5] transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M3 4.5h12M3 9h12M3 13.5h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path d="M4.5 4.5 13.5 13.5M13.5 4.5 4.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
