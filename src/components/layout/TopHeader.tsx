'use client'

import { Bell } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { LS_KEYS, DEFAULT_PROFILE } from '@/lib/constants'
import type { UserProfile } from '@/types'

interface TopHeaderProps {
  title: string
  subtitle?: string
}

export function TopHeader({ title, subtitle }: TopHeaderProps) {
  const [profile] = useLocalStorage<UserProfile>(LS_KEYS.PROFILE, DEFAULT_PROFILE as UserProfile)

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-sm border-b border-border">
      <div className="flex items-center justify-between h-16 px-4 md:px-6">
        {/* Page title */}
        <div>
          <h1 className="text-base font-semibold text-navy-500 leading-tight">{title}</h1>
          {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-navy-500">
            <Bell size={18} />
          </Button>
          <Avatar className="w-8 h-8 cursor-pointer">
            <AvatarFallback className="text-xs bg-lightblue-100 text-navy-500 font-semibold">
              {profile.avatarInitials ?? 'MB'}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
