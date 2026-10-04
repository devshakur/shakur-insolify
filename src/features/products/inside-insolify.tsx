"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const site = "https://www.insolify.com/";

const companyLinks = [
  { href: site, label: "About Insolify" },
  { href: "/contact", label: "Contact" },
];

const innovationLinks = [
  { href: "/safi", label: "Safi AI" },
  { href: "/fincore", label: "Fincore" },
];

const peopleLinks = [
  { href: site, label: "Pricing" },
  { href: "/tverify", label: "Track Payment" },
];

export function InsideInsolify() {
  return (
    <section id="inside-insolify" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 dark:bg-[#0c0c0f]">
      <div className="mx-auto w-full">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF]">About us</p>
            <h2 className="mt-3 max-w-xl text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-[#111] sm:text-5xl dark:text-white">
              Lead in the AI era
              <br />
              with Insolify
            </h2>
            <Link
              href="#features"
              className="mt-7 inline-flex h-11 items-center rounded-full bg-[#0B6B45] px-5 text-sm font-medium text-white transition hover:bg-[#095538]"
            >
              Get Started
            </Link>
          </div>
          <p className="max-w-md text-sm leading-7 text-[#6B7280] lg:mt-8 lg:justify-self-end dark:text-[#B5B5B5]">
            From next-generation AI to cutting-edge software, our deep expertise
            across industries can help you reinvent how your business works.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-4 overflow-visible lg:mt-12 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative h-full min-h-88 overflow-hidden rounded-4xl lg:min-h-136">
            <StoryMedia />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_38%,rgba(0,0,0,0.72)_100%)]"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-white">Our company</h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                Explore Insolify&apos;s history and our culture of putting
                technology to work in the real world.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                {companyLinks.map((link) => (
                  <TextLink key={link.label} href={link.href} light>
                    {link.label}
                  </TextLink>
                ))}
              </div>
            </div>
          </article>

          <div className="grid grid-rows-2 gap-4 pr-6">
            <article className="rounded-4xl bg-[#DDF3E6] p-7 sm:p-8 dark:bg-[#1A2A22]">
              <h3 className="text-2xl font-semibold tracking-tight text-[#111] dark:text-white">
                Our innovations
              </h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-[#4B5563] dark:text-[#C5C8B8]">
                Visit the Insolify lab and see what&apos;s in store for the
                future of fintech and digital solutions.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {innovationLinks.map((link) => (
                  <TextLink key={link.label} href={link.href}>
                    {link.label}
                  </TextLink>
                ))}
              </div>
            </article>

            <article className="relative overflow-visible rounded-4xl bg-[#0B6B45] p-7 text-white sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">Our people</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                See what it takes to become an Insolifier or build your skills
                with our educational courses.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {peopleLinks.map((link) => (
                  <TextLink key={link.label} href={link.href} light>
                    {link.label}
                  </TextLink>
                ))}
              </div>
              <Link
                href={site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Insolify"
                className="absolute top-1/2 -right-4 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-[#0B6B45] text-white shadow-[0_10px_30px_rgba(11,107,69,0.35)] ring-8 ring-white dark:ring-[#0c0c0f]"
              >
                <ArrowIcon />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryMedia() {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <>
      <Image
        src="/image/inside-insolify-poster.jpg"
        alt=""
        fill
        className="object-cover object-center"
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
      {showVideo ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/image/inside-insolify-poster.jpg"
          onError={() => setShowVideo(false)}
        >
          <source src="/video/inside-insolify.mp4" type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}

function TextLink({
  href,
  children,
  light = false,
}: {
  href: string;
  children: string;
  light?: boolean;
}) {
  const external = href.startsWith("http");

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1 text-sm transition hover:opacity-70 ${
        light ? "text-white" : "text-[#111] dark:text-white"
      }`}
    >
      {children}
      <span aria-hidden>→</span>
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <path
        d="M5 13L13 5M13 5H6.5M13 5V11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
