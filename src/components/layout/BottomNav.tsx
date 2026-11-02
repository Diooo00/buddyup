'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, CheckSquare, MapPin, MessageCircle, User } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/checklist', label: 'Checklist', icon: CheckSquare },
  { href: '/campus-info', label: 'Info', icon: MapPin },
  { href: '/chat', label: 'AI Buddy', icon: MessageCircle },
  { href: '/profile', label: 'Profil', icon: User },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border safe-area-pb">
      <div className="flex items-center justify-around h-16 px-2">
        {NAV_LINKS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 flex-1 h-full py-2 transition-colors',
                isActive ? 'text-navy-500' : 'text-slate-400',
              )}
            >
              <Icon size={20} />
              <span className="text-[10px] font-medium leading-none">{label}</span>
              {isActive && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-navy-500" />
              )}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
