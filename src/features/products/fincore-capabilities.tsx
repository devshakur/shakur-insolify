const capabilities = [
  {
    id: "accounts",
    title: "Account management",
    description: "Multi-currency accounts, interest, hierarchies, and live balances.",
  },
  {
    id: "payments",
    title: "Payment processing",
    description: "Real-time transfers, international payments, and scheduled payouts.",
  },
  {
    id: "risk",
    title: "Risk and compliance",
    description: "Monitoring, regulatory reporting, fraud checks, and audit trails.",
  },
  {
    id: "channels",
    title: "Digital channels",
    description: "Mobile, APIs, wallets, and open-banking connectivity.",
  },
] as const;

export function FincoreCapabilities() {
  return (
    <section id="capabilities" className="bg-white px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">Fincore</p>
        <div className="mt-3 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">Capabilities in the core</h2>
          <p className="max-w-sm text-sm leading-6 text-[#5c5c5c] dark:text-[#b5b5b5]">
            Accounts, payments, risk, and channels. Institutions add the modules they need.
          </p>
        </div>
        <div className="mt-10 grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
          {capabilities.map((capability) => (
            <article
              key={capability.id}
              className="border-b border-black/10 py-6 sm:border-b-0 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0 lg:py-8 dark:border-white/10"
            >
              <h3 className="text-lg font-medium">{capability.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#5c5c5c] dark:text-[#b5b5b5]">{capability.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
