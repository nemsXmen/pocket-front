import { queryOptions } from "@tanstack/react-query";
import { fetchDashboardSummary } from "@/lib/api/dashboard";
import { queryKeys } from "@/lib/react-query/query-keys";

export function getDashboardQueryOptions() {
  return queryOptions({
    queryKey: queryKeys.dashboard,
    queryFn: fetchDashboardSummary,
  });
}
