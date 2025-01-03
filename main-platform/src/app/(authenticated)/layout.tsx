import { SearchProvider } from "@/context/search-context"
import Cookies from "js-cookie"

import { cn } from "@/lib/utils"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import SkipToMain from "@/components/skip-to-main"

import { RootLayoutProps } from "../layout"

export default function RouteComponent({ children }: RootLayoutProps) {
  const defaultOpen = Cookies.get("sidebar:state") !== "false"
  return (
    <SearchProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <SkipToMain />
        <AppSidebar />
        <div
          id="content"
          className={cn(
            "ml-auto w-full max-w-full",
            "peer-data-[state=collapsed]:w-[calc(100%-var(--sidebar-width-icon))]",
            "peer-data-[state=expanded]:w-[calc(100%-var(--sidebar-width))]",
            "transition-[width] duration-200 ease-linear",
            "flex h-svh flex-col "
          )}
        >
          {children}
        </div>
      </SidebarProvider>
    </SearchProvider>
  )
}
