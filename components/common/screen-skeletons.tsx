import { Skeleton } from "@/components/ui/skeleton";

function HeaderSkeleton() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-7 w-40 sm:h-9 sm:w-56" />
      <Skeleton className="h-4 w-64" />
    </div>
  );
}

function CardShell({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border border-border bg-card p-4 sm:p-5">{children}</div>;
}

export function AppShellContentSkeleton() {
  return (
    <div className="space-y-5">
      <HeaderSkeleton />
      <CardShell>
        <Skeleton className="h-5 w-28" />
        <Skeleton className="mt-4 h-12 w-48 sm:h-14 sm:w-56" />
        <Skeleton className="mt-5 h-7 w-40 rounded-full" />
      </CardShell>
      <div className="grid gap-3 sm:grid-cols-2">
        <CardShell>
          <Skeleton className="h-4 w-20" />
          <Skeleton className="mt-3 h-8 w-28" />
        </CardShell>
        <CardShell>
          <Skeleton className="h-4 w-20" />
          <Skeleton className="mt-3 h-8 w-28" />
        </CardShell>
      </div>
      <CardShell>
        <Skeleton className="h-5 w-36" />
        <Skeleton className="mt-2 h-4 w-56" />
        <Skeleton className="mt-4 h-64 w-full rounded-2xl" />
      </CardShell>
    </div>
  );
}

export function DashboardScreenSkeleton() {
  return (
    <div className="space-y-5">
      <HeaderSkeleton />
      <CardShell>
        <Skeleton className="h-5 w-32" />
        <Skeleton className="mt-4 h-12 w-56 sm:h-14 sm:w-72" />
        <Skeleton className="mt-5 h-7 w-44 rounded-full" />
      </CardShell>

      <div className="grid gap-3 sm:grid-cols-2">
        <CardShell>
          <Skeleton className="h-4 w-16" />
          <Skeleton className="mt-3 h-8 w-32" />
        </CardShell>
        <CardShell>
          <Skeleton className="h-4 w-16" />
          <Skeleton className="mt-3 h-8 w-32" />
        </CardShell>
      </div>

      <CardShell>
        <Skeleton className="h-5 w-40" />
        <Skeleton className="mt-2 h-4 w-64" />
        <Skeleton className="mt-4 h-64 w-full rounded-2xl" />
      </CardShell>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Skeleton className="h-11 w-full rounded-2xl" />
        <Skeleton className="h-11 w-full rounded-2xl" />
        <Skeleton className="h-11 w-full rounded-2xl" />
        <Skeleton className="h-11 w-full rounded-2xl" />
      </div>

      <CardShell>
        <div className="mb-3 flex items-center justify-between">
          <Skeleton className="h-6 w-44" />
          <Skeleton className="h-4 w-14" />
        </div>
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Skeleton key={idx} className="h-16 w-full rounded-2xl" />
          ))}
        </div>
      </CardShell>
    </div>
  );
}

export function TransactionsScreenSkeleton() {
  return (
    <div className="space-y-4">
      <HeaderSkeleton />

      <CardShell>
        <Skeleton className="h-10 w-64 rounded-2xl" />
        <Skeleton className="mt-3 h-10 w-full rounded-2xl" />
      </CardShell>

      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, groupIndex) => (
          <div key={groupIndex}>
            <Skeleton className="mb-2 h-4 w-28" />
            <div className="space-y-2">
              {Array.from({ length: 2 }).map((__, itemIndex) => (
                <Skeleton key={`${groupIndex}-${itemIndex}`} className="h-16 w-full rounded-2xl" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function AnalyticsScreenSkeleton() {
  return (
    <div className="space-y-5">
      <HeaderSkeleton />
      <Skeleton className="h-10 w-56 rounded-2xl" />

      <div className="grid gap-4 lg:grid-cols-2">
        <CardShell>
          <Skeleton className="h-5 w-36" />
          <Skeleton className="mt-2 h-4 w-56" />
          <Skeleton className="mt-4 h-64 w-full rounded-2xl" />
        </CardShell>

        <CardShell>
          <Skeleton className="h-5 w-40" />
          <Skeleton className="mt-2 h-4 w-52" />
          <Skeleton className="mt-4 h-64 w-full rounded-2xl" />
        </CardShell>
      </div>

      <CardShell>
        <Skeleton className="h-5 w-36" />
        <Skeleton className="mt-2 h-4 w-44" />
        <Skeleton className="mt-4 h-64 w-full rounded-2xl" />
      </CardShell>

      <CardShell>
        <Skeleton className="h-5 w-44" />
        <div className="mt-3 space-y-2">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Skeleton key={idx} className="h-16 w-full rounded-2xl" />
          ))}
        </div>
      </CardShell>
    </div>
  );
}

export function CategoriesScreenSkeleton() {
  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-3">
        <HeaderSkeleton />
        <Skeleton className="h-9 w-24 rounded-xl" />
      </div>

      {Array.from({ length: 2 }).map((_, sectionIndex) => (
        <CardShell key={sectionIndex}>
          <Skeleton className="h-4 w-20" />
          <div className="mt-3 space-y-2">
            {Array.from({ length: 4 }).map((__, itemIndex) => (
              <Skeleton key={`${sectionIndex}-${itemIndex}`} className="h-14 w-full rounded-2xl" />
            ))}
          </div>
        </CardShell>
      ))}
    </div>
  );
}

export function SettingsScreenSkeleton() {
  return (
    <div className="space-y-5">
      <HeaderSkeleton />

      <CardShell>
        <Skeleton className="h-4 w-14" />
        <Skeleton className="mt-3 h-7 w-44" />
        <Skeleton className="mt-2 h-4 w-56" />
      </CardShell>

      <CardShell>
        <div className="space-y-2">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Skeleton key={idx} className="h-12 w-full rounded-2xl" />
          ))}
        </div>
      </CardShell>

      <Skeleton className="h-11 w-full rounded-2xl" />
    </div>
  );
}

export function CategoryChipGridSkeleton() {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Skeleton key={idx} className="h-9 w-full rounded-2xl" />
      ))}
    </div>
  );
}

export function ChartCanvasSkeleton() {
  return <Skeleton className="h-64 w-full rounded-2xl" />;
}
