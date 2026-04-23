"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FilterTabs } from "@/components/common/filter-tabs";
import { PageHeader } from "@/components/common/page-header";
import { SearchInput } from "@/components/common/search-input";
import { TransactionsScreenSkeleton } from "@/components/common/screen-skeletons";
import { TransactionList } from "@/components/common/transaction-list";
import { getTransactionsQueryOptions } from "@/lib/query-options/transactions-query-options";
import type { TransactionType } from "@/types/domain";

type FilterType = "ALL" | TransactionType;

const filterOptions = [
  { label: "All", value: "ALL" as const },
  { label: "Income", value: "INCOME" as const },
  { label: "Expense", value: "OUTCOME" as const },
];

export function TransactionsScreen() {
  const [filter, setFilter] = useState<FilterType>("ALL");
  const [search, setSearch] = useState("");

  const transactionsQuery = useQuery(getTransactionsQueryOptions());

  const filteredTransactions = useMemo(() => {
    const data = transactionsQuery.data ?? [];

    return data.filter((item) => {
      const filterMatch = filter === "ALL" ? true : item.type === filter;
      const searchTerm = search.trim().toLowerCase();
      const searchMatch =
        !searchTerm ||
        item.title.toLowerCase().includes(searchTerm) ||
        item.categoryName.toLowerCase().includes(searchTerm);

      return filterMatch && searchMatch;
    });
  }, [transactionsQuery.data, filter, search]);

  if (transactionsQuery.isPending) {
    return <TransactionsScreenSkeleton />;
  }

  return (
    <div className="space-y-4">
      <PageHeader title="Cards" subtitle="Manage your wallets and cards" />

      <div className="space-y-3 rounded-2xl border border-white/10 bg-card/95 p-4">
        <FilterTabs options={filterOptions} value={filter} onValueChange={setFilter} />
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search title or category"
        />
      </div>

      {transactionsQuery.isError ? (
        <div className="rounded-2xl border border-white/10 bg-card/95 p-6 text-sm text-expense">
          Could not load transactions.
        </div>
      ) : (
        <TransactionList transactions={filteredTransactions} />
      )}
    </div>
  );
}
