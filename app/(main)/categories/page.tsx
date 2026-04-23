import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { CategoriesScreen } from "@/features/categories/categories-screen";
import { getQueryClient } from "@/lib/react-query/get-query-client";
import { getCategoriesQueryOptions } from "@/lib/query-options/categories-query-options";

export default async function CategoriesPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(getCategoriesQueryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CategoriesScreen />
    </HydrationBoundary>
  );
}
