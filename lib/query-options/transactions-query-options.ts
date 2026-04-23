import { queryOptions } from "@tanstack/react-query";
import { fetchTransactions } from "@/lib/api/transactions";
import { queryKeys } from "@/lib/react-query/query-keys";

export function getTransactionsQueryOptions() {
  return queryOptions({
    queryKey: queryKeys.transactions,
    queryFn: fetchTransactions,
  });
}
