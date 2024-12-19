import { createLazyFileRoute } from '@tanstack/react-router'
import Users from '@/features/referrals'

export const Route = createLazyFileRoute('/_authenticated/referrals/')({
  component: Users,
})
