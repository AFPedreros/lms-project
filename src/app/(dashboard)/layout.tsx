"use client";

import { useCollapsedStore } from "@/store/collapsedStore";
import { cn } from "@nextui-org/react";
import { Sidebar } from "./_components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isCollapsed = useCollapsedStore((state) => state.isCollapsed);
  return (
    <div className="">
      <div className="flex h-dvh w-full">
        <div className="fixed">
          <Sidebar />
        </div>
        <div
          className={cn(
            { "pl-16": isCollapsed },
            { "md:pl-72": !isCollapsed },
            "w-full duration-250 pl-16 ease-in-out transition-width h-fit",
          )}
        >
          <div className="relative h-full min-h-[calc(100vh-4rem)] w-full flex-col p-6">
            <div className="absolute bottom-0 left-0 right-0 top-0 -z-20 opacity-50 bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]" />
            <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
