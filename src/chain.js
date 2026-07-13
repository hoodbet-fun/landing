const RPC = 'https://rpc.mainnet.chain.robinhood.com'

export const addresses = {
  morphoVault: '0xDF06045aBAE69d6e73a7F0197FED917032d22194',
  prizePool: '0x14e5004a757a85439fc379c8acd5b3b3cdf47344',
  prizeVault: '0x11da9bE66d20328c6eA16d52079890322fA90f24',
  hoodToken: '0x3b4b9E8982449aa6712F0d13162252A4a871D43e',
}

const EXPLORER = 'https://robinhoodchain.blockscout.com'

export const hoodTokenLinks = {
  virtuals: 'https://app.virtuals.io/virtuals/105591',
  explorer: `${EXPLORER}/address/${addresses.hoodToken}`,
}

async function ethCall(to, data) {
  const res = await fetch(RPC, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'eth_call',
      params: [{ to, data }, 'latest'],
    }),
  })
  const json = await res.json()
  if (json.error) throw new Error(json.error.message)
  return json.result
}

function decodeUint(hex) {
  if (!hex || hex === '0x') return 0n
  return BigInt(hex)
}

function padUint24(id) {
  return id.toString(16).padStart(64, '0')
}

export async function fetchProtocolStats() {
  const [jackpotHex, tvlHex, openDrawHex] = await Promise.all([
    ethCall(addresses.prizePool, '0x0937eb54'),
    ethCall(addresses.morphoVault, '0x01e1d114'),
    ethCall(addresses.prizePool, '0x447d41b5'),
  ])

  const openDrawId = decodeUint(openDrawHex)
  let drawClosesAt = 0n
  if (openDrawId > 0n) {
    const closesHex = await ethCall(
      addresses.prizePool,
      `0xdd1ecaec${padUint24(openDrawId)}`
    )
    drawClosesAt = decodeUint(closesHex)
  }

  return {
    jackpot: decodeUint(jackpotHex),
    tvl: decodeUint(tvlHex),
    openDrawId,
    drawClosesAt,
  }
}

export function formatUsd6(value) {
  const n = Number(value) / 1e6
  if (!Number.isFinite(n)) return '—'
  return n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export function formatCountdown(seconds) {
  if (seconds <= 0) return 'Closing…'
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) return `${h}h ${m}m`
  if (m > 0) return `${m}m ${s}s`
  return `${s}s`
}
