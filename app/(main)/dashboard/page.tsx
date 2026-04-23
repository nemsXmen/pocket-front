import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { DashboardScreen } from "@/features/dashboard/dashboard-screen";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { getDashboardQueryOptions } from "@/lib/query-options/dashboard-query-options";
import { getTransactionsQueryOptions } from "@/lib/query-options/transactions-query-options";

export default async function DashboardPage() {
  const queryClient = getQueryClient();

  await Promise.all([
    queryClient.prefetchQuery(getDashboardQueryOptions()),
    queryClient.prefetchQuery(getTransactionsQueryOptions()),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <DashboardScreen />
    </HydrationBoundary>
  );
}
