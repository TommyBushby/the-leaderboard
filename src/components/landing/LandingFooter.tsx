import { Link } from 'react-router-dom'

export function LandingFooter() {
  return (
    <footer className="rwc-footer">
      <div className="rwc-footer__shine" aria-hidden="true" />
      <div className="rwc-footer__mobile-spacer" aria-hidden="true" />
      <div className="rwc-footer__inner">
        <div className="rwc-footer__brand-col">
          <Link to="/" className="rwc-footer__brand">
            <span className="rwc-footer__brand-word">The Leaderboard</span>
          </Link>
          <p className="rwc-footer__desc">
            The unofficial fan prediction game for the 2026 FIFA World Cup. Pick every match,
            climb the global leaderboard, win bragging rights and prizes.
          </p>
        </div>
        <div>
          <p className="rwc-footer__col-title">Game</p>
          <ul className="rwc-footer__links">
            <li>
              <Link to="/" className="rwc-footer__link rwc-footer__link--active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bracket" className="rwc-footer__link">
                My bracket
              </Link>
            </li>
            <li>
              <Link to="/standings" className="rwc-footer__link">
                Standings
              </Link>
            </li>
            <li>
              <Link to="/rules" className="rwc-footer__link">
                Rules & scoring
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="rwc-footer__col-title">Legal</p>
          <ul className="rwc-footer__links">
            <li>
              <span className="rwc-footer__link">Terms of service</span>
            </li>
            <li>
              <span className="rwc-footer__link">Privacy policy</span>
            </li>
            <li>
              <span className="rwc-footer__link">GDPR & your rights</span>
            </li>
            <li>
              <span className="rwc-footer__link">Cookies</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="rwc-footer__col-title">Contact</p>
          <ul className="rwc-footer__links">
            <li>
              <button type="button" className="rwc-footer__link">
                Contact
              </button>
            </li>
            <li>
              <a href="mailto:privacy@bracket26.example" className="rwc-footer__link">
                Privacy requests
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rwc-footer__bottom">
        <div className="rwc-footer__bottom-inner">
          <p>
            © 2026 The Leaderboard. An independent fan project. Not affiliated with, endorsed by,
            or sponsored by FIFA or any national football association. 18+. Play responsibly.
          </p>
          <div className="rwc-footer__social">
            <span className="rwc-footer__social-link">Terms</span>
            <span className="rwc-footer__social-dot">·</span>
            <span className="rwc-footer__social-link">Privacy</span>
            <span className="rwc-footer__social-dot">·</span>
            <span className="rwc-footer__social-link">GDPR</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
