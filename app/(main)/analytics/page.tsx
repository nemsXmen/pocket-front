import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { AnalyticsScreen } from "@/features/analytics/analytics-screen";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { getAnalyticsQueryOptions } from "@/lib/query-options/analytics-query-options";

export default async function AnalyticsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(getAnalyticsQueryOptions("month"));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <AnalyticsScreen initialPeriod="month" />
    </HydrationBoundary>
  );
}
