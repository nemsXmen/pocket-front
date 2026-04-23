export const queryKeys = {
  dashboard: ["dashboard"] as const,
  transactions: ["transactions"] as const,
  categories: ["categories"] as const,
  settings: ["settings"] as const,
  analytics: (period: "week" | "month" | "year") =>
    ["analytics", period] as const,
};
