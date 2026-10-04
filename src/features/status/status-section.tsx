import Link from "next/link";
import {
  normalizeStatus,
  overallStatus,
  type StatusCheck,
  type StatusLevel,
  type StatusPayload,
} from "@/features/status/status-data";

const labels: Record<StatusLevel, string> = {
  operational: "All systems operational",
  degraded: "Partial system outage",
  down: "Systems not operational",
  unknown: "Checking status…",
};

const tone: Record<StatusLevel, string> = {
  operational: "bg-[#eef8f1] text-[#0B6B45] dark:bg-[#1A2A22] dark:text-[#7dcea0]",
  degraded: "bg-[#fff6e5] text-[#9a6b12] dark:bg-[#2a2416] dark:text-[#E2B857]",
  down: "bg-[#fdecec] text-[#b42318] dark:bg-[#2a1616] dark:text-[#f0a8a4]",
  unknown: "bg-[#f2f2f4] text-[#6d6d6d] dark:bg-[#1c1c22] dark:text-[#9CA3AF]",
};

const dot: Record<StatusLevel, string> = {
  operational: "bg-[#0B6B45]",
  degraded: "bg-[#E2B857]",
  down: "bg-[#b42318]",
  unknown: "bg-[#9CA3AF]",
};

export function StatusSection({ payload }: { payload: StatusPayload }) {
  const services = payload.services;
  const summary = overallStatus(services);

  return (
    <section id="status" className="px-4 pb-8 sm:px-6 lg:px-10">
      <div className="rounded-4xl bg-white px-5 py-12 shadow-[0_24px_80px_rgba(20,16,40,0.04)] sm:rounded-[2.75rem] sm:px-10 sm:py-16 lg:px-14 dark:bg-[#141418] dark:shadow-none">
        <p className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#8b8b93] dark:text-[#9A9AA3]">
          <SparkIcon />
          Status
        </p>
        <h1 className="mt-4 max-w-2xl text-[2.15rem] leading-[1.08] font-semibold tracking-tight text-[#111] sm:text-5xl dark:text-white">
          System status
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-6 text-[#6B7280] sm:text-[15px] dark:text-[#9CA3AF]">
          Live health for Fincore, Safi AI, CRM, and Settle Africa — the same
          checks used on insolify.com.
        </p>

        <div className={`mt-10 flex flex-col gap-4 rounded-[1.7rem] px-5 py-5 sm:flex-row sm:items-center sm:justify-between ${tone[summary]}`}>
          <div className="flex items-center gap-3">
            <span className={`size-2.5 rounded-full ${dot[summary]}`} />
            <div>
              <p className="text-base font-semibold tracking-tight">{labels[summary]}</p>
              <p className="mt-1 text-xs opacity-70">
                Last updated {formatTime(payload.checkedAt)}
              </p>
            </div>
          </div>
          <Link
            href="/status"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white/80 px-4 text-sm font-medium text-[#111] transition hover:bg-white dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
          >
            Refresh
          </Link>
        </div>

        <ul className="mt-8 grid gap-3 lg:grid-cols-2">
          {services.map((service) => (
            <li
              key={service.id}
              className="rounded-[1.6rem] border border-[#eeeef2] bg-[#f8f8fa] p-5 dark:border-white/10 dark:bg-[#1c1c22]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <Link
                    href={service.href}
                    className="text-sm font-semibold text-[#111] transition hover:opacity-70 dark:text-white"
                  >
                    {service.name}
                  </Link>
                  {service.stack ? (
                    <p className="mt-1 text-xs text-[#8a8a8a] dark:text-[#9CA3AF]">{service.stack}</p>
                  ) : null}
                </div>
                <StatusPill status={service.status} />
              </div>

              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <dt className="text-[11px] tracking-wide text-[#8a8a8a] uppercase dark:text-[#9CA3AF]">Uptime</dt>
                  <dd className="mt-1 font-medium text-[#111] dark:text-white">{formatUptime(service.uptime)}</dd>
                </div>
                <div>
                  <dt className="text-[11px] tracking-wide text-[#8a8a8a] uppercase dark:text-[#9CA3AF]">Performance</dt>
                  <dd className="mt-1 font-medium text-[#111] dark:text-white">
                    {service.rate != null ? `${service.rate}%` : "—"}
                  </dd>
                </div>
              </dl>

              {service.locations && service.locations.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.locations.slice(0, 4).map((location) => (
                    <span
                      key={location}
                      className="rounded-full bg-white px-2.5 py-1 text-[11px] text-[#6d6d6d] dark:bg-white/10 dark:text-[#c8c8c8]"
                    >
                      {location}
                    </span>
                  ))}
                </div>
              ) : null}

              {service.error ? (
                <p className="mt-4 text-xs leading-5 text-[#b42318] dark:text-[#f0a8a4]">{service.error}</p>
              ) : null}

              {service.services.length > 1 ? (
                <ul className="mt-4 space-y-2 border-t border-black/5 pt-4 dark:border-white/10">
                  {service.services.map((item) => (
                    <li key={item.name} className="flex items-center justify-between gap-3 text-sm">
                      <span className="text-[#4B5563] dark:text-[#9CA3AF]">{item.name}</span>
                      <StatusPill status={normalizeStatus(item.status)} />
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>

        <Incidents services={services} />

        <p className="mt-10 text-center text-sm text-[#8a8a8a] dark:text-[#9CA3AF]">
          Need help with an incident?{" "}
          <Link href="/contact" className="font-medium text-[#111] underline-offset-2 hover:underline dark:text-white">
            Contact support
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

function Incidents({ services }: { services: StatusCheck[] }) {
  const incidents = services.flatMap((service) =>
    service.services.flatMap((item) =>
      (item.crashhistory ?? []).map((incident) => ({
        ...incident,
        service: service.name,
      })),
    ),
  );

  return (
    <div className="mt-12">
      <h2 className="text-[1.35rem] font-semibold tracking-tight text-[#111] dark:text-white">
        Recent incidents
      </h2>
      {incidents.length === 0 ? (
        <p className="mt-4 rounded-[1.4rem] bg-[#f8f8fa] px-5 py-4 text-sm text-[#6B7280] dark:bg-[#1c1c22] dark:text-[#9CA3AF]">
          No incidents reported from the latest health checks.
        </p>
      ) : (
        <ul className="mt-4 space-y-3">
          {incidents.slice(0, 6).map((incident) => (
            <li
              key={`${incident.service}-${incident.incident}-${incident.reason}`}
              className="rounded-[1.4rem] border border-[#eeeef2] px-5 py-4 dark:border-white/10"
            >
              <p className="text-sm font-medium text-[#111] dark:text-white">{incident.reason}</p>
              <p className="mt-1 text-xs text-[#8a8a8a] dark:text-[#9CA3AF]">
                {incident.service}
                {incident.location ? ` · ${incident.location}` : ""} · {formatDate(incident.incident)}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function StatusPill({ status }: { status: StatusLevel }) {
  const text = {
    operational: "Operational",
    degraded: "Degraded",
    down: "Down",
    unknown: "Checking",
  }[status];

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${tone[status]}`}>
      <span className={`size-1.5 rounded-full ${dot[status]}`} />
      {text}
    </span>
  );
}

function formatUptime(value?: string) {
  if (!value) return "—";
  const [days] = value.split(".");
  const count = Number.parseInt(days, 10);
  if (Number.isFinite(count)) return `${count} days`;
  return value;
}

function formatTime(value: string) {
  return new Date(value).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
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
