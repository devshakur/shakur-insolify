"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropletIcon, LoopIcon, NodesIcon } from "@/features/products/icons";

const products = [
  { href: "/safi", label: "Safi AI", icon: "safi" },
  { href: "/fincore", label: "Fincore", icon: "fincore" },
  { href: "/settle", label: "Settle Africa", icon: "settle" },
] as const;

const resources = [
  { href: "https://docs.insolify.com/", label: "Developer Hub", icon: "docs" },
  { href: "/status", label: "Status", icon: "status" },
] as const;

const pages = [
  { href: "/pricing", label: "Pricing" },
  { href: "/tverify", label: "TVerify" },
  { href: "/#faq", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

type InsolifySidebarContentProps = {
  onNavigate: () => void;
};

export function InsolifySidebarContent({ onNavigate }: InsolifySidebarContentProps) {
  const pathname = usePathname();
  const home = pathname === "/";

  return (
    <div className="flex min-h-full flex-col">
      <nav aria-label="Sidebar">
        <p className="text-[11px] font-medium tracking-[0.22em] text-[#9A9AA3] uppercase dark:text-white/35">
          Products
        </p>
        <ul className="mt-4 flex flex-col gap-1.5">
          {products.map((item) => (
            <li key={item.label}>
              <SidebarLink href={item.href} pathname={pathname} onNavigate={onNavigate}>
                <SidebarGlyph name={item.icon} />
                {item.label}
              </SidebarLink>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-[11px] font-medium tracking-[0.22em] text-[#9A9AA3] uppercase dark:text-white/35">
          Resources
        </p>
        <ul className="mt-4 flex flex-col gap-1.5">
          {resources.map((item) => (
            <li key={item.label}>
              <SidebarLink href={item.href} pathname={pathname} onNavigate={onNavigate} external={item.href.startsWith("http")}>
                <SidebarGlyph name={item.icon} />
                {item.label}
              </SidebarLink>
            </li>
          ))}
        </ul>

        <ul className="mt-10 flex flex-col gap-1.5 border-t border-black/8 pt-8 dark:border-white/10">
          {pages.map((item) => (
            <li key={item.label}>
              <SidebarLink href={item.href} pathname={pathname} onNavigate={onNavigate}>
                {item.label}
              </SidebarLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto flex items-end justify-between gap-4 pt-10">
        <Link
          href="https://www.insolify.com/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavigate}
          className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-[#111] text-sm font-semibold text-white dark:bg-white dark:text-[#111]"
        >
          Account
        </Link>
        <Link
          href="/"
          onClick={onNavigate}
          aria-label="Back to top"
          aria-current={home ? "page" : undefined}
          className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full transition ${
            home
              ? "bg-[#111] text-white ring-4 ring-[#f2f2f4] dark:bg-white dark:text-[#111] dark:ring-white/15"
              : "bg-[#f2f2f4] dark:bg-white"
          }`}
        >
          <DropletIcon />
        </Link>
      </div>
    </div>
  );
}

function isCurrentPage(href: string, pathname: string) {
  if (href.startsWith("http")) return false;
  const path = href.split("#")[0] || "/";
  return path === pathname && !href.includes("#");
}

function SidebarLink({
  href,
  pathname,
  children,
  onNavigate,
  external = false,
}: {
  href: string;
  pathname: string;
  children: ReactNode;
  onNavigate: () => void;
  external?: boolean;
}) {
  const active = isCurrentPage(href, pathname);

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`inline-flex w-full items-center gap-3 rounded-full px-4 py-3 text-[17px] transition ${
        active
          ? "bg-[#f2f2f4] font-medium text-[#111] dark:bg-[#1c1c22] dark:text-white"
          : "text-[#111] hover:bg-[#f6f6f8] dark:text-white/92 dark:hover:bg-white/6 dark:hover:text-white"
      }`}
    >
      {children}
    </Link>
  );
}

function SidebarGlyph({ name }: { name: "safi" | "fincore" | "settle" | "docs" | "status" }) {
  if (name === "safi") return <DropletIcon />;
  if (name === "fincore") return <NodesIcon />;
  if (name === "settle") return <LoopIcon />;
  if (name === "docs") return <DocsIcon />;
  return <StatusIcon />;
}

function DocsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M5 3.2h5.2L13 6v8.8H5V3.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M10.1 3.3V6h2.8" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function StatusIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M2.5 11.2 6 7.4l3 3.2 6.5-6.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
