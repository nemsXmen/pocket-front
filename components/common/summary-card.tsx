import { cn } from "@/lib/utils";
import { formatCurrency } from "@/lib/format";

export function SummaryCard({
  label,
  amount,
  tone,
}: {
  label: string;
  amount: number;
  tone: "income" | "expense";
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-secondary/80 p-3">
      <p className="text-[11px] text-muted-foreground">{label}</p>
      <p
        className={cn(
          "mt-1.5 text-lg font-semibold tracking-tight",
          tone === "income" ? "text-income" : "text-expense",
        )}
      >
        {formatCurrency(amount)}
      </p>
    </div>
  );
}
