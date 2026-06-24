import { useEffect, useState } from 'react'

export function LandingHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`rwc-header${scrolled ? ' rwc-header--scrolled' : ''}`}>
      <div className="rwc-header__backdrop" aria-hidden="true" />
      <div className="rwc-header__inner">
        <div className="rwc-header__spacer" />
        <div className="rwc-header__actions">
          <button type="button" className="rwc-header__lang" aria-label="Language" title="Language">
            <span aria-hidden="true">🇬🇧</span>
            <span className="rwc-header__lang-code">EN</span>
            <svg viewBox="0 0 24 24" className="rwc-header__lang-chevron" fill="none" aria-hidden="true">
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button type="button" className="rwc-btn--gold-beam rwc-btn--gold-beam--xs">
            <span>Sign in</span>
          </button>
          <button type="button" className="rwc-header__menu" aria-label="Open menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" className="rwc-header__menu-icon" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
