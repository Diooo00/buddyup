'use client'

import { TopHeader } from '@/components/layout/TopHeader'
import { Pencil } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { useLocalStorage } from '@/hooks/use-local-storage'
import { LS_KEYS, DEFAULT_PROFILE, UNIVERSITY_NAME } from '@/lib/constants'
import type { UserProfile } from '@/types'

export default function ProfilePage() {
  const [profile] = useLocalStorage<UserProfile>(LS_KEYS.PROFILE, DEFAULT_PROFILE as UserProfile)

  const fields = [
    { label: 'Nama Lengkap', value: profile.name },
    { label: 'NIM', value: profile.nim },
    { label: 'Fakultas', value: profile.faculty },
    { label: 'Program Studi', value: profile.major },
    { label: 'Angkatan', value: String(profile.year) },
    { label: 'Universitas', value: UNIVERSITY_NAME },
  ]

  return (
    <>
      <TopHeader title="Profil" subtitle="Informasi akun dan pengaturan" />
      <div className="px-4 md:px-6 py-5 max-w-lg animate-fade-in">
        {/* Avatar card */}
        <div className="buddyup-card p-6 flex flex-col items-center gap-3 mb-5">
          <Avatar className="w-20 h-20">
            <AvatarFallback className="text-2xl font-bold bg-lightblue-100 text-navy-500">
              {profile.avatarInitials}
            </AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h2 className="text-lg font-bold text-navy-500">{profile.name}</h2>
            <p className="text-sm text-slate-500">{profile.nim !== '------' ? profile.nim : 'NIM belum diatur'}</p>
          </div>
          <Button variant="outline" size="sm" className="gap-2" disabled>
            <Pencil size={14} />
            Edit Profil
          </Button>
          <p className="text-xs text-slate-400">Lengkapi profilmu melalui pengaturan</p>
        </div>

        {/* Detail fields */}
        <div className="buddyup-card divide-y divide-border">
          {fields.map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between px-5 py-3.5">
              <span className="text-sm text-slate-500">{label}</span>
              <span className="text-sm font-medium text-navy-500">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
