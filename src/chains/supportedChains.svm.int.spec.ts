import { Connection, PublicKey } from '@solana/web3.js'
import { describe, expect, test } from 'vitest'
import { supportedSVMChains } from './supportedChains.svm.js'

const TokenProgramAddress = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
const WalletAddress = '6AUWsSCRFSCbrHKH9s84wfzJXtD6mNzAHs11x6pGEcmJ'

describe.concurrent('SVM chains RPC check', () => {
  const rpcUrls = supportedSVMChains.flatMap((chain) =>
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
        // connection.getBlockHeight() with https://solana-rpc.publicnode.com will result in 500 error
        await Promise.allSettled([
          fetch(rpcUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              jsonrpc: '2.0',
              id: 1,
              method: 'getBlockHeight',
            }),
          }),
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
