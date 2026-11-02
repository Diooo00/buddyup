import { NextRequest, NextResponse } from 'next/server'
import { callAI, isConfigured } from '@/lib/ai-provider'
import type { AIMessage } from '@/lib/ai-provider'

// Shape expected from the client
interface ChatRequestBody {
  messages: { role: 'user' | 'assistant'; content: string }[]
}

export async function POST(req: NextRequest) {
  // 1. Parse body
  let body: ChatRequestBody
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 })
  }

  // 2. Validate messages array
  const { messages } = body
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json(
      { error: 'messages must be a non-empty array.' },
      { status: 400 },
    )
  }

  // Validate each message shape
  for (const msg of messages) {
    if (!msg.role || !msg.content || typeof msg.content !== 'string') {
      return NextResponse.json(
        { error: 'Each message must have role and content.' },
        { status: 400 },
      )
    }
    if (msg.role !== 'user' && msg.role !== 'assistant') {
      return NextResponse.json(
        { error: 'Message role must be "user" or "assistant".' },
        { status: 400 },
      )
    }
  }

  // 3. Check API key configured
  if (!isConfigured()) {
    return NextResponse.json(
      {
        error:
          'AI belum dikonfigurasi. Tambahkan AI_API_KEY di file .env.local untuk mengaktifkan fitur chat.',
      },
      { status: 503 },
    )
  }

  // 4. Call AI — only pass role+content, strip any extra fields
  try {
    const aiMessages: AIMessage[] = messages.map((m) => ({
      role: m.role,
      content: m.content.slice(0, 4000), // guard against excessively long messages
    }))

    const reply = await callAI(aiMessages)

    return NextResponse.json({ reply })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    console.error('[/api/chat] AI call failed:', message)

    // Do not leak internal error details to client
    return NextResponse.json(
      { error: 'Terjadi kesalahan saat menghubungi AI. Coba lagi dalam beberapa saat.' },
      { status: 500 },
    )
  }
}
