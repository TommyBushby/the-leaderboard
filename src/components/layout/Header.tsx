import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-white">
          The Leaderboard
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link to="/bracket" className="text-white/70 transition hover:text-white">
            My bracket
          </Link>
          <Link to="/standings" className="text-white/70 transition hover:text-white">
            Standings
          </Link>
          <Link to="/rules" className="text-white/70 transition hover:text-white">
            Rules
          </Link>
          <button
            type="button"
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-white/80"
          >
            Sign in
          </button>
        </nav>
      </div>
    </header>
  )
}
