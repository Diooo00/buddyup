// BUDDYUP Global Types

export interface UserProfile {
  id: string
  name: string
  nim: string
  faculty: string
  major: string
  year: number
  avatarInitials: string
  joinedAt: string
}

export interface ChecklistItem {
  id: string
  title: string
  description: string
  category: ChecklistCategory
  isCompleted: boolean
  completedAt?: string
  isRequired: boolean
}

export type ChecklistCategory =
  | 'akademik'
  | 'administrasi'
  | 'fasilitas'
  | 'sosial'
  | 'kesehatan'

export interface CampusInfoCategory {
  id: string
  slug: string
  title: string
  icon: string
  description: string
  items: CampusInfoItem[]
}

export interface CampusInfoItem {
  id: string
  title: string
  content: string
  tags?: string[]
  isImportant?: boolean
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: string
  isLoading?: boolean
}

export interface OnboardingProgress {
  totalItems: number
  completedItems: number
  percentage: number
  byCategory: Record<ChecklistCategory, { total: number; completed: number }>
}

export interface AppSettings {
  userName: string
  nim: string
  faculty: string
  major: string
  notificationsEnabled: boolean
  language: 'id' | 'en'
}
