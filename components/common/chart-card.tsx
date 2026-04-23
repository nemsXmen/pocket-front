import { cn } from "@/lib/utils";

export function ChartCard({
  title,
  subtitle,
  className,
  children,
}: {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("rounded-2xl border border-white/10 bg-card/95 p-4 shadow-[0_20px_60px_-45px_rgba(0,0,0,0.95)] sm:p-5", className)}>
      <div className="mb-4">
        <h3 className="text-base font-semibold">{title}</h3>
        {subtitle ? <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p> : null}
      </div>
      {children}
    </div>
  );
}
