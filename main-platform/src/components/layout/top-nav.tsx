"use client"
import { IconMenu } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import Link from "next/link"
import { usePathname} from "next/navigation"
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { TopNavbarData } from './types'

interface TopNavProps extends React.HTMLAttributes<HTMLElement> {
  links: TopNavbarData[]
}

export function TopNav({ className, links, ...props }: TopNavProps) {
  const pathname = usePathname()

  return (
    <>
      <div className='md:hidden'>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button size='icon' variant='outline'>
              <IconMenu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side='bottom' align='start'>
            {links.map(({ title, href }) => (
              <DropdownMenuItem key={`${title}-${href}`} asChild>
                <Link
                  href={href}
                  className={
                    pathname === href ? '' : 'text-muted-foreground'
                  }
                  // disabled={pathname === href}
                >
                  {title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <nav
        className={cn(
          'hidden items-center space-x-4 md:flex lg:space-x-6',
          className
        )}
        {...props}
      >
        {links.map(({ title, href }) => (
          <Link
            key={`${title}-${href}`}
            href={href}
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === href ? '' : 'text-muted-foreground'}`}
            // disabled={pathname === href}
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  )
}
