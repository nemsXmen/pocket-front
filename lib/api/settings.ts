import { pocketDb } from "@/lib/mock-db";
import type { Settings } from "@/types/domain";

const clone = <T>(value: T): T => structuredClone(value);

const withLatency = async <T>(value: T, ms = 300): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return clone(value);
};

export async function fetchSettings(): Promise<Settings> {
  return withLatency(pocketDb.settings, 340);
}
