import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AppShellContentSkeleton } from "@/components/common/screen-skeletons";

export function AppShellLoading() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl gap-0 lg:gap-6 lg:px-6 lg:py-6">
      <aside className="hidden lg:block lg:w-64 lg:shrink-0">
        <div className="sticky top-6 rounded-3xl border border-border bg-card p-4">
          <Skeleton className="mb-5 h-14 w-full rounded-2xl" />
          <div className="space-y-2">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Skeleton key={idx} className="h-10 w-full rounded-xl" />
            ))}
          </div>
        </div>
      </aside>

      <main className="flex min-h-screen flex-1 pb-20 lg:min-h-[calc(100vh-3rem)] lg:pb-0">
        <div className="w-full px-4 py-5 sm:px-6 lg:rounded-3xl lg:border lg:border-border lg:bg-card/50 lg:p-6">
          <AppShellContentSkeleton />
        </div>
      </main>
    </div>
  );
}

export function AppShellError({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 text-center">
        <AlertTriangle className="mx-auto mb-3 size-7 text-expense" />
        <h2 className="text-lg font-semibold">Unable to load this screen</h2>
        <p className="mt-2 text-sm text-muted-foreground">Please retry in a moment.</p>
        <Button className="mt-4 w-full" onClick={onRetry}>
          Retry
        </Button>
      </div>
    </div>
  );
}
