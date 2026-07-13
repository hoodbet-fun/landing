import { hero, manifesto, roadmap, tiers, roadmapSection, joinSection } from './content/manifesto.js'

const APP_URL = import.meta.env.VITE_APP_URL || 'http://localhost:5174'
const EXPLORER = 'https://robinhoodchain.blockscout.com'
const MORPHO = '0xDF06045aBAE69d6e73a7F0197FED917032d22194'
const SAFE = '0x5FF989aCB81e612fb54d2BDE9C6334B4C9a8f117'

function JackpotTicker() {
  return (
    <div className="ticker">
      <div className="ticker-item">
        <strong>USDG</strong>
        <span>Deposit asset</span>
      </div>
      <div className="ticker-item">
        <strong>~$1</strong>
        <span>TVL vault</span>
      </div>
      <div className="ticker-item">
        <strong>24h</strong>
        <span>Draw period</span>
      </div>
      <div className="ticker-item">
        <strong>50%+5%</strong>
        <span>Fee → jackpot</span>
      </div>
    </div>
  )
}

function HoodBetRoadmap() {
  return (
    <div className="roadmap">
      {roadmap.map((phase) => (
        <div key={phase.name} className={`roadmap-item ${phase.status}`}>
          <div className="roadmap-header">
            <h3>{phase.name}</h3>
            <span className={`status ${phase.status}`}>
              {phase.status === 'in_progress' ? 'In Progress' : 'Coming Soon'}
            </span>
            <span className="roadmap-quarter">{phase.quarter}</span>
          </div>
          <p className="roadmap-tagline">{phase.tagline}</p>
          <ul className="roadmap-features">
            {phase.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      ))}
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
      <div className="container">
        <nav className="nav">
          <div className="nav-logo">
            <img src="/logo.png" alt="HoodBet" />
            <span>hood<em>bet</em>.fun</span>
          </div>
          <div className="nav-links">
            <a href="#manifesto">Manifesto</a>
            <a href="#hoodpot">HoodPot</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#hood-token">$HOOD</a>
          </div>
        </nav>

        <header className="hero">
          <div className="badge">{hero.badge}</div>
          <h1>
            {hero.headline}
            <span className="accent">{hero.headlineAccent}</span>
          </h1>
          <p className="lead">{hero.subheadline}</p>
          <div className="cta-row">
            <a className="btn btn-primary" href={APP_URL}>{hero.ctaPrimary}</a>
            <a className="btn btn-secondary" href="#manifesto">{hero.ctaSecondary}</a>
          </div>
          <p className="micro">{hero.micro}</p>
          <JackpotTicker />
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

        <section className="section" id="hoodpot">
          <p className="section-label">{ch3.subtitle}</p>
          <h2>{ch3.title}</h2>
          {ch3.body.map((p) => <p key={p}>{p}</p>)}
          <div className="steps">
            {ch3.steps.map((s) => (
              <div key={s.num} className="step">
                <div className="step-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
          <div className="cta-row" style={{ marginTop: '2rem' }}>
            <a className="btn btn-primary" href={APP_URL}>Deposit now</a>
            <a className="btn btn-secondary" href={`${EXPLORER}/address/${MORPHO}`} target="_blank" rel="noreferrer">Vault on-chain</a>
          </div>
        </section>

        <section className="section" id="fairness">
          <p className="section-label">{ch4.subtitle}</p>
          <h2>{ch4.title}</h2>
          {ch4.body.map((p) => <p key={p}>{p}</p>)}
          <div className="badges">
            {ch4.badges.map((b) => <span key={b}>{b}</span>)}
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
          <div className="tier-table">
            {tiers.map((t) => (
              <div key={t.name} className="tier-card">
                <h4>{t.name}</h4>
                <div className="min">{t.min} $HOOD</div>
                <p>{t.perks}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="roadmap">
          <p className="section-label">{roadmapSection.label}</p>
          <h2>{roadmapSection.title}</h2>
          <p>{roadmapSection.body}</p>
          <HoodBetRoadmap />
        </section>

        <section className="section" id="join" style={{ textAlign: 'center' }}>
          <h2>{joinSection.title}</h2>
          <p style={{ margin: '0 auto 1.5rem' }}>{joinSection.body}</p>
          <a className="btn btn-primary" href={APP_URL}>{joinSection.cta}</a>
        </section>

        <footer className="footer">
          <div className="footer-links">
            <a href="https://dev.pooltogether.com/protocol/design/" target="_blank" rel="noreferrer">PoolTogether</a>
            <a href="https://morpho.org/" target="_blank" rel="noreferrer">Morpho</a>
            <a href="https://docs.robinhood.com/chain/" target="_blank" rel="noreferrer">Robinhood Chain</a>
            <a href="https://www.virtuals.io/" target="_blank" rel="noreferrer">Virtuals</a>
          </div>
          <p>HoodBet.fun — experimental DeFi. Not financial advice.</p>
        </footer>
      </div>
    </div>
  )
}
