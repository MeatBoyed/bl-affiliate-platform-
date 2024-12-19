import { createLazyFileRoute } from '@tanstack/react-router'
import Earnings from '@/features/earnings'

export const Route = createLazyFileRoute('/_authenticated/earnings/')({
  component: Earnings,
})
