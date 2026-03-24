import { describe, expect, test } from 'vitest'
import { supportedSTLChains } from './supportedChains.stl.js'

const TestTransactionHash =
  'b9d0b229812a7e729b5ea43cb8218786e2c5e6f4e80be59e86a36c7eff4a03c4'

describe.concurrent('STL chains RPC check', () => {
  const rpcUrls = supportedSTLChains.flatMap((chain) =>
    chain.metamask.rpcUrls.map((rpcUrl) => ({
      rpcUrl: rpcUrl,
      chainId: chain.id,
      chainName: chain.name,
    }))
  )

  test.for(rpcUrls)(
    `should successfully get chain ID from $chainName - $chainId RPC: $rpcUrl`,
    { timeout: 10_000, retry: 3 },
    async ({ rpcUrl }) => {
      const [latestLedger, transaction] = await Promise.allSettled([
        fetch(rpcUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 1,
            method: 'getLatestLedger',
          }),
        }),
        fetch(rpcUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: 2,
            method: 'getTransaction',
            params: { hash: TestTransactionHash },
          }),
        }),
      ])

      expect(latestLedger.status).toBe('fulfilled')
      expect(transaction.status).toBe('fulfilled')

      if (latestLedger.status === 'fulfilled') {
        expect(latestLedger.value.ok).toBe(true)
        const data = await latestLedger.value.json()
        expect(data.result).toBeDefined()
        expect(data.result.sequence).toBeGreaterThan(0)
        expect(data.result.protocolVersion).toBeGreaterThan(0)
      }

      if (transaction.status === 'fulfilled') {
        expect(transaction.value.ok).toBe(true)
      }
    }
  )
})
