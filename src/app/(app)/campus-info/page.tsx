'use client'

import { TopHeader } from '@/components/layout/TopHeader'
import { MapPin } from 'lucide-react'

export default function CampusInfoPage() {
  return (
    <>
      <TopHeader title="Info Kampus" subtitle="Kenali lingkungan UPN Veteran Yogyakarta" />
      <div className="px-4 md:px-6 py-5 animate-fade-in">
        <div className="buddyup-card p-8 flex flex-col items-center justify-center text-center gap-3 min-h-[300px]">
          <div className="w-14 h-14 rounded-2xl bg-softgreen-100 flex items-center justify-center">
            <MapPin size={26} className="text-green-700" />
          </div>
          <h2 className="text-lg font-semibold text-navy-500">Informasi Kampus</h2>
          <p className="text-sm text-slate-500 max-w-xs">
            Direktori lengkap informasi kampus — lokasi, fasilitas, kontak, kalender akademik — akan tersedia di Stage 3.
          </p>
          <span className="badge-green mt-2">Segera Hadir – Stage 3</span>
        </div>
      </div>
    </>
  )
}
