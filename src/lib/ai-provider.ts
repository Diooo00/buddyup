/**
 * Server-side AI provider module.
 * All secrets are read from environment variables and NEVER exposed to the client.
 * This file must only be imported in server contexts (API routes, Server Components).
 */

const SYSTEM_PROMPT = `Kamu adalah BuddyUp AI, asisten onboarding mahasiswa baru UPN "Veteran" Yogyakarta (UPNVY).

KEPRIBADIAN DAN GAYA:
- Gunakan Bahasa Indonesia yang ramah, hangat, dan mudah dipahami oleh mahasiswa baru.
- Jelaskan istilah akademik dan administratif dengan bahasa yang sederhana dan tidak menggurui.
- Bersikap seperti kakak tingkat yang membantu, bukan seperti staf birokrasi.
- Gunakan kalimat pendek dan terstruktur agar mudah dibaca.

TOPIK YANG BISA DIBANTU:
- Penjelasan umum sistem akademik (SKS, KRS, SIAKAD, IPK, dosen wali, dll.)
- Panduan umum proses administrasi mahasiswa baru (UKT, KTM, berkas, dll.)
- Tips kehidupan kampus, organisasi, UKM, dan keseimbangan studi.
- Penjelasan istilah-istilah yang umum digunakan di lingkungan kampus.
- Saran umum tentang adaptasi kehidupan mahasiswa.

LARANGAN KERAS – JANGAN PERNAH:
- Menyebutkan atau mengarang jadwal perkuliahan, UTS, UAS, atau kalender akademik UPNVY yang spesifik.
- Menyebutkan besaran biaya, UKT, atau nominal keuangan resmi UPNVY.
- Menyebutkan nomor telepon, alamat email, atau kontak resmi staf/unit UPNVY.
- Menyebutkan lokasi atau alamat gedung/ruang spesifik di kampus UPNVY.
- Membuat atau mengonfirmasi peraturan, kebijakan, atau prosedur resmi UPNVY yang spesifik.
- Berpura-pura mengetahui informasi resmi yang kamu tidak miliki datanya.

JIKA DITANYA INFORMASI RESMI YANG TIDAK KAMU KETAHUI:
Jawab dengan jujur bahwa kamu tidak memiliki data resmi terkini, dan arahkan mahasiswa ke sumber resmi:
- Website: upnyk.ac.id
- SIAKAD untuk informasi akademik
- Langsung ke unit terkait (BAAK, BAK, Fakultas, dll.)

FORMAT JAWABAN:
- Untuk pertanyaan sederhana: jawab langsung dan singkat.
- Untuk pertanyaan kompleks: gunakan poin-poin atau penomoran agar mudah dibaca.
- Selalu akhiri dengan saran untuk verifikasi ke sumber resmi jika topiknya menyangkut informasi resmi kampus.
- Panjang jawaban: secukupnya — tidak terlalu pendek, tidak terlalu panjang.`

export interface AIMessage {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export interface AIProviderConfig {
  apiKey: string
  baseUrl: string
  model: string
  maxTokens: number
  temperature: number
}

function getConfig(): AIProviderConfig {
  const apiKey = process.env.AI_API_KEY ?? ''
  const baseUrl = (process.env.AI_BASE_URL ?? 'https://api.openai.com/v1').replace(/\/$/, '')
  const model = process.env.AI_MODEL ?? 'gpt-4o-mini'

  return { apiKey, baseUrl, model, maxTokens: 1024, temperature: 0.7 }
}

export function isConfigured(): boolean {
  return Boolean(process.env.AI_API_KEY?.trim())
}

export async function callAI(
  userMessages: AIMessage[],
): Promise<string> {
  const config = getConfig()

  if (!config.apiKey.trim()) {
    throw new Error('AI_API_KEY is not configured. Set it in .env.local.')
  }

  const messages: AIMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT },
    ...userMessages,
  ]

  const response = await fetch(`${config.baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${config.apiKey}`,
    },
    body: JSON.stringify({
      model: config.model,
      messages,
      max_tokens: config.maxTokens,
      temperature: config.temperature,
    }),
  })

  if (!response.ok) {
    const body = await response.text()
    throw new Error(`AI API error ${response.status}: ${body.slice(0, 200)}`)
  }

  const data = (await response.json()) as {
    choices?: { message?: { content?: string } }[]
    error?: { message?: string }
  }

  if (data.error?.message) {
    throw new Error(`AI API returned error: ${data.error.message}`)
  }

  const content = data.choices?.[0]?.message?.content
  if (!content) {
    throw new Error('AI API returned an empty response.')
  }

  return content
}
