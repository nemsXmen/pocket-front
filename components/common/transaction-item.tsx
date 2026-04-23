import { ArrowDownLeft, ArrowUpRight } from "lucide-react";
import type { Transaction } from "@/types/domain";
import { cn } from "@/lib/utils";
import { formatAmount, formatShortDate } from "@/lib/format";

export function TransactionItem({ transaction }: { transaction: Transaction }) {
  const isIncome = transaction.type === "INCOME";

  return (
    <article className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 transition hover:bg-white/[0.06]">
      <div className="flex min-w-0 items-center gap-3">
        <div
          className={cn(
            "rounded-lg p-2",
            isIncome ? "bg-income/20 text-income" : "bg-expense/20 text-expense",
          )}
        >
          {isIncome ? <ArrowDownLeft className="size-4" /> : <ArrowUpRight className="size-4" />}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{transaction.title}</p>
          <p className="text-xs text-muted-foreground">
            {transaction.categoryName} - {formatShortDate(transaction.date)}
          </p>
        </div>
      </div>
      <div className="text-right">
        <p className={cn("text-sm font-semibold", isIncome ? "text-income" : "text-expense")}>
          {isIncome ? "+" : "-"}
          {formatAmount(transaction.amount)}
        </p>
        <p className="text-[11px] text-muted-foreground">Completed</p>
      </div>
    </article>
  );
}
