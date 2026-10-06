const stories = [
  {
    id: "national-bank-of-dubai",
    company: "National Bank of Dubai",
    product: "Fincore",
    body: "Core banking on Fincore, with more than 5 million transactions a day and 99.99% uptime.",
    place: "left-8 top-1/2 max-w-[9rem] -translate-y-1/2 text-left",
    lift: "mt-6",
  },
  {
    id: "techflow-solutions",
    company: "TechFlow",
    product: "Safi AI",
    body: "Support cost down 60% after Safi AI took ticket routing and first responses.",
    place: "bottom-12 left-1/2 max-w-[8rem] -translate-x-1/2 text-center",
    lift: "mt-14",
  },
  {
    id: "emirates-insurance",
    company: "Emirates Insurance",
    product: "Safi AI",
    body: "Claims resolution moved from five days to four hours.",
    place: "top-12 left-1/2 max-w-[8rem] -translate-x-1/2 text-center",
    lift: "mt-2",
  },
  {
    id: "first-capital-bank",
    company: "First Capital",
    product: "Fincore",
    body: "Mobile and web banking launched on the same Fincore core.",
    place: "top-1/2 right-8 max-w-[8rem] -translate-y-1/2 text-right",
    lift: "mt-10",
  },
] as const;

export function ImpactStories() {
  return (
    <section id="impact" className="overflow-hidden bg-white px-4 py-16 text-black sm:px-6 sm:py-20 lg:px-8 dark:bg-black dark:text-white">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-[11px] tracking-[0.18em] text-[#6d6d6d] uppercase dark:text-white/50">Customers</p>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">How institutions use it</h2>
        <div className="mt-14 overflow-x-auto pb-4">
          <ul className="flex w-max items-start pr-4">
            {stories.map((story, index) => (
              <li key={story.id} className={`${story.lift} ${index === 0 ? "" : "-ml-16 sm:-ml-28"}`}>
                <article className="relative h-60 w-60 rounded-full border border-black/10 bg-[radial-gradient(circle_at_32%_28%,#ffffff,#cfcfcf_74%)] sm:h-88 sm:w-88 dark:border-white/10 dark:bg-[radial-gradient(circle_at_32%_28%,#3a3a3a,#101010_76%)]">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-full bg-[repeating-linear-gradient(-32deg,transparent_0_8px,rgba(0,0,0,0.045)_8px_9px)]"
                  />
                  <div className={`absolute ${story.place}`}>
                    <h3 className="text-[15px] leading-5 font-medium">{story.company}</h3>
                    <p className="mt-1 text-xs text-black/55 dark:text-white/55">{story.product}</p>
                  </div>
                  <p className="sr-only">{story.body}</p>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
