import { PropsWithChildren } from "react"
import SettingsPageLayout from "@/features/settings/layout"

export default function SettingsLayout({ children }: PropsWithChildren) {
  return <SettingsPageLayout>{children}</SettingsPageLayout>
}
