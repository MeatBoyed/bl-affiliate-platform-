import { Overview } from "@/features/dashboard/components/overview"
import { RecentSales } from "@/features/dashboard/components/recent-sales"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs"

export default function NavigationTabs() {
  return (
    <Tabs orientation="vertical" defaultValue="overview" className="space-y-4">
      <div className="w-full overflow-x-auto pb-2">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics" disabled>
            Analytics
          </TabsTrigger>
          <TabsTrigger value="reports" disabled>
            Reports
          </TabsTrigger>
          <TabsTrigger value="notifications" disabled>
            Notifications
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="overview" className="space-y-4">
        <h1>Empty Render</h1>
      </TabsContent>
    </Tabs>
  )
}
