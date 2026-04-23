"use client";

import { useState, useSyncExternalStore } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  LineChart,
  Line,
} from "recharts";
import {
  AnalyticsScreenSkeleton,
  ChartCanvasSkeleton,
} from "@/components/common/screen-skeletons";
import { ChartCard } from "@/components/common/chart-card";
import { FilterTabs } from "@/components/common/filter-tabs";
import { PageHeader } from "@/components/common/page-header";
import { formatCurrency } from "@/lib/format";
import { getAnalyticsQueryOptions } from "@/lib/query-options/analytics-query-options";
import type { AnalyticsPeriod } from "@/types/domain";

const periodOptions = [
  { label: "Week", value: "week" as const },
  { label: "Month", value: "month" as const },
  { label: "Year", value: "year" as const },
];

function asCurrency(
  value: number | string | Array<number | string> | ReadonlyArray<number | string> | undefined,
) {
  const source = Array.isArray(value) ? value[0] : value;
  const amount = typeof source === "number" ? source : Number(source ?? 0);
  return formatCurrency(amount);
}

export function AnalyticsScreen({ initialPeriod }: { initialPeriod: AnalyticsPeriod }) {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [period, setPeriod] = useState<AnalyticsPeriod>(initialPeriod);

  const analyticsQuery = useQuery(getAnalyticsQueryOptions(period));

  if (analyticsQuery.isPending) {
    return <AnalyticsScreenSkeleton />;
  }

  if (analyticsQuery.isError) {
    return <div className="rounded-2xl border border-white/10 bg-card p-8 text-expense">Failed to load analytics.</div>;
  }

  const analytics = analyticsQuery.data;

  return (
    <div className="space-y-5">
      <PageHeader title="Budget" subtitle="Track categories and limits" />

      <FilterTabs options={periodOptions} value={period} onValueChange={setPeriod} />

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Budget overview" subtitle="This month">
          {mounted ? (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={analytics.categoryBreakdown}
                    dataKey="amount"
                    nameKey="categoryName"
                    innerRadius={68}
                    outerRadius={96}
                    paddingAngle={2}
                  >
                    {analytics.categoryBreakdown.map((entry) => (
                      <Cell key={entry.categoryId} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => asCurrency(value)}
                    contentStyle={{ background: "#10141d", border: "1px solid #273248", borderRadius: 12 }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <ChartCanvasSkeleton />
          )}
        </ChartCard>

        <ChartCard title="Income vs expense" subtitle="Comparison for selected period">
          {mounted ? (
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analytics.incomeVsOutcome}>
                  <CartesianGrid stroke="#273248" vertical={false} />
                  <XAxis dataKey="label" stroke="#6B7280" tickLine={false} axisLine={false} />
                  <YAxis stroke="#6B7280" tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{ background: "#10141d", border: "1px solid #273248", borderRadius: 12 }}
                  />
                  <Bar dataKey="income" fill="#22C55E" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="outcome" fill="#EF4444" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <ChartCanvasSkeleton />
          )}
        </ChartCard>
      </div>

      <ChartCard title="Cashflow summary" subtitle="Balance evolution">
        {mounted ? (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.cashflowSeries}>
                <CartesianGrid stroke="#273248" vertical={false} />
                <XAxis dataKey="label" stroke="#6B7280" tickLine={false} axisLine={false} />
                <YAxis stroke="#6B7280" tickLine={false} axisLine={false} />
                <Tooltip
                  formatter={(value) => asCurrency(value)}
                  contentStyle={{ background: "#10141d", border: "1px solid #273248", borderRadius: 12 }}
                />
                <Line dataKey="balance" stroke="#6366F1" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <ChartCanvasSkeleton />
        )}
      </ChartCard>

      <section className="space-y-2 rounded-2xl border border-white/10 bg-card/95 p-4">
        <h2 className="text-base font-semibold">Category breakdown</h2>
        {analytics.categoryBreakdown.map((item) => (
          <article key={item.categoryId} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
            <div className="flex items-center justify-between text-sm">
              <p>{item.categoryName}</p>
              <p className="font-semibold">{formatCurrency(item.amount)}</p>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-background">
              <div
                className="h-full rounded-full"
                style={{ width: `${item.percentage}%`, backgroundColor: item.color }}
              />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
