import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { NewTransactionForm } from "@/features/transactions/new-transaction-form";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { getCategoriesQueryOptions } from "@/lib/query-options/categories-query-options";

export default async function NewTransactionPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(getCategoriesQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTransactionForm />
    </HydrationBoundary>
  );
}
