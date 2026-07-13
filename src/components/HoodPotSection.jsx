import { addresses, formatCountdown, formatUsd6 } from '../chain.js'
import { useProtocolStats } from '../hooks/useProtocolStats.js'
import { StackStrip } from './StackStrip.jsx'

const EXPLORER = 'https://robinhoodchain.blockscout.com'

export function HoodPotSection({ content, appUrl, stack }) {
  const { stats, now } = useProtocolStats()

  const countdown = stats?.drawClosesAt
    ? formatCountdown(Number(stats.drawClosesAt) - now)
    : '—'

  return (
    <section className="section section-featured hoodpot-section" id="hoodpot">
      <div className="hoodpot-header">
        <div className="featured-label">Live product</div>
        <StackStrip items={stack} className="hoodpot-stack" />
      </div>

      <div className="hoodpot-grid">
        <div className="hoodpot-copy">
          <p className="section-label">{content.subtitle}</p>
          <h2>{content.title}</h2>
          <p className="hoodpot-lead">{content.lead}</p>

          <ul className="hoodpot-highlights">
            {content.highlights.map((item) => (
              <li key={item.text}>
                <span className="hoodpot-highlight-icon" aria-hidden>{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <div className="cta-row hoodpot-cta-row">
            <a className="btn btn-primary btn-lg" href={appUrl}>
              Deposit on app.hoodbet.fun
            </a>
            <a
              className="btn btn-secondary"
              href={`${EXPLORER}/address/${addresses.prizeVault}`}
              target="_blank"
              rel="noreferrer"
            >
              PrizeVault on-chain
            </a>
          </div>
        </div>

        <aside className="hoodpot-live-card" aria-label="Live HoodPot stats">
          <div className="hoodpot-live-badge">
            <span className="hoodpot-live-dot" aria-hidden />
            Mainnet live
          </div>

          <div className="hoodpot-live-stat hoodpot-live-stat-primary">
            <span className="hoodpot-live-label">Prize pool</span>
            <strong>${stats ? formatUsd6(stats.jackpot) : '—'}</strong>
            <span className="hoodpot-live-hint">USDG jackpot</span>
          </div>

          <div className="hoodpot-live-row">
            <div className="hoodpot-live-stat">
              <span className="hoodpot-live-label">Vault TVL</span>
              <strong>${stats ? formatUsd6(stats.tvl) : '—'}</strong>
            </div>
            <div className="hoodpot-live-stat">
              <span className="hoodpot-live-label">Next draw</span>
              <strong>{countdown}</strong>
              <span className="hoodpot-live-hint">#{stats?.openDrawId?.toString() || '—'}</span>
            </div>
          </div>

          <div className="hoodpot-live-fees">
            <span>50% performance</span>
            <span className="hoodpot-live-fees-dot" aria-hidden>+</span>
            <span>5% management</span>
            <span className="hoodpot-live-fees-arrow" aria-hidden>→</span>
            <span className="hoodpot-live-fees-target">jackpot</span>
          </div>
        </aside>
      </div>

      <ol className="hoodpot-steps">
        {content.steps.map((step, index) => (
          <li key={step.num} className="hoodpot-step">
            <div className="hoodpot-step-marker">
              <span className="hoodpot-step-num">{step.num}</span>
              {index < content.steps.length - 1 && (
                <span className="hoodpot-step-connector" aria-hidden />
              )}
            </div>
            <div className="hoodpot-step-body">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
