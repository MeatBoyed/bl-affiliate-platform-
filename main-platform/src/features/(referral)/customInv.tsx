import { Card, CardContent, CardHeader } from '@/components/ui/card'
import ReferralForm from './components/referral-form'
import { Wifi, Zap, Shield } from 'lucide-react'

export default function Invitation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8">
      <Card>
        <CardHeader className='' >
            {/* <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white"> */}
            <h1 className="text-3xl font-bold ">Welcome to PluxNet</h1>
            <p className="text-lg opacity-90">You've been invited to join our high-speed Fibre network!</p>
        </CardHeader>
        <CardContent className="space-y-10">
          <div className="flex justify-around mb-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-3 inline-block">
                <Wifi className="h-6 w-6 text-yellow-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">Lightning Fast</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 inline-block">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">Reliable</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 inline-block">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">Secure</p>
            </div>
          </div>
          <ReferralForm />
        </CardContent>
      </Card>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <h1 className="text-3xl font-bold mb-2">Welcome to SuperFast Fibre</h1>
          <p className="text-lg opacity-90">You've been invited to join our high-speed network!</p>
        </div>
        <div className="p-6">
          <div className="flex justify-around mb-8">
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-3 inline-block">
                <Wifi className="h-6 w-6 text-yellow-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">Lightning Fast</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 inline-block">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">Reliable</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 inline-block">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-600">Secure</p>
            </div>
          </div>
          <ReferralForm />
        </div>
      </div>
    </div>
  )
}

