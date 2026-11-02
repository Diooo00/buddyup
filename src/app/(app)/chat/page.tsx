'use client'

import { TopHeader } from '@/components/layout/TopHeader'
import { MessageCircle } from 'lucide-react'

export default function ChatPage() {
  return (
    <>
      <TopHeader title="AI Buddy" subtitle="Tanyakan apa saja tentang kampus" />
      <div className="px-4 md:px-6 py-5 animate-fade-in">
        <div className="buddyup-card p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[300px]">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
            <MessageCircle size={26} className="text-blue-500" />
          </div>
          <h2 className="text-lg font-semibold text-navy-500">AI Buddy Chat</h2>
          <p className="text-sm text-slate-500 max-w-xs">
            Asisten AI berbahasa Indonesia yang siap menjawab pertanyaanmu tentang kampus UPNVY akan hadir di Stage 4.
          </p>
          <span className="badge-navy mt-2">Segera Hadir – Stage 4</span>
        </div>
      </div>
    </>
  )
}
