import { pocketDb } from "@/lib/mock-db";
import type { Transaction } from "@/types/domain";

export type CreateTransactionInput = Omit<Transaction, "id" | "categoryName"> & {
  categoryName: string;
};

const clone = <T>(value: T): T => structuredClone(value);

const withLatency = async <T>(value: T, ms = 300): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, ms));
  return clone(value);
};

export async function fetchTransactions(): Promise<Transaction[]> {
  return withLatency(pocketDb.transactions, 320);
}

export async function createTransaction(input: CreateTransactionInput): Promise<Transaction> {
  const transaction: Transaction = {
    ...input,
    id: `txn-${Math.random().toString(36).slice(2, 10)}`,
  };

  return withLatency(transaction, 420);
}
