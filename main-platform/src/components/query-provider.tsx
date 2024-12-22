"use client"

import React, { ReactNode, useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export default function QueryProvider({
  children,
  devtools,
}: {
  children: ReactNode
  devtools?: boolean
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity,
          },
        },
      })
  )

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {devtools && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  )
}
