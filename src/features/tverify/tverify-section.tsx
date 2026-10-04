"use client";

import { FormEvent, useRef, useState } from "react";

type TrackMode = "reference" | "receipt";
type LookupState =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "sample"; reference: string }
  | { status: "empty"; reference: string }
  | { status: "receipt"; filename: string };

const modes: { id: TrackMode; label: string }[] = [
  { id: "reference", label: "Transaction ID" },
  { id: "receipt", label: "Upload receipt" },
];

export function TverifySection() {
  const [mode, setMode] = useState<TrackMode>("reference");
  const [reference, setReference] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [result, setResult] = useState<LookupState>({ status: "idle" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const canTrack =
    result.status !== "loading" &&
    (mode === "reference" ? reference.trim().length > 0 : file !== null);

  function selectMode(next: TrackMode) {
    setMode(next);
    setResult({ status: "idle" });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canTrack) return;

    setResult({ status: "loading" });

    window.setTimeout(() => {
      if (mode === "receipt" && file) {
        setResult({ status: "receipt", filename: file.name });
        return;
      }

      const value = reference.trim().toUpperCase();
      if (value === "REF-12345") {
        setResult({ status: "sample", reference: value });
        return;
      }

      setResult({ status: "empty", reference: value });
    }, 700);
  }

  function handleFiles(files: FileList | null) {
    const next = files?.[0];
    if (!next) return;
    setFile(next);
    setResult({ status: "idle" });
  }

  return (
    <section id="tverify" className="px-4 pb-8 sm:px-6 lg:px-10">
      <div className="rounded-4xl bg-white px-5 py-14 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-16 lg:py-20 dark:bg-[#141418] dark:shadow-none">
        <div className="mx-auto max-w-3xl">
          <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#8b8b93] dark:text-[#9A9AA3]">
            <SparkIcon />
            TVerify
          </p>
          <h1 className="mt-4 text-[2.15rem] leading-[1.08] font-semibold tracking-tight text-[#111] sm:text-5xl lg:text-[3.4rem] dark:text-white">
            Track any transfer
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#8a8a8a] sm:text-[15px] dark:text-[#9CA3AF]">
            Look up settlement status using a transaction reference, or upload
            the receipt and we&apos;ll match it for you.
          </p>

          <div
            role="tablist"
            aria-label="Lookup method"
            className="mt-8 inline-flex items-center gap-1.5"
          >
            {modes.map((item) => {
              const selected = item.id === mode;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="tverify-form"
                  onClick={() => selectMode(item.id)}
                  className={`rounded-full px-4 py-2.5 text-sm font-medium transition-colors ${
                    selected
                      ? "bg-[#111] text-white dark:bg-white dark:text-[#111]"
                      : "bg-[#f2f2f4] text-[#111] hover:bg-[#e8e8ec] dark:bg-[#2a2a30] dark:text-white dark:hover:bg-[#33333a]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <form id="tverify-form" onSubmit={handleSubmit} className="mt-7">
            {mode === "reference" ? (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <label htmlFor="transaction-id" className="sr-only">
                  Transaction ID
                </label>
                <input
                  id="transaction-id"
                  name="reference"
                  value={reference}
                  onChange={(event) => {
                    setReference(event.target.value);
                    setResult({ status: "idle" });
                  }}
                  placeholder="e.g. REF-12345"
                  autoComplete="off"
                  className="box-border min-h-16 min-w-0 flex-1 appearance-none rounded-full border border-[#e5e5ea] bg-white px-5 py-4 text-base leading-normal text-[#111] outline-none placeholder:text-[#b0b0b6] focus:border-[#7b61ff] sm:min-h-14 sm:px-6 sm:py-3.5 sm:text-sm dark:border-white/12 dark:bg-[#1c1c22] dark:text-white dark:placeholder:text-[#7A7A82] dark:focus:border-[#7b61ff]"
                />
                <TrackButton enabled={canTrack} loading={result.status === "loading"} />
              </div>
            ) : (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/png,image/jpeg,application/pdf"
                  className="sr-only"
                  onChange={(event) => handleFiles(event.target.files)}
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(event) => {
                    event.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(event) => {
                    event.preventDefault();
                    setDragOver(false);
                    handleFiles(event.dataTransfer.files);
                  }}
                  className={`flex min-h-16 min-w-0 flex-1 items-center justify-between gap-3 rounded-full border border-dashed px-5 py-4 text-left text-base leading-normal transition-colors sm:min-h-14 sm:px-6 sm:py-3.5 sm:text-sm ${
                    dragOver
                      ? "border-[#7b61ff] bg-[#eef0ff] dark:bg-[#1d1b2c]"
                      : "border-[#e5e5ea] bg-[#fafafa] hover:bg-[#f4f4f7] dark:border-white/15 dark:bg-[#1c1c22]"
                  }`}
                >
                  <span className={file ? "text-[#111] dark:text-white" : "text-[#b0b0b6]"}>
                    {file ? file.name : "Drop a receipt or click to upload"}
                  </span>
                  <span className="shrink-0 text-[13px] font-medium text-[#7b61ff]">
                    Browse
                  </span>
                </button>
                <TrackButton enabled={canTrack} loading={result.status === "loading"} />
              </div>
            )}
            <p className="mt-3 text-xs text-[#9CA3AF]">
              {mode === "reference"
                ? "Use the reference from your Settle Africa receipt or confirmation email."
                : "PNG, JPG, or PDF. We only use the file to match the transfer."}
            </p>
          </form>

          {result.status !== "idle" && result.status !== "loading" ? (
            <LookupResult result={result} />
          ) : null}

          <div className="mt-16 grid gap-3 sm:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[1.4rem] border border-[#eeeef2] bg-[#fafafa] px-5 py-5 dark:border-white/8 dark:bg-[#18181d]"
              >
                <p className="text-[13px] font-medium text-[#7b61ff]">
                  0{index + 1}
                </p>
                <h2 className="mt-2 text-base font-semibold tracking-tight text-[#111] dark:text-white">
                  {step.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#8a8a8a] dark:text-[#9CA3AF]">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Share a reference",
    body: "Paste the transaction ID or upload the receipt from your transfer.",
  },
  {
    title: "We match the payment",
    body: "TVerify checks Settle Africa settlement records for that transfer.",
  },
  {
    title: "See the status",
    body: "Find out if it has settled, is still processing, or needs a closer look.",
  },
] as const;

function TrackButton({ enabled, loading }: { enabled: boolean; loading: boolean }) {
  return (
    <button
      type="submit"
      disabled={!enabled}
      className={`inline-flex min-h-16 shrink-0 items-center justify-center rounded-full px-7 text-sm font-semibold transition-colors sm:min-h-14 ${
        enabled
          ? "bg-[#111] text-white hover:bg-black dark:bg-white dark:text-[#111] dark:hover:bg-[#e8e8e8]"
          : "cursor-not-allowed bg-[#d9d9de] text-white dark:bg-[#2a2a30] dark:text-white/35"
      }`}
    >
      {loading ? "Tracking…" : "Track"}
    </button>
  );
}

function LookupResult({ result }: { result: Exclude<LookupState, { status: "idle" } | { status: "loading" }> }) {
  if (result.status === "sample") {
    return (
      <div className="mt-8 rounded-[1.6rem] bg-[#eef0ff] px-5 py-5 sm:px-6 dark:bg-[#1d1b2c]">
        <p className="inline-flex items-center rounded-full bg-[#111] px-2.5 py-1 text-[11px] font-medium text-white dark:bg-white dark:text-[#111]">
          Settled
        </p>
        <p className="mt-3 text-lg font-semibold tracking-tight text-[#111] dark:text-white">
          {result.reference}
        </p>
        <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-[#8a8a8a] dark:text-[#9CA3AF]">Amount</dt>
            <dd className="mt-1 font-medium text-[#111] dark:text-white">₦250,000</dd>
          </div>
          <div>
            <dt className="text-[#8a8a8a] dark:text-[#9CA3AF]">Rail</dt>
            <dd className="mt-1 font-medium text-[#111] dark:text-white">Settle Africa</dd>
          </div>
          <div>
            <dt className="text-[#8a8a8a] dark:text-[#9CA3AF]">Updated</dt>
            <dd className="mt-1 font-medium text-[#111] dark:text-white">Just now</dd>
          </div>
        </dl>
        <p className="mt-4 text-xs text-[#8a8a8a] dark:text-[#9CA3AF]">
          Sample result for the example reference. Live settlement data will
          connect to TVerify.
        </p>
      </div>
    );
  }

  if (result.status === "receipt") {
    return (
      <div className="mt-8 rounded-[1.6rem] border border-[#eeeef2] px-5 py-5 sm:px-6 dark:border-white/10">
        <p className="text-sm font-semibold text-[#111] dark:text-white">
          Receipt ready to match
        </p>
        <p className="mt-2 text-sm leading-6 text-[#8a8a8a] dark:text-[#9CA3AF]">
          {result.filename} is queued. In production, TVerify reads the receipt
          and matches it against recent settlements.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8 rounded-[1.6rem] border border-[#eeeef2] px-5 py-5 sm:px-6 dark:border-white/10">
      <p className="text-sm font-semibold text-[#111] dark:text-white">
        No matching transfer
      </p>
      <p className="mt-2 text-sm leading-6 text-[#8a8a8a] dark:text-[#9CA3AF]">
        We couldn&apos;t find {result.reference}. Check the ID and try again, or
        upload the receipt instead.
      </p>
    </div>
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
