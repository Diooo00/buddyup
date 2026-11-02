'use client'

import { useState, useCallback } from 'react'
import { useLocalStorage } from './use-local-storage'
import { LS_KEYS, API_ROUTES } from '@/lib/constants'
import type { ChatMessage } from '@/types'

function generateId(): string {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
}

const INITIAL_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content:
    'Halo! Saya BuddyUp AI, teman onboarding kampusmu. 👋\n\nSaya bisa membantu menjelaskan hal-hal umum tentang kehidupan kuliah di UPNVY — mulai dari sistem akademik, administrasi, hingga tips beradaptasi.\n\nAda yang ingin kamu tanyakan?',
  timestamp: new Date().toISOString(),
}

export function useChat() {
  const [history, setHistory] = useLocalStorage<ChatMessage[]>(LS_KEYS.CHAT_HISTORY, [
    INITIAL_MESSAGE,
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim()
      if (!trimmed || isLoading) return

      setError(null)

      // Append user message immediately
      const userMsg: ChatMessage = {
        id: generateId(),
        role: 'user',
        content: trimmed,
        timestamp: new Date().toISOString(),
      }

      // Append placeholder loading bubble
      const loadingId = generateId()
      const loadingMsg: ChatMessage = {
        id: loadingId,
        role: 'assistant',
        content: '',
        timestamp: new Date().toISOString(),
        isLoading: true,
      }

      setHistory((prev) => [...prev, userMsg, loadingMsg])
      setIsLoading(true)

      try {
        // Build messages for the API — only role+content, no isLoading or extra fields
        // Also exclude the initial welcome message from history sent to API
        const apiMessages = [...history, userMsg]
          .filter((m) => m.id !== 'welcome' && !m.isLoading)
          .map(({ role, content: c }) => ({ role, content: c }))

        const res = await fetch(API_ROUTES.CHAT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: apiMessages }),
        })

        const data = (await res.json()) as { reply?: string; error?: string }

        if (!res.ok || data.error) {
          throw new Error(data.error ?? `HTTP ${res.status}`)
        }

        // Replace loading bubble with actual reply
        const assistantMsg: ChatMessage = {
          id: loadingId,
          role: 'assistant',
          content: data.reply!,
          timestamp: new Date().toISOString(),
          isLoading: false,
        }

        setHistory((prev) =>
          prev.map((m) => (m.id === loadingId ? assistantMsg : m)),
        )
      } catch (err: unknown) {
        const message =
          err instanceof Error ? err.message : 'Terjadi kesalahan jaringan.'
        setError(message)

        // Replace loading bubble with error message in chat
        const errMsg: ChatMessage = {
          id: loadingId,
          role: 'assistant',
          content: `❌ ${message}`,
          timestamp: new Date().toISOString(),
          isLoading: false,
        }
        setHistory((prev) =>
          prev.map((m) => (m.id === loadingId ? errMsg : m)),
        )
      } finally {
        setIsLoading(false)
      }
    },
    [history, isLoading, setHistory],
  )

  const clearHistory = useCallback(() => {
    setHistory([INITIAL_MESSAGE])
    setError(null)
  }, [setHistory])

  return { messages: history, sendMessage, clearHistory, isLoading, error }
}
