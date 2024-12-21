import PluxNetLogoFull from '@/assets/pluxnet-logo-full.png'
import Image from "next/image"
import { CustomerReferralForm } from './components/customer-referral-form'
import { fibreDeals } from '../products/data/apps'
import { FibrePackageCard } from '../products/components/fibre-package-card'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function ReferralInvitation() {
  return (
    <div className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>

      <ScrollArea className="max-h-screen flex-col gap-20 flex justify-start mx-auto w-full rounded-md border p-10 bg-zinc-900">
          <div className='flex justify-start items-center gap-10 w-full mb-10'>
              <Image
              src={PluxNetLogoFull}
              className='relative'
              width={250}
              height={60}
              alt='PluxNet Logo'
            />
            <h1 className='text-5xl text-pink-500 font-semibold tracking-tight'>Fibre</h1>
          </div>
        <ScrollArea className=" ">
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 w-full'>
          {fibreDeals.map((deal) => (
            <FibrePackageCard view='Customer' deal={deal} key={deal.name} />
          ))}
          </div>
        </ScrollArea>

      {/* </div> */}
        </ScrollArea>
      
      <div className='lg:p-8'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[450px]'>
          <div className='flex flex-col space-y-2 text-left'>
            <h1 className='text-2xl font-semibold tracking-tight'>Accept Invitation</h1>
            <p className='text-sm text-muted-foreground'>
              Please fill in your details below to accept this referral invitation.
            </p>
          </div>

            <ScrollArea className='h-[600px] w-full'>
            <CustomerReferralForm />
            </ScrollArea>
 
          <p className='px-8 text-center text-sm text-muted-foreground'>
            By clicking login, you agree to our{' '}
            <a
              href='/terms'
              className='underline underline-offset-4 hover:text-primary'
            >
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              href='/privacy'
              className='underline underline-offset-4 hover:text-primary'
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
