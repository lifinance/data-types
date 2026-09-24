import { describe, expect, test } from 'vitest'
import { supportedChains } from './supportedChains.js'

// This public explorer test works for all supported chains (EVM and non-EVM) because
// all chains share a `metamask` object structured the same way, if that's to change
// this test will have to be adapted per VM like the RPC tests.
// The offline check that every chain has at least one explorer URL is in
// supportedChains.unit.spec.ts, so the PR gate runs it.
describe.concurrent('validate blockchain explorers', () => {
  const explorerUrls = supportedChains.flatMap((chain) =>
    chain.metamask.blockExplorerUrls.map((blockExplorerUrl) => ({
      blockExplorerUrl,
      chainKey: chain.key,
    }))
  )

  test.for(explorerUrls)(
    'should get a valid response from $chainKey explorer: $blockExplorerUrl',
    { timeout: 10_000, retry: 3 },
    async ({ blockExplorerUrl }) => {
      const response = await fetch(blockExplorerUrl, {
        method: 'GET',
      })

      // some explorers have advanced bot protections, best we can do is
      // check for any valid TCP response before timeout
      expect(response).toBeDefined()
    }
  )
})
