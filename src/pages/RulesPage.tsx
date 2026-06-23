export function RulesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <p className="section-label">The fine print</p>
      <h1 className="mt-3 font-display text-4xl font-bold">Rules & scoring</h1>
      <div className="mt-10 space-y-8 text-white/70">
        <section>
          <h2 className="font-display text-xl font-bold text-white">How to score</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Confidence multiplies the stage points only — the upset bonus stacks on top at its flat
            value. You get one confidence pick per matchday.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white">Lock times</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Predictions lock at each match&apos;s kickoff. Edit freely until the whistle.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-bold text-white">Not affiliated with FIFA</h2>
          <p className="mt-3 text-sm leading-relaxed">
            The Leaderboard is an independent fan project.
          </p>
        </section>
      </div>
    </main>
  )
}
