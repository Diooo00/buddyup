'use client'

import { CheckSquare, MapPin, MessageCircle, FileText, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const QUICK_LINKS = [
  {
    href: '/checklist',
    icon: CheckSquare,
    label: 'Checklist',
    desc: 'Pantau tugasmu',
    color: 'bg-lightblue-100 text-navy-500',
    border: 'border-lightblue-200',
  },
  {
    href: '/campus-info',
    icon: MapPin,
    label: 'Info Kampus',
    desc: 'Kenali lingkungan',
    color: 'bg-softgreen-100 text-green-700',
    border: 'border-softgreen-200',
  },
  {
    href: '/chat',
    icon: MessageCircle,
    label: 'Tanya AI Buddy',
    desc: 'Ada yang bingung?',
    color: 'bg-blue-50 text-blue-500',
    border: 'border-blue-100',
  },
  {
    href: '/profile',
    icon: FileText,
    label: 'Profil Saya',
    desc: 'Lengkapi datamu',
    color: 'bg-navy-50 text-navy-500',
    border: 'border-navy-100',
  },
]

export function QuickAccess() {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="section-title">Akses Cepat</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {QUICK_LINKS.map(({ href, icon: Icon, label, desc, color, border }) => (
          <Link
            key={href}
            href={href}
            className={`group flex flex-col items-center gap-2 p-4 rounded-xl bg-white border ${border} hover:shadow-card-hover transition-all duration-200`}
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
              <Icon size={18} />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-navy-500 leading-tight">{label}</p>
              <p className="text-xs text-slate-400 mt-0.5 leading-tight">{desc}</p>
            </div>
            <ArrowRight
              size={12}
              className="text-slate-300 group-hover:text-navy-500 transition-colors mt-auto"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}
