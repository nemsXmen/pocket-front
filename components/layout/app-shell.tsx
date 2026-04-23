import { BottomNav } from "@/components/navigation/bottom-nav";
import { SidebarNav } from "@/components/navigation/sidebar-nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden lg:fixed lg:left-0 lg:top-0 lg:z-40 lg:block lg:h-screen lg:w-72 lg:p-4">
        <SidebarNav />
      </aside>

      <main className="flex min-h-screen flex-1 justify-center pb-24 lg:pb-0 lg:pl-72">
        <div className="w-full max-w-xl px-4 py-5 sm:px-5 lg:max-w-none lg:px-6 lg:py-6">
          <div className="w-full lg:rounded-[28px] lg:border lg:border-white/10 lg:bg-card/80 lg:p-6 lg:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.9)]">
          {children}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
