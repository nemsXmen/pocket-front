"use client";

import { useEffect } from "react";
import { AppShellError } from "@/components/common/state-block";

export default function MainError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <AppShellError onRetry={reset} />;
}
