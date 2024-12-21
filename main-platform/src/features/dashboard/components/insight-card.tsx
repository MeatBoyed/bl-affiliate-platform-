import { JSX } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface InsightCardProps {
  title: string
  value: number
  percentageChange: string
  icon?: JSX.Element
  symbol?: string
}

export default function InsightCard({
  title,
  value,
  percentageChange,
  icon,
  symbol = 'R',
}: InsightCardProps) {
  return (
    <Card>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>
          {symbol} {value.toLocaleString()}
        </div>
        <p className='text-xs text-muted-foreground'>{percentageChange}</p>
      </CardContent>
    </Card>
  )
}
