import { Link } from 'react-router-dom'
import { BracketCanvas } from '../components/landing/BracketCanvas'
import { CountdownBoard } from '../components/landing/CountdownBoard'
import { LandingFooter } from '../components/landing/LandingFooter'
import { LandingHeader } from '../components/landing/LandingHeader'
import { MatchPreviewPanel } from '../components/landing/MatchPreviewPanel'

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
    body: 'Group result 5 → R16 15 → QF 20 → SF 30 → Final 60. One cold-blooded final-call can erase a slow group stage.',
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
  { label: 'Group', pts: '5' },
  { label: 'R32', pts: '15' },
  { label: 'R16', pts: '15' },
  { label: 'QF', pts: '20' },
  { label: 'SF', pts: '30' },
  { label: 'Final', pts: '60' },
]

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M5 12h14M13 5l7 7-7 7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function HomePage() {
  return (
    <div className="rwc-landing">
      <div className="rwc-landing__top-fade" aria-hidden="true" />
      <LandingHeader />

      {/* Hero copy */}
      <section className="rwc-hero">
        <div className="rwc-hero__bg">
          <div className="rwc-hero__bg-glow" />
        </div>
        <div className="rwc-hero__inner">
          <div className="rwc-hero__content">
            <h1 className="rwc-hero__title">
              The Leaderboard
              <span className="rwc-hero__sr-only"> — World Cup 2026 Bracket Challenge</span>
            </h1>
            <p className="rwc-hero__subtitle">
              <span>Unofficial World Cup bracket.</span>
            </p>
            <div className="rwc-hero__cta-row">
              <Link to="/bracket" className="rwc-btn--gold-beam">
                <span>Fill your bracket</span>
                <ArrowIcon className="rwc-btn--gold-beam__icon" />
              </Link>
              <a href="#scoring" className="rwc-link--story">
                How scoring works
              </a>
            </div>
            <p className="rwc-hero__disclaimer">Free to play - not affiliated with FIFA.</p>
          </div>
        </div>
      </section>

      {/* Stadium image + LED countdown */}
      <div className="rwc-countdown-wrap">
        <section className="rwc-countdown-wrap__section">
          <div className="rwc-countdown-wrap__frame">
            <img
              src="/images/fourth-official.jpg"
              alt=""
              aria-hidden="true"
              width={1536}
              height={1024}
              className="rwc-countdown-wrap__image"
            />
            <div className="rwc-countdown-wrap__mobile-fade" aria-hidden="true" />
            <CountdownBoard />
          </div>
        </section>
      </div>

      {/* How the game works */}
      <section className="rwc-how">
        <div className="rwc-how__grid">
          <div>
            <p className="rwc-text--section-label">How the game works</p>
            <h2 className="rwc-how__intro-title">
              Outpick everyone{'\n'}
              <span className="rwc-text--gold-cinematic">across the globe.</span>
            </h2>
            <p className="rwc-how__intro-desc">
              Compete internationally with other participants as the World Cup progresses.
            </p>
            <ul className="rwc-how__steps rwc-how__steps--with-margin">
              {steps.map((step) => (
                <li key={step.num} className="rwc-how__step">
                  <span className="rwc-how__step-num">{step.num}</span>
                  <div className="rwc-how__step-body">
                    <p className="rwc-how__step-title">{step.title}</p>
                    <div className="rwc-how__step-expand">
                      <div className="rwc-how__step-expand-inner">
                        <p className="rwc-how__step-desc">{step.body}</p>
                        {step.tag ? <p className="rwc-how__step-tag">{step.tag}</p> : null}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="rwc-how__cta-row">
              <Link to="/bracket" className="rwc-btn--gold-beam rwc-btn--gold-beam--sm">
                <span>Fill your bracket</span>
                <ArrowIcon className="rwc-btn--gold-beam__icon" />
              </Link>
              <Link to="/rules" className="rwc-link--story rwc-link--story--upper">
                Full scoring
              </Link>
            </div>
          </div>
          <div className="rwc-how__visual">
            <MatchPreviewPanel />
          </div>
        </div>

        <div className="rwc-how__leaders">
          <div className="rwc-how__leaders-inner">
            <div className="rwc-divider--gold">
              <span className="rwc-divider--gold__label">Current leaders</span>
            </div>
            <div className="rwc-how__leaders-header">
              <p className="rwc-text--section-label">Top of the table</p>
              <Link to="/standings" className="rwc-how__leaders-link">
                View all →
              </Link>
            </div>
            <div className="rwc-how__leaders-empty">
              <p className="rwc-how__leaders-empty-text">0 pts · waiting for picks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scoring */}
      <section id="scoring" className="rwc-scoring">
        <div className="rwc-scoring__bg" aria-hidden="true">
          <BracketCanvas />
          <div className="rwc-scoring__overlay-top" />
          <div className="rwc-scoring__overlay-bottom" />
          <div className="rwc-scoring__overlay-left" />
          <div className="rwc-scoring__overlay-right" />
        </div>
        <div className="rwc-scoring__globe-wrap" aria-hidden="true">
          <div className="rwc-scoring__globe-shadow" />
          <div className="rwc-scoring__globe-glow" />
          <div className="rwc-scoring__globe" />
        </div>
        <div className="rwc-scoring__content">
          <div className="rwc-scoring__header">
            <p className="rwc-text--section-label rwc-text--section-label--gold">How scoring works</p>
            <h2 className="rwc-scoring__title">
              The later the round,
              <br />
              <span className="rwc-text--gold-gradient">the greater the glory.</span>
            </h2>
            <p className="rwc-scoring__desc">
              Group-stage picks warm you up. The knockouts are where one bold call vaults you up the
              global table.
            </p>
          </div>
          <div className="rwc-scoring__spacer" aria-hidden="true" />
          <div className="rwc-scoring__mobile-grid">
            {scoringRounds.map((round) => (
              <div key={round.label} className="rwc-scoring__round">
                <span className="rwc-scoring__round-label">{round.label}</span>
                <span className="rwc-scoring__round-pts rwc-text--gold-gradient">{round.pts}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus cards */}
        <div id="double-down" className="rwc-bonus">
          <div className="rwc-bonus__divider">
            <span className="rwc-bonus__divider-line rwc-bonus__divider-line--left" />
            <span className="rwc-bonus__divider-label">Stack the bonuses</span>
            <span className="rwc-bonus__divider-line rwc-bonus__divider-line--right" />
          </div>
          <div className="rwc-bonus__grid">
            <article className="rwc-bonus__card">
              <div className="rwc-bonus__card-glow" aria-hidden="true" />
              <div className="rwc-bonus__card-shine" aria-hidden="true" />
              <div className="rwc-bonus__card-head">
                <div>
                  <p className="rwc-bonus__card-label">Double down</p>
                  <h3 className="rwc-bonus__card-title">Confidence pick</h3>
                </div>
                <span className="rwc-bonus__card-value rwc-text--gold-gradient">×2</span>
              </div>
              <p className="rwc-bonus__card-desc">
                Flag one match per matchday as your conviction call. Get it right and the round&apos;s
                points double. Get it wrong and it&apos;s a clean zero — no consolation prize for a gut
                call gone cold.
              </p>
              <ul className="rwc-bonus__card-list">
                <li className="rwc-bonus__card-list-item">
                  <span className="rwc-bonus__card-list-dot" />
                  One per matchday
                </li>
                <li className="rwc-bonus__card-list-item">
                  <span className="rwc-bonus__card-list-dot" />
                  Stacks with upset bonus
                </li>
                <li className="rwc-bonus__card-list-item">
                  <span className="rwc-bonus__card-list-dot" />
                  Locks at kickoff
                </li>
              </ul>
            </article>
            <article className="rwc-bonus__card">
              <div className="rwc-bonus__card-glow" aria-hidden="true" />
              <div className="rwc-bonus__card-shine" aria-hidden="true" />
              <div className="rwc-bonus__card-head">
                <div>
                  <p className="rwc-bonus__card-label">Daily rival</p>
                  <h3 className="rwc-bonus__card-title">Head-to-head bonus</h3>
                </div>
                <span className="rwc-bonus__card-value rwc-text--gold-gradient">+10</span>
              </div>
              <p className="rwc-bonus__card-desc">
                Tag a player before kickoff. End the day with more correct picks than them and you
                pocket a flat ten on top of your score. Tie and you both get it. Lose and they twist
                the knife.
              </p>
              <ul className="rwc-bonus__card-list">
                <li className="rwc-bonus__card-list-item">
                  <span className="rwc-bonus__card-list-dot" />
                  Pick a new rival daily
                </li>
                <li className="rwc-bonus__card-list-item">
                  <span className="rwc-bonus__card-list-dot" />
                  Bonus on more correct picks
                </li>
                <li className="rwc-bonus__card-list-item">
                  <span className="rwc-bonus__card-list-dot" />
                  Tie = both score
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section className="rwc-prizes">
        <div className="rwc-prizes__header">
          <div className="rwc-prizes__eyebrow">
            <span className="rwc-prizes__eyebrow-line" />
            THE REWARDS
            <span className="rwc-prizes__eyebrow-line" />
          </div>
          <h2 className="rwc-prizes__title">
            <span className="rwc-prizes__title-line">THIS IS WHAT</span>
            <span className="rwc-prizes__title-rainbow">WINNING LOOKS LIKE</span>
          </h2>
        </div>
        <div className="rwc-prizes__list">
          <article className="rwc-prizes__card rwc-prizes__card--featured">
            <div className="rwc-prizes__card-glow" aria-hidden="true" />
            <div className="rwc-prizes__card-inner">
              <div className="rwc-prizes__card-body">
                <div className="rwc-prizes__card-badges">
                  <span className="rwc-prizes__card-level">Level 01</span>
                  <span className="rwc-prizes__card-tier rwc-prizes__card-tier--rainbow">The Champion</span>
                </div>
                <h3 className="rwc-prizes__card-name">Grand Prize</h3>
                <p className="rwc-prizes__card-desc">
                  The grand prize. A custom poster of your bracket, a merch pack, and eternal glory.
                </p>
                <ul className="rwc-prizes__card-features">
                  <li className="rwc-prizes__card-feature">
                    <span className="rwc-prizes__card-feature-bar" />
                    Premium merch pack
                  </li>
                  <li className="rwc-prizes__card-feature">
                    <span className="rwc-prizes__card-feature-bar" />
                    Custom printed poster
                  </li>
                  <li className="rwc-prizes__card-feature">
                    <span className="rwc-prizes__card-feature-bar" />
                    Eternal glory
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article className="rwc-prizes__card">
            <div className="rwc-prizes__card-inner rwc-prizes__card-inner--secondary">
              <div className="rwc-prizes__card-body rwc-prizes__card-body--secondary">
                <div className="rwc-prizes__card-badges">
                  <span className="rwc-prizes__card-level">Level 02</span>
                  <span className="rwc-prizes__card-tier">The Elite</span>
                </div>
                <h3 className="rwc-prizes__card-name rwc-prizes__card-name--secondary">Top 10 Finishers</h3>
                <p className="rwc-prizes__card-desc rwc-prizes__card-desc--secondary">
                  A custom poster of your bracket and eternal glory.
                </p>
                <ul className="rwc-prizes__card-features rwc-prizes__card-features--secondary">
                  <li className="rwc-prizes__card-feature">
                    <span className="rwc-prizes__card-feature-bar rwc-prizes__card-feature-bar--muted" />
                    Custom printed poster
                  </li>
                  <li className="rwc-prizes__card-feature">
                    <span className="rwc-prizes__card-feature-bar rwc-prizes__card-feature-bar--muted" />
                    Eternal glory
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
        <p className="rwc-prizes__tagline">No buy-in · Pure competition · Full glory</p>
        <p className="rwc-prizes__legal">
          Substitutions of equal or greater value may apply. Match tickets subject to fixture and
          travel eligibility.{' '}
          <Link to="/rules" className="rwc-prizes__legal-link">
            Full rules →
          </Link>
        </p>
      </section>

      <LandingFooter />
    </div>
  )
}
