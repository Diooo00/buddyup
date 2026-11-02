import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'BuddyUp – Teman Onboarding Mahasiswa Baru UPNVY',
    template: '%s | BuddyUp UPNVY',
  },
  description:
    'Sistem onboarding berbasis AI untuk mahasiswa baru UPN "Veteran" Yogyakarta. Temukan informasi kampus, pantau progres, dan dapatkan bantuan dari asisten AI.',
  keywords: ['UPNVY', 'UPN Veteran Yogyakarta', 'mahasiswa baru', 'onboarding', 'BuddyUp'],
  authors: [{ name: 'BuddyUp Team' }],
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    title: 'BuddyUp – Teman Onboarding Mahasiswa Baru UPNVY',
    description:
      'Sistem onboarding berbasis AI untuk mahasiswa baru UPN "Veteran" Yogyakarta.',
    siteName: 'BuddyUp UPNVY',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="id" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        {children}
      </body>
    </html>
  )
}
