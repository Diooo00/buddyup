# BuddyUp 🎓

**AI-Powered Onboarding Buddy System for New Students**  
UPN "Veteran" Yogyakarta

---

## Overview

BuddyUp is a responsive web application that helps first-year students at UPN "Veteran" Yogyakarta navigate their onboarding journey. It combines an interactive checklist, campus information hub, and an AI chat assistant — all in one clean dashboard.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI Components | Shadcn/ui + Radix UI |
| Icons | Lucide React |
| AI | OpenAI-compatible API (server-side) |
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

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── chat/          # AI Chat API route (Stage 4)
│   ├── dashboard/         # Dashboard page (Stage 2)
│   ├── checklist/         # Checklist page (Stage 3)
│   ├── campus-info/       # Campus Info page (Stage 3)
│   ├── chat/              # AI Chat page (Stage 4)
│   ├── profile/           # Profile & Settings page (Stage 2)
│   ├── globals.css        # Global styles + CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Root redirect
├── components/
│   ├── ui/                # Shadcn/ui base components
│   ├── layout/            # Sidebar, Header, Shell (Stage 2)
│   └── features/          # Feature-specific components
├── hooks/
│   ├── use-local-storage.ts
│   └── use-toast.ts
├── lib/
│   ├── utils.ts           # cn() utility
│   └── constants.ts       # App-wide constants
└── types/
    └── index.ts           # Global TypeScript types
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm / pnpm / yarn

### Installation

```bash
# Install dependencies
npm install

# Copy and configure environment
cp .env.example .env.local
# Edit .env.local and set OPENAI_API_KEY

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `OPENAI_API_KEY` | Stage 4+ | API key for AI chat |
| `OPENAI_BASE_URL` | Optional | Custom OpenAI-compatible endpoint |
| `NEXT_PUBLIC_AI_MODEL` | Optional | Model name override (default: `gpt-4o-mini`) |

## Build Stages

| Stage | Description | Status |
|-------|-------------|--------|
| 1 | Project Foundation | ✅ Complete |
| 2 | Dashboard and Main UI | ⏳ Pending |
| 3 | Checklist and Campus Information | ⏳ Pending |
| 4 | AI Chat Integration | ⏳ Pending |
| 5 | Testing and Finalization | ⏳ Pending |

## AI Guidelines

The AI assistant:
- Uses **Indonesian** by default
- Explains university concepts in simple language
- **Never fabricates** official UPNVY policies, schedules, fees, deadlines, locations, or contacts
- States uncertainty and directs users to official sources

## License

For educational purposes — UPN "Veteran" Yogyakarta.
