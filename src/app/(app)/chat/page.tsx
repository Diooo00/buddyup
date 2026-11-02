'use client'

import { useEffect, useRef, useState } from 'react'
import { Trash2, Info } from 'lucide-react'
import { TopHeader } from '@/components/layout/TopHeader'
import { MessageBubble } from '@/components/chat/MessageBubble'
import { ChatInputBar } from '@/components/chat/ChatInputBar'
import { SuggestionChips } from '@/components/chat/SuggestionChips'
import { useChat } from '@/hooks/use-chat'

export default function ChatPage() {
  const { messages, sendMessage, clearHistory, isLoading } = useChat()
  const bottomRef = useRef<HTMLDivElement>(null)
  const [confirmClear, setConfirmClear] = useState(false)

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleClear = () => {
    if (confirmClear) {
      clearHistory()
      setConfirmClear(false)
    } else {
      setConfirmClear(true)
      setTimeout(() => setConfirmClear(false), 3000)
    }
  }

  const onlyWelcome = messages.length <= 1

  return (
    <>
      <TopHeader
        title="AI Buddy"
        subtitle="Tanyakan apa saja tentang kehidupan kampus"
      />

      {/* Page layout: flex column, fills remaining viewport height after sticky header */}
      <div className="flex flex-col" style={{ height: 'calc(100dvh - 4rem)' }}>

        {/* Disclaimer bar */}
        <div className="flex items-start gap-2 bg-amber-50 border-b border-amber-200 px-4 py-2.5">
          <Info size={13} className="text-amber-500 shrink-0 mt-0.5" />
          <p className="text-[11px] text-amber-700 leading-relaxed">
            AI Buddy memberikan informasi umum. Verifikasi detail resmi ke{' '}
            <strong>upnyk.ac.id</strong> atau unit terkait UPNVY.
          </p>
        </div>

        {/* Message list */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Suggestion chips — only show when chat is fresh */}
        {onlyWelcome && (
          <div className="px-4 pb-3">
            <p className="text-xs text-slate-400 mb-2">Pertanyaan umum:</p>
            <SuggestionChips onSelect={sendMessage} disabled={isLoading} />
          </div>
        )}

        {/* Input area */}
        <div className="px-4 pb-4 pt-2 bg-background border-t border-border">
          <ChatInputBar onSend={sendMessage} isLoading={isLoading} />

          <div className="flex items-center justify-between mt-2 px-1">
            <p className="text-[10px] text-slate-400">
              Enter kirim · Shift+Enter baris baru
            </p>
            <button
              onClick={handleClear}
              className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-red-500 transition-colors"
            >
              <Trash2 size={10} />
              {confirmClear ? 'Yakin hapus?' : 'Hapus riwayat'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
