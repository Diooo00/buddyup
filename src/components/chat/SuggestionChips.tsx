'use client'

interface SuggestionChipsProps {
  onSelect: (text: string) => void
  disabled: boolean
}

const SUGGESTIONS = [
  'Apa itu KRS dan cara mengisinya?',
  'Bagaimana cara aktivasi akun SIAKAD?',
  'Apa itu UKT dan bagaimana cara bayarnya?',
  'Apa keuntungan ikut UKM?',
  'Jelaskan sistem SKS untuk mahasiswa baru',
  'Apa fungsi dosen wali?',
]

export function SuggestionChips({ onSelect, disabled }: SuggestionChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {SUGGESTIONS.map((s) => (
        <button
          key={s}
          onClick={() => onSelect(s)}
          disabled={disabled}
          className="text-xs px-3 py-1.5 rounded-full bg-lightblue-50 border border-lightblue-100 text-navy-500 hover:bg-lightblue-100 hover:border-lightblue-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {s}
        </button>
      ))}
    </div>
  )
}
