"use client"

import { useState } from "react"
import { IconDownload, IconPlus } from "@tabler/icons-react"

import useDialogState from "@/hooks/use-dialog-state"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ConfirmDialog } from "@/components/confirm-dialog"
import { Header } from "@/components/layout/header"
import { Main } from "@/components/layout/main"
import { ModeToggle } from "@/components/mode-toggle"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { Search } from "@/components/search"

import {
  EarningsInsight,
  EarningsOverviewCard,
} from "./components/earnings-overview"
// import { TasksImportDialog } from './components/tasks-import-dialog'
// import { TasksMutateDrawer } from './components/tasks-mutate-drawer'
import TasksContextProvider, { TasksDialogType } from "./context/tasks-context"
import { Task } from "./data/schema"

export default function Earnings() {
  // Local states
  const [currentRow, setCurrentRow] = useState<Task | null>(null)
  const [open, setOpen] = useDialogState<TasksDialogType>(null)

  return (
    // <TasksContextProvider value={{ open, setOpen, currentRow, setCurrentRow }}>
    // {/* ===== Top Heading ===== */}
    <>
      <Header sticky>
        <Search />
        <div className="ml-auto flex items-center space-x-4">
          {/* <ThemeSwitch /> */}
          <ModeToggle />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className="mb-2 flex flex-wrap items-center justify-between gap-x-4 space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Earnings</h2>
            <p className="text-muted-foreground">Here is your Earnings!</p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="space-x-1"
              onClick={() => setOpen("import")}
            >
              <span>Import</span> <IconDownload size={18} />
            </Button>
            <Button className="space-x-1" onClick={() => setOpen("create")}>
              <span>Create</span> <IconPlus size={18} />
            </Button>
          </div>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          {/* <AffiliateEarningsDashboard /> */}
          <div className="space-y-8">
            <EarningsOverviewCard />
            <EarningsInsight />
          </div>
        </div>
      </Main>
    </>

    // </TasksContextProvider>
  )
}
