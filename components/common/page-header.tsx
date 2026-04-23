import { ArrowLeft, Bell, Search } from "lucide-react";
import Link from "next/link";

export function PageHeader({
  title,
  subtitle,
  backHref,
  right,
}: {
  title: string;
  subtitle?: string;
  backHref?: string;
  right?: React.ReactNode;
}) {
  return (
    <header className="mb-5 space-y-4">
      <div className="flex items-center justify-between">
        <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[11px] font-semibold tracking-wide text-slate-300">
          FNC
        </span>

        <div className="flex items-center gap-2">
          <button className="rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-white">
            <Search className="size-4" />
          </button>
          <button className="relative rounded-lg border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:text-white">
            <Bell className="size-4" />
            <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-rose-500" />
          </button>
          <div className="h-8 w-8 rounded-lg border border-white/10 bg-gradient-to-br from-slate-500 to-slate-800" />
        </div>
      </div>

      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            {backHref ? (
              <Link
                href={backHref}
                className="rounded-lg border border-white/10 bg-white/5 p-1.5 text-muted-foreground transition hover:text-foreground"
                aria-label="Go back"
              >
                <ArrowLeft className="size-4" />
              </Link>
            ) : null}
            <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
          </div>
          {subtitle ? <p className="mt-1.5 text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
        {right}
      </div>
    </header>
  );
}
