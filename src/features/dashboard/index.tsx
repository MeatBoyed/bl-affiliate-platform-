import { IconMoneybag } from '@tabler/icons-react'
import { Check, Clock, QrCodeIcon, Users2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { topNavData } from '@/components/layout/data/sidebar-data'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { TopNav } from '@/components/layout/top-nav'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { ThemeSwitch } from '@/components/theme-switch'
import InsightCard from './components/insight-card'
import { Overview } from './components/overview'
import { RecentSales } from './components/recent-sales'

export default function Dashboard() {
  return (
    <>
      {/* ===== Top Heading ===== */}
      <Header>
        <TopNav links={topNavData} />
        <div className='ml-auto flex items-center space-x-4'>
          {/* <Search /> */}
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      {/* ===== Main ===== */}
      <Main>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight'>Dashboard</h1>
          <div className='flex items-center space-x-2'>
            <Button>
              <QrCodeIcon size={24} />
              Generate Referral
            </Button>
          </div>
        </div>
        <div className='space-y-4'>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {/* Total Earnings */}
            <InsightCard
              title='Total Earnings'
              value={5300}
              symbol={'R'}
              percentageChange='+12%'
              icon={<IconMoneybag size={24} />}
            />
            {/* Total Referrals */}
            <InsightCard
              title='Total Referrals'
              value={5300}
              symbol=''
              percentageChange='+12%'
              icon={<Users2 size={24} />}
            />
            {/*  Completed Referrals */}
            <InsightCard
              title='Completed Referrals'
              value={5100}
              symbol=''
              percentageChange='+5%'
              icon={<Check className='text-green-500' size={24} />}
            />
            {/* Pending Referrals */}
            <InsightCard
              title='Pending Referrals'
              value={50}
              symbol=''
              percentageChange='+2%'
              icon={<Clock className='text-yellow-500' size={24} />}
            />
          </div>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
            <Card className='col-span-1 lg:col-span-4'>
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent className='pl-2'>
                <Overview />
              </CardContent>
            </Card>
            <Card className='col-span-1 lg:col-span-3'>
              <CardHeader>
                <CardTitle>Recent Referrals</CardTitle>
                <CardDescription>
                  You made 265 referrals this month.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <RecentSales />
              </CardContent>
            </Card>
          </div>
        </div>
      </Main>
    </>
  )
}
