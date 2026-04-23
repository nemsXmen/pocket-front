"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
        <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-6 text-center">
          <AlertTriangle className="mx-auto mb-3 size-8 text-expense" />
          <h2 className="text-xl font-semibold">Something went wrong</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            We could not load Pocket right now.
          </p>
          <Button className="mt-5 w-full" onClick={reset}>
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
