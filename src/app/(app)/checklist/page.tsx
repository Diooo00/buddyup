'use client'

import { TopHeader } from '@/components/layout/TopHeader'
import { CheckSquare } from 'lucide-react'

export default function ChecklistPage() {
  return (
    <>
      <TopHeader title="Checklist" subtitle="Pantau progress onboardingmu" />
      <div className="px-4 md:px-6 py-5 animate-fade-in">
        <div className="buddyup-card p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[300px]">
          <div className="w-14 h-14 rounded-2xl bg-lightblue-100 flex items-center justify-center">
            <CheckSquare size={26} className="text-navy-500" />
          </div>
          <h2 className="text-lg font-semibold text-navy-500">Checklist Onboarding</h2>
          <p className="text-sm text-slate-500 max-w-xs">
            Fitur checklist interaktif akan tersedia di Stage 3. Kamu akan bisa menandai dan memantau setiap langkah onboardingmu di sini.
          </p>
          <span className="badge-navy mt-2">Segera Hadir – Stage 3</span>
        </div>
      </div>
    </>
  )
}
