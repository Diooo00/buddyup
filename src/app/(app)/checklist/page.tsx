'use client'

import { useState } from 'react'
import { RotateCcw, CheckSquare } from 'lucide-react'
import { TopHeader } from '@/components/layout/TopHeader'
import { ChecklistItemRow } from '@/components/checklist/ChecklistItemRow'
import { useChecklist } from '@/hooks/use-checklist'
import { CHECKLIST_CATEGORIES } from '@/lib/constants'
import type { ChecklistCategory } from '@/types'

const CATEGORY_ORDER: ChecklistCategory[] = [
  'akademik',
  'administrasi',
  'fasilitas',
  'sosial',
  'kesehatan',
]

type FilterTab = 'semua' | 'belum' | 'selesai'

export default function ChecklistPage() {
  const { items, toggleItem, resetAll, completedCount, totalCount, percentage } = useChecklist()
  const [activeFilter, setActiveFilter] = useState<FilterTab>('semua')
  const [confirmReset, setConfirmReset] = useState(false)

  const filteredByTab = (catItems: typeof items) => {
    if (activeFilter === 'belum') return catItems.filter((i) => !i.isCompleted)
    if (activeFilter === 'selesai') return catItems.filter((i) => i.isCompleted)
    return catItems
  }

  const FILTER_TABS: { key: FilterTab; label: string }[] = [
    { key: 'semua', label: 'Semua' },
    { key: 'belum', label: 'Belum Selesai' },
    { key: 'selesai', label: 'Selesai' },
  ]

  const handleReset = () => {
    if (confirmReset) {
      resetAll()
      setConfirmReset(false)
    } else {
      setConfirmReset(true)
      setTimeout(() => setConfirmReset(false), 3000)
    }
  }

  return (
    <>
      <TopHeader title="Checklist Onboarding" subtitle="Tandai tugas yang sudah selesai" />
      <div className="px-4 md:px-6 py-5 space-y-5 animate-fade-in">

        {/* Overall progress header */}
        <div className="buddyup-card p-5">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <CheckSquare size={16} className="text-navy-500" />
              <span className="text-sm font-semibold text-navy-500">Progres Keseluruhan</span>
            </div>
            <span className="text-sm font-bold text-blue-500">{percentage}%</span>
          </div>
          {/* progress bar */}
          <div className="h-2.5 rounded-full bg-lightblue-100 overflow-hidden mt-2 mb-3">
            <div
              className="h-full rounded-full bg-blue-500 transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-slate-500">
              {completedCount} dari {totalCount} tugas selesai
            </p>
            <button
              onClick={handleReset}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-red-500 transition-colors"
            >
              <RotateCcw size={11} />
              {confirmReset ? 'Yakin reset?' : 'Reset'}
            </button>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2">
          {FILTER_TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeFilter === key
                  ? 'bg-navy-500 text-white'
                  : 'bg-white border border-border text-slate-500 hover:border-navy-200 hover:text-navy-500'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Category sections */}
        {CATEGORY_ORDER.map((cat) => {
          const catMeta = CHECKLIST_CATEGORIES[cat]
          const catItems = items.filter((i) => i.category === cat)
          const visible = filteredByTab(catItems)
          const catCompleted = catItems.filter((i) => i.isCompleted).length
          const catPct =
            catItems.length === 0 ? 0 : Math.round((catCompleted / catItems.length) * 100)

          if (visible.length === 0) return null

          return (
            <section key={cat}>
              {/* Category header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${catMeta.color}`}>
                    {catMeta.label}
                  </span>
                  <span className="text-xs text-slate-400">
                    {catCompleted}/{catItems.length}
                  </span>
                </div>
                <span className="text-xs font-semibold text-slate-400">{catPct}%</span>
              </div>

              {/* Mini progress bar */}
              <div className="h-1 rounded-full bg-lightblue-100 overflow-hidden mb-3">
                <div
                  className="h-full rounded-full bg-blue-400 transition-all duration-500"
                  style={{ width: `${catPct}%` }}
                />
              </div>

              {/* Items */}
              <div className="space-y-2">
                {visible.map((item) => (
                  <ChecklistItemRow key={item.id} item={item} onToggle={toggleItem} />
                ))}
              </div>
            </section>
          )
        })}

        {/* Empty state */}
        {CATEGORY_ORDER.every(
          (cat) => filteredByTab(items.filter((i) => i.category === cat)).length === 0,
        ) && (
          <div className="buddyup-card p-8 flex flex-col items-center gap-3 text-center">
            <CheckSquare size={32} className="text-green-400" />
            <p className="text-sm font-semibold text-navy-500">
              {activeFilter === 'selesai'
                ? 'Belum ada tugas yang selesai'
                : 'Semua tugas sudah selesai! 🎉'}
            </p>
          </div>
        )}
      </div>
    </>
  )
}
