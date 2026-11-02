'use client'

import { CheckCircle2, Circle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { OnboardingProgress } from '@/types'

const CATEGORY_META: Record<
  string,
  { label: string; colorClass: string; barColor: string }
> = {
  akademik: {
    label: 'Akademik',
    colorClass: 'text-blue-500',
    barColor: '#3674A5',
  },
  administrasi: {
    label: 'Administrasi',
    colorClass: 'text-navy-500',
    barColor: '#173B63',
  },
  fasilitas: {
    label: 'Fasilitas',
    colorClass: 'text-lightblue-500',
    barColor: '#4EA6FB',
  },
  sosial: {
    label: 'Sosial',
    colorClass: 'text-softgreen-500',
    barColor: '#51C37D',
  },
  kesehatan: {
    label: 'Kesehatan',
    colorClass: 'text-green-500',
    barColor: '#22c55e',
  },
}

interface ProgressCardsProps {
  progress: OnboardingProgress
}

export function ProgressCards({ progress }: ProgressCardsProps) {
  const categories = Object.entries(progress.byCategory)

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="section-title">Progres per Kategori</h3>
        <Link
          href="/checklist"
          className="text-xs text-blue-500 hover:text-navy-500 flex items-center gap-1 font-medium transition-colors"
        >
          Lihat semua <ArrowRight size={12} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {categories.map(([cat, { total, completed }]) => {
          const meta = CATEGORY_META[cat]
          const pct = total === 0 ? 0 : Math.round((completed / total) * 100)
          const isDone = pct === 100

          return (
            <div
                key={cat}
                className="buddyup-card p-4 hover:shadow-card-hover transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold text-navy-500 text-sm">{meta.label}</p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {completed} / {total} selesai
                    </p>
                  </div>
                  {isDone ? (
                    <CheckCircle2 size={18} className="text-green-500 mt-0.5" />
                  ) : (
                    <Circle size={18} className={`${meta.colorClass} mt-0.5 opacity-50`} />
                  )}
                </div>
                {/* Use style override so indicator colour works across Radix versions */}
                <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-lightblue-100">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${pct}%`, backgroundColor: meta.barColor }}
                  />
                </div>
                <p className={`text-xs font-semibold mt-1.5 ${meta.colorClass}`}>{pct}%</p>
              </div>
          )
        })}
      </div>
    </div>
  )
}
