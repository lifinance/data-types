import type { EVMChain } from '@lifi/types'
import { ChainId, ChainKey, ChainType, CoinKey } from '@lifi/types'
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
    metamask: {
      chainId: prefixChainId(1),
      blockExplorerUrls: ['https://etherscan.io/'],
      chainName: 'Ethereum Mainnet',
      nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [
        'https://ethereum-rpc.publicnode.com',
        'https://eth.drpc.org',
        'https://eth.public-rpc.com',
        'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        'https://rpc.ankr.com/eth',
      ],
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
        'https://rpc.ankr.com/polygon',
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
        'https://rpc.ankr.com/gnosis',
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
      blockExplorerUrls: ['https://ftmscan.com/'],
      chainName: 'Fantom Opera',
      nativeCurrency: {
        name: 'FTM',
        symbol: 'FTM',
        decimals: 18,
      },
      rpcUrls: [
        'https://rpcapi.fantom.network',
        'https://rpc.fantom.network',
        'https://fantom-rpc.publicnode.com',
        'https://fantom.drpc.org',
        'https://rpc.ftm.tools',
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
        'https://avalanche.public-rpc.com',
        'https://rpc.ankr.com/avalanche',
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
        'https://rpc.ankr.com/arbitrum',
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
        'https://rpc.ankr.com/optimism',
      ],
    },
  },

  // 32659 - Fusion (anyswap)
  {
    key: ChainKey.FSN,
    chainType: ChainType.EVM,
    name: 'Fusion Mainnet',
    coin: CoinKey.FSN,
    id: 32659,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/fusion.png',
    mainnet: true,
    multicallAddress: multicallAddresses[ChainId.FSN],
    // https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche
    metamask: {
      chainId: prefixChainId(32659),
      blockExplorerUrls: ['https://fsnscan.com/'],
      chainName: 'Fusion Mainnet',
      nativeCurrency: {
        name: 'FSN',
        symbol: 'FSN',
        decimals: 18,
      },
      rpcUrls: ['https://mainnet.fusionnetwork.io'],
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
      rpcUrls: [
        'https://forno.celo.org',
        'https://celo.drpc.org',
        'https://rpc.ankr.com/celo',
      ],
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
      rpcUrls: ['https://mainnet.telos.net/evm'],
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
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/boba.png',
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
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/velas.png',
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
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/aurora.png',
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
        'https://evmos.lava.build',
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
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/zkevm.png',
    multicallAddress: multicallAddresses[ChainId.PZE],

    metamask: {
      chainId: prefixChainId(1101),
      blockExplorerUrls: ['https://zkevm.polygonscan.com/'],
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
        'https://rpc.ankr.com/base',
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
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/scroll.png',
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
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/mode.png',
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
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/mantle.png',
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
        'https://rpc.ankr.com/mantle',
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
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/blast.png',
    multicallAddress: multicallAddresses[ChainId.BLS],
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
        'https://rpc.ankr.com/blast',
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
    coin: CoinKey.frxETH,
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
        name: 'Frax Ethereum',
        symbol: 'frxETH',
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
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/taiko.png',
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
      rpcUrls: [
        'https://rpc.mainnet.taiko.xyz',
        'https://rpc.taiko.xyz',
        'https://rpc.taiko.tools',
      ],
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
      blockExplorerUrls: [
        'https://immutable-mainnet.blockscout.com/',
        'https://explorer.immutable.com/',
      ],
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
    coin: CoinKey.KLAY,
    id: 8217,
    mainnet: true,
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/chains/kaia.svg',
    multicallAddress: multicallAddresses[ChainId.KAI],

    metamask: {
      chainId: prefixChainId(8217),
      blockExplorerUrls: ['https://kaiascan.io/', 'https://kaiascope.com/'],
      chainName: 'Kaia Mainnet',
      nativeCurrency: {
        name: 'KAIA',
        symbol: 'KAIA',
        decimals: 18,
      },
      rpcUrls: [
        'https://public-en.node.kaia.io',
        'https://klaytn-pokt.nodies.app',
      ],
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
      blockExplorerUrls: ['https://explorer.mainnet.abs.xyz/'],
      chainName: 'Abstract',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
      },
      rpcUrls: [],
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
      blockExplorerUrls: ['https://sonicscan.org/'],
      chainName: 'Sonic Network',
      nativeCurrency: {
        name: 'Sonic',
        symbol: 'S',
        decimals: 18,
      },
      rpcUrls: ['https://rpc.soniclabs.com', 'https://sonic.drpc.org'],
    },
  },
]
