import SettingsPageLayout from '@/features/settings/layout'
import { PropsWithChildren } from 'react'

export default function SettingsLayout({ children} : PropsWithChildren) {
  

  return (
  <SettingsPageLayout>
{children}
  </SettingsPageLayout>
  )
  }