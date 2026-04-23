import { pocketDb } from "@/lib/mock-db";
import type { Analytics, AnalyticsPeriod } from "@/types/domain";

const clone = <T>(value: T): T => structuredClone(value);

const withLatency = async <T>(value: T, ms = 330): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return clone(value);
};

export async function fetchAnalytics(period: AnalyticsPeriod): Promise<Analytics> {
  return withLatency(pocketDb.analyticsByPeriod[period], 360);
}
