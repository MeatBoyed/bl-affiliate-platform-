"use client"

import { HelpCircle, PlusCircle } from "lucide-react"
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const chartData = [
  { month: "Mar 2024", registrations: 0, earnings: 0, bonuses: 0 },
  { month: "Apr 2024", registrations: 0, earnings: 0, bonuses: 0 },
  { month: "May 2024", registrations: 0, earnings: 0, bonuses: 0 },
  { month: "Jun 2024", registrations: 0, earnings: 0, bonuses: 0 },
  { month: "Jul 2024", registrations: 0, earnings: 0, bonuses: 0 },
  { month: "Aug 2024", registrations: 0, earnings: 0, bonuses: 0 },
  { month: "Sep 2024", registrations: 0, earnings: 0, bonuses: 0 },
  { month: "Oct 2024", registrations: 0, earnings: 0, bonuses: 0 },
  { month: "Nov 2024", registrations: 5, earnings: 300, bonuses: 50 },
  { month: "Dec 2024", registrations: 50, earnings: 2375, bonuses: 148 },
  { month: "Jan 2025", registrations: 0, earnings: 0, bonuses: 0 },
  { month: "Feb 2025", registrations: 0, earnings: 0, bonuses: 0 },
]

export function EarningsInsight() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <CardTitle className="text-base font-normal">
            Registrations and Earnings
          </CardTitle>
          <HelpCircle className="h-4 w-4 text-muted-foreground" />
        </div>
        <Select defaultValue="fiscal">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select period" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="fiscal">This Fiscal Year</SelectItem>
            <SelectItem value="quarter">This Quarter</SelectItem>
            <SelectItem value="month">This Month</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col-reverse md:flex-row">
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis
                  dataKey="month"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip />
                <Bar
                  dataKey="registrations"
                  fill="#2563eb"
                  radius={[4, 4, 0, 0]}
                  name="Registrations"
                />
                <Bar
                  dataKey="earnings"
                  fill="#16a34a"
                  radius={[4, 4, 0, 0]}
                  name="Earnings"
                />
                <Bar
                  dataKey="bonuses"
                  fill="#eab308"
                  radius={[4, 4, 0, 0]}
                  name="Bonuses"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mb-4 grid grid-cols-3 gap-4 md:mb-0 md:ml-4 md:w-[200px] md:grid-cols-1">
            <div>
              <div className="text-sm font-medium text-blue-600">
                Total Registrations
              </div>
              <div className="text-2xl font-bold">55</div>
            </div>
            <div>
              <div className="text-sm font-medium text-green-600">
                Total Earnings
              </div>
              <div className="text-2xl font-bold">R2,675.00</div>
            </div>
            <div>
              <div className="text-sm font-medium text-yellow-600">
                Total Bonuses
              </div>
              <div className="text-2xl font-bold">R198.00</div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-xs text-muted-foreground">
          * Earnings are subject to verification and may change based on
          customer retention.
        </div>
      </CardContent>
    </Card>
  )
}

export function EarningsOverviewCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">
          Total Pending Earnings
        </CardTitle>
        <Button variant="outline" size="sm">
          <PlusCircle className="mr-2 h-4 w-4" />
          New Referral
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="text-sm text-muted-foreground">
              Total Pending Earnings R3,140.00
            </div>
            <Progress value={50} className="h-2" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <div>
              <div className="text-sm font-medium text-blue-600">
                PROCESSING
              </div>
              <div className="text-2xl font-bold">R0.00</div>
            </div>
            <div>
              <div className="text-sm font-medium text-amber-600">PENDING</div>
              <div className="text-2xl font-bold">R3,140.00</div>
              <div className="text-sm text-muted-foreground">1-15 Days</div>
            </div>
            <div>
              <div className="text-2xl font-bold">R0.00</div>
              <div className="text-sm text-muted-foreground">16-30 Days</div>
            </div>
            <div>
              <div className="text-2xl font-bold">R0.00</div>
              <div className="text-sm text-muted-foreground">31-45 Days</div>
            </div>
            <div>
              <div className="text-2xl font-bold">R0.00</div>
              <div className="text-sm text-muted-foreground">Above 45 days</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
