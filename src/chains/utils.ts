export const prefixChainId = (chainId: number): string => {
  return '0x' + chainId.toString(16)
}

// Used in test only, check if the URL is the same without the trailing slash
export const isSameUrl = (url1: string, url2: string): boolean =>
  url1.replace(/\/$/, '') === url2.replace(/\/$/, '')
