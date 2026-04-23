import { queryOptions } from "@tanstack/react-query";
import { fetchSettings } from "@/lib/api/settings";
import { queryKeys } from "@/lib/react-query/query-keys";

export function getSettingsQueryOptions() {
  return queryOptions({
    queryKey: queryKeys.settings,
    queryFn: fetchSettings,
  });
}
