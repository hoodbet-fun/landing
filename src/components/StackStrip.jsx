const DEFAULT_STACK = [
  { label: 'Robinhood Chain', href: 'https://docs.robinhood.com/chain/' },
  { label: 'Morpho', href: 'https://morpho.org/' },
  { label: 'HoodPot', href: 'https://app.hoodbet.fun' },
]

export function StackStrip({ items = DEFAULT_STACK, chainId = 4663, className = '' }) {
  return (
    <div className={`stack-strip ${className}`.trim()} role="list" aria-label="Protocol stack">
      <div className="stack-strip-protocols">
        {items.map((item, i) => (
          <span key={item.label} className="stack-strip-item" role="listitem">
            {i > 0 && <span className="stack-strip-dot" aria-hidden>·</span>}
            {item.href ? (
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </span>
        ))}
      </div>
      <span className="stack-strip-divider" aria-hidden />
      <span className="stack-strip-live">
        <span className="stack-strip-live-dot" aria-hidden />
        Mainnet live
        <span className="stack-strip-chain">· {chainId}</span>
      </span>
    </div>
  )
}
