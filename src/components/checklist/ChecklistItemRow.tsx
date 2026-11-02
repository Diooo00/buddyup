'use client'

import { CheckCircle2, Circle, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { ChecklistItem } from '@/types'

interface ChecklistItemRowProps {
  item: ChecklistItem
  onToggle: (id: string) => void
}

export function ChecklistItemRow({ item, onToggle }: ChecklistItemRowProps) {
  return (
    <button
      onClick={() => onToggle(item.id)}
      className={cn(
        'w-full flex items-start gap-3 p-4 rounded-xl border text-left transition-all duration-150',
        item.isCompleted
          ? 'bg-softgreen-50 border-softgreen-200 hover:bg-softgreen-100'
          : 'bg-white border-border hover:bg-lightblue-50 hover:border-lightblue-200',
      )}
    >
      {/* Checkbox icon */}
      <span className="mt-0.5 shrink-0">
        {item.isCompleted ? (
          <CheckCircle2 size={20} className="text-green-500" />
        ) : (
          <Circle size={20} className="text-slate-300" />
        )}
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <p
            className={cn(
              'text-sm font-medium leading-snug',
              item.isCompleted ? 'line-through text-slate-400' : 'text-navy-500',
            )}
          >
            {item.title}
          </p>
          {item.isRequired && !item.isCompleted && (
            <span className="flex items-center gap-0.5 text-[10px] font-semibold text-orange-500 bg-orange-50 border border-orange-100 rounded-full px-1.5 py-0.5 shrink-0">
              <AlertCircle size={9} />
              Wajib
            </span>
          )}
        </div>
        <p
          className={cn(
            'text-xs mt-0.5 leading-relaxed',
            item.isCompleted ? 'text-slate-400' : 'text-slate-500',
          )}
        >
          {item.description}
        </p>
        {item.isCompleted && item.completedAt && (
          <p className="text-[10px] text-green-500 mt-1">
            Selesai {new Date(item.completedAt).toLocaleDateString('id-ID', {
              day: 'numeric', month: 'long', year: 'numeric',
            })}
          </p>
        )}
      </div>
    </button>
  )
}
