import type { Chain, ChainKey } from '@lifi/types'
import { supportedEVMChains } from './supportedChains.evm'
import { supportedSolanaChains } from './supportedChains.svm'
import { supportedUXTOChains } from './supportedChains.utxo'

// This assignment is required to avoid breaking
// changes with the new non EVM support types release
// This will be removed in the future
export const supportedChains = [
  ...supportedEVMChains,
  ...supportedSolanaChains,
  ...supportedUXTOChains,
]

export const getChainByKey = (chainKey: ChainKey): Chain => {
  const chain = supportedChains.find((c) => c.key === chainKey)
  if (!chain) {
    throw new Error('Invalid chainKey')
  }
  return chain
}

export const getChainById = (chainId: number): Chain => {
  const chain = supportedChains.find((c) => c.id === chainId)
  if (!chain) {
    throw new Error('Invalid chainId')
  }
  return chain
}
