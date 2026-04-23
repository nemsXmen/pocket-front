"use client";

import { PlusCircle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { CategoriesScreenSkeleton } from "@/components/common/screen-skeletons";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { getCategoriesQueryOptions } from "@/lib/query-options/categories-query-options";

export function CategoriesScreen() {
  const categoriesQuery = useQuery(getCategoriesQueryOptions());

  if (categoriesQuery.isPending) {
    return <CategoriesScreenSkeleton />;
  }

  if (categoriesQuery.isError) {
    return <div className="rounded-2xl border border-white/10 bg-card p-8 text-expense">Failed to load categories.</div>;
  }

  const income = categoriesQuery.data.filter((category) => category.type === "INCOME");
  const outcome = categoriesQuery.data.filter((category) => category.type === "OUTCOME");

  return (
    <div className="space-y-5">
      <PageHeader
        title="Categories"
        subtitle="Organize transaction groups for cleaner analytics"
        right={
          <Button className="rounded-xl border border-primary/30 bg-primary/20 px-3 text-primary hover:bg-primary/30">
            <PlusCircle className="size-4" />
            Add
          </Button>
        }
      />

      <section className="space-y-3 rounded-2xl border border-white/10 bg-card/95 p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Income</h2>
        <div className="grid gap-2">
          {income.map((category) => (
            <article key={category.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="font-medium">{category.name}</p>
              <p className="text-xs text-muted-foreground">Type: Income</p>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-2xl border border-white/10 bg-card/95 p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Expense</h2>
        <div className="grid gap-2">
          {outcome.map((category) => (
            <article key={category.id} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <p className="font-medium">{category.name}</p>
              <p className="text-xs text-muted-foreground">Type: Expense</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
