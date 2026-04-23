export type TransactionType = "INCOME" | "OUTCOME";
export type AnalyticsPeriod = "week" | "month" | "year";

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  categoryId: string;
  categoryName: string;
  date: string;
  note?: string;
};

export type Category = {
  id: string;
  name: string;
  type: TransactionType;
  icon: string;
  color: string;
};

export type DashboardSummary = {
  balance: number;
  totalIncome: number;
  totalExpense: number;
  monthlyChangePercent: number;
};

export type AnalyticsCategoryBreakdownItem = {
  categoryId: string;
  categoryName: string;
  amount: number;
  percentage: number;
  color: string;
};

export type AnalyticsIncomeVsOutcomeItem = {
  label: string;
  income: number;
  outcome: number;
};

export type CashflowSeriesItem = {
  label: string;
  income: number;
  outcome: number;
  balance: number;
};

export type Analytics = {
  period: AnalyticsPeriod;
  categoryBreakdown: AnalyticsCategoryBreakdownItem[];
  incomeVsOutcome: AnalyticsIncomeVsOutcomeItem[];
  cashflowSeries: CashflowSeriesItem[];
};

export type Settings = {
  userName: string;
  email: string;
  currency: string;
  theme: string;
  notifications: boolean;
};
