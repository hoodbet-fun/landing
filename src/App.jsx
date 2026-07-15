import { hero, manifesto, tiers, joinSection, developersSection } from './content/manifesto.js'
import { formatCountdown, formatUsd6 } from './chain.js'
import { socialLinks } from './social.js'
import { useProtocolStats } from './hooks/useProtocolStats.js'
import { HoodPotSection } from './components/HoodPotSection.jsx'
import { HoodTokenCard } from './components/HoodTokenCard.jsx'
import { RoadmapSection } from './components/RoadmapSection.jsx'
import { SiteHeader } from './components/SiteHeader.jsx'
import { StackStrip } from './components/StackStrip.jsx'

const APP_URL = socialLinks.app
const GITHUB_URL = socialLinks.github
const GITBOOK_URL = socialLinks.gitbook
const TELEGRAM_URL = socialLinks.telegram
const X_URL = socialLinks.x
const EXPLORER = 'https://robinhoodchain.blockscout.com'
const SAFE = '0x5FF989aCB81e612fb54d2BDE9C6334B4C9a8f117'

function LiveTicker() {
  const { stats, now } = useProtocolStats()

  const countdown = stats?.drawClosesAt
    ? formatCountdown(Number(stats.drawClosesAt) - now)
    : '—'

  return (
    <div className="ticker ticker-live">
      <div className="ticker-item highlight">
        <strong>${stats ? formatUsd6(stats.jackpot) : '—'}</strong>
        <span>Prize pool</span>
      </div>
      <div className="ticker-item">
        <strong>${stats ? formatUsd6(stats.tvl) : '—'}</strong>
        <span>Vault TVL</span>
      </div>
      <div className="ticker-item">
        <strong>{countdown}</strong>
        <span>Next draw · #{stats?.openDrawId?.toString() || '—'}</span>
      </div>
      <div className="ticker-item">
        <strong>50%+5%</strong>
        <span>Fees → jackpot</span>
      </div>
    </div>
  )
}


export default function App() {
  const ch1 = manifesto[0]
  const ch2 = manifesto[1]
  const ch3 = manifesto[2]
  const ch4 = manifesto[3]
  const ch5 = manifesto[4]

  return (
    <div className="app">
      <SiteHeader appUrl={APP_URL} />
      <a className="mobile-cta" href={APP_URL}>Open HoodPot →</a>
      <div className="container">
        <header className="hero">
          <StackStrip items={hero.stack} className="stack-strip-hero" />
          <h1>
            {hero.headline}
            <span className="accent">{hero.headlineAccent}</span>
          </h1>
          <p className="lead">{hero.subheadline}</p>
          <div className="cta-row">
            <a className="btn btn-primary btn-lg" href={APP_URL}>{hero.ctaPrimary}</a>
            <a className="btn btn-secondary" href="#manifesto">{hero.ctaSecondary}</a>
          </div>
          <p className="micro">{hero.micro}</p>
          <LiveTicker />
        </header>

        <section className="section" id="manifesto">
          <p className="section-label">{ch1.subtitle}</p>
          <h2>{ch1.title}</h2>
          {ch1.body.map((p) => <p key={p}>{p}</p>)}
          <p className="punchline">{ch1.punchline}</p>
        </section>

        <section className="section" id="the-hood">
          <p className="section-label">{ch2.subtitle}</p>
          <h2>{ch2.title}</h2>
          {ch2.body.map((p) => <p key={p}>{p}</p>)}
          <div className="stats">
            {ch2.stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <p className="punchline">{ch2.punchline}</p>
        </section>

        <HoodPotSection content={ch3} appUrl={APP_URL} stack={hero.stack} />

        <section className="section" id="fairness">
          <p className="section-label">{ch4.subtitle}</p>
          <h2>{ch4.title}</h2>
          {ch4.body.map((p) => <p key={p}>{p}</p>)}
          <div className="badges">
            {ch4.badges.map((b) => <span key={b}>{b}</span>)}
            <span>GitHub</span>
            <span>GitBook</span>
          </div>
          <p style={{ marginTop: '1rem' }}>
            Safe:{' '}
            <a href={`https://app.safe.global/home?safe=robinhood:${SAFE}`} target="_blank" rel="noreferrer">
              {SAFE.slice(0, 6)}…{SAFE.slice(-4)}
            </a>
          </p>
        </section>

        <section className="section" id="hood-token">
          <p className="section-label">{ch5.subtitle}</p>
          <h2>{ch5.title}</h2>
          {ch5.body.map((p) => <p key={p}>{p}</p>)}
          <HoodTokenCard />
          <div className="tier-table" id="hood-tiers">
            {tiers.map((t) => (
              <div key={t.name} className="tier-card">
                <h4>{t.name}</h4>
                <div className="min">{t.min} $HOOD</div>
                <p>{t.perks}</p>
              </div>
            ))}
          </div>
        </section>

        <RoadmapSection />

        <section className="section" id="developers">
          <p className="section-label">{developersSection.label}</p>
          <h2>{developersSection.title}</h2>
          <p>{developersSection.body}</p>
          <div className="dev-links">
            <a className="dev-card" href={GITHUB_URL} target="_blank" rel="noreferrer">
              <strong>{developersSection.github.label}</strong>
              <span>{developersSection.github.hint}</span>
              <div className="dev-repos">
                {developersSection.github.repos.map((repo) => (
                  <span key={repo}>{repo}</span>
                ))}
              </div>
            </a>
            <a className="dev-card" href={GITBOOK_URL} target="_blank" rel="noreferrer">
              <strong>{developersSection.gitbook.label}</strong>
              <span>{developersSection.gitbook.hint}</span>
            </a>
          </div>
        </section>

        <section className="section join-section" id="join">
          <h2>{joinSection.title}</h2>
          <p>{joinSection.body}</p>
          <div className="cta-row">
            <a className="btn btn-primary btn-lg" href={APP_URL}>{joinSection.cta}</a>
            <a className="btn btn-secondary" href={TELEGRAM_URL} target="_blank" rel="noreferrer">{joinSection.telegram}</a>
          </div>
        </section>

        <footer className="footer">
          <div className="footer-links">
            <a href={APP_URL}>HoodPot dApp</a>
            <a href={X_URL} target="_blank" rel="noreferrer">X</a>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">Telegram</a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>
            <a href={GITBOOK_URL} target="_blank" rel="noreferrer">GitBook</a>
            <a href={socialLinks.morphoVault} target="_blank" rel="noreferrer">Morpho vault</a>
            <a href="https://docs.robinhood.com/chain/" target="_blank" rel="noreferrer">Robinhood Chain</a>
          </div>
          <p>HoodBet.fun — experimental DeFi. Not financial advice.</p>
        </footer>
      </div>
    </div>
  )
}
