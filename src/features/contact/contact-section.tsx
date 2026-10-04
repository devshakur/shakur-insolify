"use client";

import Link from "next/link";
import { FormEvent, useState, type ReactNode } from "react";

const channels = [
  {
    title: "Email",
    body: "Send us a note and we’ll reply as soon as we can.",
    href: "mailto:sales@insolify.com",
    action: "sales@insolify.com",
    meta: "Response time: within 2 hours",
  },
  {
    title: "Schedule a meeting",
    body: "Book a call with the team at a time that works for you.",
    href: "mailto:sales@insolify.com?subject=Schedule%20a%20meeting",
    action: "Book a call",
    meta: "Mon – Fri, 9 AM – 6 PM WAT",
  },
  {
    title: "Office",
    body: "Visit our headquarters in Abuja.",
    href: "https://maps.google.com/?q=No+20+Aba+Close+Area+8+Garki+Abuja",
    action: "No 20, Aba Close, Area 8, Garki",
    meta: "Monday – Friday, 9 AM – 6 PM WAT",
  },
] as const;

const subjects = [
  "Sales Inquiry",
  "Support Request",
  "Partnership Opportunity",
  "Request a Demo",
  "Other",
] as const;

const offices = [
  {
    country: "Nigeria",
    city: "Abuja",
    address: "No 20, Aba Close, Area 8, Garki",
    zone: "WAT",
  },
  {
    country: "Nigeria",
    city: "Abuja",
    address: "No 10, ChurchGate Tower, CBD",
    zone: "WAT",
  },
  {
    country: "Kenya",
    city: "Nairobi",
    address: "No 9 River Road, Central Business District",
    zone: "EAT",
  },
  {
    country: "United Arab Emirates",
    city: "Dubai",
    address: "B2, Complex A, Saha Towers, Downtown Dubai",
    zone: "GST",
  },
] as const;

const fieldClass =
  "w-full rounded-full border border-[#e5e5ea] bg-white px-5 py-4 text-base leading-normal text-[#111] outline-none placeholder:text-[#b0b0b6] focus:border-[#7b61ff] sm:text-sm dark:border-white/12 dark:bg-[#1c1c22] dark:text-white dark:placeholder:text-[#7A7A82] dark:focus:border-[#7b61ff]";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="px-4 pb-8 sm:px-6 lg:px-10">
      <div className="rounded-4xl bg-white px-5 py-14 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-16 lg:py-20 dark:bg-[#141418] dark:shadow-none">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#8b8b93] dark:text-[#9A9AA3]">
            <SparkIcon />
            Contact
          </p>
          <h1 className="mt-4 text-[2.15rem] leading-[1.08] font-semibold tracking-tight text-[#111] sm:text-5xl lg:text-[3.4rem] dark:text-white">
            Get in touch
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#8a8a8a] sm:text-[15px] dark:text-[#9CA3AF]">
            We&apos;re here to help — whether you need support, want a demo, or
            are exploring a partnership.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-3 md:grid-cols-3">
          {channels.map((channel) => (
            <Link
              key={channel.title}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-3xl border border-[#eeeef2] bg-[#fafafa] px-5 py-5 transition-colors hover:bg-[#f4f4f7] dark:border-white/8 dark:bg-[#18181d] dark:hover:bg-[#1c1c22]"
            >
              <p className="text-base font-semibold tracking-tight text-[#111] dark:text-white">
                {channel.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#8a8a8a] dark:text-[#9CA3AF]">
                {channel.body}
              </p>
              <p className="mt-4 text-sm font-medium text-[#7b61ff]">{channel.action}</p>
              <p className="mt-1 text-xs text-[#9CA3AF]">{channel.meta}</p>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-8">
          <div className="rounded-[1.75rem] border border-[#eeeef2] bg-[#fafafa] px-5 py-6 sm:px-7 sm:py-8 dark:border-white/8 dark:bg-[#18181d]">
            <h2 className="text-xl font-semibold tracking-tight text-[#111] dark:text-white">
              Send us a message
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#8a8a8a] dark:text-[#9CA3AF]">
              Tell us a little about your institution and we&apos;ll get back to you.
            </p>

            {submitted ? (
              <p className="mt-8 rounded-[1.4rem] bg-[#eef0ff] px-5 py-5 text-sm leading-6 text-[#111] dark:bg-[#1d1b2c] dark:text-white">
                Thanks — your message is in. We typically reply within 2 hours
                during business hours.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-7 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Full name" htmlFor="contact-name">
                    <input
                      id="contact-name"
                      name="name"
                      required
                      autoComplete="name"
                      placeholder="Abdulshakur Dauda"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Email" htmlFor="contact-email">
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@institution.com"
                      className={fieldClass}
                    />
                  </Field>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Company" htmlFor="contact-company">
                    <input
                      id="contact-company"
                      name="company"
                      autoComplete="organization"
                      placeholder="Your institution"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Subject" htmlFor="contact-subject">
                    <select
                      id="contact-subject"
                      name="subject"
                      required
                      defaultValue=""
                      className={`${fieldClass} appearance-none bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%228%22 fill=%22none%22%3E%3Cpath d=%22M1 1.5 6 6.5 11 1.5%22 stroke=%22%238a8a8a%22 stroke-width=%221.5%22 stroke-linecap=%22round%22/%3E%3C/svg%3E')] bg-position-[right_1.25rem_center] bg-no-repeat pr-12`}
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field label="Message" htmlFor="contact-message">
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full resize-y rounded-[1.4rem] border border-[#e5e5ea] bg-white px-5 py-4 text-base leading-6 text-[#111] outline-none placeholder:text-[#b0b0b6] focus:border-[#7b61ff] sm:text-sm dark:border-white/12 dark:bg-[#1c1c22] dark:text-white dark:placeholder:text-[#7A7A82] dark:focus:border-[#7b61ff]"
                  />
                </Field>
                <button
                  type="submit"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#111] px-7 text-sm font-semibold text-white transition-colors hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
                >
                  Send message
                </button>
                <p className="text-xs leading-5 text-[#9CA3AF]">
                  We respect your privacy. Your information will never be shared
                  with third parties.
                </p>
              </form>
            )}
          </div>

          <aside className="rounded-[1.75rem] bg-[#111] px-6 py-7 text-white dark:bg-[#1a1a20]">
            <h3 className="text-lg font-semibold tracking-tight">Response times</h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li className="flex items-center justify-between gap-4">
                <span className="text-white/70">Email</span>
                <span>Within 2 hours</span>
              </li>
              <li className="flex items-center justify-between gap-4">
                <span className="text-white/70">Chat</span>
                <span>Within 15 minutes</span>
              </li>
            </ul>
            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="text-sm font-medium">Need something sooner?</p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                Support is available 24/7. Email the team and we&apos;ll pick it up.
              </p>
              <Link
                href="mailto:sales@insolify.com"
                className="mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-[#111] transition-colors hover:bg-[#f3f3f3]"
              >
                Email sales
              </Link>
            </div>
          </aside>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="text-[1.65rem] font-semibold tracking-tight text-[#111] sm:text-3xl dark:text-white">
            Our global presence
          </h2>
          <p className="mt-2 text-sm text-[#8a8a8a] dark:text-[#9CA3AF]">
            Teams across Africa and the Middle East.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <article
                key={`${office.city}-${office.address}`}
                className="rounded-[1.4rem] border border-[#eeeef2] bg-[#fafafa] px-5 py-5 dark:border-white/8 dark:bg-[#18181d]"
              >
                <p className="text-[13px] font-medium text-[#7b61ff]">{office.country}</p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-[#111] dark:text-white">
                  {office.city}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#8a8a8a] dark:text-[#9CA3AF]">
                  {office.address}
                </p>
                <p className="mt-3 text-xs text-[#9CA3AF]">{office.zone}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-sm font-medium text-[#111] dark:text-white">
        {label}
      </span>
      {children}
    </label>
  );
}

function SparkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M6 1.1 6.7 5.3 10.9 6 6.7 6.7 6 10.9 5.3 6.7 1.1 6 5.3 5.3 6 1.1Z"
        fill="currentColor"
      />
    </svg>
  );
}
