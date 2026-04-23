import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { SettingsScreen } from "@/features/settings/settings-screen";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { getSettingsQueryOptions } from "@/lib/query-options/settings-query-options";

export default async function SettingsPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(getSettingsQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <SettingsScreen />
    </HydrationBoundary>
  );
}
