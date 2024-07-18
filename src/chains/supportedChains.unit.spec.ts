import { ChainId, ChainKey, CoinKey } from '@lifi/types'
import { describe, expect, it, test } from 'vitest'
import {
  findDefaultToken,
  findTokenByChainIdAndAddress,
  findWrappedGasOnChain,
} from '../coins'
import { getChainById, getChainByKey, supportedChains } from './supportedChains'
import { supportedEVMChains } from './supportedChains.evm'
import { prefixChainId } from './utils'

test('getChainById', () => {
  expect(getChainById(ChainId.ETH)).toBeDefined()
})

test('getChainByKey', () => {
  expect(getChainByKey(ChainKey.ETH)).toBeDefined()
})

test('native token defined for all chains', () => {
  // currently unused chains
  const ignoredChainsForNativeToken = [
    ChainId.FSN,
    ChainId.EXP,
    ChainId.TCH,
    ChainId.UBQ,
    ChainId.MET,
    ChainId.DIO,
    ChainId.TLO,
    ChainId.SHI,
    ChainId.GL1,
    ChainId.RSK,
    ChainId.TBW,
  ]
  const ignoredChainsForWrappedToken = [
    ...ignoredChainsForNativeToken,
    ChainId.BTC,
    ChainId.BCH,
    ChainId.LTC,
    ChainId.DGE,
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
  supportedEVMChains.forEach((chain) => {
    it(`validate chain ${chain.name}`, () => {
      // blockExplorerUrls
      expect(chain.metamask.blockExplorerUrls.length).toBeGreaterThan(0)
      chain.metamask.blockExplorerUrls.forEach((blockExplorerUrl) => {
        expect(blockExplorerUrl.startsWith('https://')).toBeTruthy()
        expect(blockExplorerUrl.endsWith('/')).toBeTruthy()
      })

      const chainId = prefixChainId(chain.id)

      // chain ids match
      expect(chainId).toEqual(chain.metamask.chainId)

      // rpcs defined
      expect(chain.metamask.rpcUrls.length).toBeGreaterThan(0)
    })
  })
})
