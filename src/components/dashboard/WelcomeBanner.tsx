'use client'

import { Sparkles, TrendingUp } from 'lucide-react'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { LS_KEYS, DEFAULT_PROFILE } from '@/lib/constants'
import type { UserProfile } from '@/types'

function getGreeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return 'Selamat pagi'
  if (hour < 15) return 'Selamat siang'
  if (hour < 18) return 'Selamat sore'
  return 'Selamat malam'
}

interface WelcomeBannerProps {
  progressPercentage: number
}

export function WelcomeBanner({ progressPercentage }: WelcomeBannerProps) {
  const [profile] = useLocalStorage<UserProfile>(LS_KEYS.PROFILE, DEFAULT_PROFILE as UserProfile)
  const greeting = getGreeting()
  const firstName = profile.name.split(' ')[0]

  const getMessage = () => {
    if (progressPercentage === 0)
      return 'Yuk mulai perjalanan onboardingmu! Ada beberapa hal penting yang perlu diselesaikan.'
    if (progressPercentage < 30)
      return 'Bagus! Kamu sudah memulai. Teruskan langkahmu dan selesaikan checklist.'
    if (progressPercentage < 70)
      return 'Mantap! Kamu sudah melewati setengah perjalanan. Tetap semangat!'
    if (progressPercentage < 100)
      return 'Hampir selesai! Tinggal beberapa langkah lagi menuju onboarding penuh.'
    return '🎉 Selamat! Kamu telah menyelesaikan semua tugas onboarding!'
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-navy-500 text-white p-6">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-blue-400" />
        <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-blue-300" />
      </div>

      <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles size={15} className="text-lightblue-100" />
            <span className="text-lightblue-100 text-sm font-medium">{greeting},</span>
          </div>
          <h2 className="text-2xl font-bold mb-2">{firstName}! 👋</h2>
          <p className="text-blue-100 text-sm leading-relaxed max-w-md">{getMessage()}</p>
        </div>

        {/* Progress ring */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="flex flex-col items-center">
            <ProgressRing percentage={progressPercentage} />
            <p className="mt-2 text-xs text-blue-100 flex items-center gap-1">
              <TrendingUp size={11} />
              Progres Total
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ProgressRing({ percentage }: { percentage: number }) {
  const radius = 32
  const stroke = 5
  const normalizedRadius = radius - stroke
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-20 h-20 flex items-center justify-center">
      <svg width="80" height="80" className="-rotate-90">
        <circle
          cx="40"
          cy="40"
          r={normalizedRadius}
          fill="none"
          stroke="rgba(220,238,255,0.2)"
          strokeWidth={stroke}
        />
        <circle
          cx="40"
          cy="40"
          r={normalizedRadius}
          fill="none"
          stroke="#DCEEFF"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
      </svg>
      <span className="absolute text-lg font-bold text-white">{percentage}%</span>
    </div>
  )
}
