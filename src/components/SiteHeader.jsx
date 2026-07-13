import { useEffect, useState } from 'react'

const NAV_PRIMARY = [
  { label: 'Manifesto', href: '#manifesto' },
  { label: 'HoodPot', href: '#hoodpot' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: '$HOOD', href: '#hood-token' },
]

const NAV_EXTERNAL = [
  { label: 'Docs', href: 'https://hoodbet.gitbook.io/hoodbet-docs' },
  { label: 'GitHub', href: 'https://github.com/hoodbet-fun' },
  { label: 'Telegram', href: 'https://t.me/+8KdjgSVzZr5hZjc0' },
]

export function SiteHeader({ appUrl }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-open', menuOpen)
    return () => document.body.classList.remove('nav-open')
  }, [menuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' menu-open' : ''}`}
    >
      <div className="site-header-bar">
        <div className="container site-header-inner">
          <a className="site-logo" href="#" onClick={closeMenu}>
            <img src="/logo.png" alt="" width={40} height={40} />
            <span className="site-logo-text">
              <span className="site-logo-brand">HoodBet</span>
              <span className="site-logo-domain">hood<em>bet</em>.fun</span>
            </span>
          </a>

          <nav className="site-nav-desktop" aria-label="Main">
            <div className="site-nav-group">
              {NAV_PRIMARY.map((item) => (
                <a key={item.href} href={item.href}>{item.label}</a>
              ))}
            </div>
            <span className="site-nav-divider" aria-hidden />
            <div className="site-nav-group site-nav-group-muted">
              {NAV_EXTERNAL.map((item) => (
                <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="site-header-actions">
            <a className="btn btn-primary site-header-cta" href={appUrl}>
              Open app
            </a>
            <button
              type="button"
              className="site-nav-toggle"
              aria-expanded={menuOpen}
              aria-controls="site-mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="site-nav-toggle-bar" aria-hidden />
              <span className="site-nav-toggle-bar" aria-hidden />
              <span className="site-nav-toggle-bar" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      <div
        id="site-mobile-nav"
        className="site-nav-mobile"
        hidden={!menuOpen}
        aria-hidden={!menuOpen}
      >
        <div className="site-nav-mobile-backdrop" onClick={closeMenu} aria-hidden />
        <div className="site-nav-mobile-panel">
          <p className="site-nav-mobile-label">Explore</p>
          <div className="site-nav-mobile-links">
            {NAV_PRIMARY.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>

          <p className="site-nav-mobile-label">Resources</p>
          <div className="site-nav-mobile-links site-nav-mobile-links-muted">
            {NAV_EXTERNAL.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>

          <a className="btn btn-primary btn-lg site-nav-mobile-cta" href={appUrl} onClick={closeMenu}>
            Open HoodPot
          </a>
        </div>
      </div>
    </header>
  )
}
