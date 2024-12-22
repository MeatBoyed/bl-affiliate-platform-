import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconPigMoney,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
} from "@tabler/icons-react"
import {
  AudioWaveform,
  CheckCheckIcon,
  Command,
  GalleryVerticalEnd,
  MessagesSquareIcon,
} from "lucide-react"

import { TopNavbarData, type SidebarData } from "../types"

export const sidebarData: SidebarData = {
  user: {
    name: "charles-rossouw",
    email: "charlierossouw@outlook.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "PluxNet",
      logo: Command,
      plan: "Affiliate Seller",
    },
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
  ],
  navGroups: [
    {
      title: "General",
      items: [
        {
          title: "Dashboard",
          url: "/",
          icon: IconLayoutDashboard,
        },
        {
          title: "Products",
          url: "/products",
          icon: IconPackages,
        },
        {
          title: "Referrals",
          url: "/referrals",
          icon: IconUsers,
        },
        {
          title: "Earnings",
          url: "/earnings",
          icon: IconChecklist,
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: "Referral Pages",
          icon: IconPigMoney,
          items: [
            {
              title: "Referral invitation",
              icon: MessagesSquareIcon,
              url: "/invitation",
            },
            {
              title: "Referral confirmation",
              icon: CheckCheckIcon,
              url: "/invitation/success",
            },
          ],
        },
        {
          title: "Auth",
          icon: IconLockAccess,
          items: [
            {
              title: "Sign In",
              url: "/sign-in",
            },
            {
              title: "Sign In (2 Col)",
              url: "/sign-in-2",
            },
            {
              title: "Sign Up",
              url: "/sign-up",
            },
            {
              title: "Forgot Password",
              url: "/forgot-password",
            },
            {
              title: "OTP",
              url: "/otp",
            },
          ],
        },
        // {
        //   title: 'Errors',
        //   icon: IconBug,
        //   items: [
        //     {
        //       title: 'Unauthorized',
        //       url: '/401',
        //       icon: IconLock,
        //     },
        //     {
        //       title: 'Forbidden',
        //       url: '/403',
        //       icon: IconUserOff,
        //     },
        //     {
        //       title: 'Not Found',
        //       url: '/404',
        //       icon: IconError404,
        //     },
        //     {
        //       title: 'Internal Server Error',
        //       url: '/500',
        //       icon: IconServerOff,
        //     },
        //     {
        //       title: 'Maintenance Error',
        //       url: '/503',
        //       icon: IconBarrierBlock,
        //     },
        //   ],
        // },
      ],
    },
    {
      title: "Other",
      items: [
        {
          title: "Settings",
          icon: IconSettings,
          items: [
            {
              title: "Profile",
              url: "/settings",
              icon: IconUserCog,
            },
            {
              title: "Account",
              url: "/settings/account",
              icon: IconTool,
            },
            {
              title: "Appearance",
              url: "/settings/appearance",
              icon: IconPalette,
            },
            {
              title: "Notifications",
              url: "/settings/notifications",
              icon: IconNotification,
            },
            {
              title: "Display",
              url: "/settings/display",
              icon: IconBrowserCheck,
            },
          ],
        },
        // {
        //   title: 'Help Center',
        //   url: '/help-center',
        //   icon: IconHelp,
        // },
      ],
    },
  ],
}

export const topNavData: TopNavbarData[] = [
  {
    title: "Overview",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Referrals",
    href: "/referrals",
  },
  {
    title: "Earnings",
    href: "/earnings",
  },
  {
    title: "Settings",
    href: "/settings",
  },
]
