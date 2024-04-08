import { ChainId, ChainKey, CoinKey } from '@lifi/types'

import {
  findDefaultToken,
  findTokenByChainIdAndAddress,
  findWrappedGasOnChain,
} from '../coins'

import { getChainById, getChainByKey, supportedChains } from './supportedChains'
import { prefixChainId } from './utils'
import { supportedEVMChains } from './supportedChains.evm'

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
    ChainId.METT,
    ChainId.DIOT,
    ChainId.HECT,
    ChainId.FUST,
    ChainId.TLOT,
    ChainId.RSKT,
  ]
  const ignoredChainsForWrappedToken = [
    ...ignoredChainsForNativeToken,
    ChainId.BTC,
    ChainId.BCH,
    ChainId.LTC,
    ChainId.DGE,
  ]
  for (const chain of supportedChains) {
    if (ignoredChainsForNativeToken.includes(chain.id)) continue

    try {
      const gasToken = findDefaultToken(chain.coin, chain.id)
      expect(gasToken).toBeDefined()
    } catch (e) {
      throw new Error(`Failed to load gas token for ${chain.name}(${chain.id})`)
    }
  }

  for (const chain of supportedChains) {
    if (ignoredChainsForWrappedToken.includes(chain.id)) continue

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
          ChainId.LNAT,
          '0xb706319d37b945727e71ae0d4353699d19112576'
        )!.name
      ).toEqual(CoinKey.CXTT)
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
