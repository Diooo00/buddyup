// BUDDYUP Application Constants

export const APP_NAME = 'BuddyUp'
export const APP_FULL_NAME = 'BuddyUp – Teman Onboarding Mahasiswa Baru UPNVY'
export const UNIVERSITY_NAME = 'UPN "Veteran" Yogyakarta'
export const UNIVERSITY_SHORT = 'UPNVY'

// Local Storage Keys
export const LS_KEYS = {
  CHECKLIST: 'buddyup_checklist',
  PROFILE: 'buddyup_profile',
  SETTINGS: 'buddyup_settings',
  CHAT_HISTORY: 'buddyup_chat_history',
  ONBOARDING_SEEN: 'buddyup_onboarding_seen',
} as const

// Design Palette
export const COLORS = {
  NAVY: '#173B63',
  BLUE: '#3674A5',
  LIGHT_BLUE: '#DCEEFF',
  BACKGROUND: '#F7F9FC',
  TEXT: '#263445',
  SOFT_GREEN: '#DDF3E5',
} as const

// API
export const API_ROUTES = {
  CHAT: '/api/chat',
} as const

// Navigation
export const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: 'LayoutDashboard' },
  { href: '/checklist', label: 'Checklist', icon: 'CheckSquare' },
  { href: '/campus-info', label: 'Info Kampus', icon: 'MapPin' },
  { href: '/chat', label: 'AI Buddy', icon: 'MessageCircle' },
  { href: '/profile', label: 'Profil', icon: 'User' },
] as const

// Checklist categories
export const CHECKLIST_CATEGORIES = {
  akademik: { label: 'Akademik', color: 'bg-blue-100 text-blue-700' },
  administrasi: { label: 'Administrasi', color: 'bg-navy-100 text-navy-600' },
  fasilitas: { label: 'Fasilitas', color: 'bg-lightblue-100 text-navy-500' },
  sosial: { label: 'Sosial', color: 'bg-softgreen-100 text-green-700' },
  kesehatan: { label: 'Kesehatan', color: 'bg-green-100 text-green-700' },
} as const

// AI Chat
export const AI_CONFIG = {
  MODEL: process.env.NEXT_PUBLIC_AI_MODEL ?? 'gpt-4o-mini',
  MAX_TOKENS: 1024,
  TEMPERATURE: 0.7,
  SYSTEM_LANGUAGE: 'Indonesian',
} as const

export const DEFAULT_PROFILE = {
  id: 'default',
  name: 'Mahasiswa Baru',
  nim: '------',
  faculty: 'Belum diatur',
  major: 'Belum diatur',
  year: new Date().getFullYear(),
  avatarInitials: 'MB',
  joinedAt: new Date().toISOString(),
} as const
