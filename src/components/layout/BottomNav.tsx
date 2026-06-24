import { NavLink } from 'react-router-dom'

const items = [
  {
    to: '/',
    label: 'Home',
    end: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: '/bracket',
    label: 'Bracket',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="16" y="16" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.9" />
        <rect x="2" y="16" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.9" />
        <rect x="9" y="2" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.9" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8" stroke="currentColor" strokeWidth="1.9" />
      </svg>
    ),
  },
  {
    to: '/matches',
    label: 'Matches',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.9" />
        <path d="M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    to: '/standings',
    label: 'Standings',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zM6 9H4.5a1 1 0 0 1 0-5H6"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    to: '/rules',
    label: 'Rules',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 7v14M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
]

export function BottomNav() {
  return (
    <nav className="rwc-bottom-nav" aria-label="Main">
      <div className="rwc-bottom-nav__bar">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            aria-label={item.label}
            className={({ isActive }) =>
              `rwc-bottom-nav__item${isActive ? ' rwc-bottom-nav__item--active' : ''}`
            }
          >
            {({ isActive }) => (
              <>
                {isActive ? (
                  <span className="rwc-bottom-nav__glow rwc-gradient-country" aria-hidden="true" />
                ) : null}
                <span className="rwc-bottom-nav__inner">
                  <span className="rwc-bottom-nav__icon">{item.icon}</span>
                  {isActive ? (
                    <span className="rwc-bottom-nav__label">{item.label}</span>
                  ) : null}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
