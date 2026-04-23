import { queryOptions } from "@tanstack/react-query";
import { fetchAnalytics } from "@/lib/api/analytics";
import { queryKeys } from "@/lib/react-query/query-keys";
import type { AnalyticsPeriod } from "@/types/domain";

export function getAnalyticsQueryOptions(period: AnalyticsPeriod) {
  return queryOptions({
    queryKey: queryKeys.analytics(period),
    queryFn: () => fetchAnalytics(period),
  });
}
