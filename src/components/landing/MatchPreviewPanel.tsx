const schedule = [
  {
    id: 'active',
    home: { flag: '🇳🇱', name: 'Netherlands', rank: '#6' },
    away: { flag: '🇯🇵', name: 'Japan', rank: '#18' },
    status: 'active' as const,
  },
  {
    id: 'sweden',
    home: { flag: '🇸🇪', name: 'Sweden', rank: '#36' },
    away: { flag: '🇹🇳', name: 'Tunisia', rank: '#34' },
    pick: { flag: '🇸🇪', name: 'Sweden' },
  },
  {
    id: 'nl-se',
    home: { flag: '🇳🇱', name: 'Netherlands', rank: '#6' },
    away: { flag: '🇸🇪', name: 'Sweden', rank: '#36' },
    pick: { flag: '🇸🇪', name: 'Sweden' },
  },
  {
    id: 'jp-tn',
    home: { flag: '🇯🇵', name: 'Japan', rank: '#18' },
    away: { flag: '🇹🇳', name: 'Tunisia', rank: '#34' },
    pick: { flag: '🇯🇵', name: 'Japan' },
  },
  {
    id: 'nl-tn',
    home: { flag: '🇳🇱', name: 'Netherlands', rank: '#6' },
    away: { flag: '🇹🇳', name: 'Tunisia', rank: '#34' },
    kickoff: '26 Jun',
  },
  {
    id: 'jp-se',
    home: { flag: '🇯🇵', name: 'Japan', rank: '#18' },
    away: { flag: '🇸🇪', name: 'Sweden', rank: '#36' },
    kickoff: '26 Jun',
  },
]

function TeamJersey({ flag, name, rank }: { flag: string; name: string; rank: string }) {
  return (
    <div className="rwc-match-preview__team">
      <div className="rwc-match-preview__jersey" aria-hidden="true">
        <span className="rwc-match-preview__jersey-flag">{flag}</span>
      </div>
      <span className="rwc-match-preview__team-name">{name}</span>
      <span className="rwc-match-preview__team-rank">FIFA {rank}</span>
    </div>
  )
}

function ScheduleRow({
  home,
  away,
  status,
  pick,
  kickoff,
}: (typeof schedule)[number]) {
  const isActive = status === 'active'

  return (
    <div
      className={`rwc-match-preview__schedule-item${isActive ? ' rwc-match-preview__schedule-item--active' : ''}`}
      aria-current={isActive ? 'true' : undefined}
    >
      {isActive ? <span className="rwc-match-preview__schedule-accent" aria-hidden="true" /> : null}
      <div className="rwc-match-preview__schedule-main">
        <div className="rwc-match-preview__schedule-flags">
          <span>{home.flag}</span>
          <span className="rwc-match-preview__schedule-vs">VS</span>
          <span>{away.flag}</span>
        </div>
        <div className="rwc-match-preview__schedule-names">
          <div className="rwc-match-preview__schedule-side">
            <span className="rwc-match-preview__schedule-team">{home.name}</span>
            <span className="rwc-match-preview__schedule-rank">{home.rank}</span>
          </div>
          <span className="rwc-match-preview__schedule-vs rwc-match-preview__schedule-vs--inline">VS</span>
          <div className="rwc-match-preview__schedule-side">
            <span className="rwc-match-preview__schedule-team">{away.name}</span>
            <span className="rwc-match-preview__schedule-rank">{away.rank}</span>
          </div>
        </div>
      </div>
      <div className="rwc-match-preview__schedule-meta">
        {isActive ? (
          <div className="rwc-match-preview__pick-active">
            <span className="rwc-match-preview__pick-active-dot" aria-hidden="true">
              <span className="rwc-match-preview__pick-active-ping" />
              <span className="rwc-match-preview__pick-active-core" />
            </span>
            <span className="rwc-match-preview__pick-active-label">Pick Active</span>
          </div>
        ) : pick ? (
          <div className="rwc-match-preview__your-pick">
            <div>
              <div className="rwc-match-preview__your-pick-label">Your Pick</div>
              <div className="rwc-match-preview__your-pick-name">{pick.name}</div>
            </div>
            <span className="rwc-match-preview__your-pick-flag">{pick.flag}</span>
          </div>
        ) : kickoff ? (
          <div className="rwc-match-preview__kickoff">
            <div>
              <div className="rwc-match-preview__kickoff-label">Kickoff</div>
              <div className="rwc-match-preview__kickoff-date">{kickoff}</div>
            </div>
            <span className="rwc-match-preview__kickoff-bar" aria-hidden="true" />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export function MatchPreviewPanel() {
  return (
    <div className="rwc-match-preview">
      <div className="rwc-match-preview__card-wrap">
        <div className="rwc-match-preview__glow rwc-gradient-country" aria-hidden="true" />
        <div className="rwc-match-preview__card">
          <div
            className="rwc-match-preview__bg"
            style={{ backgroundImage: 'url(/images/metlife-stadium.jpg)' }}
            aria-hidden="true"
          />
          <div className="rwc-match-preview__overlay" aria-hidden="true" />
          <div className="rwc-match-preview__content">
            <div className="rwc-match-preview__venue">
              <span className="rwc-match-preview__venue-city">
                East Rutherford<span className="rwc-match-preview__venue-dot">·</span>USA
              </span>
              <span className="rwc-match-preview__venue-stadium">MetLife Stadium</span>
            </div>
            <div className="rwc-match-preview__meta">
              <span>Group F · Match</span>
              <span className="rwc-match-preview__meta-time">14 Jun · 22:00 GMT+2</span>
            </div>
            <div className="rwc-match-preview__teams">
              <TeamJersey flag="🇳🇱" name="Netherlands" rank="#6" />
              <div className="rwc-match-preview__center">
                <span className="rwc-match-preview__center-line" aria-hidden="true" />
                <span className="rwc-match-preview__vs">vs</span>
                <button type="button" className="rwc-match-preview__draw" disabled>
                  Draw
                </button>
                <span className="rwc-match-preview__locked">Locked</span>
              </div>
              <TeamJersey flag="🇯🇵" name="Japan" rank="#18" />
            </div>
            <div className="rwc-match-preview__hint">
              <p>Tap a team or Draw to predict</p>
            </div>
          </div>
        </div>
      </div>

      <div className="rwc-match-preview__schedule">
        <div className="rwc-match-preview__schedule-head">
          <div>
            <p className="rwc-match-preview__schedule-label">Group Stage Schedule</p>
            <p className="rwc-match-preview__schedule-title">
              Group F <span>All matches</span>
            </p>
          </div>
          <span className="rwc-match-preview__schedule-count">3/6 picked</span>
        </div>
        <div className="rwc-match-preview__schedule-list">
          {schedule.map((item) => (
            <ScheduleRow key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}
