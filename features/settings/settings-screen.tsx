"use client";

import { Download } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { SettingsScreenSkeleton } from "@/components/common/screen-skeletons";
import { PageHeader } from "@/components/common/page-header";
import { Button } from "@/components/ui/button";
import { getSettingsQueryOptions } from "@/lib/query-options/settings-query-options";

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="text-sm font-medium">{value}</p>
    </div>
  );
}

export function SettingsScreen() {
  const settingsQuery = useQuery(getSettingsQueryOptions());

  if (settingsQuery.isPending) {
    return <SettingsScreenSkeleton />;
  }

  if (settingsQuery.isError) {
    return <div className="rounded-2xl border border-white/10 bg-card p-8 text-expense">Failed to load settings.</div>;
  }

  const settings = settingsQuery.data;

  return (
    <div className="space-y-5">
      <PageHeader title="Settings" subtitle="Manage your profile and preferences" />

      <section className="rounded-2xl border border-white/10 bg-card/95 p-4">
        <p className="text-xs uppercase tracking-wide text-muted-foreground">User</p>
        <p className="mt-2 text-xl font-semibold">{settings.userName}</p>
        <p className="text-sm text-muted-foreground">{settings.email}</p>
      </section>

      <section className="space-y-2 rounded-2xl border border-white/10 bg-card/95 p-4">
        <Row label="Currency" value={settings.currency} />
        <Row label="Theme" value={settings.theme} />
        <Row label="Notifications" value={settings.notifications ? "Enabled" : "Disabled"} />
      </section>

      <Button className="h-11 w-full rounded-xl border border-primary/30 bg-primary/20 text-primary hover:bg-primary/30">
        <Download className="size-4" />
        Export Data
      </Button>
    </div>
  );
}
