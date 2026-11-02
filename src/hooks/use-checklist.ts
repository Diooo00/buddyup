import { useCallback } from 'react'
import { useLocalStorage } from './use-local-storage'
import { LS_KEYS } from '@/lib/constants'
import { DEFAULT_CHECKLIST_ITEMS } from '@/lib/checklist-data'
import type { ChecklistItem, ChecklistCategory } from '@/types'

export function useChecklist() {
  const [items, setItems] = useLocalStorage<ChecklistItem[]>(
    LS_KEYS.CHECKLIST,
    DEFAULT_CHECKLIST_ITEMS,
  )

  const toggleItem = useCallback(
    (id: string) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                isCompleted: !item.isCompleted,
                completedAt: !item.isCompleted ? new Date().toISOString() : undefined,
              }
            : item,
        ),
      )
    },
    [setItems],
  )

  const resetAll = useCallback(() => {
    setItems(DEFAULT_CHECKLIST_ITEMS)
  }, [setItems])

  const getByCategory = useCallback(
    (category: ChecklistCategory) => items.filter((i) => i.category === category),
    [items],
  )

  const completedCount = items.filter((i) => i.isCompleted).length
  const totalCount = items.length
  const percentage = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100)

  return { items, toggleItem, resetAll, getByCategory, completedCount, totalCount, percentage }
}
