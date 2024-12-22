import Image from "next/image"
import PluxNetLogoFull from "@/assets/pluxnet-logo-full.png"

import { ScrollArea } from "@/components/ui/scroll-area"

import { FibrePackageCard } from "../products/components/fibre-package-card"
import { fibreDeals } from "../products/data/apps"
import { CustomerReferralForm } from "./components/customer-referral-form"

export default function ReferralInvitation() {
  return (
    <div className="container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <ScrollArea className="mx-auto flex max-h-screen w-full flex-col justify-start gap-20 rounded-md border bg-zinc-900 p-10">
        <div className="mb-10 flex w-full items-center justify-start gap-10">
          <Image
            src={PluxNetLogoFull}
            className="relative"
            width={250}
            height={60}
            alt="PluxNet Logo"
          />
          <h1 className="text-5xl font-semibold tracking-tight text-pink-500">
            Fibre
          </h1>
        </div>
        <ScrollArea className=" ">
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {fibreDeals.map((deal) => (
              <FibrePackageCard view="Customer" deal={deal} key={deal.name} />
            ))}
          </div>
        </ScrollArea>

        {/* </div> */}
      </ScrollArea>

      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[450px]">
          <div className="flex flex-col space-y-2 text-left">
            <h1 className="text-2xl font-semibold tracking-tight">
              Accept Invitation
            </h1>
            <p className="text-sm text-muted-foreground">
              Please fill in your details below to accept this referral
              invitation.
            </p>
          </div>

          <ScrollArea className="h-[600px] w-full">
            <CustomerReferralForm />
          </ScrollArea>

          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking login, you agree to our{" "}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
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
