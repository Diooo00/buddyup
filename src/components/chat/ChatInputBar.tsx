'use client'

import { useState, useRef, KeyboardEvent } from 'react'
import { Send } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ChatInputBarProps {
  onSend: (content: string) => void
  isLoading: boolean
}

export function ChatInputBar({ onSend, isLoading }: ChatInputBarProps) {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleSend = () => {
    const trimmed = value.trim()
    if (!trimmed || isLoading) return
    onSend(trimmed)
    setValue('')
    // Reset textarea height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleInput = () => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = `${Math.min(el.scrollHeight, 120)}px`
  }

  return (
    <div className="flex items-end gap-2 bg-white border border-border rounded-2xl px-3 py-2 shadow-card">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onInput={handleInput}
        placeholder="Tulis pertanyaanmu di sini…"
        disabled={isLoading}
        rows={1}
        className={cn(
          'flex-1 resize-none bg-transparent text-sm text-slate-700 placeholder:text-slate-400 outline-none leading-relaxed',
          'disabled:opacity-60',
        )}
        style={{ maxHeight: 120, overflowY: 'auto' }}
      />
      <button
        onClick={handleSend}
        disabled={!value.trim() || isLoading}
        className={cn(
          'w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all',
          value.trim() && !isLoading
            ? 'bg-navy-500 text-white hover:bg-navy-600'
            : 'bg-slate-100 text-slate-300 cursor-not-allowed',
        )}
        aria-label="Kirim pesan"
      >
        <Send size={14} />
      </button>
    </div>
  )
}
