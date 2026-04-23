import { ArrowUpRight } from "lucide-react";
import { formatCurrency } from "@/lib/format";

export function BalanceCard({
  balance,
  monthlyChangePercent,
  totalIncome,
  totalExpense,
}: {
  balance: number;
  monthlyChangePercent: number;
  totalIncome?: number;
  totalExpense?: number;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#181f35] via-[#131826] to-[#11151f] p-4 shadow-[0_24px_60px_-40px_rgba(99,102,241,0.7)] sm:p-5">
      <div className="absolute -right-10 -top-10 size-36 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-400">Total balance</p>
          <button className="rounded-lg border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-medium text-slate-300 transition hover:text-white">
            Manage
          </button>
        </div>

        <p className="mt-2 text-4xl font-semibold tracking-tight">{formatCurrency(balance, "USD")}</p>

        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-income/20 px-2.5 py-1 text-[11px] font-medium text-income">
          <ArrowUpRight className="size-3" />
          {monthlyChangePercent}%
        </div>

        {(typeof totalIncome === "number" || typeof totalExpense === "number") ? (
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-income/20 bg-income/10 p-2.5">
              <p className="text-[11px] text-slate-300">Income</p>
              <p className="mt-1 text-lg font-semibold text-income">{formatCurrency(totalIncome ?? 0)}</p>
            </div>
            <div className="rounded-xl border border-expense/20 bg-expense/10 p-2.5">
              <p className="text-[11px] text-slate-300">Expenses</p>
              <p className="mt-1 text-lg font-semibold text-expense">{formatCurrency(totalExpense ?? 0)}</p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
