import { createPublicClient, http } from 'viem'
import { describe, expect, test } from 'vitest'
import { supportedEVMChains } from './supportedChains.evm'

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
    async ({ rpcUrl, chainId }) => {
      const client = createPublicClient({
        transport: http(rpcUrl),
      })

      const _chainId = await client.getChainId()
      expect(_chainId).toBe(chainId)
    }
  )
})

describe.concurrent('EVM chains block explorer check', () => {
  const blockExplorerUrls = supportedEVMChains.flatMap((chain) =>
    chain.metamask.blockExplorerUrls.map((blockExplorerUrl) => ({
      blockExplorerUrl: blockExplorerUrl,
      chainId: chain.id,
      chainName: chain.name,
    }))
  )

  test.for(blockExplorerUrls)(
    `block explorer should be alive $chainName - $chainId - $blockExplorerUrl`,
    async ({ blockExplorerUrl }) => {
      const response = await fetch(blockExplorerUrl)
      expect(response.url).toBe(blockExplorerUrl)
      expect(response.ok).toBe(true)
      expect(response.status).toBe(200)
    }
  )
})
