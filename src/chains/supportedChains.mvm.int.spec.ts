import type { CoinSupply } from '@mysten/sui/client'
import { SuiClient } from '@mysten/sui/client'
import { describe, expect, test } from 'vitest'

import { supportedMVMChains } from './supportedChains.mvm.js'

const WalletAddress =
  '0xcc2bd176a478baea9a0de7a24cd927661cc6e860d5bacecb9a138ef20dbab231'

const SuiTypeName =
  '0x0000000000000000000000000000000000000000000000000000000000000002::sui::SUI'

const SuiTotalSupply = '10000000000000000000' // 1B tokens

describe.concurrent('MVM chains RPC check', () => {
  const rpcUrls = supportedMVMChains.flatMap((chain) =>
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
      const client = new SuiClient({ url: rpcUrl })

      const [coins, balance, ownedObjects, suiSupply] =
        await Promise.allSettled([
          client.getCoins({
            owner: WalletAddress,
          }),
          client.getBalance({ owner: WalletAddress }),
          client.getOwnedObjects({ owner: WalletAddress }),
          client.getTotalSupply({ coinType: SuiTypeName }),
        ])

      expect(coins.status).toBe('fulfilled')
      expect(balance.status).toBe('fulfilled')
      expect(ownedObjects.status).toBe('fulfilled')
      expect(suiSupply.status).toBe('fulfilled')

      expect(
        (suiSupply as PromiseFulfilledResult<CoinSupply>).value.value
      ).toBe(SuiTotalSupply)
    }
  )
})

describe.concurrent('MVM chains block explorer check', () => {
  const blockExplorerUrls = supportedMVMChains.flatMap((chain) =>
    chain.metamask.blockExplorerUrls.map((blockExplorerUrl) => ({
      blockExplorerUrl: blockExplorerUrl,
      chainId: chain.id,
      chainName: chain.name,
    }))
  )

  test.for(blockExplorerUrls)(
    `block explorer should be alive $chainName - $chainId - $blockExplorerUrl`,
    { timeout: 10_000, retry: 3 },
    async ({ blockExplorerUrl }) => {
      const response = await fetch(blockExplorerUrl)
      expect(response.url).toBe(blockExplorerUrl)
      expect(response.ok).toBe(true)
      expect(response.status).toBe(200)
    }
  )
})
