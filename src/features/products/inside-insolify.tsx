import Link from "next/link";

const columns = [
  {
    title: "Company",
    body: "Insolify builds the financial software other companies integrate into the systems they already run.",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Products",
    body: "Fincore for core banking, Safi AI for finance work, and Settle Africa for payments.",
    links: [
      { href: "/fincore", label: "Fincore" },
      { href: "/safi", label: "Safi AI" },
      { href: "/settle", label: "Settle Africa" },
    ],
  },
  {
    title: "For teams",
    body: "Documentation, status, and a direct line to the people who take institutions live.",
    links: [
      { href: "https://docs.insolify.com/", label: "Documentation" },
      { href: "/status", label: "Status" },
      { href: "/contact", label: "Talk to us" },
    ],
  },
] as const;

export function InsideInsolify() {
  return (
    <section id="inside-insolify" className="bg-white px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">Company</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">Software institutions can run</h2>
        <div className="mt-10 grid border-t border-black/10 md:grid-cols-3 dark:border-white/10">
          {columns.map((column) => (
            <article key={column.title} className="border-b border-black/10 py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0 dark:border-white/10">
              <h3 className="text-lg font-medium">{column.title}</h3>
              <p className="mt-3 max-w-sm text-sm leading-6 text-[#5c5c5c] dark:text-[#b5b5b5]">{column.body}</p>
              <ul className="mt-6 flex flex-col gap-2">
                {column.links.map((link) => {
                  const external = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium underline underline-offset-4"
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
