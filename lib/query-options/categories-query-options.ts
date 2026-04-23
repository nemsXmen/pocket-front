import { queryOptions } from "@tanstack/react-query";
import { fetchCategories } from "@/lib/api/categories";
import { queryKeys } from "@/lib/react-query/query-keys";

export function getCategoriesQueryOptions() {
  return queryOptions({
    queryKey: queryKeys.categories,
    queryFn: fetchCategories,
  });
}
