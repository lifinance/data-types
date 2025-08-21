import { describe, expect, test } from 'vitest'
import { supportedTVMChains } from './supportedChains.tvm'
import { TronWeb } from 'tronweb'

const WalletAddress = 'TJRabPrwbZy45sbavfcjinPJC18kjpRTv8'
const TestContractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'

describe.concurrent('TVM chains RPC check', () => {
  const rpcUrls = supportedTVMChains.flatMap((chain) =>
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
      const tronWeb = new TronWeb({
        fullHost: rpcUrl,
      })

      const [blockNumber, chainId, accountInfo, contractInfo] =
        await Promise.allSettled([
          tronWeb.trx.getCurrentBlock(),
          tronWeb.trx.getChainParameters(),
          tronWeb.trx.getAccount(WalletAddress),
          tronWeb.trx.getContract(TestContractAddress),
        ])

      expect(blockNumber.status).toBe('fulfilled')
      expect(chainId.status).toBe('fulfilled')
      expect(accountInfo.status).toBe('fulfilled')
      expect(contractInfo.status).toBe('fulfilled')

      if (blockNumber.status === 'fulfilled') {
        expect(blockNumber.value).toBeDefined()
        expect(typeof blockNumber.value.block_header).toBe('object')
      }

      if (chainId.status === 'fulfilled') {
        expect(chainId.value).toBeDefined()
        expect(Array.isArray(chainId.value)).toBe(true)
      }
    }
  )
})
