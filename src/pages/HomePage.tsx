import { Link } from 'react-router-dom'

const steps = [
  {
    num: '01',
    title: 'Lock your bracket',
    body: 'Pick every match before the first whistle. Edit freely until kickoff — once it blows, your bracket is locked.',
  },
  {
    num: '02',
    title: 'Double down on your top pick',
    body: "Flag the matches you'd stake your rent on. Confidence picks pay double, and a correct upset bonus stacks on top.",
    tag: 'Double points',
  },
  {
    num: '03',
    title: 'Points grow as we approach the Final',
    body: 'Group result 5 → R16 15 → QF 20 → SF 30 → Final 60. One bold final call can erase a slow group stage.',
    tag: '5 to 60 points',
  },
  {
    num: '04',
    title: 'Pick a daily rival for bonus points',
    body: 'Tag one player each match day. Match or beat their card and pocket the bonus on top of your score.',
    tag: '+10 daily bonus',
  },
  {
    num: '05',
    title: 'Share your bracket',
    body: 'Export your bracket to share with friends or on social media.',
  },
]

const scoringRounds = [
  { label: 'Group', pts: 5 },
  { label: 'R32', pts: 15 },
  { label: 'R16', pts: 15 },
  { label: 'QF', pts: 20 },
  { label: 'SF', pts: 30 },
  { label: 'Final', pts: 60 },
]

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pt-24">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(80,40,160,0.12),transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl">
          <p className="section-label">World Cup 2026 Bracket Challenge</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            The Leaderboard
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/70 sm:text-lg">
            Unofficial World Cup bracket. Free to play — not affiliated with FIFA.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link to="/bracket" className="btn-gold">
              Fill your bracket →
            </Link>
            <a href="#scoring" className="text-sm font-semibold text-white/60 hover:text-white">
              How scoring works
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-label">How the game works</p>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl">
              Outpick everyone{' '}
              <span className="text-gradient-gold">across the globe.</span>
            </h2>
            <p className="mt-5 max-w-md text-white/65">
              Compete internationally with other participants as the World Cup progresses.
            </p>
          </div>
          <ul className="space-y-3">
            {steps.map((step) => (
              <li
                key={step.num}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-2xl px-3 py-3 hover:bg-white/[0.03]"
              >
                <span className="mt-1 font-display text-xs font-bold tabular-nums tracking-[0.2em] text-white/30">
                  {step.num}
                </span>
                <div>
                  <p className="font-display font-bold text-white">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{step.body}</p>
                  {step.tag ? (
                    <p className="mt-2 font-display text-[10px] font-black uppercase tracking-[0.28em] text-gradient-gold">
                      {step.tag}
                    </p>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="scoring" className="scroll-mt-20 border-y border-accent/10 bg-black/20 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl text-center">
          <p className="section-label text-accent/75">How scoring works</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">
            The later the round,{' '}
            <span className="text-gradient-gold">the greater the glory.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/55">
            Group-stage picks warm you up. The knockouts are where one bold call vaults you up the
            global table.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-6">
            {scoringRounds.map((round) => (
              <div key={round.label} className="glass-panel px-3 py-5">
                <p className="font-display text-[10px] font-bold uppercase tracking-wider text-accent/70">
                  {round.label}
                </p>
                <p className="mt-2 font-display text-3xl font-bold text-gradient-gold">{round.pts}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
