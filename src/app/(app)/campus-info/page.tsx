'use client'

import { useState } from 'react'
import {
  GraduationCap,
  FileText,
  Building2,
  Users,
  MapPin,
  Phone,
  ChevronRight,
  AlertTriangle,
  ArrowLeft,
  Tag,
} from 'lucide-react'
import { TopHeader } from '@/components/layout/TopHeader'
import { CAMPUS_INFO_DATA } from '@/lib/campus-info-data'
import type { CampusInfoCategory, CampusInfoItem } from '@/types'

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap,
  FileText,
  Building2,
  Users,
  MapPin,
  Phone,
}

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  akademik: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
  administrasi: { bg: 'bg-navy-50', text: 'text-navy-500', border: 'border-navy-100' },
  fasilitas: { bg: 'bg-lightblue-50', text: 'text-blue-500', border: 'border-lightblue-100' },
  'kehidupan-kampus': { bg: 'bg-softgreen-50', text: 'text-green-700', border: 'border-softgreen-100' },
  'transportasi-lokasi': { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' },
  'kontak-layanan': { bg: 'bg-slate-50', text: 'text-slate-600', border: 'border-slate-200' },
}

function getCategoryColor(slug: string) {
  return CATEGORY_COLORS[slug] ?? { bg: 'bg-lightblue-50', text: 'text-navy-500', border: 'border-lightblue-100' }
}

// ─── Item Detail View ─────────────────────────────────────────────────────────
function ItemDetailView({
  item,
  category,
  onBack,
}: {
  item: CampusInfoItem
  category: CampusInfoCategory
  onBack: () => void
}) {
  const colors = getCategoryColor(category.slug)
  const needsVerification = item.tags?.includes('Perlu Verifikasi')

  return (
    <div className="animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-navy-500 transition-colors mb-4"
      >
        <ArrowLeft size={15} />
        Kembali ke {category.title}
      </button>

      <div className="buddyup-card overflow-hidden">
        {/* Header */}
        <div className={`${colors.bg} px-5 py-4 border-b ${colors.border}`}>
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <p className={`text-xs font-semibold ${colors.text} mb-1`}>{category.title}</p>
              <h2 className="text-base font-bold text-navy-500 leading-snug">{item.title}</h2>
            </div>
            {item.isImportant && (
              <span className="shrink-0 text-[10px] font-bold text-orange-600 bg-orange-50 border border-orange-200 rounded-full px-2 py-0.5">
                Penting
              </span>
            )}
          </div>
        </div>

        {/* Verification warning */}
        {needsVerification && (
          <div className="mx-5 mt-4 flex gap-2.5 bg-amber-50 border border-amber-200 rounded-lg p-3">
            <AlertTriangle size={15} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 leading-relaxed">
              <strong>Perlu Verifikasi:</strong> Detail spesifik (jadwal, kontak, biaya, lokasi) dalam informasi ini
              perlu dikonfirmasi langsung ke unit terkait UPNVY atau melalui website resmi{' '}
              <strong>upnyk.ac.id</strong>.
            </p>
          </div>
        )}

        {/* Content */}
        <div className="px-5 py-4">
          <p className="text-sm text-slate-600 leading-relaxed">{item.content}</p>
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="px-5 pb-4 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className={`inline-flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                  tag === 'Perlu Verifikasi'
                    ? 'bg-amber-50 text-amber-600 border-amber-200'
                    : 'bg-lightblue-50 text-navy-500 border-lightblue-100'
                }`}
              >
                <Tag size={8} />
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Official source reminder */}
        <div className="mx-5 mb-5 flex gap-2 bg-lightblue-50 border border-lightblue-100 rounded-lg p-3">
          <AlertTriangle size={13} className="text-blue-400 shrink-0 mt-0.5" />
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Selalu verifikasi informasi resmi melalui website UPNVY:{' '}
            <span className="font-semibold text-blue-500">upnyk.ac.id</span>
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Category Detail View ─────────────────────────────────────────────────────
function CategoryDetailView({
  category,
  onSelectItem,
  onBack,
}: {
  category: CampusInfoCategory
  onSelectItem: (item: CampusInfoItem) => void
  onBack: () => void
}) {
  const colors = getCategoryColor(category.slug)
  const Icon = ICON_MAP[category.icon] ?? MapPin

  return (
    <div className="animate-fade-in">
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-navy-500 transition-colors mb-4"
      >
        <ArrowLeft size={15} />
        Semua Kategori
      </button>

      {/* Category header */}
      <div className={`${colors.bg} border ${colors.border} rounded-xl p-5 mb-4`}>
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center`}>
            <Icon size={20} className={colors.text} />
          </div>
          <div>
            <h2 className="text-base font-bold text-navy-500">{category.title}</h2>
            <p className="text-xs text-slate-500 mt-0.5">{category.description}</p>
          </div>
        </div>
      </div>

      {/* Items list */}
      <div className="space-y-2">
        {category.items.map((item) => (
          <button
            key={item.id}
            onClick={() => onSelectItem(item)}
            className="w-full buddyup-card p-4 flex items-start gap-3 text-left hover:shadow-card-hover transition-all group"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <p className="text-sm font-semibold text-navy-500 leading-snug">{item.title}</p>
                {item.isImportant && (
                  <span className="text-[10px] font-bold text-orange-500 bg-orange-50 border border-orange-100 rounded-full px-1.5 py-0.5 shrink-0">
                    Penting
                  </span>
                )}
                {item.tags?.includes('Perlu Verifikasi') && (
                  <span className="text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 rounded-full px-1.5 py-0.5 shrink-0">
                    Perlu Verifikasi
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                {item.content.slice(0, 100)}…
              </p>
            </div>
            <ChevronRight
              size={15}
              className="text-slate-300 group-hover:text-navy-500 transition-colors mt-1 shrink-0"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

// ─── Category Grid ─────────────────────────────────────────────────────────────
function CategoryGrid({
  onSelectCategory,
}: {
  onSelectCategory: (cat: CampusInfoCategory) => void
}) {
  return (
    <div className="animate-fade-in">
      {/* Disclaimer banner */}
      <div className="flex gap-2.5 bg-amber-50 border border-amber-200 rounded-xl p-3.5 mb-5">
        <AlertTriangle size={15} className="text-amber-500 shrink-0 mt-0.5" />
        <p className="text-xs text-amber-700 leading-relaxed">
          Informasi di bawah bersifat <strong>umum dan edukatif</strong>. Selalu verifikasi detail
          resmi (jadwal, biaya, kontak, lokasi) langsung ke UPNVY atau{' '}
          <strong>upnyk.ac.id</strong>.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CAMPUS_INFO_DATA.map((cat) => {
          const Icon = ICON_MAP[cat.icon] ?? MapPin
          const colors = getCategoryColor(cat.slug)

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className="buddyup-card p-4 flex items-start gap-4 text-left hover:shadow-card-hover transition-all group"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${colors.bg} border ${colors.border}`}
              >
                <Icon size={20} className={colors.text} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-navy-500 leading-snug">{cat.title}</p>
                <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">{cat.description}</p>
                <p className="text-[10px] text-slate-300 mt-1.5 font-medium">
                  {cat.items.length} topik
                </p>
              </div>
              <ChevronRight
                size={15}
                className="text-slate-300 group-hover:text-navy-500 transition-colors mt-1 shrink-0"
              />
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
type ViewState =
  | { view: 'grid' }
  | { view: 'category'; category: CampusInfoCategory }
  | { view: 'item'; category: CampusInfoCategory; item: CampusInfoItem }

export default function CampusInfoPage() {
  const [state, setState] = useState<ViewState>({ view: 'grid' })

  const getSubtitle = () => {
    if (state.view === 'grid') return 'Kenali lingkungan UPN Veteran Yogyakarta'
    if (state.view === 'category') return state.category.title
    return state.item.title
  }

  return (
    <>
      <TopHeader title="Info Kampus" subtitle={getSubtitle()} />
      <div className="px-4 md:px-6 py-5">
        {state.view === 'grid' && (
          <CategoryGrid onSelectCategory={(cat) => setState({ view: 'category', category: cat })} />
        )}
        {state.view === 'category' && (
          <CategoryDetailView
            category={state.category}
            onSelectItem={(item) =>
              setState({ view: 'item', category: state.category, item })
            }
            onBack={() => setState({ view: 'grid' })}
          />
        )}
        {state.view === 'item' && (
          <ItemDetailView
            item={state.item}
            category={state.category}
            onBack={() => setState({ view: 'category', category: state.category })}
          />
        )}
      </div>
    </>
  )
}
