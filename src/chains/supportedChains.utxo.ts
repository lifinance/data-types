import type { UTXOChain } from '@lifi/types'
import { ChainId, ChainKey, ChainType, CoinKey } from '@lifi/types'

export const supportedUXTOChains: UTXOChain[] = [
  {
    key: ChainKey.BTC,
    chainType: ChainType.UTXO,
    name: 'Bitcoin',
    coin: CoinKey.BTC,
    id: ChainId.BTC,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bitcoin.svg',
    faucetUrls: [],
    metamask: {
      chainId: ChainId.BTC.toString(),
      blockExplorerUrls: ['https://www.okx.com/web3/explorer/btc/'],
      chainName: 'Bitcoin',
      nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 8,
      },
      rpcUrls: ['https://node-router.thorswap.net/bitcoin'],
    },
  },
  {
    key: ChainKey.BCH,
    chainType: ChainType.UTXO,
    name: 'Bitcoin Cash',
    coin: CoinKey.BCH,
    id: ChainId.BCH,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bitcoincash.svg',
    faucetUrls: [],
    metamask: {
      chainId: ChainId.BCH.toString(),
      blockExplorerUrls: ['https://www.okx.com/web3/explorer/bch/'],
      chainName: 'Bitcoin Cash',
      nativeCurrency: {
        name: 'BCH',
        symbol: 'BCH',
        decimals: 8,
      },
      rpcUrls: ['https://node-router.thorswap.net/bitcoin-cash'],
    },
  },
  {
    key: ChainKey.LTC,
    chainType: ChainType.UTXO,
    name: 'Litecoin',
    coin: CoinKey.LTC,
    id: ChainId.LTC,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/litecoin.svg',
    faucetUrls: [],
    metamask: {
      chainId: ChainId.LTC.toString(),
      blockExplorerUrls: ['https://www.okx.com/web3/explorer/ltc/'],
      chainName: 'Litecoin',
      nativeCurrency: {
        name: 'LTC',
        symbol: 'LTC',
        decimals: 8,
      },
      rpcUrls: ['https://node-router.thorswap.net/litecoin'],
    },
  },
  {
    key: ChainKey.DGE,
    chainType: ChainType.UTXO,
    name: 'Dogecoin',
    coin: CoinKey.DOGE,
    id: ChainId.DGE,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/dogecoin.svg',
    faucetUrls: [],
    metamask: {
      chainId: ChainId.DGE.toString(),
      blockExplorerUrls: ['https://www.okx.com/web3/explorer/doge/'],
      chainName: 'Dogecoin',
      nativeCurrency: {
        name: 'DODGE',
        symbol: 'DOGE',
        decimals: 8,
      },
      rpcUrls: ['https://node-router.thorswap.net/dogecoin'],
    },
  },
]
