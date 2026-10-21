import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/fincore", label: "Fincore" },
      { href: "/safi", label: "Safi AI" },
      { href: "/settle", label: "Settle Africa" },
      { href: "/tverify", label: "TVerify" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Features",
    links: [
      { href: "/fincore", label: "Accounts" },
      { href: "/fincore", label: "Lending" },
      { href: "/settle", label: "Payments" },
      { href: "/safi", label: "Intelligence" },
      { href: "/fincore", label: "Security" },
      { href: "/tverify", label: "Tracking" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/pricing", label: "Pricing" },
      { href: "/status", label: "Status" },
      { href: "/#impact", label: "Customers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "https://docs.insolify.com/", label: "Developer Hub", external: true },
      { href: "/status", label: "Status" },
      { href: "/tverify", label: "TVerify" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: "https://docs.insolify.com/", label: "Developer Hub", external: true },
      { href: "/status", label: "Status" },
    ],
  },
] as const;

const legal = [
  { href: "https://www.insolify.com/", label: "Privacy" },
  { href: "https://www.insolify.com/", label: "Terms" },
] as const;

export function SiteFooter() {
  return (
    /* mt-auto pushes the footer to the bottom on short pages.
       No bottom padding or margin so nothing shows below it. */
    <div className="mt-auto">
      <CtaBanner />
      <footer
        id="contact"
        className="border-t border-black/10 bg-white text-black dark:border-white/10 dark:bg-black dark:text-white"
      >
        <div className="mx-auto w-full max-w-6xl px-4 pb-0 pt-8 sm:px-6 lg:px-8">
          {/* Logo + columns — all baseline-aligned on large screens */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-[auto_repeat(5,minmax(0,1fr))] lg:gap-x-10 lg:items-start">
            <Link
              href="/"
              className="col-span-2 inline-flex items-center sm:col-span-3 lg:col-span-1"
            >
              <Image
                src="/insolify-logo.png"
                alt="Insolify"
                width={423}
                height={126}
                className="h-6 w-auto dark:brightness-0 dark:invert"
              />
            </Link>

            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-medium">{column.title}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={`${column.title}-${link.label}`}>
                      <Link
                        href={link.href}
                        {...("external" in link
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="text-sm text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar — flush to the bottom edge */}
          <div className="mt-8 flex items-center justify-between border-t border-black/10 py-4 dark:border-white/10">
            <p className="text-xs text-black/40 dark:text-white/40">
              © {new Date().getFullYear()} Insolify. All rights reserved.
            </p>
            <ul className="flex gap-5">
              {legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-black/40 transition-colors hover:text-black dark:text-white/40 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function CtaBanner() {
  return (
    <section
      aria-label="Get started with Insolify"
      className="bg-[#f5f5f5] px-4 py-14 text-black sm:px-6 sm:py-16 lg:px-8 dark:bg-[#111] dark:text-white"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
          Modern banking infrastructure built for speed, security, and scale.
        </h2>
        <Link
          href="/contact"
          className="mt-8 inline-flex h-10 items-center rounded-full bg-black px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Book a demo with the Insolify team
        </Link>
      </div>
    </section>
  );
}
