import type { Transaction } from "@/types/domain";
import { TransactionItem } from "@/components/common/transaction-item";
import { EmptyState } from "@/components/common/empty-state";
import { formatDate } from "@/lib/format";

function groupByDate(transactions: Transaction[]) {
  const grouped = new Map<string, Transaction[]>();

  for (const transaction of transactions) {
    const key = transaction.date;
    if (!grouped.has(key)) grouped.set(key, []);
    grouped.get(key)?.push(transaction);
  }

  return [...grouped.entries()].sort((a, b) => (a[0] < b[0] ? 1 : -1));
}

export function TransactionList({ transactions }: { transactions: Transaction[] }) {
  if (!transactions.length) {
    return (
      <EmptyState
        title="No transactions yet"
        description="Start by adding your first income or expense entry."
      />
    );
  }

  const groups = groupByDate(transactions);

  return (
    <div className="space-y-4">
      {groups.map(([date, items]) => (
        <div key={date}>
          <p className="mb-2 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
            {formatDate(date)}
          </p>
          <div className="space-y-2">
            {items.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
