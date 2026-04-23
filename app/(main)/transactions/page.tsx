import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { TransactionsScreen } from "@/features/transactions/transactions-screen";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { getTransactionsQueryOptions } from "@/lib/query-options/transactions-query-options";

export default async function TransactionsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(getTransactionsQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TransactionsScreen />
    </HydrationBoundary>
  );
}
