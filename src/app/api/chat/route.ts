import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/chat
 * Placeholder – full implementation in Stage 4.
 */
export async function POST(_req: NextRequest) {
  return NextResponse.json(
    { error: 'Chat API not yet configured. Coming in Stage 4.' },
    { status: 503 }
  )
}
