"use client";

import { useState } from "react";
import {
  environmentManager,
  QueryClientProvider,
} from "@tanstack/react-query";
import { makeQueryClient } from "@/lib/react-query/make-query-client";

let browserQueryClient: ReturnType<typeof makeQueryClient> | undefined;

function getBrowserQueryClient() {
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

function getClient() {
  return environmentManager.isServer() ? makeQueryClient() : getBrowserQueryClient();
}

export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(getClient);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
