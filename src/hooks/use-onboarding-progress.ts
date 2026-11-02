import { useMemo } from 'react'
import { useLocalStorage } from './use-local-storage'
import { LS_KEYS } from '@/lib/constants'
import type { ChecklistItem, OnboardingProgress, ChecklistCategory } from '@/types'
import { DEFAULT_CHECKLIST_ITEMS } from '@/lib/checklist-data'

export function useOnboardingProgress(): OnboardingProgress {
  const [items] = useLocalStorage<ChecklistItem[]>(LS_KEYS.CHECKLIST, DEFAULT_CHECKLIST_ITEMS)

  return useMemo(() => {
    const totalItems = items.length
    const completedItems = items.filter((i) => i.isCompleted).length
    const percentage = totalItems === 0 ? 0 : Math.round((completedItems / totalItems) * 100)

    const categories: ChecklistCategory[] = [
      'akademik',
      'administrasi',
      'fasilitas',
      'sosial',
      'kesehatan',
    ]

    const byCategory = categories.reduce(
      (acc, cat) => {
        const catItems = items.filter((i) => i.category === cat)
        acc[cat] = {
          total: catItems.length,
          completed: catItems.filter((i) => i.isCompleted).length,
        }
        return acc
      },
      {} as OnboardingProgress['byCategory'],
    )

    return { totalItems, completedItems, percentage, byCategory }
  }, [items])
}
