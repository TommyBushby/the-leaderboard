import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/8">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div>
          <p className="font-display text-xl font-bold">The Leaderboard</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/55">
            The unofficial fan prediction game for the 2026 FIFA World Cup. Pick every match,
            climb the global leaderboard, win bragging rights and prizes.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <p className="section-label">Game</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/bracket" className="text-white/65 hover:text-white">
                  My bracket
                </Link>
              </li>
              <li>
                <Link to="/standings" className="text-white/65 hover:text-white">
                  Standings
                </Link>
              </li>
              <li>
                <Link to="/rules" className="text-white/65 hover:text-white">
                  Rules & scoring
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="section-label">Legal</p>
            <ul className="mt-4 space-y-2 text-white/65">
              <li>Terms (coming soon)</li>
              <li>Privacy (coming soon)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-4 py-6 text-center text-xs text-white/40 sm:px-6">
        © 2026 The Leaderboard. Not affiliated with FIFA. 18+. Play responsibly.
      </div>
    </footer>
  )
}
