'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  CheckSquare,
  MapPin,
  MessageCircle,
  User,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { APP_NAME, UNIVERSITY_SHORT } from '@/lib/constants'
import { Progress } from '@/components/ui/progress'
import { useOnboardingProgress } from '@/hooks/use-onboarding-progress'

const NAV_LINKS = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/checklist', label: 'Checklist', icon: CheckSquare },
  { href: '/campus-info', label: 'Info Kampus', icon: MapPin },
  { href: '/chat', label: 'AI Buddy', icon: MessageCircle },
  { href: '/profile', label: 'Profil', icon: User },
]

export function Sidebar() {
  const pathname = usePathname()
  const progress = useOnboardingProgress()

  return (
    <aside className="hidden md:flex flex-col w-64 min-h-screen bg-white border-r border-border shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-border">
        <div className="w-9 h-9 rounded-lg bg-navy-500 flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-sm">BU</span>
        </div>
        <div className="leading-tight">
          <p className="font-bold text-navy-500 text-base">{APP_NAME}</p>
          <p className="text-xs text-slate-400">{UNIVERSITY_SHORT}</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {NAV_LINKS.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href || pathname.startsWith(href + '/')
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                'nav-item',
                isActive ? 'nav-item-active' : 'nav-item-inactive',
              )}
            >
              <Icon
                size={18}
                className={isActive ? 'text-navy-500' : 'text-slate-400'}
              />
              <span>{label}</span>
              {href === '/chat' && (
                <span className="ml-auto w-2 h-2 rounded-full bg-blue-500" />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Progress widget */}
      <div className="mx-3 mb-4 p-4 rounded-xl bg-lightblue-50 border border-lightblue-100">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold text-navy-500">Progres Onboarding</p>
          <span className="text-xs font-bold text-blue-500">{progress.percentage}%</span>
        </div>
        <Progress value={progress.percentage} className="h-2" />
        <p className="mt-2 text-xs text-slate-500">
          {progress.completedItems} / {progress.totalItems} tugas selesai
        </p>
      </div>
    </aside>
  )
}
