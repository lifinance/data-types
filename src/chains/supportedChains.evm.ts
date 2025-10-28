import {
  ChainId,
  ChainKey,
  ChainType,
  CoinKey,
  type EVMChain,
} from '@lifi/types'
import { multicallAddresses } from '../multicall.js'
import { prefixChainId } from './utils.js'

/**
 * ChainNames aligned with https://github.com/ethereum-lists/chains/tree/master/_data/chains
 *
 * RPC list https://chainlist.org
 * Please make sure to maintain the order of the RPCs with the most reliable on top, it does matter!
 */
export const supportedEVMChains: EVMChain[] = [
  // 1 - Ethereum
  {
    key: ChainKey.ETH,
    chainType: ChainType.EVM,
    name: 'Ethereum',
    coin: CoinKey.ETH,
    id: 1,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ethereum.svg',
    tokenlistUrl: 'https://gateway.ipfs.io/ipns/tokens.uniswap.org',
    multicallAddress: multicallAddresses[ChainId.ETH],
    relayerSupported: false,
    metamask: {
      chainId: prefixChainId(1),
      blockExplorerUrls: ['https://etherscan.io/'],
      chainName: 'Ethereum Mainnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://ethereum-rpc.publicnode.com', 'https://eth.drpc.org'],
    },
  },
  // 137 - Polygon
  {
    key: ChainKey.POL,
    chainType: ChainType.EVM,
    name: 'Polygon',
    coin: CoinKey.POL,
    id: ChainId.POL,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/polygon.svg',
    tokenlistUrl:
      'https://unpkg.com/quickswap-default-token-list@1.0.71/build/quickswap-default.tokenlist.json',
    faucetUrls: ['https://stakely.io/faucet/polygon-matic'],
    multicallAddress: multicallAddresses[ChainId.POL],
    relayerSupported: true,
    metamask: {
      chainId: prefixChainId(137),
      blockExplorerUrls: ['https://polygonscan.com/'],
      chainName: 'Polygon Mainnet',
      nativeCurrency: {
        name: 'Polygon Ecosystem Token',
        symbol: 'POL',
        decimals: 18,
      },
      rpcUrls: [
        'https://polygon-bor-rpc.publicnode.com',
        'https://polygon.drpc.org',
        'https://polygon-rpc.com',
      ],
    },
  },
  // 56 - Binance Smart Chain
  {
    key: ChainKey.BSC,
    chainType: ChainType.EVM,
    name: 'BSC',
    coin: CoinKey.BNB,
    id: 56,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bsc.svg',
    tokenlistUrl:
      'https://tokens.pancakeswap.finance/pancakeswap-extended.json',
    faucetUrls: ['https://stakely.io/faucet/bsc-chain-bnb'],
    multicallAddress: multicallAddresses[ChainId.BSC],
    relayerSupported: false,
    // https://docs.binance.org/smart-chain/wallet/metamask.html
    metamask: {
      chainId: prefixChainId(56),
      blockExplorerUrls: ['https://bscscan.com/'],
      chainName: 'BNB Smart Chain Mainnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: [
        'https://bsc-dataseed.binance.org',
        'https://bsc-dataseed.bnbchain.org',
        'https://bsc-rpc.publicnode.com',
        'https://bsc-dataseed1.defibit.io',
        'https://bsc-dataseed1.ninicoin.io',
      ],
    },
  },
  // 100 - Gnosis
  {
    key: ChainKey.DAI,
    chainType: ChainType.EVM,
    name: 'Gnosis',
    coin: CoinKey.DAI,
    id: 100,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/gnosis.svg',
    tokenlistUrl: 'https://tokens.honeyswap.org/',
    faucetUrls: ['https://stakely.io/faucet/xdai-chain'],
    multicallAddress: multicallAddresses[ChainId.DAI],
    // https://www.xdaichain.com/for-users/wallets/metamask/metamask-setup
    metamask: {
      chainId: prefixChainId(100),
      blockExplorerUrls: ['https://gnosis.blockscout.com/'],
      chainName: 'Gnosis',
      nativeCurrency: {
        name: 'XDAI',
        symbol: 'XDAI',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpc.gnosischain.com',
        'https://gnosis-rpc.publicnode.com',
        'https://gnosis.drpc.org',
      ],
    },
  },
  // 250 - Fantom
  {
    key: ChainKey.FTM,
    chainType: ChainType.EVM,
    name: 'Fantom',
    coin: CoinKey.FTM,
    id: 250,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fantom.svg',
    tokenlistUrl:
      'https://raw.githubusercontent.com/SpookySwap/spooky-info/master/src/constants/token/spookyswap.json',
    faucetUrls: [
      'https://stakely.io/faucet/fantom-blockchain-ftm',
      'https://docs.spookyswap.finance/getting-started/how-to-get-fantom-gas',
    ],
    multicallAddress: multicallAddresses[ChainId.FTM],
    // https://docs.fantom.foundation/tutorials/set-up-metamask
    metamask: {
      chainId: prefixChainId(250),
      blockExplorerUrls: ['https://explorer.fantom.network/'],
      chainName: 'Fantom Opera',
      nativeCurrency: {
        name: 'FTM',
        symbol: 'FTM',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpcapi.fantom.network',
        'https://rpc.fantom.network',
        'https://fantom.drpc.org',
      ],
    },
  },
  // 43114 - Avalanche
  {
    key: ChainKey.AVA,
    chainType: ChainType.EVM,
    name: 'Avalanche',
    coin: CoinKey.AVAX,
    id: 43114,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/avalanche.svg',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/avalanche.json',
    multicallAddress: multicallAddresses[ChainId.AVA],
    relayerSupported: true,
    // https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche
    metamask: {
      chainId: prefixChainId(43114),
      blockExplorerUrls: ['https://snowtrace.io/'],
      chainName: 'Avalanche C-Chain',
      nativeCurrency: {
        name: 'AVAX',
        symbol: 'AVAX',
        decimals: 18,
      },
      rpcUrls: [
        'https://api.avax.network/ext/bc/C/rpc',
        'https://avalanche-c-chain-rpc.publicnode.com',
        'https://avalanche.drpc.org',
      ],
    },
  },
  // 42161 - Arbitrum
  {
    key: ChainKey.ARB,
    chainType: ChainType.EVM,
    name: 'Arbitrum',
    coin: CoinKey.ETH,
    id: 42161,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/arbitrum.svg',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/arbitrum.json',
    faucetUrls: ['https://bridge.arbitrum.io/'],
    multicallAddress: multicallAddresses[ChainId.ARB],
    relayerSupported: true,
    metamask: {
      chainId: prefixChainId(42161),
      blockExplorerUrls: ['https://arbiscan.io/'],
      chainName: 'Arbitrum One',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://arb1.arbitrum.io/rpc',
        'https://arbitrum-one-rpc.publicnode.com',
        'https://arbitrum.drpc.org',
      ],
    },
  },
  // 10 - Optimism
  {
    key: ChainKey.OPT,
    chainType: ChainType.EVM,
    name: 'Optimism',
    coin: CoinKey.ETH,
    id: 10,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/optimism.svg',
    tokenlistUrl: 'https://static.optimism.io/optimism.tokenlist.json',
    faucetUrls: ['https://gateway.optimism.io/'],
    multicallAddress: multicallAddresses[ChainId.OPT],
    relayerSupported: true,
    metamask: {
      chainId: prefixChainId(10),
      blockExplorerUrls: ['https://optimistic.etherscan.io/'],
      chainName: 'OP Mainnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://mainnet.optimism.io/',
        'https://optimism-rpc.publicnode.com',
        'https://optimism.drpc.org',
      ],
    },
  },

  // 1666600000 - Harmony Mainnet Shard 0
  {
    key: ChainKey.ONE,
    chainType: ChainType.EVM,
    name: 'Harmony',
    coin: CoinKey.ONE,
    id: 1666600000,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/harmony.svg',
    tokenlistUrl:
      'https://d1xrz6ki9z98vb.cloudfront.net/venomswap/lists/venomswap-default.tokenlist.json',
    faucetUrls: ['https://stakely.io/faucet/harmony-one'],
    multicallAddress: multicallAddresses[ChainId.ONE],
    // https://docs.harmony.one/home/developers/wallets/metamask/connect-metamask-to-the-harmony-chain
    metamask: {
      chainId: prefixChainId(1666600000),
      blockExplorerUrls: ['https://explorer.harmony.one/'],
      chainName: 'Harmony Mainnet Shard 0',
      nativeCurrency: {
        name: 'ONE',
        symbol: 'ONE',
        decimals: 18,
      },
      rpcUrls: ['https://api.harmony.one'],
    },
  },

  // 1285 - Moonriver
  {
    key: ChainKey.MOR,
    chainType: ChainType.EVM,
    name: 'Moonriver',
    coin: CoinKey.MOVR,
    id: 1285,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/moonriver.svg',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/moonriver.json',
    multicallAddress: multicallAddresses[ChainId.MOR],
    metamask: {
      chainId: prefixChainId(1285),
      blockExplorerUrls: ['https://moonriver.moonscan.io/'],
      chainName: 'Moonriver',
      nativeCurrency: {
        name: 'Moonriver',
        symbol: 'MOVR',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpc.api.moonriver.moonbeam.network',
        'https://moonriver-rpc.publicnode.com',
        'https://moonriver.drpc.org',
      ],
    },
  },

  // 1284 Moonbeam
  {
    key: ChainKey.MOO,
    chainType: ChainType.EVM,
    name: 'Moonbeam',
    coin: CoinKey.GLMR,
    id: 1284,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/moonbeam.svg',
    tokenlistUrl:
      'https://raw.githubusercontent.com/BeamSwap/beamswap-tokenlist/main/tokenlist.json',
    multicallAddress: multicallAddresses[ChainId.MOO],
    metamask: {
      chainId: prefixChainId(1284),
      blockExplorerUrls: ['https://moonbeam.moonscan.io/'],
      chainName: 'Moonbeam',
      nativeCurrency: {
        name: 'GLMR',
        symbol: 'GLMR',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpc.api.moonbeam.network',
        'https://moonbeam-rpc.publicnode.com',
        'https://moonbeam.drpc.org',
      ],
    },
  },
  // 42220 Celo Mainnet
  {
    key: ChainKey.CEL,
    chainType: ChainType.EVM,
    name: 'Celo',
    coin: CoinKey.CELO,
    id: 42220,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/celo.svg',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/celo.json',
    faucetUrls: [
      'https://stakely.io/faucet/celo-platform',
      'https://free-online-app.com/faucet-for-eth-evm-chains/',
    ],
    multicallAddress: multicallAddresses[ChainId.CEL],
    metamask: {
      chainId: prefixChainId(42220),
      blockExplorerUrls: ['https://celoscan.io/'],
      chainName: 'Celo Mainnet',
      nativeCurrency: {
        name: 'CELO',
        symbol: 'CELO',
        decimals: 18,
      },
      rpcUrls: ['https://forno.celo.org', 'https://celo.drpc.org'],
    },
  },
  // 122 Fuse Mainnet
  {
    key: ChainKey.FUS,
    chainType: ChainType.EVM,
    name: 'FUSE',
    coin: CoinKey.FUSE,
    id: 122,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fuse.svg',
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/fuse.json',
    multicallAddress: multicallAddresses[ChainId.FUS],
    metamask: {
      chainId: prefixChainId(122),
      blockExplorerUrls: ['https://explorer.fuse.io/'],
      chainName: 'Fuse Mainnet',
      nativeCurrency: {
        name: 'FUSE',
        symbol: 'FUSE',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.fuse.io', 'https://fuse.drpc.org'],
    },
  },
  // 40 Telos EVM Mainnet
  {
    key: ChainKey.TLO,
    chainType: ChainType.EVM,
    name: 'Telos',
    coin: CoinKey.TLOS,
    id: 40,
    mainnet: true,
    tokenlistUrl:
      'https://raw.githubusercontent.com/sushiswap/default-token-list/master/tokens/telos.json',
    multicallAddress: multicallAddresses[ChainId.TLO],
    metamask: {
      chainId: prefixChainId(40),
      blockExplorerUrls: ['https://www.telos.net/'],
      chainName: 'Telos EVM Mainnet',
      nativeCurrency: {
        name: 'Telos',
        symbol: 'TLOS',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.telos.net'],
    },
  },
  // 25 Cronos Mainnet Beta
  {
    key: ChainKey.CRO,
    chainType: ChainType.EVM,
    name: 'Cronos',
    coin: CoinKey.CRO,
    id: 25,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/cronos.svg',
    tokenlistUrl:
      'https://raw.githubusercontent.com/cronaswap/default-token-list/refs/heads/main/assets/tokens/cronos.json',
    multicallAddress: multicallAddresses[ChainId.CRO],
    metamask: {
      chainId: prefixChainId(25),
      blockExplorerUrls: [
        'https://explorer.cronos.org/',
        'https://cronoscan.com/',
      ],
      chainName: 'Cronos Mainnet',
      nativeCurrency: {
        name: 'Cronos',
        symbol: 'CRO',
        decimals: 18,
      },
      rpcUrls: ['https://evm.cronos.org', 'https://cronos.drpc.org'],
    },
  },
  // 288 Boba Network
  {
    key: ChainKey.BOB,
    chainType: ChainType.EVM,
    name: 'Boba',
    coin: CoinKey.ETH,
    id: 288,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/boba.svg',
    // TODO: we should update token list url to latest one
    tokenlistUrl:
      'https://raw.githubusercontent.com/OolongSwap/boba-community-token-list/main/build/boba.tokenlist.json',
    multicallAddress: multicallAddresses[ChainId.BOB],
    metamask: {
      chainId: prefixChainId(288),
      blockExplorerUrls: ['https://bobascan.com/'],
      chainName: 'Boba Network',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.boba.network', 'https://replica.boba.network'],
    },
  },
  // 106 Velas EVM Mainnet
  {
    key: ChainKey.VEL,
    chainType: ChainType.EVM,
    name: 'Velas',
    coin: CoinKey.VLX,
    id: 106,
    mainnet: true,
    multicallAddress: multicallAddresses[ChainId.VEL],
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/velas.svg',
    faucetUrls: ['https://stakely.io/faucet/velas-vlx'],
    metamask: {
      chainId: prefixChainId(106),
      blockExplorerUrls: ['https://evmexplorer.velas.com/'],
      chainName: 'Velas EVM Mainnet',
      nativeCurrency: {
        name: 'VLX',
        symbol: 'VLX',
        decimals: 18,
      },
      rpcUrls: ['https://evmexplorer.velas.com/rpc'],
    },
  },

  // 1088 Metis Andromeda Mainnet
  {
    key: ChainKey.MAM,
    chainType: ChainType.EVM,
    name: 'Metis',
    coin: CoinKey.METIS,
    id: 1088,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/metis.svg',
    tokenlistUrl:
      'https://raw.githubusercontent.com/digitalnativeinc/default-token-list/dnf/tokens/metis.json',
    multicallAddress: multicallAddresses[ChainId.MAM],
    metamask: {
      chainId: prefixChainId(1088),
      blockExplorerUrls: ['https://andromeda-explorer.metis.io/'],
      chainName: 'Metis Andromeda Mainnet',
      nativeCurrency: {
        name: 'METIS',
        symbol: 'METIS',
        decimals: 18,
      },
      rpcUrls: ['https://andromeda.metis.io', 'https://metis.drpc.org'],
    },
  },
  // 1313161554 Aurora Mainnet
  {
    key: ChainKey.AUR,
    chainType: ChainType.EVM,
    name: 'Aurora',
    coin: CoinKey.ETH,
    id: 1313161554,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/aurora.svg',
    tokenlistUrl: 'https://aurora.dev/tokens.json',
    multicallAddress: multicallAddresses[ChainId.AUR],
    metamask: {
      chainId: prefixChainId(1313161554),
      blockExplorerUrls: ['https://explorer.aurora.dev/'],
      chainName: 'Aurora Mainnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.aurora.dev'],
    },
  },
  // EVM = 9001,
  {
    key: ChainKey.EVM,
    chainType: ChainType.EVM,
    name: 'Evmos',
    coin: CoinKey.EVM,
    id: 9001,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/evmos.svg',
    multicallAddress: multicallAddresses[ChainId.EVM],
    metamask: {
      chainId: prefixChainId(9001),
      blockExplorerUrls: ['https://www.mintscan.io/evmos/'],
      chainName: 'Evmos',
      nativeCurrency: {
        name: 'EVMOS',
        symbol: 'EVMOS',
        decimals: 18,
      },
      rpcUrls: [
        'https://evmos-evm-rpc.publicnode.com',
        'https://evmos.drpc.org',
      ],
    },
  },

  // 324 - zksync ERA
  {
    key: ChainKey.ERA,
    chainType: ChainType.EVM,
    name: 'zkSync',
    coin: CoinKey.ETH,
    id: 324,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/zksync.svg',
    multicallAddress: multicallAddresses[ChainId.ERA],
    relayerSupported: true,
    metamask: {
      chainId: prefixChainId(324),
      blockExplorerUrls: ['https://explorer.zksync.io/'],
      chainName: 'zkSync Mainnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.era.zksync.io'],
    },
  },

  // 1101 - Polygon zkEVM
  {
    key: ChainKey.PZE,
    chainType: ChainType.EVM,
    name: 'Polygon zkEVM',
    coin: CoinKey.ETH,
    id: 1101,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/zkevm.svg',
    multicallAddress: multicallAddresses[ChainId.PZE],
    metamask: {
      chainId: prefixChainId(1101),
      blockExplorerUrls: ['https://www.oklink.com/polygon-zkevm/'],
      chainName: 'Polygon zkEVM',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://zkevm-rpc.com', 'https://polygon-zkevm.drpc.org'],
    },
  },
  {
    key: ChainKey.BAS,
    chainType: ChainType.EVM,
    name: 'Base',
    coin: CoinKey.ETH,
    id: ChainId.BAS,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/base.svg',
    multicallAddress: multicallAddresses[ChainId.BAS],
    relayerSupported: true,
    metamask: {
      chainId: prefixChainId(ChainId.BAS),
      blockExplorerUrls: ['https://basescan.org/'],
      chainName: 'Base',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://mainnet.base.org',
        'https://base-rpc.publicnode.com',
        'https://base.drpc.org',
      ],
    },
  },
  {
    key: ChainKey.LNA,
    chainType: ChainType.EVM,
    name: 'Linea',
    coin: CoinKey.ETH,
    id: 59144,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/linea.svg',
    multicallAddress: multicallAddresses[ChainId.LNA],
    metamask: {
      chainId: prefixChainId(59144),
      blockExplorerUrls: ['https://lineascan.build/'],
      chainName: 'Linea',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.linea.build'],
    },
  },
  // 534352 - Scroll
  {
    key: ChainKey.SCL,
    chainType: ChainType.EVM,
    name: 'Scroll',
    coin: CoinKey.ETH,
    id: 534352,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/scroll.svg',
    multicallAddress: multicallAddresses[ChainId.SCL],
    metamask: {
      chainId: prefixChainId(534352),
      blockExplorerUrls: ['https://scrollscan.com/'],
      chainName: 'Scroll',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpc.scroll.io',
        'https://scroll.drpc.org',
        'https://scroll-mainnet.public.blastapi.io',
        'https://1rpc.io/scroll',
      ],
    },
  },
  // 34443 - Mode
  {
    key: ChainKey.MOD,
    chainType: ChainType.EVM,
    name: 'Mode',
    coin: CoinKey.ETH,
    id: 34443,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/mode.svg',
    multicallAddress: multicallAddresses[ChainId.MOD],

    metamask: {
      chainId: prefixChainId(34443),
      blockExplorerUrls: [
        'https://explorer.mode.network/',
        'https://modescan.io/',
      ],
      chainName: 'Mode',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.mode.network', 'https://mode.drpc.org'],
    },
  },
  // 5000 - Mantle
  {
    key: ChainKey.MNT,
    chainType: ChainType.EVM,
    name: 'Mantle',
    coin: CoinKey.MNT,
    id: 5000,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/mantle.svg',
    multicallAddress: multicallAddresses[ChainId.MNT],
    metamask: {
      chainId: prefixChainId(5000),
      blockExplorerUrls: [
        'https://explorer.mantle.xyz/',
        'https://mantlescan.xyz/',
      ],
      chainName: 'Mantle',
      nativeCurrency: {
        name: 'Mantle',
        symbol: 'MNT',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpc.mantle.xyz',
        'https://mantle-rpc.publicnode.com',
        'https://mantle.drpc.org',
        'https://mantle.public-rpc.com',
      ],
    },
  },

  // 81457 - Blast
  {
    key: ChainKey.BLS,
    chainType: ChainType.EVM,
    name: 'Blast',
    coin: CoinKey.ETH,
    id: 81457,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/blast.svg',
    multicallAddress: multicallAddresses[ChainId.BLS],
    relayerSupported: true,
    metamask: {
      chainId: prefixChainId(81457),
      blockExplorerUrls: ['https://blastscan.io/', 'https://blastexplorer.io/'],
      chainName: 'Blast',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpc.blast.io',
        'https://blast-rpc.publicnode.com',
        'https://blast.drpc.org',
      ],
    },
  },

  // 30 - Rootstock
  {
    key: ChainKey.RSK,
    chainType: ChainType.EVM,
    name: 'Rootstock',
    coin: CoinKey.RBTC,
    id: 30,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/rootstock.svg',
    multicallAddress: multicallAddresses[ChainId.RSK],
    metamask: {
      chainId: prefixChainId(30),
      blockExplorerUrls: ['https://explorer.rootstock.io/'],
      chainName: 'Rootstock Mainnet',
      nativeCurrency: {
        name: 'Rootstock Smart Bitcoin',
        symbol: 'RBTC',
        decimals: 18,
      },
      rpcUrls: ['https://public-node.rsk.co', 'https://mycrypto.rsk.co'],
    },
  },

  // 1329 - SEI
  {
    key: ChainKey.SEI,
    chainType: ChainType.EVM,
    name: 'Sei',
    coin: CoinKey.SEI,
    id: 1329,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/sei.svg',
    multicallAddress: multicallAddresses[ChainId.SEI],
    metamask: {
      chainId: prefixChainId(1329),
      blockExplorerUrls: ['https://seitrace.com/', 'https://seistream.app/'],
      chainName: 'Sei Network',
      nativeCurrency: {
        name: 'SEI',
        symbol: 'SEI',
        decimals: 18,
      },
      rpcUrls: ['https://evm-rpc.sei-apis.com'],
    },
  },
  // 252 - Fraxtal
  {
    key: ChainKey.FRA,
    chainType: ChainType.EVM,
    name: 'Fraxtal',
    coin: CoinKey.FRAX,
    id: 252,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fraxtal.svg',
    multicallAddress: multicallAddresses[ChainId.FRA],
    metamask: {
      chainId: prefixChainId(252),
      blockExplorerUrls: ['https://fraxscan.com/'],
      chainName: 'Fraxtal',
      nativeCurrency: {
        name: 'FRAX',
        symbol: 'FRAX',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.frax.com'],
    },
  },

  // 167000 - Taiko
  {
    key: ChainKey.TAI,
    chainType: ChainType.EVM,
    name: 'Taiko',
    coin: CoinKey.ETH,
    id: 167000,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/taiko.svg',
    multicallAddress: multicallAddresses[ChainId.TAI],
    metamask: {
      chainId: prefixChainId(167000),
      blockExplorerUrls: ['https://taikoscan.io/'],
      chainName: 'Taiko Mainnet',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.mainnet.taiko.xyz', 'https://rpc.taiko.xyz'],
    },
  },

  // 1625 - Gravity
  {
    key: ChainKey.GRA,
    chainType: ChainType.EVM,
    name: 'Gravity',
    coin: CoinKey.G,
    id: 1625,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/gravity.svg',
    multicallAddress: multicallAddresses[ChainId.GRA],
    metamask: {
      chainId: prefixChainId(1625),
      blockExplorerUrls: ['https://explorer.gravity.xyz/'],
      chainName: 'Gravity Alpha Mainnet',
      nativeCurrency: {
        name: 'G',
        symbol: 'G',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.gravity.xyz/'],
    },
  },

  // 13371 - Immutable zkEVM
  {
    key: ChainKey.IMX,
    chainType: ChainType.EVM,
    name: 'Immutable zkEVM',
    coin: CoinKey.IMX,
    id: 13371,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/imx.svg',
    multicallAddress: multicallAddresses[ChainId.IMX],

    metamask: {
      chainId: prefixChainId(13371),
      blockExplorerUrls: ['https://explorer.immutable.com/'],
      chainName: 'Immutable',
      nativeCurrency: {
        name: 'ImmutableX',
        symbol: 'IMX',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpc.immutable.com/',
        'https://immutable-zkevm.drpc.org',
      ],
    },
  },

  // 8217 - Kaia
  {
    key: ChainKey.KAI,
    chainType: ChainType.EVM,
    name: 'Kaia',
    coin: CoinKey.KAIA,
    id: 8217,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/kaia.svg',
    multicallAddress: multicallAddresses[ChainId.KAI],

    metamask: {
      chainId: prefixChainId(8217),
      blockExplorerUrls: ['https://kaiascan.io/'],
      chainName: 'Kaia Mainnet',
      nativeCurrency: {
        name: 'KAIA',
        symbol: 'KAIA',
        decimals: 18,
      },
      rpcUrls: ['https://public-en.node.kaia.io', 'https://klaytn.drpc.org'],
    },
  },

  // 196 - XLayer
  {
    key: ChainKey.XLY,
    chainType: ChainType.EVM,
    name: 'XLayer',
    coin: CoinKey.OKB,
    id: 196,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/xlayer.svg',
    multicallAddress: multicallAddresses[ChainId.XLY],

    metamask: {
      chainId: prefixChainId(196),
      blockExplorerUrls: [
        'https://www.oklink.com/xlayer/',
        'https://www.okx.com/web3/explorer/xlayer/',
      ],
      chainName: 'X Layer Mainnet',
      nativeCurrency: {
        name: 'OKB',
        symbol: 'OKB',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.xlayer.tech/', 'https://xlayerrpc.okx.com'],
    },
  },

  // 204 - opBNB
  {
    key: ChainKey.OPB,
    chainType: ChainType.EVM,
    name: 'opBNB',
    coin: CoinKey.BNB,
    id: 204,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/opbnb.svg',
    multicallAddress: multicallAddresses[ChainId.OPB],

    metamask: {
      chainId: prefixChainId(204),
      blockExplorerUrls: [
        'https://opbnb.bscscan.com/',
        'https://opbnbscan.com/',
      ],
      chainName: 'opBNB Mainnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: [
        'https://opbnb-mainnet-rpc.bnbchain.org',
        'https://1rpc.io/opbnb',
      ],
    },
  },

  // 480 - WCC
  {
    key: ChainKey.WCC,
    chainType: ChainType.EVM,
    name: 'World Chain',
    coin: CoinKey.ETH,
    id: ChainId.WCC,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/world.svg',
    multicallAddress: multicallAddresses[ChainId.WCC],

    metamask: {
      chainId: prefixChainId(480),
      blockExplorerUrls: ['https://worldscan.org/'],
      chainName: 'Worldchain Mainnet',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://worldchain-mainnet.g.alchemy.com/public',
        'https://worldchain-mainnet.gateway.tenderly.co',
      ],
    },
  },

  // 1135 - LSK
  {
    key: ChainKey.LSK,
    chainType: ChainType.EVM,
    name: 'Lisk',
    coin: CoinKey.ETH,
    id: ChainId.LSK,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/lisk.svg',
    multicallAddress: multicallAddresses[ChainId.LSK],

    metamask: {
      chainId: prefixChainId(1135),
      blockExplorerUrls: ['https://blockscout.lisk.com/'],
      chainName: 'Lisk',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.api.lisk.com', 'https://lisk.drpc.org'],
    },
  },

  // 2741 - Abstract
  {
    key: ChainKey.ABS,
    chainType: ChainType.EVM,
    name: 'Abstract',
    coin: CoinKey.ETH,
    id: ChainId.ABS,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/abstract.svg',
    multicallAddress: multicallAddresses[ChainId.ABS],

    metamask: {
      chainId: prefixChainId(2741),
      blockExplorerUrls: ['https://abscan.org/'],
      chainName: 'Abstract',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://api.mainnet.abs.xyz'],
    },
  },

  // 80094 - Berachain
  {
    key: ChainKey.BER,
    chainType: ChainType.EVM,
    name: 'Berachain',
    coin: CoinKey.BERA,
    id: ChainId.BER,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bera.svg',
    multicallAddress: multicallAddresses[ChainId.BER],
    relayerSupported: true,
    metamask: {
      chainId: prefixChainId(80094),
      blockExplorerUrls: ['https://berascan.com/', 'https://beratrail.io/'],
      chainName: 'Berachain',
      nativeCurrency: {
        name: 'Bera',
        symbol: 'BERA',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.berachain.com'],
    },
  },

  // 146 - Sonic
  {
    key: ChainKey.SON,
    chainType: ChainType.EVM,
    name: 'Sonic',
    coin: CoinKey.S,
    id: ChainId.SON,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/sonic.svg',
    multicallAddress: multicallAddresses[ChainId.SON],

    metamask: {
      chainId: prefixChainId(146),
      blockExplorerUrls: [
        'https://explorer.soniclabs.com/',
        'https://sonicscan.org/',
      ],
      chainName: 'Sonic Network',
      nativeCurrency: {
        name: 'Sonic',
        symbol: 'S',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.soniclabs.com', 'https://sonic.drpc.org'],
    },
  },

  // 130 - Unichain
  {
    key: ChainKey.UNI,
    chainType: ChainType.EVM,
    name: 'Unichain',
    coin: CoinKey.ETH,
    id: 130,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/unichain.svg',
    multicallAddress: multicallAddresses[ChainId.UNI],
    relayerSupported: true,
    metamask: {
      chainId: prefixChainId(130),
      blockExplorerUrls: [
        'https://unichain.blockscout.com/',
        'https://uniscan.xyz/',
      ],
      chainName: 'Unichain',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.unichain.org'],
    },
  },

  // 33139 - Apechain
  {
    key: ChainKey.APE,
    chainType: ChainType.EVM,
    name: 'Apechain',
    coin: CoinKey.APE,
    id: 33139,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/apechain.svg',
    multicallAddress: multicallAddresses[ChainId.APE],

    metamask: {
      chainId: prefixChainId(33139),
      blockExplorerUrls: ['https://apescan.io/'],
      chainName: 'ApeChain',
      nativeCurrency: {
        name: 'ApeCoin',
        symbol: 'APE',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.apechain.com'],
    },
  },

  // 1868 - Soneium
  {
    key: ChainKey.SOE,
    chainType: ChainType.EVM,
    name: 'Soneium',
    coin: CoinKey.ETH,
    id: 1868,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/soneium.svg',
    multicallAddress: multicallAddresses[ChainId.SOE],

    metamask: {
      chainId: prefixChainId(1868),
      blockExplorerUrls: ['https://soneium.blockscout.com/'],
      chainName: 'Soneium',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.soneium.org/'],
    },
  },

  {
    key: ChainKey.INK,
    chainType: ChainType.EVM,
    name: 'Ink',
    coin: CoinKey.ETH,
    id: 57073,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ink.svg',
    multicallAddress: multicallAddresses[ChainId.INK],
    relayerSupported: true,

    metamask: {
      chainId: prefixChainId(57073),
      blockExplorerUrls: ['https://explorer.inkonchain.com/'],
      chainName: 'Ink',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://rpc-gel.inkonchain.com'],
    },
  },

  {
    key: ChainKey.LNS,
    chainType: ChainType.EVM,
    name: 'Lens',
    coin: CoinKey.GHO,
    id: ChainId.LNS,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/lens.svg',
    multicallAddress: multicallAddresses[ChainId.LNS],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.LNS),
      blockExplorerUrls: ['https://explorer.lens.xyz/'],
      chainName: 'Lens',
      nativeCurrency: {
        name: 'GHO',
        symbol: 'GHO',
        decimals: 18,
      },
      rpcUrls: ['https://api.lens.matterhosted.dev'],
    },
  },

  {
    key: ChainKey.SWL,
    chainType: ChainType.EVM,
    name: 'Swellchain',
    coin: CoinKey.ETH,
    id: ChainId.SWL,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/swell.svg',
    multicallAddress: multicallAddresses[ChainId.SWL],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.SWL),
      blockExplorerUrls: ['https://swellchainscan.io/'],
      chainName: 'Swellchain',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://swell-mainnet.alt.technology'],
    },
  },

  {
    key: ChainKey.CRN,
    chainType: ChainType.EVM,
    name: 'Corn',
    coin: 'BTCN' as CoinKey,
    id: ChainId.CRN,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/corn.svg',
    multicallAddress: multicallAddresses[ChainId.CRN],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.CRN),
      blockExplorerUrls: ['https://cornscan.io/'],
      chainName: 'Corn',
      nativeCurrency: {
        name: 'Bitcorn',
        symbol: 'BTCN',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.corn-rpc.com'],
    },
  },

  {
    key: ChainKey.SUP,
    chainType: ChainType.EVM,
    name: 'Superposition',
    coin: CoinKey.ETH,
    id: ChainId.SUP,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/superposition.svg',
    multicallAddress: multicallAddresses[ChainId.SUP],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.SUP),
      blockExplorerUrls: ['https://explorer.superposition.so/'],
      chainName: 'Superposition',
      nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.superposition.so'],
    },
  },

  {
    key: ChainKey.HYP,
    chainType: ChainType.EVM,
    name: 'HyperEVM',
    coin: CoinKey.HYPE,
    id: ChainId.HYP,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/hyperevm.svg',
    multicallAddress: multicallAddresses[ChainId.HYP],
    relayerSupported: true,

    metamask: {
      chainId: prefixChainId(ChainId.HYP),
      blockExplorerUrls: ['https://hyperevmscan.io/'],
      chainName: 'HyperEVM',
      nativeCurrency: {
        name: 'HYPE',
        symbol: 'HYPE',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpc.hyperliquid.xyz/evm',
        'https://rpc.hyperlend.finance',
        'https://hyperliquid-json-rpc.stakely.io',
        'https://hyperliquid.drpc.org',
        'https://rpc.hypurrscan.io',
      ],
    },
  },

  {
    key: ChainKey.XDC,
    chainType: ChainType.EVM,
    name: 'XDC',
    coin: CoinKey.XDC,
    id: ChainId.XDC,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/xdc.svg',
    multicallAddress: multicallAddresses[ChainId.XDC],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.XDC),
      blockExplorerUrls: ['https://xdcscan.com/'],
      chainName: 'XDC',
      nativeCurrency: {
        name: 'XDC',
        symbol: 'XDC',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.xdcrpc.com'],
    },
  },

  {
    key: ChainKey.BOC, // BOB was taken by Boba Chain already
    chainType: ChainType.EVM,
    name: 'BOB',
    coin: CoinKey.ETH,
    id: ChainId.BOC,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/bob.svg',
    multicallAddress: multicallAddresses[ChainId.BOC],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.BOC),
      blockExplorerUrls: ['https://explorer.gobob.xyz/'],
      chainName: 'BOB',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.gobob.xyz'],
    },
  },

  {
    key: ChainKey.ETL,
    chainType: ChainType.EVM,
    name: 'Etherlink',
    coin: CoinKey.XTZ,
    id: ChainId.ETL,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/etherlink.svg',
    multicallAddress: multicallAddresses[ChainId.ETL],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.ETL),
      blockExplorerUrls: ['https://explorer.etherlink.com/'],
      chainName: 'Etherlink',
      nativeCurrency: {
        name: 'Tezos',
        symbol: 'XTZ',
        decimals: 18,
      },
      rpcUrls: ['https://node.mainnet.etherlink.com'],
    },
  },

  {
    key: ChainKey.VIC,
    chainType: ChainType.EVM,
    name: 'Viction',
    coin: CoinKey.VIC,
    id: ChainId.VIC,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/viction.svg',
    multicallAddress: multicallAddresses[ChainId.VIC],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.VIC),
      blockExplorerUrls: ['https://www.vicscan.xyz/'],
      chainName: 'Viction',
      nativeCurrency: {
        name: 'Viction',
        symbol: CoinKey.VIC,
        decimals: 18,
      },
      rpcUrls: ['https://rpc.viction.xyz'],
    },
  },

  {
    key: ChainKey.FLR,
    chainType: ChainType.EVM,
    name: 'Flare',
    coin: CoinKey.FLR,
    id: ChainId.FLR,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/flare.svg',
    multicallAddress: multicallAddresses[ChainId.FLR],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.FLR),
      blockExplorerUrls: ['https://flarescan.com/'],
      chainName: 'Flare',
      nativeCurrency: {
        name: 'Flare',
        symbol: CoinKey.FLR,
        decimals: 18,
      },
      rpcUrls: ['https://flare-api.flare.network/ext/C/rpc'],
    },
  },

  {
    key: ChainKey.KAT,
    chainType: ChainType.EVM,
    name: 'Katana',
    coin: CoinKey.ETH,
    id: ChainId.KAT,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/katana.svg',
    multicallAddress: multicallAddresses[ChainId.KAT],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.KAT),
      blockExplorerUrls: ['https://katanascan.com/'],
      chainName: 'Katana',
      nativeCurrency: {
        name: CoinKey.ETH,
        symbol: CoinKey.ETH,
        decimals: 18,
      },
      rpcUrls: ['https://rpc.katana.network'],
    },
  },

  {
    key: ChainKey.VAN,
    chainType: ChainType.EVM,
    name: 'Vana',
    coin: CoinKey.VAN,
    id: ChainId.VAN,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/vana.svg',
    multicallAddress: multicallAddresses[ChainId.VAN],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.VAN),
      blockExplorerUrls: ['https://vanascan.io/'],
      chainName: 'Vana',
      nativeCurrency: {
        name: CoinKey.VAN,
        symbol: CoinKey.VAN,
        decimals: 18,
      },
      rpcUrls: ['https://rpc.vana.org'],
    },
  },

  {
    key: ChainKey.NIB,
    chainType: ChainType.EVM,
    name: 'Nibiru',
    coin: CoinKey.NIBI,
    id: ChainId.NIB,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/nibiru.svg',
    multicallAddress: multicallAddresses[ChainId.NIB],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.NIB),
      blockExplorerUrls: ['https://nibiscan.io/'],
      chainName: 'Nibiru',
      nativeCurrency: {
        name: CoinKey.NIBI,
        symbol: CoinKey.NIBI,
        decimals: 18,
      },
      rpcUrls: ['https://evm-rpc.nibiru.fi'],
    },
  },

  {
    key: ChainKey.RON,
    chainType: ChainType.EVM,
    name: 'Ronin',
    coin: CoinKey.RON,
    id: ChainId.RON,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/ronin.svg',
    multicallAddress: multicallAddresses[ChainId.RON],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.RON),
      blockExplorerUrls: ['https://app.roninchain.com/'],
      chainName: 'Ronin',
      nativeCurrency: {
        name: CoinKey.RON,
        symbol: CoinKey.RON,
        decimals: 18,
      },
      rpcUrls: ['https://api.roninchain.com/rpc'],
    },
  },

  {
    key: ChainKey.PLU,
    chainType: ChainType.EVM,
    name: 'Plume',
    coin: CoinKey.PLU,
    id: ChainId.PLU,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/plume.svg',
    multicallAddress: multicallAddresses[ChainId.PLU],
    relayerSupported: false,

    metamask: {
      chainId: prefixChainId(ChainId.PLU),
      blockExplorerUrls: ['https://explorer.plume.org/'],
      chainName: 'Plume',
      nativeCurrency: {
        name: CoinKey.PLU,
        symbol: CoinKey.PLU,
        decimals: 18,
      },
      rpcUrls: ['https://rpc.plume.org'],
    },
  },

  {
    key: ChainKey.HPL,
    chainType: ChainType.EVM,
    name: 'Hyperliquid',
    coin: CoinKey.USDC,
    id: ChainId.HPL,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/hyperliquid.svg',
    relayerSupported: false,
    metamask: {
      chainId: prefixChainId(ChainId.ARB),
      blockExplorerUrls: ['https://app.hyperliquid.xyz/explorer/'],
      chainName: 'Hyperliquid',
      nativeCurrency: {
        name: CoinKey.USDC,
        symbol: CoinKey.USDC,
        decimals: 6,
      },
      rpcUrls: [],
    },
  },

  {
    key: ChainKey.SOP,
    chainType: ChainType.EVM,
    name: 'Sophon',
    coin: CoinKey.SOPH,
    id: ChainId.SOP,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/sophon.svg',
    relayerSupported: false,
    multicallAddress: multicallAddresses[ChainId.SOP],
    metamask: {
      chainId: prefixChainId(ChainId.SOP),
      blockExplorerUrls: ['https://sophscan.xyz/'],
      chainName: 'Sophon',
      nativeCurrency: {
        name: CoinKey.SOPH,
        symbol: CoinKey.SOPH,
        decimals: 18,
      },
      rpcUrls: ['https://rpc.sophon.xyz'],
    },
  },

  {
    key: ChainKey.PLA,
    chainType: ChainType.EVM,
    name: 'Plasma',
    coin: CoinKey.XPL,
    id: ChainId.PLA,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/plasma.svg',
    relayerSupported: false,
    multicallAddress: multicallAddresses[ChainId.PLA],
    metamask: {
      chainId: prefixChainId(ChainId.PLA),
      blockExplorerUrls: ['https://plasmascan.to/'],
      chainName: 'Plasma',
      nativeCurrency: {
        name: CoinKey.XPL,
        symbol: CoinKey.XPL,
        decimals: 18,
      },
      rpcUrls: ['https://rpc.plasma.to'],
    },
  },

  {
    key: ChainKey.FLW,
    chainType: ChainType.EVM,
    name: 'Flow',
    coin: CoinKey.FLOW,
    id: ChainId.FLW,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/flow.svg',
    relayerSupported: false,
    multicallAddress: multicallAddresses[ChainId.FLW],
    metamask: {
      chainId: prefixChainId(ChainId.FLW),
      blockExplorerUrls: ['https://evm.flowscan.io/'],
      chainName: 'Flow EVM Mainnet',
      nativeCurrency: {
        name: CoinKey.FLOW,
        symbol: CoinKey.FLOW,
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.evm.nodes.onflow.org'],
    },
  },

  {
    key: ChainKey.HMI,
    chainType: ChainType.EVM,
    name: 'Hemi',
    coin: CoinKey.ETH,
    id: ChainId.HMI,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/hemi.svg',
    relayerSupported: false,
    multicallAddress: multicallAddresses[ChainId.HMI],
    metamask: {
      chainId: prefixChainId(ChainId.HMI),
      blockExplorerUrls: ['https://explorer.hemi.xyz/'],
      chainName: 'Hemi',
      nativeCurrency: {
        name: CoinKey.ETH,
        symbol: CoinKey.ETH,
        decimals: 18,
      },
      rpcUrls: ['https://rpc.hemi.network/rpc'],
    },
  },

  {
    key: ChainKey.MON,
    chainType: ChainType.EVM,
    name: 'Monad',
    coin: CoinKey.MON,
    id: ChainId.MON,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/monad.svg',
    relayerSupported: false,
    multicallAddress: multicallAddresses[ChainId.MON],
    metamask: {
      chainId: prefixChainId(ChainId.MON),
      blockExplorerUrls: ['https://monadscan.com/'],
      chainName: 'Monad',
      nativeCurrency: {
        name: CoinKey.MON,
        symbol: CoinKey.MON,
        decimals: 18,
      },
      rpcUrls: ['https://mon-rpc.transferto.xyz'],
    },
  },
]
