export const hero = {
  badge: 'Robinhood Chain · Morpho · HoodPot',
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
    body: [
      'HoodPot is our first weapon: a no-loss savings lottery.',
      'Deposit USDG into the Morpho vault. Your capital stays withdrawable at all times.',
      'Yield — and protocol fees — fuel a shared jackpot.',
      'Every 24 hours, a random draw picks winners. More deposits, longer duration, better odds.',
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

export const roadmap = [
  {
    name: 'HoodPot',
    quarter: 'Q3 2026',
    status: 'in_progress',
    tagline: 'Your first shot. Deposit, lose nothing, someone wins it all.',
    features: ['No-loss savings lottery', 'Daily draws', 'Landing + dApp live'],
  },
  {
    name: 'HoodStats',
    quarter: 'Q4 2026',
    status: 'coming_soon',
    tagline: 'No black box. See everything.',
    features: ['Live winners dashboard', 'Odds calculator', 'Jackpot history'],
  },
  {
    name: 'HoodCrew',
    quarter: 'Q4 2026',
    status: 'coming_soon',
    tagline: 'Bring the crew. Earn together.',
    features: ['On-chain referral', 'XP leaderboard', '$HOOD tier multiplier'],
  },
  {
    name: 'HoodPredict',
    quarter: 'Q1 2027',
    status: 'coming_soon',
    tagline: 'Trade the Future. Bet on what you believe.',
    features: ['Binary prediction markets', 'Stock Tokens NVDA/AAPL', 'Chainlink oracles'],
  },
  {
    name: 'HoodArena',
    quarter: 'Q2 2027',
    status: 'coming_soon',
    tagline: 'Create the market. The community decides.',
    features: ['UGC markets', 'Creator fees', 'Moderation DAO'],
  },
  {
    name: 'HoodMobile',
    quarter: 'Q2 2027',
    status: 'coming_soon',
    tagline: 'HoodBet in your pocket.',
    features: ['Win push notifications', 'Robinhood Wallet deep link', 'One-tap deposit'],
  },
]

export const tiers = [
  { name: 'Scout', min: '0', perks: 'Base HoodPot access' },
  { name: 'Hood', min: '10,000', perks: 'Badge + 1.25× referral' },
  { name: 'Legend', min: '100,000', perks: '1.5× referral + HoodPredict beta' },
  { name: 'OG', min: '1,000,000', perks: '2× referral + governance' },
]

export const roadmapSection = {
  label: 'The future is already written',
  title: 'HoodPot is just the beginning.',
  body: 'We\'re building the most transparent prediction markets platform on Robinhood Chain.',
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
