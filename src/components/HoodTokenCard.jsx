import { useState } from 'react'
import { addresses, hoodTokenLinks } from '../chain.js'

export function HoodTokenCard() {
  const [copied, setCopied] = useState(false)

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(addresses.hoodToken)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="hood-token-card" aria-label="Buy $HOOD on Virtuals">
      <div className="hood-token-card-head">
        <span className="hood-token-card-label">Agent token</span>
        <strong className="hood-token-card-title">$HOOD · HoodBet.fun by Virtuals</strong>
      </div>

      <div className="hood-token-address-row">
        <code className="hood-token-address">{addresses.hoodToken}</code>
        <button
          type="button"
          className="hood-token-copy"
          onClick={copyAddress}
          aria-label="Copy $HOOD contract address"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="hood-token-actions">
        <a
          className="btn btn-primary"
          href={hoodTokenLinks.virtuals}
          target="_blank"
          rel="noreferrer"
        >
          Buy on Virtuals
        </a>
        <a
          className="btn btn-secondary"
          href={hoodTokenLinks.explorer}
          target="_blank"
          rel="noreferrer"
        >
          View on Blockscout
        </a>
        <a className="btn btn-ghost hood-token-tiers-link" href="#hood-tiers">
          Tiers ↓
        </a>
      </div>

      <p className="hood-token-note">
        <strong>Scout tier = 0 $HOOD</strong> — HoodPot works without holding.
      </p>
    </section>
  )
}
