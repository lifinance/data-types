export const prefixChainId = (chainId: number): string => {
  return '0x' + chainId.toString(16)
}
