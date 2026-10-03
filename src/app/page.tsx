import type { ReactNode } from "react";
import { Hero } from "@/components/hero";
import { FeaturedProducts } from "@/features/products/featured-products";

const howItWorks = {
  id: "how-it-works",
  title: "How it works",
  body: "Open the Insolify app, create an instance for the service you use, and manage it from one place. Fincore, Safi, and Settle stay together so onboarding, analytics, and day-to-day operations are not split across tools.",
};

const sections: { id: string; title: string; body: ReactNode }[] = [
  {
    id: "support",
    title: "Support",
    body: (
      <>
        Questions about onboarding or a deployment? Email{" "}
        <a
          href="mailto:sales@insolify.com"
          className="text-[#2b2b2b] underline decoration-black/20 underline-offset-4 dark:text-white dark:decoration-white/30"
        >
          sales@insolify.com
        </a>{" "}
        or visit{" "}
        <a
          href="https://www.insolify.com/"
          className="text-[#2b2b2b] underline decoration-black/20 underline-offset-4 dark:text-white dark:decoration-white/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          insolify.com
        </a>
        . Dedicated onboarding is part of the platform, with bank-grade security
        and end-to-end encryption.
      </>
    ),
  },
  {
    id: "faq",
    title: "FAQ",
    body: "Insolify is a software suite for businesses that want Fincore, Safi, and Settle in one app. It is free to download on the App Store and Google Play, and it requires iOS 15 or later on Apple devices.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-[#2b2b2b] dark:bg-[#0c0c0f] dark:text-[#ededed]">
      <main>
        <Hero />
        <FeaturedProducts />
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mx-auto flex min-h-[70vh] w-full max-w-3xl scroll-mt-28 flex-col justify-center px-6 py-16"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-[#2b2b2b] sm:text-4xl dark:text-white">
              {section.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6d6d6d] dark:text-[#b5b5b5]">
              {section.body}
            </p>
          </section>
        ))}
      </main>
    </div>
  );
}
