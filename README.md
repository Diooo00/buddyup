# BuddyUp 🎓

**AI-Powered Onboarding Buddy System for New Students**  
UPN "Veteran" Yogyakarta (UPNVY)

---

## Overview

BuddyUp is a responsive web application that helps first-year students at UPN "Veteran" Yogyakarta navigate their onboarding journey. It combines an interactive checklist, categorized campus information, and an AI chat assistant — all in one clean, mobile-friendly dashboard.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS |
| UI Components | Shadcn/ui + Radix UI |
| Icons | Lucide React |
| AI | OpenAI-compatible API (server-side only) |
| Persistence | Local Storage |

## Design Palette

| Name | Hex |
|------|-----|
| Navy | `#173B63` |
| Blue | `#3674A5` |
| Light Blue | `#DCEEFF` |
| Background | `#F7F9FC` |
| Text | `#263445` |
| Soft Green | `#DDF3E5` |

---

## Features

### 1. Dashboard
- Personalised welcome banner with time-based greeting and dynamic message based on progress
- SVG progress ring showing overall onboarding completion
- Per-category progress cards (Akademik, Administrasi, Fasilitas, Sosial, Kesehatan)
- Quick-access shortcut grid to all sections
- Static onboarding tips

### 2. Interactive Checklist
- 16 onboarding tasks across 5 categories
- Tap/click any task to mark complete — persisted in **Local Storage** instantly
- Filter tabs: Semua / Belum Selesai / Selesai
- Per-category mini progress bars
- 2-click reset with 3-second confirmation window
- Progress synced live to dashboard and sidebar widget

### 3. Campus Information
- 6 categories, 27 topics covering academics, administration, facilities, campus life, transport, and contacts
- 3-level drill-down: grid → category → detail
- All items tagged `Perlu Verifikasi` when they contain specific details (schedules, fees, contacts, locations)
- Amber verification banners on detail pages
- Persistent "verify at upnyk.ac.id" reminder on every detail view

### 4. AI Chat (BuddyUp AI)
- Indonesian-first chat assistant
- Explains academic/administrative concepts in beginner-friendly language
- **System prompt enforces hard restrictions** — AI will never fabricate UPNVY schedules, fees, contacts, or locations
- Loading bubble animation while waiting for response
- Starter suggestion chips on fresh chat
- Chat history persisted to Local Storage
- Amber disclaimer bar on every session
- 2-click clear history

### 5. Profile
- Displays profile from Local Storage with defaults
- Avatar initials, name, NIM, faculty, program, year

---

## Project Structure

```
src/
├── app/
│   ├── (app)/                  # Route group — all app pages share shell layout
│   │   ├── layout.tsx          # App shell: sidebar + bottom nav
│   │   ├── dashboard/page.tsx
│   │   ├── checklist/page.tsx
│   │   ├── campus-info/page.tsx
│   │   ├── chat/page.tsx
│   │   └── profile/page.tsx
│   ├── api/chat/route.ts       # POST /api/chat — server-side AI handler
│   ├── globals.css
│   ├── layout.tsx              # Root layout (Inter font, metadata)
│   └── page.tsx                # Redirects to /dashboard
├── components/
│   ├── ui/                     # 10 Shadcn/ui base components (BUDDYUP-themed)
│   ├── layout/                 # Sidebar, TopHeader, BottomNav
│   ├── dashboard/              # WelcomeBanner, ProgressCards, QuickAccess, OnboardingTips
│   ├── checklist/              # ChecklistItemRow
│   └── chat/                   # MessageBubble, ChatInputBar, SuggestionChips
├── hooks/
│   ├── use-local-storage.ts    # Generic typed LS hook with cross-tab sync
│   ├── use-checklist.ts        # Toggle, reset, category filter
│   ├── use-onboarding-progress.ts  # Memoised progress calculation
│   ├── use-chat.ts             # Message state, API fetch, LS history
│   └── use-toast.ts
├── lib/
│   ├── utils.ts                # cn() — clsx + twMerge
│   ├── constants.ts            # LS keys, nav items, checklist categories
│   ├── checklist-data.ts       # 16 default checklist items
│   ├── campus-info-data.ts     # 27 campus info items (6 categories)
│   └── ai-provider.ts          # Server-only: system prompt, AI fetch, env config
└── types/
    └── index.ts                # UserProfile, ChecklistItem, ChatMessage, etc.
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
# Open .env.local and set AI_API_KEY (required for AI Chat)

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects automatically to `/dashboard`.

### Environment Variables

All AI configuration is **server-side only** — never exposed to the browser.

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `AI_API_KEY` | For AI Chat | — | API key for any OpenAI-compatible provider |
| `AI_BASE_URL` | Optional | `https://api.openai.com/v1` | Custom endpoint for other providers |
| `AI_MODEL` | Optional | `gpt-4o-mini` | Model name override |

The app runs fully without `AI_API_KEY` — all features except AI chat work. The chat page shows a clear Indonesian error message when the key is missing.

### Supported AI Providers

Any provider that implements the OpenAI `/v1/chat/completions` API:
- OpenAI (`https://api.openai.com/v1`)
- Azure OpenAI (set `AI_BASE_URL` to your Azure endpoint)
- Groq (`https://api.groq.com/openai/v1`)
- Together AI, Anyscale, LM Studio, Ollama (with OpenAI-compat mode), etc.

---

## AI Content Policy

The BuddyUp AI assistant is designed with strict guardrails:

✅ **Will help with:**
- Explaining academic concepts (SKS, KRS, IPK, dosen wali)
- General guidance on administrative processes (UKT, KTM, registration)
- Campus life tips, UKM, student organisations
- Adapting to university life

❌ **Will never fabricate:**
- UPNVY course schedules, UTS/UAS dates, or academic calendar entries
- Specific UKT amounts or payment deadlines
- Phone numbers, email addresses, or staff contacts
- Building locations or room numbers
- Official UPNVY policies or regulations

When asked for information it cannot verify, the AI directs users to **upnyk.ac.id** or the relevant UPNVY unit.

---

## Known Limitations

- **Profile editing is not implemented** — name, NIM, faculty, and major default to placeholder values. Users can manually edit `localStorage.buddyup_profile` in browser devtools to set real values.
- **Chat history size** — all messages are stored in Local Storage (5MB limit). For long conversations, use "Hapus riwayat" to clear.
- **AI response time** depends on the external API provider's latency.
- **No authentication** — this is a client-side app with no backend database. All data is browser-local.
- **Campus information is general/educational** — no official UPNVY data is hardcoded. Always verify with official sources.

---

## Build Stages

| Stage | Description | Status |
|-------|-------------|--------|
| 1 | Project Foundation — Next.js scaffold, Tailwind, Shadcn/ui, types, constants | ✅ Complete |
| 2 | Dashboard and Main UI — shell layout, sidebar, bottom nav, dashboard page | ✅ Complete |
| 3 | Checklist and Campus Information — LS persistence, 3-level campus info | ✅ Complete |
| 4 | AI Chat Integration — server-side provider, POST /api/chat, chat UI | ✅ Complete |
| 5 | Testing and Finalization — bug fixes, README, final commit | ✅ Complete |

---

## License

For educational purposes — UPN "Veteran" Yogyakarta.
