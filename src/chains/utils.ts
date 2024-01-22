import { BigNumber } from '@ethersproject/bignumber'

export const prefixChainId = (chainId: number): string => {
  return '0x' + BigNumber.from(chainId)._hex.split('0x')[1].replace(/\b0+/g, '')
}
