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
    <footer id="contact" className="bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[auto_repeat(5,minmax(0,1fr))] lg:gap-x-10">
          <Link href="/" className="col-span-2 inline-flex sm:col-span-3 lg:col-span-1 lg:pt-0.5">
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
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.label}`}>
                    <Link
                      href={link.href}
                      {...("external" in link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-[#6d6d6d] transition-colors hover:text-black dark:text-[#9a9a9a] dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <ul className="mt-20 flex gap-6">
          {legal.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#8a8a8a] transition-colors hover:text-black dark:hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
