import type { StaticToken } from '@lifi/types'
import { isAddress } from 'viem'
import { describe, expect, it } from 'vitest'
import { supportedEVMChains } from '../chains/supportedChains.evm.js'
import { defaultCoins, wrappedTokens } from './coins.js'

const evmChainIds = new Set(supportedEVMChains.map((chain) => chain.id))

const evmTokens: StaticToken[] = [
  ...defaultCoins.flatMap((coin) => Object.values(coin.chains)),
  ...Object.values(wrappedTokens),
].filter((token) => evmChainIds.has(token.chainId))

describe('validate EVM token addresses', () => {
  it('has tokens to check', () => {
    expect(evmTokens.length).toBeGreaterThan(0)
  })

  // A mixed-case address carries its own EIP-55 checksum, so a typo in the
  // casing makes it invalid. Services that compare addresses verbatim then
  // fail to resolve the token instead of silently normalising it. All-lowercase
  // addresses carry no checksum and stay valid.
  it('are valid EIP-55 addresses', () => {
    const invalid = evmTokens
      .filter((token) => !isAddress(token.address, { strict: true }))
      .map(
        (token) =>
          `${token.coinKey} on chain ${token.chainId}: ${token.address}`
      )

    expect(invalid).toEqual([])
  })
})
