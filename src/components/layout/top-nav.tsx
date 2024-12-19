import { Link, useLocation } from '@tanstack/react-router'
import { IconMenu } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
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
  const location = useLocation()

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
                  to={href}
                  className={
                    location.pathname === href ? '' : 'text-muted-foreground'
                  }
                  disabled={location.pathname === href}
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
            to={href}
            className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === href ? '' : 'text-muted-foreground'}`}
            disabled={location.pathname === href}
          >
            {title}
          </Link>
        ))}
      </nav>
    </>
  )
}
