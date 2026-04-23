"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  LayoutDashboard,
  ListFilter,
  PlusCircle,
  ReceiptText,
  Settings,
  Wallet,
} from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/transactions", label: "Transactions", icon: ReceiptText },
  { href: "/transactions/new", label: "Add Transaction", icon: PlusCircle },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/categories", label: "Categories", icon: ListFilter },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function SidebarNav() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/transactions") return pathname === "/transactions";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="h-full rounded-[28px] border border-white/10 bg-[#0d1119]/90 p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
      <div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
        <div className="rounded-xl bg-primary/20 p-2 text-primary">
          <Wallet className="size-5" />
        </div>
        <div>
          <p className="text-lg font-semibold">Pocket</p>
          <p className="text-xs text-muted-foreground">Fintech Cashflow</p>
        </div>
      </div>

      <ul className="space-y-1.5">
        {items.map(({ href, label, icon: Icon }) => {
          const active = isActive(href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition",
                  active
                    ? "border border-primary/30 bg-primary/15 text-primary"
                    : "border border-transparent text-muted-foreground hover:border-white/10 hover:bg-secondary hover:text-foreground",
                )}
              >
                <Icon className="size-4" />
                <span>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
