"use client";

import { useMemo, useState } from "react";
import { CalendarDays } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { CategoryChip } from "@/components/common/category-chip";
import { FilterTabs } from "@/components/common/filter-tabs";
import { CategoryChipGridSkeleton } from "@/components/common/screen-skeletons";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { getCategoriesQueryOptions } from "@/lib/query-options/categories-query-options";
import type { TransactionType } from "@/types/domain";

const typeOptions = [
  { label: "Income", value: "INCOME" as const },
  { label: "Expense", value: "OUTCOME" as const },
];

export function NewTransactionForm() {
  const categoriesQuery = useQuery(getCategoriesQueryOptions());
  const [amount, setAmount] = useState("0");
  const [type, setType] = useState<TransactionType>("OUTCOME");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [note, setNote] = useState("");

  const filteredCategories = useMemo(
    () => (categoriesQuery.data ?? []).filter((category) => category.type === type),
    [categoriesQuery.data, type],
  );

  return (
    <div className="space-y-5">
      <PageHeader
        title="New"
        subtitle="Capture every income and expense instantly"
        backHref="/transactions"
      />

      <section className="space-y-4 rounded-2xl border border-white/10 bg-card/95 p-5">
        <div>
          <label className="text-xs uppercase tracking-wide text-muted-foreground">Amount</label>
          <div className="mt-2 rounded-xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-end gap-2">
              <span className="text-xl text-muted-foreground">$</span>
              <input
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                inputMode="decimal"
                className="w-full bg-transparent text-4xl font-semibold tracking-tight outline-none"
                aria-label="Amount"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">Type</label>
          <FilterTabs options={typeOptions} value={type} onValueChange={setType} />
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">Category</label>
          {categoriesQuery.isPending ? (
            <CategoryChipGridSkeleton />
          ) : (
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {filteredCategories.map((category) => (
                <CategoryChip
                  key={category.id}
                  category={category}
                  active={selectedCategoryId === category.id}
                  onClick={() => setSelectedCategoryId(category.id)}
                />
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">Date</label>
          <button
            type="button"
            className="flex w-full items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-muted-foreground"
          >
            <CalendarDays className="size-4" />
            Pick transaction date
          </button>
        </div>

        <div>
          <label className="mb-2 block text-xs uppercase tracking-wide text-muted-foreground">Note (optional)</label>
          <Textarea
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Write a quick note"
            className="rounded-xl border-white/10 bg-white/[0.04]"
          />
        </div>

        <Button
          className={cn(
            "h-11 w-full rounded-xl text-sm font-semibold",
            type === "INCOME" ? "bg-income text-black hover:bg-income/90" : "bg-primary hover:bg-primary/90",
          )}
        >
          Save Transaction
        </Button>
      </section>
    </div>
  );
}
