'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, PhoneIcon as WhatsApp, ArrowRight, XIcon } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import PluxNetLogo from "@/assets/pluxnet-logo.png"

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
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-white rounded-2xl border-none shadow-2xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 p-6 text-white">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className='flex justify-center items-center w-full'
            >
              <Image src={PluxNetLogo} className="relative" width={100} height={60} alt="PluxNet Logo" />
              {/* <CheckCircle className="w-16 h-16  mb-4" /> */}
            </motion.div>
            <CardTitle className="text-2xl font-bold text-center">Invitation Accepted!</CardTitle>
            <CardDescription className="text-center text-white opacity-90">
              Your PluxNet Fibre journey begins now!
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 text-center font-semibold mb-4">
              Your next step is crucial:
            </p>
            <p className="text-gray-600 text-center mb-4">
              Contact our sales team <span className="font-bold">right now</span> to secure your exclusive offer and schedule your installation.
            </p>
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4">
              <p className="font-bold">Don&apos;t miss out!</p>
              <p>Our team is available 24/7 to assist you. The sooner you reach out, the faster we can get you connected.</p>
            </div>
          </CardContent>
          <CardFooter className="p-6">
            <motion.div
              className="w-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center justify-center text-lg"
                onMouseEnter={() => setIsWhatsAppHovered(true)}
                onMouseLeave={() => setIsWhatsAppHovered(false)}
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                <WhatsApp className={`mr-2 h-6 w-6 ${isWhatsAppHovered ? 'animate-bounce' : ''}`} />
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

