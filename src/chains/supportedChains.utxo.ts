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
      blockExplorerUrls: [
        'https://mempool.space/',
        'https://blockstream.info/',
        'https://www.blockchain.com/explorer/assets/btc',
      ],
      chainName: 'Bitcoin',
      nativeCurrency: {
        name: 'BTC',
        symbol: 'BTC',
        decimals: 8,
      },
      rpcUrls: [
        'https://node-router.thorswap.net/bitcoin',
        'https://bitcoin-rpc.publicnode.com',
      ],
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
      blockExplorerUrls: ['https://www.blockchain.com/explorer/assets/bch'],
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
      blockExplorerUrls: ['https://litecoinspace.org/'],
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
      blockExplorerUrls: ['https://blockexplorer.one/dogecoin/mainnet/'],
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
