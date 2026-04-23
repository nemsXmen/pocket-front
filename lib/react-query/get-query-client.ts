import { cache } from "react";
import { makeQueryClient } from "@/lib/react-query/make-query-client";

export const getQueryClient = cache(makeQueryClient);
