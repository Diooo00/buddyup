'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import type { ChatMessage } from '@/types'

/**
 * Renders a timestamp only after the component mounts on the client.
 * Returns null on the server (and on the first client render) so that
 * the SSR HTML and the initial hydration pass always match — preventing
 * React hydration mismatch errors caused by toLocaleTimeString() returning
 * different values on the server vs. the browser.
 */
function Timestamp({ iso }: { iso: string }) {
  const [label, setLabel] = useState<string | null>(null)

  useEffect(() => {
    setLabel(
      new Date(iso).toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    )
  }, [iso])

  if (label === null) return null
  return <>{label}</>
}

interface MessageBubbleProps {
  message: ChatMessage
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.role === 'user'
  const isLoading = message.isLoading

  if (isUser) {
    return (
      <div className="flex justify-end">
        <div className="max-w-[80%] sm:max-w-[70%]">
          <div className="bg-navy-500 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 text-sm leading-relaxed">
            {message.content}
          </div>
          <p className="text-[10px] text-slate-400 text-right mt-1 px-1">
            <Timestamp iso={message.timestamp} />
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex justify-start gap-2.5">
      {/* AI avatar */}
      <div className="w-7 h-7 rounded-full bg-lightblue-100 border border-lightblue-200 flex items-center justify-center shrink-0 mt-1">
        <span className="text-[10px] font-bold text-navy-500">AI</span>
      </div>

      <div className="max-w-[80%] sm:max-w-[70%]">
        <div
          className={cn(
            'bg-white border border-border rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm leading-relaxed text-slate-700',
            isLoading && 'min-w-[60px]',
          )}
        >
          {isLoading ? (
            <div className="flex gap-1 items-center h-5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:300ms]" />
            </div>
          ) : (
            <FormattedContent content={message.content} />
          )}
        </div>
        {!isLoading && (
          <p className="text-[10px] text-slate-400 mt-1 px-1">
            <Timestamp iso={message.timestamp} />
          </p>
        )}
      </div>
    </div>
  )
}

/**
 * Render newlines as <br> and bold **text** patterns simply.
 * Keeps it light — no markdown parser dependency.
 */
function FormattedContent({ content }: { content: string }) {
  // Split on newlines, render each line
  const lines = content.split('\n')

  return (
    <>
      {lines.map((line, i) => {
        // Bold: **text**
        const parts = line.split(/\*\*(.*?)\*\*/g)
        return (
          <span key={i}>
            {parts.map((part, j) =>
              j % 2 === 1 ? (
                <strong key={j} className="font-semibold text-navy-500">
                  {part}
                </strong>
              ) : (
                part
              ),
            )}
            {i < lines.length - 1 && <br />}
          </span>
        )
      })}
    </>
  )
}
