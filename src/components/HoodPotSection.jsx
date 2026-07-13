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
      <header className="hoodpot-intro">
        <div className="featured-label">Live product</div>
        <p className="section-label">{content.subtitle}</p>
        <h2 className="hoodpot-title">{content.title}</h2>
        <StackStrip items={stack} className="hoodpot-stack" />
      </header>

      <div className="hoodpot-live-bar" aria-label="Live HoodPot stats">
        <div className="hoodpot-metric hoodpot-metric-primary">
          <span className="hoodpot-metric-label">Prize pool</span>
          <strong className="hoodpot-metric-value">${stats ? formatUsd6(stats.jackpot) : '—'}</strong>
          <span className="hoodpot-metric-hint">USDG jackpot</span>
        </div>
        <div className="hoodpot-metric">
          <span className="hoodpot-metric-label">Vault TVL</span>
          <strong className="hoodpot-metric-value">${stats ? formatUsd6(stats.tvl) : '—'}</strong>
        </div>
        <div className="hoodpot-metric">
          <span className="hoodpot-metric-label">Next draw</span>
          <strong className="hoodpot-metric-value">{countdown}</strong>
          <span className="hoodpot-metric-hint">#{stats?.openDrawId?.toString() || '—'}</span>
        </div>
        <div className="hoodpot-metric hoodpot-metric-fees">
          <span className="hoodpot-metric-label">Fees → jackpot</span>
          <strong className="hoodpot-metric-value">50% + 5%</strong>
          <span className="hoodpot-metric-hint">performance + management</span>
        </div>
      </div>

      <div className="hoodpot-body">
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

      <ol className="hoodpot-steps">
        {content.steps.map((step) => (
          <li key={step.num} className="hoodpot-step">
            <span className="hoodpot-step-num">{step.num}</span>
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
