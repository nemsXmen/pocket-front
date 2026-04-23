import Link from "next/link";
import { cn } from "@/lib/utils";

export function QuickActionCard({
  title,
  href,
  tone = "default",
  icon,
}: {
  title: string;
  href: string;
  tone?: "default" | "primary";
  icon?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-medium transition sm:text-sm",
        tone === "primary"
          ? "border-primary/30 bg-primary/20 text-primary hover:bg-primary/30"
          : "border-white/10 bg-white/5 text-foreground hover:bg-white/10",
      )}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
}
