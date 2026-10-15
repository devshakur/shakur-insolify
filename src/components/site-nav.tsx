"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { ArrowRight } from "lucide-react";

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
  ],
] as const;

const menuLinks = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

const barLinks = [
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
] as const;

function subscribeToTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

export function SiteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const dark = useSyncExternalStore(subscribeToTheme, () => document.documentElement.classList.contains("dark"), () => false);

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

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
    <header
      ref={menuRef}
      onMouseLeave={() => setProductsOpen(false)}
      className="sticky top-0 z-40 bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="flex h-16 w-full items-center justify-between gap-6 border-b border-black/10 px-5 sm:px-8 dark:border-white/10">
        <Link href="/" aria-label="Insolify home" className="shrink-0">
          <Image
            src="/insolify-logo.png"
            alt=""
            width={423}
            height={126}
            priority
            className="h-6 w-auto dark:brightness-0 dark:invert"
          />
        </Link>

        <div className="relative hidden items-center gap-6 lg:flex">
          <nav aria-label="Primary" className="flex items-center gap-6">
            <span onMouseEnter={() => setProductsOpen(false)}>
              <TextLink href="/">Home</TextLink>
            </span>
            <button
              type="button"
              aria-expanded={productsOpen}
              aria-controls="products-menu"
              onMouseEnter={() => setProductsOpen(true)}
              onClick={() => setProductsOpen((value) => !value)}
              className={`text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black ${
                productsOpen
                  ? "text-black dark:text-white"
                  : "text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white"
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
          <button
            type="button"
            onClick={toggleTheme}
            onMouseEnter={() => setProductsOpen(false)}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex size-8 items-center justify-center rounded-full text-black dark:text-white"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <Link
            href="/contact"
            onMouseEnter={() => setProductsOpen(false)}
            className="inline-flex h-8 items-center rounded-full bg-black px-3.5 text-[13px] font-medium text-white transition-colors hover:bg-[#2a2a2a] focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:bg-white dark:text-black dark:hover:bg-[#e8e8e8] dark:focus-visible:ring-offset-black"
          >
            Talk to us
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
            className="inline-flex size-9 items-center justify-center"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            type="button"
            className="inline-flex size-9 items-center justify-center"
            aria-expanded={mobileOpen}
            aria-controls="site-menu"
            onClick={() => setMobileOpen((value) => !value)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
      {productsOpen ? <ProductsPanel onNavigate={() => setProductsOpen(false)} /> : null}
      {mobileOpen ? <MobileMenu onNavigate={() => setMobileOpen(false)} /> : null}
    </header>
  );
}

const productColumns = [
  [
    {
      id: "core",
      label: "Core",
      items: [{ href: "/fincore", title: "Fincore", detail: "Accounts, lending, and channels" }],
    },
    {
      id: "intelligence",
      label: "Intelligence",
      items: [{ href: "/safi", title: "Safi AI", detail: "Support, risk, and research" }],
    },
  ],
  [
    {
      id: "payments",
      label: "Payments",
      items: [
        { href: "/settle", title: "Settle Africa", detail: "Cross-border payments" },
        { href: "/tverify", title: "TVerify", detail: "Confirm a payment receipt" },
      ],
    },
  ],
] as const;

function ProductsPanel({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div id="products-menu" className="absolute inset-x-0 top-full hidden border-b border-black/10 bg-white lg:block dark:border-white/10 dark:bg-black">
      <div className="mx-auto flex w-full max-w-305 flex-row gap-16 px-5 pt-10 pb-20 xl:gap-30.5">
        <div className="w-full max-w-67.25 shrink-0">
          <h2 className="text-[45px] leading-[1.11] font-medium tracking-tight">Products</h2>
          <p className="mt-7 mb-2.5 text-lg leading-snug text-[#6d6d6d] dark:text-white/60">
            Core banking, payments, and checks for the institutions that run them.
          </p>
          <Link href="/contact" onClick={onNavigate} className="group inline-flex w-fit items-center gap-1 text-base font-medium">
            Talk to us
            <MenuArrow />
          </Link>
        </div>
        <div className="grid min-w-0 flex-1 grid-cols-2 items-start gap-12.5">
          {productColumns.map((column) => (
            <div key={column[0].id} className="flex flex-col gap-12.5">
              {column.map((group) => (
                <section key={group.id}>
                  <h3 className="mb-5 flex items-center gap-3.5 text-sm font-medium uppercase">
                    <GroupMark id={group.id} />
                    {group.label}
                  </h3>
                  <div className="flex flex-col gap-2.5 pl-10">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onNavigate}
                        className="group flex items-center gap-2.5 transition-transform hover:translate-x-2"
                      >
                        <span className="shrink-0 text-base font-medium">{item.title}</span>
                        <span className="flex items-center gap-2.5 text-sm text-[#6d6d6d] transition-colors group-hover:text-black dark:text-white/55 dark:group-hover:text-white">
                          {item.detail}
                          <MenuArrow />
                        </span>
                      </Link>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          ))}
        </div>
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
      id="site-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-80 flex h-dvh w-screen flex-col bg-white text-black dark:bg-black dark:text-white"
    >
      <div className="flex h-16 shrink-0 items-center justify-between px-5">
        <Link href="/" onClick={onNavigate} aria-label="Insolify home">
          <Image src="/insolify-logo.png" alt="" width={423} height={126} className="h-6 w-auto dark:brightness-0 dark:invert" />
        </Link>
        <button type="button" onClick={onNavigate} aria-label="Close menu" className="inline-flex size-10 items-center justify-center">
          <CloseIcon />
        </button>
      </div>
      <nav aria-label="Primary" className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pt-6 pb-8">
        <Link href="/" onClick={onNavigate} className="border-b border-black/10 py-4 text-lg font-medium dark:border-white/10">
          Home
        </Link>
        <div className="flex flex-col">
          {featured.flat().map((item) => (
            <Link key={item.href} href={item.href} onClick={onNavigate} className="border-b border-black/10 py-4 dark:border-white/10">
              <span className="block text-lg font-medium">{item.title}</span>
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
                className="border-b border-black/10 py-4 text-lg dark:border-white/10"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} href={link.href} onClick={onNavigate} className="border-b border-black/10 py-4 text-lg dark:border-white/10">
                {link.label}
              </Link>
            ),
          )}
        </div>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="mt-auto inline-flex h-12 w-full items-center justify-center rounded-full bg-black text-sm font-medium text-white dark:bg-white dark:text-black"
        >
          Talk to us
        </Link>
      </nav>
    </div>,
    document.body,
  );
}

function GroupMark({ id }: { id: (typeof productColumns)[number][number]["id"] }) {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" aria-hidden className="size-6.25 shrink-0">
      <circle cx="12.5" cy="12.5" r="12.5" className="fill-black dark:fill-white" />
      {id === "core" ? (
        <path d="M8 9.5h9M8 12.5h9M8 15.5h6" stroke="white" className="dark:stroke-black" strokeWidth="1.4" strokeLinecap="round" />
      ) : null}
      {id === "payments" ? (
        <path d="M8 12.5h8.2M13.4 9.2 16.8 12.5 13.4 15.8" stroke="white" className="dark:stroke-black" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      ) : null}
      {id === "intelligence" ? (
        <path d="M12.5 7.5v2.2M12.5 15.3v2.2M7.5 12.5h2.2M15.3 12.5h2.2M9 9l1.5 1.5M14.5 14.5 16 16M16 9l-1.5 1.5M10.5 14.5 9 16" stroke="white" className="dark:stroke-black" strokeWidth="1.3" strokeLinecap="round" />
      ) : null}
    </svg>
  );
}

function MenuArrow() {
  return (
    <svg className="size-3.5 shrink-0 -translate-x-1 transition-transform group-hover:translate-x-0" width="21" height="20" viewBox="0 0 21 20" fill="none" aria-hidden>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.23245 0.261511C9.5528 -0.0871703 10.0722 -0.0871703 10.3925 0.261511L18.2675 8.83294C18.5879 9.18163 18.5879 9.74694 18.2675 10.0956L10.3925 18.667C10.0722 19.0157 9.5528 19.0157 9.23245 18.667C8.9121 18.3184 8.9121 17.753 9.23245 17.4044L16.5274 9.46428L9.23245 1.5242C8.9121 1.17551 8.9121 0.610194 9.23245 0.261511Z"
      />
      <path
        className="opacity-0 transition-opacity group-hover:opacity-100"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 9.35379C1 8.86068 1.36727 8.46094 1.82031 8.46094H17.1328C17.5859 8.46094 17.9531 8.86068 17.9531 9.35379C17.9531 9.84691 17.5859 10.2467 17.1328 10.2467H1.82031C1.36727 10.2467 1 9.84691 1 9.35379Z"
      />
    </svg>
  );
}





function TextLink({ 
  href, 
  external, 
  children,
  variant = "default",
  showArrow = false,
}: { 
  href: string; 
  external?: boolean; 
  children: string;
  variant?: "default" | "subtle" | "emphasis";
  showArrow?: boolean;
}) {
  const baseClassName =
    "inline-flex items-center gap-1.5 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-black";

  const variantClassName = {
    default: "text-sm font-medium text-black/80 hover:text-black dark:text-white/80 dark:hover:text-white focus-visible:ring-black dark:focus-visible:ring-white",
    subtle: "text-xs font-medium text-black/60 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80 focus-visible:ring-black/50 dark:focus-visible:ring-white/50",
    emphasis: "text-sm font-semibold text-black hover:gap-3 dark:text-white focus-visible:ring-black dark:focus-visible:ring-white",
  };

  const className = `${baseClassName} ${variantClassName[variant]}`;

  const linkContent = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {linkContent}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {linkContent}
    </Link>
  );
}

export default TextLink;

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M20.2 15.1A8.6 8.6 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z" fill="currentColor" />
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
