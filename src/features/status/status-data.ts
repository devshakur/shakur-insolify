export const statusEndpoints = [
  {
    id: "fincore",
    name: "Fincore",
    href: "/fincore",
    url: "https://fincore.insolify.com/api/health.check",
  },
  {
    id: "safi",
    name: "Safi AI",
    href: "/safi",
    url: "https://safi.insolify.com/api/health.check",
  },
  {
    id: "crm",
    name: "CRM",
    href: "https://www.insolify.com/",
    url: "https://crm.insolify.com/api/health.check",
  },
  {
    id: "settle",
    name: "Settle Africa",
    href: "/settle",
    url: "https://settle.insolify.com/api/health.check",
  },
] as const;

export type StatusLevel = "operational" | "degraded" | "down" | "unknown";

export type NestedService = {
  name: string;
  status: string;
  uptime?: string;
  rate?: number;
  locations?: string[];
  crashhistory?: Array<{
    reason: string;
    location?: string;
    incident: string;
    resolved: string;
  }>;
};

export type StatusCheck = {
  id: string;
  name: string;
  href: string;
  status: StatusLevel;
  error: string | null;
  stack?: string;
  uptime?: string;
  rate?: number;
  locations?: string[];
  services: NestedService[];
};

export type StatusPayload = {
  checkedAt: string;
  services: StatusCheck[];
};

export function normalizeStatus(value?: string): StatusLevel {
  const status = value?.toLowerCase();
  if (
    status === "healthy" ||
    status === "operational" ||
    status === "working" ||
    status === "up" ||
    status === "connected"
  ) {
    return "operational";
  }
  if (status === "degraded" || status === "partial" || status === "warning") {
    return "degraded";
  }
  if (status === "down" || status === "error") {
    return "down";
  }
  return "unknown";
}

export function overallStatus(services: StatusCheck[]): StatusLevel {
  if (services.length === 0) return "unknown";
  if (services.every((item) => item.status === "unknown")) return "unknown";
  if (services.every((item) => item.status === "down" || item.status === "unknown")) return "down";
  if (services.some((item) => item.status === "down" || item.status === "degraded")) return "degraded";
  return "operational";
}

export async function getStatusPayload(): Promise<StatusPayload> {
  const services = await Promise.all(
    statusEndpoints.map(async (endpoint): Promise<StatusCheck> => {
      try {
        const response = await fetch(endpoint.url, {
          method: "GET",
          headers: { Accept: "application/json" },
          cache: "no-store",
          signal: AbortSignal.timeout(8000),
        });
        const contentType = response.headers.get("content-type") ?? "";
        if (!response.ok || !contentType.includes("json")) {
          return {
            id: endpoint.id,
            name: endpoint.name,
            href: endpoint.href,
            status: "down",
            error: `Health check returned HTTP ${response.status}`,
            services: [],
          };
        }

        const data = (await response.json()) as {
          status?: string;
          stack?: string;
          services?: NestedService[];
        };
        const nested = data.services ?? [];
        const first = nested[0];

        return {
          id: endpoint.id,
          name: endpoint.name,
          href: endpoint.href,
          status: normalizeStatus(data.status),
          error: null,
          stack: data.stack,
          uptime: first?.uptime,
          rate: first?.rate,
          locations: first?.locations,
          services: nested,
        };
      } catch (error) {
        return {
          id: endpoint.id,
          name: endpoint.name,
          href: endpoint.href,
          status: "down",
          error: error instanceof Error ? error.message : "Unable to reach health check",
          services: [],
        };
      }
    }),
  );

  return {
    checkedAt: new Date().toISOString(),
    services,
  };
}
