"use client"

import { useState } from "react"
import {
  IconAdjustmentsHorizontal,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/layout/header"
import { Main } from "@/components/layout/main"
import { ModeToggle } from "@/components/mode-toggle"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { Search } from "@/components/search"
import { ThemeSwitch } from "@/components/theme-switch"

import { FibreDeal, FibrePackageCard } from "./components/fibre-package-card"
import { fibreDeals } from "./data/apps"

const appText = new Map<string, string>([
  ["all", "All Apps"],
  ["connected", "Connected"],
  ["notConnected", "Not Connected"],
])

export default function Products() {
  const [sort, setSort] = useState("ascending")
  const [appType, setAppType] = useState<FibreDeal["type"] | "All">("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPackages = fibreDeals
    .sort((a, b) =>
      sort === "ascending"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
    .filter((app) =>
      appType === "Home"
        ? app.type === "Home"
        : appType === "Business"
          ? app.type === "Business"
          : appType === "Enterprise"
            ? app.type === "Enterprise"
            : true
    )
    .filter((app) => app.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <Search />
        <div className="ml-auto flex items-center gap-4">
          {/* <ThemeSwitch /> */}
          <ModeToggle />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Content ===== */}
      <Main fixed>
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            PluxNet Products
          </h1>
          <p className="text-muted-foreground">
            Here&apos;s a list of our products!
          </p>
        </div>
        <div className="my-4 flex items-end justify-between sm:my-0 sm:items-center">
          <div className="flex flex-col gap-4 sm:my-4 sm:flex-row">
            <Input
              placeholder="Search products..."
              className="h-9 w-40 lg:w-[250px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              value={appType}
              onValueChange={(value: FibreDeal["type"] | "All") =>
                setAppType(value)
              }
            >
              <SelectTrigger className="w-36">
                <SelectValue>{appText.get(appType)}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Packages</SelectItem>
                <SelectItem value="Home">Home</SelectItem>
                <SelectItem value="Business">Business</SelectItem>
                <SelectItem value="Enterprise">Enterprise</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className="w-16">
              <SelectValue>
                <IconAdjustmentsHorizontal size={18} />
              </SelectValue>
            </SelectTrigger>
            <SelectContent align="end">
              <SelectItem value="ascending">
                <div className="flex items-center gap-4">
                  <IconSortAscendingLetters size={16} />
                  <span>Ascending</span>
                </div>
              </SelectItem>
              <SelectItem value="descending">
                <div className="flex items-center gap-4">
                  <IconSortDescendingLetters size={16} />
                  <span>Descending</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator className="shadow" />
        <ul className="faded-bottom  no-scrollbar grid gap-4 overflow-auto pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((deal) => (
            <FibrePackageCard deal={deal} key={deal.name} />
          ))}
        </ul>
      </Main>
    </>
  )
}
