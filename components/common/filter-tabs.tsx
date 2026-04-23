"use client";

import { cn } from "@/lib/utils";

export type FilterOption<T extends string> = {
  label: string;
  value: T;
};

export function FilterTabs<T extends string>({
  options,
  value,
  onValueChange,
}: {
  options: FilterOption<T>[];
  value: T;
  onValueChange: (value: T) => void;
}) {
  return (
    <div className="inline-flex rounded-xl border border-white/10 bg-white/[0.03] p-1">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onValueChange(option.value)}
          className={cn(
            "rounded-lg px-3 py-1.5 text-xs font-medium transition sm:text-sm",
            value === option.value
              ? "bg-white/10 text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
