import { ChainId, ChainKey, CoinKey } from '@lifi/types'
import { describe, expect, it, test } from 'vitest'
import {
  findDefaultToken,
  findTokenByChainIdAndAddress,
  findWrappedGasOnChain,
} from '../coins/index.js'
import {
  getChainById,
  getChainByKey,
  supportedChains,
} from './supportedChains.js'
import { supportedEVMChains } from './supportedChains.evm.js'
import { prefixChainId } from './utils.js'

test('getChainById', () => {
  expect(getChainById(ChainId.ETH)).toBeDefined()
})

test('getChainByKey', () => {
  expect(getChainByKey(ChainKey.ETH)).toBeDefined()
})

test('native and wrapped token defined for all chains', () => {
  // currently unused chains
  const ignoredChainsForNativeToken = [ChainId.FSN, ChainId.TLO, ChainId.RSK]
  const ignoredChainsForWrappedToken = [
    ...ignoredChainsForNativeToken,
    ChainId.BTC,
    ChainId.BCH,
    ChainId.LTC,
    ChainId.DGE,
    ChainId.SUI,
    ChainId.HPL,
  ]
  for (const chain of supportedChains) {
    if (ignoredChainsForNativeToken.includes(chain.id)) {
      continue
    }

    try {
      const gasToken = findDefaultToken(chain.coin, chain.id)
      expect(gasToken).toBeDefined()
    } catch (e) {
      throw new Error(`Failed to load gas token for ${chain.name}(${chain.id})`)
    }
  }

  for (const chain of supportedChains) {
    if (ignoredChainsForWrappedToken.includes(chain.id)) {
      continue
    }

    try {
      const wrappedGasToken = findWrappedGasOnChain(chain.id)
      expect(wrappedGasToken).toBeDefined()
    } catch (e) {
      throw new Error(
        `Failed to load wrapped gas token for ${chain.name}(${chain.id})`
      )
    }
  }
})

describe('findTokenByChainIdAndAddress', () => {
  describe('token has no name override', () => {
    it('returns a token with the coin name', () => {
      expect(
        findTokenByChainIdAndAddress(
          ChainId.LNA,
          '0xa219439258ca9da29e9cc4ce5596924745e12b93'
        )!.name
      ).toEqual(CoinKey.USDT)
    })
  })

  describe('token has a name override', () => {
    it('returns a token with the overrode name', () => {
      expect(
        findTokenByChainIdAndAddress(
          ChainId.SOL,
          '33fsBLA8djQm82RpHmE3SuVrPGtZBWNYExsEUeKX1HXX'
        )!.name
      ).toEqual('Binance USD (Wormhole from Ethereum)')
    })
  })
})

describe('validate chains', () => {
  const ignoredChains = [ChainId.HPL]
  supportedEVMChains.forEach((chain) => {
    it(`validate chain ${chain.name}`, () => {
      if (ignoredChains.includes(chain.id)) {
        return
      }

      const chainId = prefixChainId(chain.id)

      // chain ids match
      expect(chainId).toEqual(chain.metamask.chainId)

      // rpcs defined
      expect(chain.metamask.rpcUrls.length).toBeGreaterThan(0)
    })
  })
})

// This public explorer test works for all supported chains (EVM and non-EVM) because
// all chains share a `metamask` object structured the same way, if that's to change
// this test will have to be adapted per VM like the RPC tests.
describe.concurrent('validate blockchain explorers', () => {
  supportedChains.forEach((chain) => {
    expect(chain.metamask.blockExplorerUrls.length).toBeGreaterThan(0)
  })

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
