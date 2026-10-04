"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";

const columns = [
  {
    title: "Products",
    links: [
      { href: "/#features", label: "Safi AI" },
      { href: "/#capabilities", label: "Fincore" },
      { href: "/#features", label: "Settle Africa" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/#faq", label: "About" },
      { href: "/pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "https://www.insolify.com/", label: "Dashboard", external: true },
      { href: "https://www.insolify.com/", label: "Track Payment", external: true },
      { href: "https://www.insolify.com/", label: "Status", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "https://www.insolify.com/", label: "Privacy", external: true },
      { href: "https://www.insolify.com/", label: "Legacy", external: true },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#f5f6f8] px-3 pt-6 pb-3 sm:px-4 sm:pb-4 dark:bg-[#0c0c0f]">
      <div className="overflow-hidden rounded-4xl bg-white dark:bg-[#141418]">
        <div className="bg-linear-to-b from-[#e8f1ff] via-[#f4f8ff] to-white px-6 pt-16 pb-16 text-center sm:px-10 sm:pt-24 sm:pb-20 lg:px-16 dark:from-[#1a2233] dark:via-[#161820] dark:to-[#141418]">
          <h2 className="mx-auto max-w-xl text-[2.15rem] leading-[1.12] font-semibold tracking-tight text-[#111] sm:text-5xl dark:text-white">
            Ready to Take Control
            <br />
            of Your Institution?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#6B7280] sm:text-[15px] dark:text-[#9CA3AF]">
            Get expert software for core banking, AI, and payments — all from
            one suite, built for regulated financial institutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
            <a
              href="/#features"
              className="inline-flex h-11 items-center justify-center rounded-full bg-[#111] px-6 text-sm font-medium text-white transition-colors hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
            >
              Get started
            </a>
            <a
              href="mailto:sales@insolify.com"
              className="inline-flex h-11 items-center justify-center rounded-full border border-[#e5e7eb] bg-white px-6 text-sm font-medium text-[#111] transition-colors hover:bg-[#f8f8f8] dark:border-white/15 dark:bg-transparent dark:text-white dark:hover:bg-white/10"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className="px-6 pt-2 pb-10 sm:px-10 sm:pb-12 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.6fr)] lg:gap-20">
            <div>
              <a href="/" className="inline-flex items-center">
                <Image
                  src="/insolify-logo.png"
                  alt="Insolify"
                  width={423}
                  height={126}
                  className="h-7 w-auto dark:brightness-0 dark:invert"
                />
              </a>
              <p className="mt-8 text-sm text-[#4B5563] dark:text-[#C8C8C8]">
                Sign up to receive product updates.
              </p>
              <NewsletterForm />
              <p className="mt-4 max-w-64 text-[11px] leading-5 text-[#9CA3AF] dark:text-[#7A7A82]">
                By subscribing you agree to our Privacy Policy and consent to
                receive updates from Insolify.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4">
              {columns.map((column) => (
                <div key={column.title}>
                  <p className="text-sm font-semibold text-[#111] dark:text-white">
                    {column.title}
                  </p>
                  <ul className="mt-4 flex flex-col gap-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          {...("external" in link
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="text-sm text-[#6B7280] transition-colors hover:text-[#111] dark:text-[#9CA3AF] dark:hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-14 text-center text-xs text-[#9CA3AF] dark:text-[#6B6B73]">
            © 2026 Insolify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="mt-4 text-sm text-[#111] dark:text-white">
        Thanks — we&apos;ll keep you posted.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex max-w-80 items-center gap-2">
      <label htmlFor="footer-email" className="sr-only">
        Email address
      </label>
      <input
        id="footer-email"
        name="email"
        type="email"
        required
        placeholder="Enter your email"
        className="h-11 min-w-0 flex-1 rounded-full border-0 bg-[#f3f4f6] px-4 text-sm text-[#111] outline-none placeholder:text-[#9CA3AF] dark:bg-[#1c1c22] dark:text-white dark:placeholder:text-[#7A7A82]"
      />
      <button
        type="submit"
        className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-[#111] px-5 text-sm font-medium text-white transition-colors hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
      >
        Submit
      </button>
    </form>
  );
}
