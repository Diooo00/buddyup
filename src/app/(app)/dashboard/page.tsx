'use client'

import { TopHeader } from '@/components/layout/TopHeader'
import { WelcomeBanner } from '@/components/dashboard/WelcomeBanner'
import { ProgressCards } from '@/components/dashboard/ProgressCards'
import { QuickAccess } from '@/components/dashboard/QuickAccess'
import { OnboardingTips } from '@/components/dashboard/OnboardingTips'
import { useOnboardingProgress } from '@/hooks/use-onboarding-progress'

export default function DashboardPage() {
  const progress = useOnboardingProgress()

  return (
    <>
      <TopHeader
        title="Dashboard"
        subtitle="Selamat datang di BuddyUp UPNVY"
      />
      <div className="px-4 md:px-6 py-5 space-y-6 animate-fade-in">
        <WelcomeBanner progressPercentage={progress.percentage} />
        <QuickAccess />
        <ProgressCards progress={progress} />
        <OnboardingTips />
      </div>
    </>
  )
}
