import { pocketDb } from "@/lib/mock-db";
import type { Category } from "@/types/domain";

const clone = <T>(value: T): T => structuredClone(value);

const withLatency = async <T>(value: T, ms = 260): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return clone(value);
};

export async function fetchCategories(): Promise<Category[]> {
  return withLatency(pocketDb.categories, 280);
}
