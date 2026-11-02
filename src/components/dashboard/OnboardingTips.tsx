'use client'

import { Lightbulb, ChevronRight } from 'lucide-react'

const TIPS = [
  {
    id: 1,
    title: 'Simpan nomor darurat kampus',
    body: 'Simpan nomor Satpam dan klinik kampus di ponselmu sejak dini — berguna saat darurat.',
    tag: 'Tips Penting',
    tagColor: 'badge-navy',
  },
  {
    id: 2,
    title: 'Manfaatkan jam konsultasi dosen wali',
    body: 'Dosen wali adalah pembimbingmu. Jangan ragu berkonsultasi soal KRS dan rencana studi.',
    tag: 'Akademik',
    tagColor: 'badge-navy',
  },
  {
    id: 3,
    title: 'Aktif di grup angkatan',
    body: 'Informasi penting sering disebarkan melalui grup kelas atau angkatan. Pastikan kamu tergabung!',
    tag: 'Sosial',
    tagColor: 'badge-green',
  },
  {
    id: 4,
    title: 'Pelajari sistem SKS',
    body: 'Pahami cara kerja Satuan Kredit Semester (SKS) agar bisa merencanakan studi dengan baik dari semester 1.',
    tag: 'Akademik',
    tagColor: 'badge-navy',
  },
]

export function OnboardingTips() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Lightbulb size={16} className="text-blue-500" />
        <h3 className="section-title">Tips Onboarding</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {TIPS.map((tip) => (
          <div
            key={tip.id}
            className="buddyup-card p-4 hover:shadow-card-hover transition-shadow group"
          >
            <div className="flex items-start justify-between gap-2 mb-2">
              <span className={tip.tagColor}>{tip.tag}</span>
              <ChevronRight
                size={14}
                className="text-slate-300 group-hover:text-navy-500 transition-colors mt-0.5 shrink-0"
              />
            </div>
            <p className="text-sm font-semibold text-navy-500 mb-1 leading-tight">{tip.title}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{tip.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
