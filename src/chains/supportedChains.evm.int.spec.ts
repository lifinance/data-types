import { createPublicClient, http } from 'viem'
import { describe, expect, test } from 'vitest'
import { supportedEVMChains } from './supportedChains.evm.js'

describe.concurrent('EVM chains RPC check', () => {
  const rpcUrls = supportedEVMChains.flatMap((chain) =>
    chain.metamask.rpcUrls.map((rpcUrl) => ({
      rpcUrl: rpcUrl,
      chainId: chain.id,
      chainName: chain.name,
    }))
  )

  test.for(rpcUrls)(
    `should successfully get chain ID from $chainName - $chainId RPC: $rpcUrl`,
    { timeout: 10_000, retry: 3 },
    async ({ rpcUrl, chainId }) => {
      const client = createPublicClient({
        transport: http(rpcUrl),
      })

      const _chainId = await client.getChainId()
      expect(_chainId).toBe(chainId)
    }
  )
})
