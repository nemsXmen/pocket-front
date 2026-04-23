import { cn } from "@/lib/utils";
import type { Category } from "@/types/domain";

export function CategoryChip({
  category,
  active,
  onClick,
}: {
  category: Category;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-xl border px-3 py-2 text-left text-xs font-medium transition",
        active
          ? "border-primary/40 bg-primary/20 text-primary"
          : "border-white/10 bg-white/[0.03] text-foreground hover:border-primary/30",
      )}
    >
      {category.name}
    </button>
  );
}
