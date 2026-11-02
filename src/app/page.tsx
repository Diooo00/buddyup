export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-navy-500 text-white text-2xl font-bold shadow-card">
          B
        </div>
        <h1 className="text-3xl font-bold text-navy-500">BuddyUp</h1>
        <p className="text-muted-foreground text-sm max-w-xs">
          Teman Onboarding Mahasiswa Baru UPN &ldquo;Veteran&rdquo; Yogyakarta
        </p>
        <p className="text-xs text-muted-foreground">
          Stage 1 – Project Foundation ✓
        </p>
      </div>
    </main>
  )
}
