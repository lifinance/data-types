import { Connection, PublicKey } from '@solana/web3.js'
import { describe, expect, test } from 'vitest'
import { supportedSolanaChains } from './supportedChains.svm'

const TokenProgramAddress = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
const WalletAddress = '6AUWsSCRFSCbrHKH9s84wfzJXtD6mNzAHs11x6pGEcmJ'

describe.concurrent('SVM chains RPC check', () => {
  const rpcUrls = supportedSolanaChains.flatMap((chain) =>
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
      const connection = new Connection(rpcUrl)
      const accountPublicKey = new PublicKey(WalletAddress)
      const tokenProgramPublicKey = new PublicKey(TokenProgramAddress)
      const [blockHeight, slot, balance, tokenAccountsByOwner] =
        await Promise.allSettled([
          connection.getBlockHeight(),
          connection.getSlot(),
          connection.getBalance(accountPublicKey),
          connection.getParsedTokenAccountsByOwner(accountPublicKey, {
            programId: tokenProgramPublicKey,
          }),
        ])
      expect(blockHeight.status).toBe('fulfilled')
      expect(slot.status).toBe('fulfilled')
      expect(balance.status).toBe('fulfilled')
      expect(tokenAccountsByOwner.status).toBe('fulfilled')
    }
  )
})

describe.concurrent('SVM chains block explorer check', () => {
  const blockExplorerUrls = supportedSolanaChains.flatMap((chain) =>
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
