import { NetworkIcon, QrCodeIcon, WifiIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IconWifi2 } from '@tabler/icons-react'

export interface FibreDeal {
  id: number
  name: string
  type: 'Home' | 'Business' | 'Enterprise'
  speed: string
  price: number
  features: string[]
  mostPopular?: boolean
}

interface FibrePackageCardProps {
  deal: FibreDeal
  view?: "Dashboard" | "Customer"
}

export function FibrePackageCard({ deal, view = "Dashboard" }: FibrePackageCardProps) {
  return (
    <li className='rounded-lg border p-4 hover:shadow-md flex flex-col'>
      {deal.mostPopular && (
        <Badge className='self-start mb-2 bg-yellow-400 text-yellow-900'>
          Most Popular
        </Badge>
      )}
      <div className='mb-4 flex items-center justify-between'>
        <div className='flex size-10 items-center justify-center rounded-lg bg-muted p-2'>
          <WifiIcon className='h-6 w-6' />
        </div>
        <div className='text-right'>
          <span className='text-2xl font-bold'>R{deal.price.toLocaleString()}</span>
          <span className='text-sm text-muted-foreground'>/month</span>
        </div>
      </div>
      <div>
        <h2 className='mb-1 text-xl font-semibold'>{deal.name}</h2>
        <p className='mb-2 text-sm text-muted-foreground'>
          {deal.type} Package
        </p>
        <p className='mb-4 text-lg font-medium'>{deal.speed}</p>
        <ul className='mb-4 space-y-2'>
          {deal.features.map((feature, index) => (
            <li key={index} className='flex items-center text-sm'>
              <svg
                className='mr-2 h-4 w-4 text-green-500'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M5 13l4 4L19 7'></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      {view === "Dashboard" && (

      <Button className='w-full mt-auto'>
        <QrCodeIcon />
        Generate Referral
      </Button>
      )}
      {view === "Customer" && (

      <Button className='w-full mt-auto'>
        <WifiIcon />
      Order Now
      </Button>
      )}
    </li>
  )
}
