"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import PluxNetLogo from "@/assets/pluxnet-logo.png"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  PhoneIcon as WhatsApp,
  XIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { env } from "@/env.mjs"

export default function ReferralSuccess() {
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false)

  // Simulating loading state
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
        <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="overflow-hidden rounded-2xl border-none bg-white shadow-2xl">
          <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 p-6 text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="flex w-full items-center justify-center"
            >
              <Image
                src={PluxNetLogo}
                className="relative"
                width={100}
                height={60}
                alt="PluxNet Logo"
              />
              {/* <CheckCircle className="w-16 h-16  mb-4" /> */}
            </motion.div>
            <CardTitle className="text-center text-2xl font-bold">
              Invitation Accepted!
            </CardTitle>
            <CardDescription className="text-center text-white opacity-90">
              Your PluxNet Fibre journey begins now!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-4 text-center font-semibold text-gray-700">
              Your next step is crucial:
            </p>
            <p className="mb-4 text-center text-gray-600">
              Contact our sales team{" "}
              <span className="font-bold">right now</span> to secure your
              exclusive offer and schedule your installation.
            </p>
            <div className="mb-4 border-l-4 border-yellow-500 bg-yellow-100 p-4 text-yellow-700">
              <p className="font-bold">Don&apos;t miss out!</p>
              <p>
                Our team is available 24/7 to assist you. The sooner you reach
                out, the faster we can get you connected.
              </p>
            </div>
          </CardContent>
          <CardFooter className="p-6">
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="flex w-full items-center justify-center rounded-lg bg-green-500 px-4 py-3 text-lg font-semibold text-white shadow-lg transition duration-300 ease-in-out hover:bg-green-600"
                onMouseEnter={() => setIsWhatsAppHovered(true)}
                onMouseLeave={() => setIsWhatsAppHovered(false)}
                onClick={() =>
                  window.open(env.NEXT_PUBLIC_WHATSAPPLINK, "_blank")
                }
              >
                <WhatsApp
                  className={`mr-2 h-6 w-6 ${isWhatsAppHovered ? "animate-bounce" : ""}`}
                />
                Chat with Sales Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
