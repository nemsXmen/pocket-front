import type {
  Analytics,
  AnalyticsPeriod,
  Category,
  DashboardSummary,
  Settings,
  Transaction,
} from "@/types/domain";

const categories: Category[] = [
  { id: "inc-salary", name: "Salary", type: "INCOME", icon: "wallet", color: "#22C55E" },
  { id: "inc-invest", name: "Investments", type: "INCOME", icon: "trending-up", color: "#10B981" },
  { id: "inc-freelance", name: "Freelance", type: "INCOME", icon: "briefcase", color: "#4ADE80" },
  { id: "out-food", name: "Food", type: "OUTCOME", icon: "utensils", color: "#F97316" },
  { id: "out-housing", name: "Housing", type: "OUTCOME", icon: "home", color: "#EF4444" },
  { id: "out-transport", name: "Transport", type: "OUTCOME", icon: "car", color: "#F43F5E" },
  { id: "out-shopping", name: "Shopping", type: "OUTCOME", icon: "shopping-bag", color: "#E11D48" },
  { id: "out-utilities", name: "Utilities", type: "OUTCOME", icon: "bolt", color: "#FB7185" },
];

const transactions: Transaction[] = [
  {
    id: "txn-001",
    title: "April Salary",
    amount: 5200,
    type: "INCOME",
    categoryId: "inc-salary",
    categoryName: "Salary",
    date: "2026-04-01",
    note: "Monthly payroll",
  },
  {
    id: "txn-002",
    title: "Rent Payment",
    amount: 1650,
    type: "OUTCOME",
    categoryId: "out-housing",
    categoryName: "Housing",
    date: "2026-04-02",
  },
  {
    id: "txn-003",
    title: "ETF Dividends",
    amount: 320,
    type: "INCOME",
    categoryId: "inc-invest",
    categoryName: "Investments",
    date: "2026-04-04",
  },
  {
    id: "txn-004",
    title: "Metro Card Top-up",
    amount: 80,
    type: "OUTCOME",
    categoryId: "out-transport",
    categoryName: "Transport",
    date: "2026-04-04",
  },
  {
    id: "txn-005",
    title: "Groceries",
    amount: 215,
    type: "OUTCOME",
    categoryId: "out-food",
    categoryName: "Food",
    date: "2026-04-05",
  },
  {
    id: "txn-006",
    title: "Freelance Milestone",
    amount: 1100,
    type: "INCOME",
    categoryId: "inc-freelance",
    categoryName: "Freelance",
    date: "2026-04-08",
    note: "Landing page redesign",
  },
  {
    id: "txn-007",
    title: "Cloud Subscription",
    amount: 68,
    type: "OUTCOME",
    categoryId: "out-utilities",
    categoryName: "Utilities",
    date: "2026-04-10",
  },
  {
    id: "txn-008",
    title: "Weekend Shopping",
    amount: 295,
    type: "OUTCOME",
    categoryId: "out-shopping",
    categoryName: "Shopping",
    date: "2026-04-11",
  },
];

const dashboardSummary: DashboardSummary = {
  balance: 15780,
  totalIncome: 6620,
  totalExpense: 2308,
  monthlyChangePercent: 12.4,
};

const analyticsByPeriod: Record<AnalyticsPeriod, Analytics> = {
  week: {
    period: "week",
    categoryBreakdown: [
      { categoryId: "out-food", categoryName: "Food", amount: 410, percentage: 26, color: "#F97316" },
      { categoryId: "out-housing", categoryName: "Housing", amount: 560, percentage: 36, color: "#EF4444" },
      { categoryId: "out-transport", categoryName: "Transport", amount: 190, percentage: 12, color: "#F43F5E" },
      { categoryId: "out-shopping", categoryName: "Shopping", amount: 240, percentage: 15, color: "#E11D48" },
      { categoryId: "out-utilities", categoryName: "Utilities", amount: 170, percentage: 11, color: "#FB7185" },
    ],
    incomeVsOutcome: [
      { label: "Mon", income: 240, outcome: 180 },
      { label: "Tue", income: 420, outcome: 210 },
      { label: "Wed", income: 150, outcome: 320 },
      { label: "Thu", income: 600, outcome: 280 },
      { label: "Fri", income: 320, outcome: 240 },
      { label: "Sat", income: 100, outcome: 260 },
      { label: "Sun", income: 80, outcome: 140 },
    ],
    cashflowSeries: [
      { label: "Mon", income: 240, outcome: 180, balance: 13800 },
      { label: "Tue", income: 420, outcome: 210, balance: 14010 },
      { label: "Wed", income: 150, outcome: 320, balance: 13840 },
      { label: "Thu", income: 600, outcome: 280, balance: 14160 },
      { label: "Fri", income: 320, outcome: 240, balance: 14240 },
      { label: "Sat", income: 100, outcome: 260, balance: 14080 },
      { label: "Sun", income: 80, outcome: 140, balance: 14020 },
    ],
  },
  month: {
    period: "month",
    categoryBreakdown: [
      { categoryId: "out-housing", categoryName: "Housing", amount: 1650, percentage: 46, color: "#EF4444" },
      { categoryId: "out-food", categoryName: "Food", amount: 780, percentage: 22, color: "#F97316" },
      { categoryId: "out-shopping", categoryName: "Shopping", amount: 525, percentage: 15, color: "#E11D48" },
      { categoryId: "out-transport", categoryName: "Transport", amount: 320, percentage: 9, color: "#F43F5E" },
      { categoryId: "out-utilities", categoryName: "Utilities", amount: 308, percentage: 8, color: "#FB7185" },
    ],
    incomeVsOutcome: [
      { label: "W1", income: 5520, outcome: 1845 },
      { label: "W2", income: 1100, outcome: 463 },
      { label: "W3", income: 0, outcome: 0 },
      { label: "W4", income: 0, outcome: 0 },
    ],
    cashflowSeries: [
      { label: "Apr 1", income: 5200, outcome: 120, balance: 13900 },
      { label: "Apr 3", income: 0, outcome: 1660, balance: 12240 },
      { label: "Apr 5", income: 320, outcome: 295, balance: 12265 },
      { label: "Apr 7", income: 0, outcome: 80, balance: 12185 },
      { label: "Apr 9", income: 1100, outcome: 0, balance: 13285 },
      { label: "Apr 11", income: 0, outcome: 363, balance: 12922 },
      { label: "Apr 13", income: 0, outcome: 0, balance: 12922 },
    ],
  },
  year: {
    period: "year",
    categoryBreakdown: [
      { categoryId: "out-housing", categoryName: "Housing", amount: 19800, percentage: 43, color: "#EF4444" },
      { categoryId: "out-food", categoryName: "Food", amount: 10150, percentage: 22, color: "#F97316" },
      { categoryId: "out-shopping", categoryName: "Shopping", amount: 7200, percentage: 16, color: "#E11D48" },
      { categoryId: "out-transport", categoryName: "Transport", amount: 4700, percentage: 10, color: "#F43F5E" },
      { categoryId: "out-utilities", categoryName: "Utilities", amount: 4100, percentage: 9, color: "#FB7185" },
    ],
    incomeVsOutcome: [
      { label: "Q1", income: 16800, outcome: 11500 },
      { label: "Q2", income: 20400, outcome: 12300 },
      { label: "Q3", income: 19800, outcome: 11800 },
      { label: "Q4", income: 21500, outcome: 12600 },
    ],
    cashflowSeries: [
      { label: "Jan", income: 5600, outcome: 3700, balance: 9200 },
      { label: "Feb", income: 5900, outcome: 3900, balance: 11200 },
      { label: "Mar", income: 5300, outcome: 3900, balance: 12600 },
      { label: "Apr", income: 6620, outcome: 2308, balance: 15780 },
      { label: "May", income: 0, outcome: 0, balance: 15780 },
      { label: "Jun", income: 0, outcome: 0, balance: 15780 },
    ],
  },
};

const settings: Settings = {
  userName: "Alex Morgan",
  email: "alex@pocket.app",
  currency: "USD",
  theme: "Dark",
  notifications: true,
};

export const pocketDb = {
  categories,
  transactions,
  dashboardSummary,
  analyticsByPeriod,
  settings,
};
