"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import PluxNetLogoFull from "@/assets/pluxnet-logo-full.png"

import { Button } from "@/components/ui/button"

export default function NotFoundError() {
  const navigate = useRouter()
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-10">
          <Image
            src={PluxNetLogoFull}
            className="relative"
            width={250}
            height={60}
            alt="PluxNet Logo"
          />
          <div className=" flex justify-center items-center gap-3 flex-col">
        <h1 className="text-[7rem] font-bold leading-tight">404</h1>
        <span className="font-medium">Oops! Page Not Found!</span>
        <p className="text-center text-muted-foreground">
          It seems like the page you&#39;re looking for <br />
          does not exist or might have been removed.
        </p>
          </div>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={() => history.go(-1)}>
            Go Back
          </Button>
          <Button onClick={() => navigate.push("/")}>Back to Home</Button>
        </div>
      </div>
    </div>
  )
}
