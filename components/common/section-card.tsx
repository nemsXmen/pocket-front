import { cn } from "@/lib/utils";

export function SectionCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "rounded-3xl border border-border bg-card p-4 shadow-sm shadow-black/20 sm:p-5",
        className,
      )}
    >
      {children}
    </section>
  );
}
