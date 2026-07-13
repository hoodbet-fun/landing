export const hero = {
  stack: [
    { label: 'Robinhood Chain', href: 'https://docs.robinhood.com/chain/' },
    { label: 'Morpho', href: 'https://morpho.org/' },
    { label: 'HoodPot', href: 'https://app.hoodbet.fun' },
  ],
  headline: 'Trade the Future.',
  headlineAccent: 'Own the Outcome.',
  subheadline:
    'The first protocol that takes DeFi yield and redistributes it to players — not the house. You deposit. You keep your capital. Someone wins the jackpot. It could be you.',
  ctaPrimary: 'Enter HoodPot',
  ctaSecondary: 'Read the story',
  micro: 'No principal loss. Only upside.',
}

export const manifesto = [
  {
    id: 'manifesto',
    title: 'Did you know you\'re already losing?',
    subtitle: 'The game is rigged',
    body: [
      'Put money in the bank. Earn 0.5%. The bank keeps the rest.',
      'Go to a bookmaker. The house always has the edge. You bet against math.',
      'Enter DeFi. Protocols take fees, performance, management. Yield goes to insiders.',
    ],
    punchline: 'The system is designed to make you lose slowly — or fast.',
  },
  {
    id: 'the-hood',
    title: 'We steal the yield. We give it to you.',
    subtitle: 'The crew enters',
    body: [
      'HoodBet is built on Robinhood Chain with the spirit of Robin Hood: take from institutions and redistribute to players.',
      'We\'re not a bank. We\'re not a casino. We\'re an open protocol where Morpho yield — 50% performance fee and 5% management — flows into the HoodPot.',
    ],
    punchline: 'Don\'t bet blind. Bet with HoodBet.',
    stats: [
      { value: '50%', label: 'performance fee → jackpot' },
      { value: '5%', label: 'management fee → jackpot' },
      { value: '100%', label: 'on-chain transparency' },
    ],
  },
  {
    id: 'hoodpot',
    title: 'Deposit. Don\'t lose. Win.',
    subtitle: 'HoodPot: the first shot',
    lead:
      'HoodPot is our first weapon: a no-loss savings lottery on Robinhood Chain mainnet. Deposit USDG, keep your capital, and compete for a shared jackpot fueled by yield and protocol fees.',
    highlights: [
      { icon: '◆', text: 'USDG in the prize vault — zero lock-up, withdraw anytime' },
      { icon: '◎', text: 'Yield and fees (50% + 5%) flow straight into the jackpot' },
      { icon: '◷', text: 'Daily draw every 24 hours — verifiable on-chain' },
      { icon: '⇈', text: 'Bigger deposits and longer duration improve your odds' },
    ],
    steps: [
      { num: '01', title: 'Deposit', text: 'Put USDG in HoodPot. Zero lock-up.' },
      { num: '02', title: 'Accumulate', text: 'Yield grows. Fees feed the jackpot.' },
      { num: '03', title: 'Play', text: 'Daily draw. Your odds scale with your deposit.' },
      { num: '04', title: 'Win', text: 'Claim the jackpot or keep playing. Your capital is always yours.' },
    ],
  },
  {
    id: 'fairness',
    title: 'No backdoors. No tricks.',
    subtitle: 'Fairness by design',
    body: [
      'Every draw is verifiable on-chain. Every deposit is tracked with TWAB — the longer you stay, the more you count.',
      'The protocol is immutable. Governance sits in a public Safe multisig.',
      'Morpho curates the vault. HoodPot guarantees the no-loss model. You control the wallet.',
    ],
    badges: ['Safe', 'Morpho', 'HoodPot', 'Robinhood Chain', 'Blockscout'],
  },
  {
    id: 'hood-token',
    title: 'Hold $HOOD, unlock the Hood.',
    subtitle: 'Virtuals token',
    body: [
      'The HoodBet agent token on Virtuals.io unlocks tiers Scout → Hood → Legend → OG.',
      'The more $HOOD you hold, the more referral boost and early access to future products.',
    ],
  },
]

export const roadmapTracks = [
  {
    id: 'foundation',
    label: 'Foundation',
    description: 'No-loss prize savings on Robinhood Chain — deposit USDG, keep your capital, win the jackpot.',
    items: [
      {
        name: 'HoodPot',
        quarter: 'Q3 2026',
        status: 'live',
        tagline: 'Your first shot. Deposit, lose nothing, someone wins it all.',
        features: [
          'Live on Robinhood Chain mainnet',
          'Daily draws with TWAB-weighted odds',
          'Morpho yield + protocol fees → jackpot',
          'USDG prize vault — withdraw anytime',
        ],
        href: 'https://app.hoodbet.fun',
        linkLabel: 'app.hoodbet.fun →',
        inspiredBy: 'Prize Vault — the core no-loss savings game',
      },
    ],
  },
  {
    id: 'transparency',
    label: 'Transparency & community',
    description: 'No black box. See every draw, every winner, every odd — and grow the crew together.',
    items: [
      {
        name: 'HoodStats',
        quarter: 'Q4 2026',
        status: 'coming_soon',
        tagline: 'No black box. See everything.',
        features: [
          'Live winners dashboard & draw explorer',
          'Real-time odds calculator (TWAB-based)',
          'Jackpot history & prize distribution charts',
          'Verifiable RNG audit trail per draw',
        ],
        inspiredBy: 'Transparent draws — anyone can verify who won and why',
      },
      {
        name: 'HoodClaim',
        quarter: 'Q4 2026',
        status: 'coming_soon',
        tagline: 'Win. Receive. No friction.',
        features: [
          'Auto-send prizes to winner wallets',
          'No manual claim step for depositors',
          'Incentivized claimer bots (VRGDA-style)',
          'Push / email alerts on wins',
        ],
        inspiredBy: 'Auto prize distribution — prizes land in your wallet',
      },
      {
        name: 'HoodCrew',
        quarter: 'Q4 2026',
        status: 'coming_soon',
        tagline: 'Bring the crew. Earn together.',
        features: [
          'On-chain referral with $HOOD tier multipliers',
          'XP leaderboard & crew achievements',
          'Group savings pots — save and win as a squad',
          'Prize delegation for campaigns & airdrops',
        ],
        inspiredBy: 'Group savings & no-loss marketing recipes',
      },
    ],
  },
  {
    id: 'protocol',
    label: 'Permissionless protocol',
    description: 'Extend the hyperstructure — new vaults, swaps, bots, and interfaces without gatekeepers.',
    items: [
      {
        name: 'HoodSwap',
        quarter: 'Q1 2027',
        status: 'coming_soon',
        tagline: 'Swap in. Start winning.',
        features: [
          'Zap any token into HoodPot prize USDG',
          'No separate deposit flow — swap and play',
          'Aggregator routing across Robinhood Chain DEXs',
          'Gas-optimized single-tx entry',
        ],
        inspiredBy: 'Cabana Swaps — trade directly into prize tokens',
      },
      {
        name: 'HoodVaults',
        quarter: 'Q1 2027',
        status: 'coming_soon',
        tagline: 'Launch your own prize vault.',
        features: [
          'Permissionless ERC-4626 vault factory',
          'Any Morpho-compatible yield source',
          'Custom fee splits (e.g. 50/50 yield vs prizes)',
          'Multi-asset pools sharing one prize pool',
        ],
        inspiredBy: 'Cabana Factory — deploy custom prize vaults',
      },
      {
        name: 'HoodBots',
        quarter: 'Q1 2027',
        status: 'coming_soon',
        tagline: 'Keep the protocol running. Get paid.',
        features: [
          'Draw auction bots — trigger daily RNG draws',
          'Yield liquidation bots — fees to jackpot',
          'Prize claimer bots — earn claim fees',
          'Open bot marketplace with protocol incentives',
        ],
        inspiredBy: 'PoolTogether Builders — incentivized maintenance',
      },
      {
        name: 'HoodLists',
        quarter: 'Q1 2027',
        status: 'coming_soon',
        tagline: 'Curate. Share. Discover vaults.',
        features: [
          'Shareable JSON vault lists (Uniswap-list standard)',
          'Community-curated HoodPot vault directories',
          'Deep links: hoodbet.fun/?list=…',
          'Multi-interface vault discovery',
        ],
        inspiredBy: 'Cabana Lists — curate and share prize vaults',
      },
    ],
  },
  {
    id: 'markets',
    label: 'Prediction & markets',
    description: 'Beyond prize savings — trade beliefs, create markets, own the outcome.',
    items: [
      {
        name: 'HoodPredict',
        quarter: 'Q1 2027',
        status: 'coming_soon',
        tagline: 'Trade the Future. Bet on what you believe.',
        features: [
          'Binary prediction markets on-chain',
          'Stock Tokens — NVDA, AAPL, and more',
          'Chainlink oracle resolution',
          '$HOOD Legend tier early access',
        ],
      },
      {
        name: 'HoodArena',
        quarter: 'Q2 2027',
        status: 'coming_soon',
        tagline: 'Create the market. The community decides.',
        features: [
          'User-generated prediction markets',
          'Creator fees on market volume',
          'Moderation DAO + dispute resolution',
          'Community liquidity bootstrapping',
        ],
      },
    ],
  },
  {
    id: 'distribution',
    label: 'Distribution & builders',
    description: 'HoodBet everywhere — mobile, wallets, SDKs, and third-party interfaces.',
    items: [
      {
        name: 'HoodMobile',
        quarter: 'Q2 2027',
        status: 'coming_soon',
        tagline: 'HoodBet in your pocket.',
        features: [
          'Win push notifications',
          'Robinhood Wallet deep link',
          'One-tap deposit & withdraw',
          'Live odds and countdown widgets',
        ],
      },
      {
        name: 'HoodSDK',
        quarter: 'Q2 2027',
        status: 'coming_soon',
        tagline: 'Build on the hyperstructure.',
        features: [
          'TypeScript SDK for vaults, draws & TWAB',
          'React hooks + SvelteKit / Next.js templates',
          'Subgraph & indexer for custom frontends',
          'Interfaces directory on hoodbet.fun',
        ],
        inspiredBy: 'Multi-interface ecosystem — many apps, one protocol',
      },
    ],
  },
]

/** @deprecated use roadmapTracks */
export const roadmap = roadmapTracks.flatMap((track) => track.items)

export const tiers = [
  { name: 'Scout', min: '0', perks: 'Base HoodPot access' },
  { name: 'Hood', min: '10,000', perks: 'Badge + 1.25× referral' },
  { name: 'Legend', min: '100,000', perks: '1.5× referral + HoodPredict beta' },
  { name: 'OG', min: '1,000,000', perks: '2× referral + governance' },
]

export const roadmapSection = {
  label: 'The future is already written',
  title: 'HoodPot is just the beginning.',
  body:
    'We\'re building a permissionless prize-savings hyperstructure on Robinhood Chain — transparent, non-custodial, and extensible by anyone. HoodPot is live. Everything else follows the same playbook PoolTogether proved at scale: no-loss deposits, verifiable draws, and yield that becomes prizes instead of banker profit.',
  pillars: [
    { label: 'Prize savings', text: 'Deposit USDG, never lose principal, compete for jackpots.' },
    { label: 'Hyperstructure', text: 'Immutable core contracts, permissionless vaults & bots.' },
    { label: 'Multi-interface', text: 'App, swap, mobile, SDK — many doors, one protocol.' },
    { label: 'Prediction markets', text: 'From savings lottery to betting on the future.' },
  ],
  inspiration: 'Inspired by PoolTogether V5 · extended for Robinhood Chain + Morpho',
}

export const joinSection = {
  title: 'The crew is waiting.',
  body: 'Join HoodPot. Hold $HOOD. Win the future.',
  cta: 'Enter HoodPot',
  telegram: 'Join Telegram',
}

export const developersSection = {
  label: 'For builders',
  title: 'Open source. Fully documented.',
  body:
    'HoodBet is built in public. Smart contracts, bots, subgraph, and frontends live on GitHub. Architecture, deploy runbooks, and security checklists are on GitBook.',
  github: {
    label: 'GitHub',
    hint: 'hoodbet-fun org · 6 repos',
    repos: ['docs', 'contracts', 'app', 'landing', 'bots', 'subgraph', 'hoodbet'],
  },
  gitbook: {
    label: 'GitBook',
    hint: 'Protocol docs & deploy guides',
  },
}
