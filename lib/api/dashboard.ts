import { pocketDb } from "@/lib/mock-db";
import type { DashboardSummary } from "@/types/domain";

const clone = <T>(value: T): T => structuredClone(value);

const withLatency = async <T>(value: T, ms = 260): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return clone(value);
};

export async function fetchDashboardSummary(): Promise<DashboardSummary> {
  return withLatency(pocketDb.dashboardSummary, 300);
}
