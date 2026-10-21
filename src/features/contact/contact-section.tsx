

"use client";

import { useState } from "react";


// --- Icons ---
const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// --- Mock Data ---
const timeSlots = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

const offices = [
  { city: "Dubai, UAE", address: "B2 Saha Towers, DownTown Dubai" },
  { city: "Abuja, Nigeria", address: "No 1 Adjacent Defense HQ, Area 11, Garki" },
  { city: "Nairobi, Kenya", address: "No 9 River Road, Central Business District" },
];

export function ContactSection() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  // Simple calendar logic (just for UI demonstration)
  const daysInMonth = 31;
  const startDayOffset = 3; // Example: Month starts on a Thursday

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <section className="bg-white py-20 sm:py-28 dark:bg-[#0a0a0a]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl lg:text-6xl dark:text-white">
            Let&apos;s build the next <br className="hidden sm:block" />
            thing in finance.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
            Talk with us about platforms, AI, payments, or infrastructure.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Column: Booking Calendar */}
          <div className="flex flex-col rounded-3xl border border-black/10 bg-neutral-50/50 p-6 sm:p-8 dark:border-white/10 dark:bg-[#111111]">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                <CalendarIcon />
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                  Book a meeting
                </h2>
                <p className="text-sm text-neutral-500">Schedule a call with our team.</p>
              </div>
            </div>

            {/* Calendar UI */}
            <div className="rounded-2xl border border-black/5 bg-white p-5 shadow-sm dark:border-white/5 dark:bg-[#1a1a1a]">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-black dark:text-white">October 2024</span>
                <div className="flex gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-black/10 hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/5">&larr;</button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-black/10 hover:bg-neutral-50 dark:border-white/10 dark:hover:bg-white/5">&rarr;</button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-neutral-400">
                <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
              </div>

              <div className="mt-2 grid grid-cols-7 gap-1">
                {/* Empty slots for offset */}
                {Array.from({ length: startDayOffset }).map((_, i) => (
                  <div key={`empty-${i}`} className="h-10" />
                ))}
                {/* Days */}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isSelected = selectedDate === day;
                  const isPast = day < 10; // Mock: disable past days

                  return (
                    <button
                      key={day}
                      disabled={isPast}
                      onClick={() => setSelectedDate(day)}
                      className={`flex h-10 items-center justify-center rounded-lg text-sm transition-colors ${isSelected
                          ? "bg-[#000000] font-semibold text-black shadow-sm"
                          : isPast
                            ? "cursor-not-allowed text-neutral-300 dark:text-neutral-600"
                            : "text-black hover:bg-neutral-100 dark:text-white dark:hover:bg-white/10"
                        }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slots */}
            <div className="mt-6">
              <p className="mb-3 text-sm font-medium text-neutral-600 dark:text-neutral-400">Available times (WAT)</p>
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`flex items-center justify-center gap-1.5 rounded-lg border px-2 py-2.5 text-xs font-medium transition-all ${selectedTime === time
                        ? "border-[#000000] bg-black/10 dark:bg-white/10 text-black dark:text-white"
                        : "border-black/10 bg-white text-neutral-600 hover:border-black/30 dark:border-white/10 dark:bg-transparent dark:text-neutral-300 dark:hover:border-white/30"
                      }`}
                  >
                    <ClockIcon />
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Booking CTA */}
            <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5">
              <button
                disabled={!selectedDate || !selectedTime}
                className="flex w-full items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-80 disabled:opacity-50 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
              >
                {selectedDate && selectedTime ? `Confirm meeting for Oct ${selectedDate} at ${selectedTime}` : "Select a date and time"}
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold tracking-tight text-black dark:text-white">
                Send a message
              </h2>
              <p className="mt-2 text-[15px] text-neutral-500 dark:text-neutral-400">
                Don &apos;t include sensitive account details, credentials, or payment info.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-black dark:text-white">First name</label>
                  <input type="text" required className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-neutral-400 focus:border-[#000000] dark:border-white/10 dark:text-white dark:focus:border-[#000000]" placeholder="Jane" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-black dark:text-white">Last name</label>
                  <input type="text" required className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-neutral-400 focus:border-[#000000] dark:border-white/10 dark:text-white dark:focus:border-[#000000]" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-black dark:text-white">Work email</label>
                <input type="email" required className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-neutral-400 focus:border-[#000000] dark:border-white/10 dark:text-white dark:focus:border-[#000000]" placeholder="jane@company.com" />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-black dark:text-white">Company</label>
                <input type="text" className="w-full rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-neutral-400 focus:border-[#000000] dark:border-white/10 dark:text-white dark:focus:border-[#000000]" placeholder="Acme Inc." />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-black dark:text-white">What can we help with?</label>
                <textarea required rows={4} className="w-full resize-none rounded-xl border border-black/10 bg-transparent px-4 py-3 text-sm text-black outline-none transition-colors placeholder:text-neutral-400 focus:border-[#000000] dark:border-white/10 dark:text-white dark:focus:border-[#000000]" placeholder="Tell us about your needs..." />
              </div>

              <button
                type="submit"
                disabled={formStatus !== "idle"}
                className="flex w-full items-center justify-center rounded-full bg-black px-6 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-70 dark:bg-white dark:text-black"
              >
                {formStatus === "idle" && "Send message"}
                {formStatus === "submitting" && "Sending..."}
                {formStatus === "success" && (
                  <>
                    <CheckIcon /> Message sent
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Office Locations */}
        <div className="mt-24 border-t border-black/5 pt-12 dark:border-white/5">
          <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-neutral-400">
            Our Offices
          </h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {offices.map((office) => (
              <div key={office.city} className="rounded-2xl border border-black/5 bg-neutral-50 p-6 text-center dark:border-white/5 dark:bg-[#111111]">
                <p className="font-semibold text-black dark:text-white">{office.city}</p>
                <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{office.address}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-neutral-500">
              Or email us directly at{" "}
              <a href="mailto:sales@insolify.com" className="font-medium text-black underline decoration-black/30 underline-offset-4 hover:decoration-black dark:text-white dark:decoration-white/30 dark:hover:decoration-white">
                sales@insolify.com
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}