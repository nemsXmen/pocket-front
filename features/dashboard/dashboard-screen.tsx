"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { Funnel, Wallet2, ArrowUpRight, ArrowDownLeft } from "lucide-react";
import { BalanceCard } from "@/components/common/balance-card";
import { ChartCard } from "@/components/common/chart-card";
import { EmptyState } from "@/components/common/empty-state";
import { PageHeader } from "@/components/common/page-header";
import { QuickActionCard } from "@/components/common/quick-action-card";
import { TransactionList } from "@/components/common/transaction-list";
import {
  ChartCanvasSkeleton,
  DashboardScreenSkeleton,
} from "@/components/common/screen-skeletons";
import { getDashboardQueryOptions } from "@/lib/query-options/dashboard-query-options";
import { getAnalyticsQueryOptions } from "@/lib/query-options/analytics-query-options";
import { getTransactionsQueryOptions } from "@/lib/query-options/transactions-query-options";
import { formatAmount } from "@/lib/format";

export function DashboardScreen() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const summaryQuery = useQuery(getDashboardQueryOptions());
  const analyticsQuery = useQuery(getAnalyticsQueryOptions("month"));
  const transactionsQuery = useQuery(getTransactionsQueryOptions());

  if (summaryQuery.isPending || analyticsQuery.isPending || transactionsQuery.isPending) {
    return <DashboardScreenSkeleton />;
  }

  if (summaryQuery.isError || analyticsQuery.isError || transactionsQuery.isError) {
    return (
      <EmptyState
        title="Dashboard failed to load"
        description="Pocket could not fetch your latest cashflow data."
      />
    );
  }

  const summary = summaryQuery.data;
  const analytics = analyticsQuery.data;
  const recentTransactions = transactionsQuery.data.slice(0, 4);
  const rightRailTransactions = transactionsQuery.data.slice(0, 7);
  const desktopStatTones = [
    "bg-cyan-200 text-slate-900",
    "bg-violet-300 text-slate-900",
    "bg-lime-200 text-slate-900",
    "bg-amber-300 text-slate-900",
  ];

  return (
    <div className="space-y-5 lg:grid lg:grid-cols-[minmax(0,1.7fr)_340px] lg:gap-5 lg:space-y-0">
      <div className="space-y-5">
        <PageHeader title="Lingesh Chary" subtitle="Welcome back" />

        <BalanceCard
          balance={summary.balance}
          monthlyChangePercent={summary.monthlyChangePercent}
          totalIncome={summary.totalIncome}
          totalExpense={summary.totalExpense}
        />

        <section className="grid grid-cols-3 gap-2">
          <QuickActionCard href="/transactions/new" title="Send" icon={<ArrowUpRight className="size-3.5" />} />
          <QuickActionCard href="/transactions" title="Receive" icon={<ArrowDownLeft className="size-3.5" />} />
          <QuickActionCard href="/categories" title="Top Up" icon={<Wallet2 className="size-3.5" />} tone="primary" />
        </section>

        <section className="hidden lg:grid lg:grid-cols-4 lg:gap-3">
          {analytics.categoryBreakdown.slice(0, 4).map((item, idx) => (
            <article key={item.categoryId} className={`rounded-3xl px-4 py-3 ${desktopStatTones[idx]}`}>
              <p className="text-[11px] font-medium opacity-80">{item.categoryName}</p>
              <p className="mt-1 text-2xl font-semibold leading-tight">{formatAmount(item.amount)}</p>
            </article>
          ))}
        </section>

        <ChartCard title="Cashflow" subtitle="This month">
          {mounted ? (
            <div className="h-56 lg:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={analytics.cashflowSeries}>
                  <defs>
                    <linearGradient id="incomeFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22C55E" stopOpacity={0.45} />
                      <stop offset="95%" stopColor="#22C55E" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="outcomeFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid stroke="#273248" vertical={false} />
                  <XAxis dataKey="label" stroke="#6B7280" tickLine={false} axisLine={false} />
                  <Tooltip
                    cursor={{ stroke: "#3c4c68", strokeDasharray: "4 4" }}
                    contentStyle={{
                      background: "#10141d",
                      border: "1px solid #273248",
                      borderRadius: 12,
                    }}
                  />
                  <Area type="monotone" dataKey="income" stroke="#22C55E" fill="url(#incomeFill)" strokeWidth={2} />
                  <Area type="monotone" dataKey="outcome" stroke="#EF4444" fill="url(#outcomeFill)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <ChartCanvasSkeleton />
          )}
        </ChartCard>

        <section className="space-y-3 rounded-2xl border border-white/10 bg-card/95 p-4 lg:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent activity</h2>
            <Link
              href="/transactions"
              className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-slate-300"
            >
              <Funnel className="size-3" />
              Filter
            </Link>
          </div>

          {recentTransactions.length ? (
            <TransactionList transactions={recentTransactions} />
          ) : (
            <EmptyState
              title="No recent transactions"
              description="Transactions will appear here as soon as you start using Pocket."
            />
          )}
        </section>
      </div>

      <aside className="hidden rounded-3xl border border-white/10 bg-card/95 p-4 lg:flex lg:flex-col">
        <h2 className="text-3xl font-semibold tracking-tight">Cards</h2>
        <p className="mt-1 text-sm text-muted-foreground">My cards</p>

        <div className="mt-5 rounded-3xl border border-white/10 bg-gradient-to-br from-[#c579b5] via-[#7a59d1] to-[#372fd9] p-4 text-white shadow-[0_25px_70px_-30px_rgba(122,89,209,0.8)]">
          <p className="text-xs opacity-80">Virtual - USD</p>
          <p className="mt-6 text-xl font-semibold tracking-[0.18em]">5264  ****  ****  4321</p>
          <p className="mt-3 text-xs opacity-80">EXP · 05 / 27</p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h3 className="text-base font-semibold">Latest transactions</h3>
          <Link href="/transactions" className="text-xs text-muted-foreground hover:text-foreground">
            Show more
          </Link>
        </div>

        <div className="mt-3 space-y-3">
          {rightRailTransactions.map((transaction) => {
            const income = transaction.type === "INCOME";
            return (
              <article key={transaction.id} className="flex items-center justify-between border-b border-white/10 pb-2.5">
                <div>
                  <p className="text-sm font-medium">{transaction.title}</p>
                  <p className="text-[11px] text-muted-foreground">{transaction.categoryName}</p>
                </div>
                <p className={income ? "text-sm font-semibold text-income" : "text-sm font-semibold text-expense"}>
                  {income ? "+" : "-"}
                  {formatAmount(transaction.amount)}
                </p>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
}
