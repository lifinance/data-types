import type { Coin, StaticToken } from '@lifi/types'
import { ChainId, CoinKey } from '@lifi/types'

type BasicToken = {
  address: string
  decimals: number
  name?: string
  symbol?: string
}

type BasicCoin = {
  key: CoinKey
  name: string
  logoURI: string
  verified: boolean
  chains: {
    [key: number]: BasicToken
  }
}

export const basicCoins: BasicCoin[] = [
  // NATIVE COINS
  // > ETH
  {
    key: CoinKey.ETH,
    name: CoinKey.ETH,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: '7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs',
        decimals: 8,
        name: 'Ether (Wormhole)',
      },
      [ChainId.POL]: {
        address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        decimals: 18,
      },
      [ChainId.DAI]: {
        address: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
      },
      [ChainId.OPT]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.ERA]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.PZE]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.BAS]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.LNA]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.FTM]: {
        address: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
        decimals: 18,
      },
      [ChainId.AVA]: {
        address: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
        decimals: 18,
        symbol: 'WETH.e',
        name: 'Wrapped Ether',
      },
      // [ChainId.ARB]: { // WETH
      //   address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
      //   decimals: 18,
      [ChainId.ONE]: {
        address: '0x6983d1e6def3690c4d616b13597a09e6193ea013',
        decimals: 18,
      },
      [ChainId.BOB]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.MOO]: {
        address: '0xfa9343c3897324496a05fc75abed6bac29f8a40f',
        decimals: 18,
      },
      [ChainId.AUR]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        symbol: 'AETH',
        name: 'AETH',
      },
      // https://evmexplorer.velas.com/token/0x85219708c49aa701871Ad330A94EA0f41dFf24Ca
      [ChainId.VEL]: {
        address: '0x85219708c49aa701871ad330a94ea0f41dff24ca',
        decimals: 18,
      },
      [ChainId.SCL]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.MOD]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.BLS]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.TAI]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.OPB]: {
        address: '0xE7798f023fC62146e8Aa1b36Da45fb70855a77Ea',
        decimals: 18,
      },
    },
  },
  // > MATIC
  {
    key: CoinKey.MATIC,
    name: CoinKey.MATIC,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
        decimals: 18,
        name: 'Matic Token',
      },
      [ChainId.SOL]: {
        address: 'Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG',
        decimals: 8,
        name: 'Wrapped Matic (Wormhole)',
      },
      [ChainId.BSC]: {
        address: '0xcc42724c6683b7e57334c4e856f4c9965ed682bd',
        decimals: 18,
        name: 'Matic Token',
      },
      [ChainId.DAI]: {
        address: '0x7122d7661c4564b7c6cd4878b06766489a6028a2',
        decimals: 18,
        name: 'Matic Token',
      },
      // https://evmexplorer.velas.com/token/0x6ab0B8C1a35F9F4Ce107cCBd05049CB1Dbd99Ec5/
      [ChainId.VEL]: {
        address: '0x6ab0b8c1a35f9f4ce107ccbd05049cb1dbd99ec5',
        decimals: 18,
      },
    },
  },
  // > POL migrated from MATIC
  {
    key: CoinKey.POL,
    name: CoinKey.POL,
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/matic/6f5a6b6f0732a7a235131bd7804d357c.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x455e53CBB86018Ac2B8092FdCd39d8444aFFC3F6',
        decimals: 18,
        name: 'Polygon Ecosystem Token',
      },
      [ChainId.POL]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        name: 'Polygon Ecosystem Token',
      },
    },
  },
  // > BNB
  {
    key: CoinKey.BNB,
    name: CoinKey.BNB,
    logoURI:
      'https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png?1547034615',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xb8c77482e45f1f44de1745f52c74426c631bdd52',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: '9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa',
        decimals: 8,
        name: 'Binance Coin (Wormhole)',
      },
      [ChainId.BSC]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.ONE]: {
        address: '0xb1f6e61e1e113625593a22fa6aa94f8052bc39e0',
        decimals: 18,
        symbol: 'bscBNB',
      },
      [ChainId.MOO]: {
        address: '0xc9baa8cfdde8e328787e29b4b078abf2dadc2055',
        decimals: 18,
      },
      // https://evmexplorer.velas.com/token/0x2B8e9cD44C9e09D936149549a8d207c918ecB5C4
      [ChainId.VEL]: {
        address: '0x2b8e9cd44c9e09d936149549a8d207c918ecb5c4',
        decimals: 18,
      },
      [ChainId.OPB]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.CRO]: {
        address: '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
        decimals: 18,
      },
      [ChainId.ERA]: {
        address: '0x7400793aad94c8ca801aa036357d10f5fd0ce08f',
        decimals: 18,
      },
      [ChainId.LNA]: {
        address: '0xf5C6825015280CdfD0b56903F9F8B5A2233476F5',
        decimals: 18,
      },
    },
  },
  // > DAI
  {
    key: CoinKey.DAI,
    name: 'DAI Stablecoin',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x6b175474e89094c44da98b954eedeac495271d0f',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: 'EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o',
        decimals: 8,
        name: 'DAI Stablecoin (Wormhole)',
      },
      [ChainId.BSC]: {
        address: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
        decimals: 18,
        name: '(PoS) DAI Stablecoin',
      },
      [ChainId.DAI]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        symbol: 'xDAI',
        name: 'xDAI Native Token',
      },
      [ChainId.OPT]: {
        address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        decimals: 18,
      },
      [ChainId.ERA]: {
        address: '0x4bef76b6b7f2823c6c1f4fcfeacd85c24548ad7e',
        decimals: 18,
      },
      [ChainId.FTM]: {
        address: '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e',
        decimals: 18,
      },
      [ChainId.ONE]: {
        address: '0xef977d2f931c1978db5f6747666fa1eacb0d0339',
        decimals: 18,
        symbol: '1DAI',
      },
      [ChainId.AVA]: {
        address: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
        decimals: 18,
        symbol: 'DAI.e',
      },
      [ChainId.ARB]: {
        address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        decimals: 18,
      },
      [ChainId.CRO]: {
        address: '0xf2001b145b43032aaf5ee2884e456ccd805f677d',
        decimals: 18,
      },
      [ChainId.FUS]: {
        address: '0x94ba7a27c7a95863d1bdc7645ac2951e0cca06ba',
        decimals: 18,
        name: 'DAI Stablecoin',
      },
      [ChainId.CEL]: {
        address: '0x90ca507a5d4458a4c6c6249d186b6dcb02a5bccd',
        decimals: 18,
      },
      [ChainId.MOO]: {
        address: '0x765277eebeca2e31912c9946eae1021199b39c61',
        decimals: 18,
      },
      [ChainId.BOB]: {
        address: '0xf74195bb8a5cf652411867c5c2c5b8c2a402be35',
        decimals: 18,
      },
      [ChainId.EVM]: {
        address: '0x461d52769884ca6235B685EF2040F47d30C94EB5',
        decimals: 18,
      },
      // https://evmexplorer.velas.com/token/0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D
      [ChainId.VEL]: {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        decimals: 18,
      },
      [ChainId.BAS]: {
        address: '0x50c5725949a6f0c72e6c4a641f24049a917db0cb',
        decimals: 18,
      },
      [ChainId.MAM]: {
        address: '0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0',
        decimals: 18,
        name: 'Metis DAI',
        symbol: 'm.DAI',
      },
      [ChainId.SCL]: {
        address: '0xcA77eB3fEFe3725Dc33bccB54eDEFc3D9f764f97',
        decimals: 18,
      },
      [ChainId.XLY]: {
        address: '0xc5015b9d9161dca7e18e32f6f25c4ad850731fd4',
        decimals: 18,
      },
    },
  },
  // > FTM
  {
    key: CoinKey.FTM,
    name: CoinKey.FTM,
    logoURI:
      'https://static.debank.com/image/ftm_token/logo_url/ftm/33fdb9c5067e94f3a1b9e78f6fa86984.png',
    verified: true,
    chains: {
      [ChainId.FTM]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: '8gC27rQF4NEDYfyf5aS8ZmQJUum5gufowKGYRRba4ENN',
        decimals: 8,
        name: 'Fantom Token (Wormhole)',
      },
    },
  },
  // > AVAX
  {
    key: CoinKey.AVAX,
    name: CoinKey.AVAX,
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/avax/0b9c84359c84d6bdd5bfda9c2d4c4a82.png',
    verified: true,
    chains: {
      [ChainId.AVA]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: 'KgV1GvrHQmRBY8sHQQeUKwTm2r2h8t4C8qt12Cw1HVE',
        decimals: 8,
        name: 'Avalanche (Wormhole)',
      },
      [ChainId.CRO]: {
        address: '0x8d58088D4E8Ffe75A8b6357ba5ff17B93B912640',
        decimals: 9,
      },
    },
  },
  // > ONE
  {
    key: CoinKey.ONE,
    name: CoinKey.ONE,
    logoURI:
      'https://assets.coingecko.com/coins/images/18183/small/wonelogo.png',
    verified: true,
    chains: {
      [ChainId.ONE]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x03ff0ff224f904be3118461335064bb48df47938',
        decimals: 18,
        name: 'Harmony ONE',
      },
    },
  },
  // > FSN
  {
    key: CoinKey.FSN,
    name: CoinKey.FSN,
    logoURI: 'https://www.bscscan.com/token/images/anyFSN_32.png',
    verified: true,
    chains: {
      [ChainId.FSN]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > MOVR
  {
    key: CoinKey.MOVR,
    name: CoinKey.MOVR,
    logoURI: 'https://assets.coingecko.com/coins/images/17984/small/9285.png',
    verified: true,
    chains: {
      [ChainId.MOR]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.MOO]: {
        address: '0x1d4c2a246311bb9f827f4c768e277ff5787b7d7e',
        decimals: 18,
      },
    },
  },
  // > MNT
  {
    key: CoinKey.MNT,
    name: CoinKey.MNT,
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8/a443c78c33704d48f06e5686bb87f85e.png',
    verified: true,
    chains: {
      [ChainId.MNT]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.ETH]: {
        address: '0x3c3a81e81dc49A522A592e7622A7E711c06bf354',
        decimals: 18,
      },
    },
  },

  // > RSK
  {
    key: CoinKey.RBTC,
    name: 'Rootstock Smart Bitcoin',
    logoURI:
      'https://static.debank.com/image/rsk_token/logo_url/0x542fda317318ebf1d3deaf76e0b632741a7e677d/4785a26ef5bb5df987e67ad49fc62137.png',
    verified: true,
    chains: {
      [ChainId.RSK]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },

  // OTHER STABLECOINS
  // USDT
  {
    key: CoinKey.USDT,
    name: CoinKey.USDT,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        decimals: 6,
      },
      [ChainId.SOL]: {
        address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
        decimals: 6,
        name: 'USDT',
      },
      [ChainId.BSC]: {
        address: '0x55d398326f99059ff775485246999027b3197955',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        decimals: 6,
      },
      [ChainId.DAI]: {
        address: '0x4ecaba5870353805a9f068101a40e0f32ed605c6',
        decimals: 6,
      },
      [ChainId.OPT]: {
        address: '0x94b008aa00579c1307b0ef2c499ad98a8ce58e58',
        decimals: 6,
      },
      [ChainId.FTM]: {
        address: '0x049d68029688eabf473097a2fc38ef61633a3c7a',
        decimals: 6,
      },
      [ChainId.ARB]: {
        address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        decimals: 6,
      },
      [ChainId.ONE]: {
        address: '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f',
        decimals: 6,
      },
      [ChainId.AVA]: {
        address: '0xc7198437980c041c805a1edcba50c1ce5db95118',
        decimals: 6,
        symbol: 'USDT.e',
        name: 'Tether USD',
      },
      [ChainId.MOR]: {
        address: '0xb44a9b6905af7c801311e8f4e76932ee959c663c',
        decimals: 6,
      },
      [ChainId.CRO]: {
        address: '0x66e428c3f67a68878562e79a0234c1f83c208770',
        decimals: 6,
      },
      [ChainId.FUS]: {
        address: '0xfadbbf8ce7d5b7041be672561bba99f79c532e10',
        decimals: 6,
      },
      [ChainId.CEL]: {
        address: '0x88eec49252c8cbc039dcdb394c0c2ba2f1637ea0',
        decimals: 6,
      },
      [ChainId.MOO]: {
        address: '0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73',
        decimals: 6,
      },
      [ChainId.BOB]: {
        address: '0x5de1677344d3cb0d7d465c10b72a8f60699c062d',
        decimals: 6,
      },
      [ChainId.EVM]: {
        address: '0x7FF4a56B32ee13D7D4D405887E0eA37d61Ed919e',
        decimals: 6,
      },
      [ChainId.AUR]: {
        address: '0x4988a896b1227218e4A686fdE5EabdcAbd91571f',
        decimals: 6,
      },
      // https://evmexplorer.velas.com/token/0x01445C31581c354b7338AC35693AB2001B50b9aE
      [ChainId.VEL]: {
        address: '0x01445c31581c354b7338ac35693ab2001b50b9ae',
        decimals: 6,
        name: 'Multichain USDT',
      },
      [ChainId.LNA]: {
        address: '0xa219439258ca9da29e9cc4ce5596924745e12b93',
        decimals: 6,
        name: 'USDT',
      },
      [ChainId.PZE]: {
        address: '0x1E4a5963aBFD975d8c9021ce480b42188849D41d',
        decimals: 6,
        name: 'USDT',
      },
      [ChainId.ERA]: {
        address: '0x493257fD37EDB34451f62EDf8D2a0C418852bA4C',
        decimals: 6,
        name: 'USDT',
      },
      [ChainId.MAM]: {
        address: '0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC',
        decimals: 6,
        name: 'Metis USDT',
        symbol: 'm.USDT',
      },
      [ChainId.SCL]: {
        address: '0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df',
        decimals: 6,
      },
      [ChainId.MOD]: {
        address: '0xf0F161fDA2712DB8b566946122a5af183995e2eD',
        decimals: 6,
      },
      [ChainId.MNT]: {
        address: '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE',
        decimals: 6,
      },
      [ChainId.RSK]: {
        address: '0xef213441a85df4d7acbdae0cf78004e1e486bb96',
        decimals: 18,
        name: 'rUSDT',
        symbol: 'rUSDT',
      },
      [ChainId.SEI]: {
        address: '0xB75D0B03c06A926e488e2659DF1A861F860bD3d1',
        decimals: 6,
      },
      [ChainId.TAI]: {
        address: '0x2DEF195713CF4a606B49D07E520e22C17899a736',
        decimals: 6,
      },
      [ChainId.GRA]: {
        address: '0x816E810f9F787d669FB71932DeabF6c83781Cd48',
        decimals: 6,
      },
      [ChainId.IMX]: {
        address: '0x68bcc7F1190AF20e7b572BCfb431c3Ac10A936Ab',
        decimals: 6,
      },
      [ChainId.KAI]: {
        address: '0x9025095263d1e548dc890a7589a4c78038ac40ab',
        decimals: 6,
      },
      [ChainId.XLY]: {
        address: '0x1e4a5963abfd975d8c9021ce480b42188849d41d',
        decimals: 6,
      },
      [ChainId.OPB]: {
        address: '0x9e5aac1ba1a2e6aed6b32689dfcf62a509ca96f3',
        decimals: 18,
      },
    },
  },

  // USDC
  {
    key: CoinKey.USDC,
    name: 'USD Coin',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
        decimals: 6,
      },
      [ChainId.SOL]: {
        address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
        decimals: 6,
        name: 'USD Coin',
      },
      [ChainId.BSC]: {
        address: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
        decimals: 6,
      },
      [ChainId.DAI]: {
        address: '0xddafbb505ad214d7b80b1f830fccc89b60fb7a83',
        decimals: 6,
      },
      [ChainId.OPT]: {
        address: '0x0b2c639c533813f4aa9d7837caf62653d097ff85',
        decimals: 6,
      },
      [ChainId.BAS]: {
        address: '0x833589fcd6edb6e08f4c7c32d4f71b54bda02913',
        decimals: 6,
      },
      [ChainId.ERA]: {
        address: '0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4',
        decimals: 6,
      },
      [ChainId.PZE]: {
        address: '0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035',
        decimals: 6,
      },
      [ChainId.FTM]: {
        address: '0x28a92dde19d9989f39a49905d7c9c2fac7799bdf',
        decimals: 6,
        name: 'LayerZero USDC Token',
      },
      [ChainId.ARB]: {
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
        decimals: 6,
      },
      [ChainId.ONE]: {
        address: '0x985458e523db3d53125813ed68c274899e9dfab4',
        decimals: 6,
      },
      [ChainId.AVA]: {
        address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
        decimals: 6,
      },
      [ChainId.MOR]: {
        address: '0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d',
        decimals: 6,
      },
      [ChainId.CRO]: {
        address: '0xc21223249ca28397b4b6541dffaecc539bff0c59',
        decimals: 6,
      },
      [ChainId.FUS]: {
        address: '0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5',
        decimals: 6,
      },
      [ChainId.CEL]: {
        address: '0xef4229c8c3250c675f21bcefa42f58efbff6002a',
        decimals: 6,
      },
      [ChainId.MOO]: {
        address: '0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b',
        decimals: 6,
      },
      [ChainId.BOB]: {
        address: '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
        decimals: 6,
      },
      [ChainId.EVM]: {
        address: '0x51e44FfaD5C2B122C8b635671FCC8139dc636E82',
        decimals: 6,
      },
      [ChainId.AUR]: {
        address: '0x368EBb46ACa6b8D0787C96B2b20bD3CC3F2c45F7',
        decimals: 6,
      },
      // https://evmexplorer.velas.com/token/0xe2C120f188eBd5389F71Cf4d9C16d05b62A58993
      [ChainId.VEL]: {
        address: '0xe2c120f188ebd5389f71cf4d9c16d05b62a58993',
        decimals: 6,
        name: 'Multichain USDC',
      },
      [ChainId.LNA]: {
        address: '0x176211869ca2b568f2a7d4ee941e073a821ee1ff',
        decimals: 6,
        name: 'USDC.e',
      },
      [ChainId.MAM]: {
        address: '0xEA32A96608495e54156Ae48931A7c20f0dcc1a21',
        decimals: 6,
        name: 'Metis USDC',
        symbol: 'm.USDC',
      },
      [ChainId.SCL]: {
        address: '0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4',
        decimals: 6,
      },
      [ChainId.MOD]: {
        address: '0xd988097fb8612cc24eeC14542bC03424c656005f',
        decimals: 6,
      },
      [ChainId.MNT]: {
        address: '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9',
        decimals: 6,
      },
      [ChainId.SEI]: {
        address: '0x3894085Ef7Ff0f0aeDf52E2A2704928d1Ec074F1',
        decimals: 6,
      },
      [ChainId.TAI]: {
        address: '0x07d83526730c7438048D55A4fc0b850e2aaB6f0b',
        decimals: 6,
      },
      [ChainId.IMX]: {
        address: '0x6de8aCC0D406837030CE4dd28e7c08C5a96a30d2',
        decimals: 6,
      },
      [ChainId.KAI]: {
        address: '0x6270b58be569a7c0b8f47594f191631ae5b2c86c',
        decimals: 6,
      },
      [ChainId.XLY]: {
        address: '0x74b7f16337b8972027f6196a17a631ac6de26d22',
        decimals: 6,
      },
    },
  },
  // USDC.e
  // Represents the USD Coin (USDC) bridged from Ethereum (as opposed to the 'native' USDC issued by Circle)
  {
    key: CoinKey.USDCe,
    name: CoinKey.USDCe,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.POL]: {
        address: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        decimals: 6,
        name: 'Bridged USD Coin',
        symbol: 'USDC.e',
      },
      [ChainId.ARB]: {
        address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
        decimals: 6,
        name: 'Bridged USD Coin',
        symbol: 'USDC.e',
      },
      [ChainId.AVA]: {
        address: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
        decimals: 6,
        name: 'Bridged USD Coin',
        symbol: 'USDC.e',
      },
      [ChainId.OPT]: {
        address: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
        decimals: 6,
        name: 'Bridged USD Coin',
        symbol: 'USDC.e',
      },
      [ChainId.BAS]: {
        address: '0xd9aaec86b65d86f6a7b5b1b0c42ffa531710b6ca',
        decimals: 6,
        name: 'USD Base Coin',
        symbol: 'USDbC',
      },
      [ChainId.DAI]: {
        address: '0x2a22f9c3b484c3629090feed35f17ff8f88f76f0',
        decimals: 6,
        name: 'Bridged USD Coin',
        symbol: 'USDC.e',
      },
      [ChainId.GRA]: {
        address: '0xFbDa5F676cB37624f28265A144A48B0d6e87d3b6',
        decimals: 6,
        name: 'Bridged USD Coin',
        symbol: 'USDC.e',
      },
      [ChainId.KAI]: {
        address: '0xe2053bcf56d2030d2470fb454574237cf9ee3d4b',
        decimals: 6,
        name: 'Bridged USD Coin',
        symbol: 'USDC.e',
      },
      [ChainId.AUR]: {
        address: '0xB12BFcA5A55806AaF64E99521918A4bf0fC40802',
        decimals: 6,
        name: 'Bridged USD Coin',
        symbol: 'USDC.e',
      },
    },
  },
  // axlUSDC
  // axlUSDC is a wrapped, multi-chain representation of USDC, a dollar stablecoin.
  {
    key: CoinKey.AXLUSDC,
    name: 'Axelar Wrapped USDC',
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    verified: true,
    chains: {
      [ChainId.BSC]: {
        address: '0x4268B8F0B87b6Eae5d897996E6b845ddbD99Adf3',
        decimals: 18,
      },
      [ChainId.AVA]: {
        address: '0xfaB550568C688d5D8A52C7d794cb93Edc26eC0eC',
        decimals: 6,
      },
      [ChainId.POL]: {
        address: '0x750e4C4984a9e0f12978eA6742Bc1c5D248f40ed',
        decimals: 6,
      },
      [ChainId.FTM]: {
        address: '0x1B6382DBDEa11d97f24495C9A90b7c88469134a4',
        decimals: 6,
      },
      [ChainId.MOO]: {
        address: '0xca01a1d0993565291051daff390892518acfad3a',
        decimals: 6,
      },
      [ChainId.ARB]: {
        address: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
        decimals: 6,
      },
      [ChainId.BAS]: {
        address: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
        decimals: 6,
      },
      [ChainId.OPT]: {
        address: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
        decimals: 6,
      },
      [ChainId.LNA]: {
        address: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
        decimals: 6,
      },
      [ChainId.ONE]: {
        address: '0x985458e523db3d53125813ed68c274899e9dfab4',
        decimals: 6,
      },
      [ChainId.SCL]: {
        address: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
        decimals: 6,
      },
      [ChainId.MNT]: {
        address: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
        decimals: 6,
      },
      [ChainId.BLS]: {
        address: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
        decimals: 6,
      },
      [ChainId.CEL]: {
        address: '0xeb466342c4d449bc9f53a865d5cb90586f405215',
        decimals: 6,
      },
      [ChainId.EVM]: {
        address: '0x15c3eb3b621d1bff62cba1c9536b7c1ae9149b57',
        decimals: 6,
      },
      [ChainId.FRA]: {
        address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
        decimals: 6,
      },
      [ChainId.IMX]: {
        address: '0xEB466342C4d449BC9f53A865D5Cb90586f405215',
        decimals: 6,
      },
    },
  },
  // BUSD
  {
    key: CoinKey.BUSD,
    name: CoinKey.BUSD,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/binance/assets/BUSD-BD1/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
        decimals: 18,
      },
      [ChainId.OPT]: {
        address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
        decimals: 18,
      },
      [ChainId.AVA]: {
        address: '0x9C9e5fD8bbc25984B178FdCE6117Defa39d2db39',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: '33fsBLA8djQm82RpHmE3SuVrPGtZBWNYExsEUeKX1HXX',
        decimals: 8,
        name: 'Binance USD (Wormhole from Ethereum)',
        symbol: 'BUSD',
      },
      [ChainId.FUS]: {
        address: '0x6a5F6A8121592BeCd6747a38d67451B310F7f156',
        decimals: 18,
      },
      [ChainId.VEL]: {
        address: '0xc111c29a988ae0c0087d97b33c6e6766808a3bd3',
        decimals: 18,
      },
      [ChainId.ONE]: {
        address: '0xe176ebe47d621b984a73036b9da5d834411ef734',
        decimals: 18,
      },
    },
  },

  // USDB
  {
    key: CoinKey.USDB,
    name: CoinKey.USDB,
    logoURI:
      'https://static.debank.com/image/blast_token/logo_url/0x4300000000000000000000000000000000000003/43c9fafca023ddd62f7900f357b26714.png',
    verified: true,
    chains: {
      [ChainId.BLS]: {
        address: '0x4300000000000000000000000000000000000003',
        decimals: 18,
      },
    },
  },

  // Frax
  {
    key: CoinKey.FRAX,
    name: CoinKey.FRAX,
    logoURI:
      'https://static.debank.com/image/movr_token/logo_url/0x965f84d915a9efa2dd81b653e3ae736555d945f4/1f2c42cba1add081f314ee899ab67816.png',
    verified: true,
    chains: {
      [ChainId.FRA]: {
        address: '0xfc00000000000000000000000000000000000001',
        decimals: 18,
      },
      [ChainId.ETH]: {
        address: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0x17FC002b466eEc40DaE837Fc4bE5c67993ddBd6F',
        decimals: 18,
      },
      [ChainId.OPT]: {
        address: '0x2E3D870790dC77A83DD1d18184Acc7439A53f475',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x90C97F71E18723b0Cf0dfa30ee176Ab653E89F40',
        decimals: 18,
      },
      [ChainId.FTM]: {
        address: '0xdc301622e621166BD8E82f2cA0A26c13Ad0BE355',
        decimals: 18,
      },
      [ChainId.AVA]: {
        address: '0xdc42728b0ea910349ed3c6e1c9dc06b5fb591f98',
        decimals: 18,
      },
      [ChainId.MOR]: {
        address: '0x1A93B23281CC1CDE4C4741353F3064709A16197d',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89',
        decimals: 18,
      },
      [ChainId.PZE]: {
        address: '0xFf8544feD5379D9ffa8D47a74cE6b91e632AC44D',
        decimals: 18,
      },
      [ChainId.MOO]: {
        address: '0x322E86852e492a7Ee17f28a78c663da38FB33bfb',
        decimals: 18,
      },
      [ChainId.SEI]: {
        address: '0x80Eede496655FB9047dd39d9f418d5483ED600df',
        decimals: 18,
      },
    },
  },

  // > WBTC
  {
    key: CoinKey.WBTC,
    name: CoinKey.WBTC,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
        decimals: 8,
      },
      [ChainId.SOL]: {
        address: 'qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL',
        decimals: 8,
        name: 'Wrapped BTC (Wormhole)',
      },
      [ChainId.POL]: {
        address: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
        decimals: 8,
      },
      [ChainId.DAI]: {
        address: '0x8e5bbbb09ed1ebde8674cda39a0c169401db4252',
        decimals: 8,
      },
      [ChainId.FTM]: {
        address: '0x321162cd933e2be498cd2267a90534a804051b11',
        decimals: 8,
      },
      [ChainId.OPT]: {
        address: '0x68f180fcce6836688e9084f035309e29bf0a2095',
        decimals: 8,
      },
      [ChainId.AVA]: {
        address: '0x50b7545627a5162f82a992c33b87adc75187b218',
        decimals: 8,
      },
      [ChainId.ARB]: {
        address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
        decimals: 8,
      },
      [ChainId.ONE]: {
        address: '0x3095c7557bcb296ccc6e363de01b760ba031f2d9',
        decimals: 8,
      },
      [ChainId.MOR]: {
        address: '0xe6a991ffa8cfe62b0bf6bf72959a3d4f11b2e0f5',
        decimals: 8,
      },
      [ChainId.CRO]: {
        address: '0x062e66477faf219f25d27dced647bf57c3107d52',
        decimals: 8,
      },
      [ChainId.FUS]: {
        address: '0x33284f95ccb7b948d9d352e1439561cf83d8d00d',
        decimals: 8,
      },
      [ChainId.CEL]: {
        address: '0xbaab46e28388d2779e6e31fd00cf0e5ad95e327b',
        decimals: 8,
      },
      [ChainId.MOO]: {
        address: '0x922d641a426dcffaef11680e5358f34d97d112e1',
        decimals: 8,
      },
      [ChainId.BOB]: {
        address: '0xdc0486f8bf31df57a952bcd3c1d3e166e3d9ec8b',
        decimals: 8,
      },
      [ChainId.EVM]: {
        address: '0xF80699Dc594e00aE7bA200c7533a07C1604A106D',
        decimals: 8,
      },
      [ChainId.AUR]: {
        address: '0xF4eB217Ba2454613b15dBdea6e5f22276410e89e',
        decimals: 8,
      },
      [ChainId.SCL]: {
        address: '0x3C1BCa5a656e69edCD0D4E36BEbb3FcDAcA60Cf1',
        decimals: 8,
      },
      [ChainId.MNT]: {
        address: '0xCAbAE6f6Ea1ecaB08Ad02fE02ce9A44F09aebfA2',
        decimals: 8,
      },
      [ChainId.IMX]: {
        address: '0x235F9A2Dc29E51cE7D103bcC5Dfb4F5c9c3371De',
        decimals: 8,
      },
      [ChainId.XLY]: {
        address: '0xea034fb02eb1808c2cc3adbc15f447b93cbe08e1',
        decimals: 8,
      },
    },
  },

  // > WETH
  {
    key: CoinKey.WETH,
    name: CoinKey.WETH,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: 'AaAEw2VCw1XzgvKB8Rj2DyK2ZVau9fbt2bE8hZFWsMyE',
        decimals: 9,
        name: 'Wrapped ETH (Allbridge from Ethereum)',
      },
      [ChainId.BSC]: {
        address: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
        decimals: 18,
      },
      [ChainId.DAI]: {
        address: '0x6a023ccd1ff6f2045c3309768ead9e68f978f6e1',
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
      },
      [ChainId.POL]: {
        address: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        decimals: 18,
        symbol: 'WETH',
        name: 'Wrapped Ether',
      },
      [ChainId.FTM]: {
        address: '0x74b23882a30290451a17c44f4f05243b6b58c76d',
        decimals: 18,
      },
      [ChainId.LNA]: {
        address: '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
        decimals: 18,
      },
      [ChainId.AVA]: {
        address: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
        decimals: 18,
        symbol: 'WETH.e',
        name: 'Wrapped Ether',
      },
      [ChainId.ARB]: {
        address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
        decimals: 18,
      },
      [ChainId.OPT]: {
        address: '0x4200000000000000000000000000000000000006',
        decimals: 18,
      },
      [ChainId.BAS]: {
        address: '0x4200000000000000000000000000000000000006',
        decimals: 18,
      },
      [ChainId.MOR]: {
        address: '0x639a647fbe20b6c8ac19e48e2de44ea792c62c5c',
        decimals: 18,
      },
      [ChainId.CRO]: {
        address: '0xe44fd7fcb2b1581822d0c862b68222998a0c299a',
        decimals: 18,
      },
      [ChainId.FUS]: {
        address: '0xa722c13135930332eb3d749b2f0906559d2c5b99',
        decimals: 18,
      },
      [ChainId.CEL]: {
        address: '0x122013fd7df1c6f636a5bb8f03108e876548b455',
        decimals: 18,
      },
      [ChainId.MOO]: {
        address: '0xfA9343C3897324496A05fC75abeD6bAC29f8A40f',
        decimals: 18,
      },
      [ChainId.BOB]: {
        address: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
        decimals: 18,
      },
      [ChainId.EVM]: {
        address: '0x5842C5532b61aCF3227679a8b1BD0242a41752f2',
        decimals: 18,
      },
      [ChainId.AUR]: {
        address: '0xC9BdeEd33CD01541e1eeD10f90519d2C06Fe3feB',
        decimals: 18,
      },
      [ChainId.MAM]: {
        address: '0x420000000000000000000000000000000000000A',
        decimals: 18,
      },
      [ChainId.SCL]: {
        address: '0x5300000000000000000000000000000000000004',
        decimals: 18,
      },
      [ChainId.MOD]: {
        address: '0x4200000000000000000000000000000000000006',
        decimals: 18,
      },
      [ChainId.MNT]: {
        address: '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111',
        decimals: 18,
      },
      [ChainId.BLS]: {
        address: '0x4300000000000000000000000000000000000004',
        decimals: 18,
      },
      [ChainId.GRA]: {
        address: '0xf6f832466Cd6C21967E0D954109403f36Bc8ceaA',
        decimals: 18,
      },
      [ChainId.IMX]: {
        address: '0x52a6c53869ce09a731cd772f245b97a4401d3348',
        decimals: 18,
      },
      [ChainId.SEI]: {
        address: '0x160345fC359604fC6e70E3c5fAcbdE5F7A9342d8',
        decimals: 18,
      },
      [ChainId.KAI]: {
        address: '0x55acee547df909cf844e32dd66ee55a6f81dc71b',
        decimals: 18,
      },
      [ChainId.XLY]: {
        address: '0x5a77f1443d16ee5761d310e38b62f77f726bc71c',
        decimals: 18,
      },
      [ChainId.TAI]: {
        address: '0xA51894664A773981C6C112C43ce576f315d5b1B6',
        decimals: 18,
      },
    },
  },

  // > SUSHI
  {
    key: CoinKey.SUSHI,
    name: CoinKey.SUSHI,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: 'ChVzxWRmrTeSgwd3Ui3UumcN8KX7VK3WaD4KGeSKpypj',
        decimals: 8,
        name: 'Sushi',
      },
      [ChainId.POL]: {
        address: '0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x947950bcc74888a40ffa2593c5798f11fc9124c4',
        decimals: 18,
      },
      [ChainId.DAI]: {
        address: '0x2995d1317dcd4f0ab89f4ae60f3f020a4f17c7ce',
        decimals: 18,
      },
      [ChainId.FTM]: {
        address: '0xae75a438b2e0cb8bb01ec1e1e376de11d44477cc',
        decimals: 18,
      },
      [ChainId.AVA]: {
        // guessed from debank api
        address: '0x37b608519f91f70f2eeb0e5ed9af4061722e4f76',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0xd4d42f0b6def4ce0383636770ef773390d85c61a',
        decimals: 18,
      },
      [ChainId.ONE]: {
        address: '0xbec775cb42abfa4288de81f387a9b1a3c4bc552a',
        decimals: 18,
      },
      [ChainId.MOR]: {
        address: '0xf390830df829cf22c53c8840554b98eafc5dcbc2',
        decimals: 18,
      },
      [ChainId.FUS]: {
        address: '0x90708b20ccc1eb95a4fa7c8b18fd2c22a0ff9e78',
        decimals: 18,
      },
      [ChainId.CEL]: {
        address: '0x29dfce9c22003a4999930382fd00f9fd6133acd1',
        decimals: 18,
      },
    },
  },

  // used by cBridge v1:
  // > DODO
  {
    key: CoinKey.DODO,
    name: CoinKey.DODO,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0x69eb4fa4a2fbd498c257c57ea8b7655a2559a581',
        decimals: 18,
      },
    },
  },
  // > MCB
  {
    key: CoinKey.MCB,
    name: CoinKey.MCB,
    logoURI:
      'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42/logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42',
        decimals: 18,
      },
    },
  },
  // > CELR
  {
    key: CoinKey.CELR,
    name: CoinKey.CELR,
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0x1f9f6a696c6fd109cd3956f45dc709d2b3902163/1eb9c8f251098ea22a2cb30a877da86a.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x4f9254c83eb525f9fcf346490bbb3ed28a81c667',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x1f9f6a696c6fd109cd3956f45dc709d2b3902163',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0x3a8b787f78d775aecfeea15706d4221b40f345ab',
        decimals: 18,
      },
    },
  },
  // > IF
  {
    key: CoinKey.IF,
    name: CoinKey.IF,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10932.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xb0e1fc65c1a741b4662b813eb787d369b8614af1',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0xb0e1fc65c1a741b4662b813eb787d369b8614af1',
        decimals: 18,
      },
    },
  },
  // > CRO
  {
    key: CoinKey.CRO,
    name: CoinKey.CRO,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png',
    verified: true,
    chains: {
      [ChainId.CRO]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > FUS
  {
    key: CoinKey.FUSE,
    name: CoinKey.FUSE,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5634.png',
    verified: true,
    chains: {
      [ChainId.FUS]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > CEL
  {
    key: CoinKey.CELO,
    name: CoinKey.CELO,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5567.png',
    verified: true,
    chains: {
      [ChainId.CEL]: {
        // The CELO token is not a native token (0x000...).
        // Instead, it is this ERC20 token: https://explorer.celo.org/token/0x471EcE3750Da237f93B8E339c536989b8978a438
        address: '0x471ece3750da237f93b8e339c536989b8978a438',
        decimals: 18,
      },
      [ChainId.SOL]: {
        address: 'GNCjk3FmPPgZTkbQRSxr6nCvLtYMbXKMnRxg8BgJs62e',
        decimals: 9,
        name: 'CELO (Allbridge from Celo)',
      },
    },
  },
  // > GLMR
  {
    key: CoinKey.GLMR,
    name: CoinKey.GLMR,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6836.png',
    verified: true,
    chains: {
      [ChainId.MOO]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > METIS
  {
    key: CoinKey.METIS,
    name: CoinKey.METIS,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png',
    verified: true,
    chains: {
      [ChainId.MAM]: {
        address: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
        decimals: 18,
      },
    },
  },
  // > EVM
  {
    key: CoinKey.EVM,
    name: 'EVMOS',
    logoURI:
      'https://raw.githubusercontent.com/cronus-finance/token-list/main/assets/evmos/0xD4949664cD82660AaE99bEdc034a0deA8A0bd517/logo.png',
    verified: true,
    chains: {
      [ChainId.EVM]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
        symbol: 'EVMOS',
        name: 'EVMOS',
      },
    },
  },
  // > VEL
  {
    key: CoinKey.VLX,
    name: 'Velas',
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/tokens/vlx.png',
    verified: true,
    chains: {
      [ChainId.VEL]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // frxETH
  {
    key: CoinKey.frxETH,
    name: CoinKey.frxETH,
    logoURI:
      'https://assets.coingecko.com/coins/images/28284/standard/frxETH_icon.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x5E8422345238F34275888049021821E8E08CAa1f',
        decimals: 18,
      },
      [ChainId.FRA]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.POL]: {
        address: '0x01e91A094f5559f211e4ad4bED01468aBb64Bde3',
        decimals: 18,
      },
      [ChainId.ARB]: {
        address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
        decimals: 18,
      },
      [ChainId.AVA]: {
        address: '0x939b1a17C0d0Aa3fEA634Ad9157c88245A53C713',
        decimals: 18,
      },
      [ChainId.LNA]: {
        address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
        decimals: 18,
      },
      [ChainId.SCL]: {
        address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
        decimals: 18,
      },
      [ChainId.OPT]: {
        address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
        decimals: 18,
      },
      [ChainId.FTM]: {
        address: '0x39Db1A30122031751e803Fabf329C44efBBfBf4B',
        decimals: 18,
      },
      [ChainId.MOO]: {
        address: '0x29C795559e4Db87054Ba70fafC454214c20aDbD4',
        decimals: 18,
      },
      [ChainId.BAS]: {
        address: '0xEcc68d0451E20292406967Fe7C04280E5238Ac7D',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x39Db1A30122031751e803Fabf329C44efBBfBf4B',
        decimals: 18,
      },
      [ChainId.SEI]: {
        address: '0x43eDD7f3831b08FE70B7555ddD373C8bF65a9050',
        decimals: 18,
      },
    },
  },

  // SEI
  {
    key: CoinKey.SEI,
    name: CoinKey.SEI,
    logoURI: 'https://cdn.sei.io/sei-app/sei-icon.png',
    verified: true,
    chains: {
      [ChainId.SEI]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // > Solana
  {
    key: CoinKey.SOL,
    name: CoinKey.SOL,
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
    verified: true,
    chains: {
      [ChainId.SOL]: {
        address: '11111111111111111111111111111111',
        decimals: 9,
        name: 'SOL',
      },
      [ChainId.ETH]: {
        address: '0xD31a59c85aE9D8edEFeC411D448f90841571b89c',
        decimals: 9,
        name: 'Wrapped SOL (Wormhole)',
      },
      [ChainId.POL]: {
        address: '0xd93f7E271cB87c23AaA73edC008A79646d1F9912',
        decimals: 9,
        name: 'Wrapped SOL (Wormhole)',
      },
      [ChainId.FTM]: {
        address: '0xd99021C2A33e4Cf243010539c9e9b7c52E0236c1',
        decimals: 9,
        name: 'Token Wrapped SOL (Wormhole)',
      },
      [ChainId.AVA]: {
        address: '0xFE6B19286885a4F7F55AdAD09C3Cd1f906D2478F',
        decimals: 9,
        symbol: 'WSOL',
        name: 'Wrapped SOL (Wormhole)',
      },
      [ChainId.AUR]: {
        address: '0x3370C8961A1697F22B49c99669C1d98fE63d031D',
        decimals: 9,
        symbol: 'WSOL',
        name: 'Token Wrapped SOL (Wormhole)',
      },
      [ChainId.CEL]: {
        address: '0x4581E64115d46CcdeE65Be2336bEc86c9BA54C01',
        decimals: 9,
        symbol: 'WSOL',
        name: 'Token Wrapped SOL (Wormhole)',
      },
      [ChainId.CRO]: {
        address: '0xc9DE0F3e08162312528FF72559db82590b481800',
        decimals: 9,
        symbol: 'SOL',
      },
    },
  },
  {
    key: CoinKey.WSOL,
    name: CoinKey.WSOL,
    logoURI:
      'https://assets.coingecko.com/coins/images/4128/standard/solana.png',
    verified: true,
    chains: {
      [ChainId.SOL]: {
        address: 'So11111111111111111111111111111111111111112',
        decimals: 9,
        name: 'wSOL',
      },
    },
  },
  // Gravity
  {
    key: CoinKey.G,
    name: CoinKey.G,
    logoURI: 'https://assets.gravity.xyz/token_logo.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0x9C7BEBa8F6eF6643aBd725e45a4E8387eF260649',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0x9c7beba8f6ef6643abd725e45a4e8387ef260649',
        decimals: 18,
      },
      [ChainId.BAS]: {
        address: '0x9C7BEBa8F6eF6643aBd725e45a4E8387eF260649',
        decimals: 18,
      },
      [ChainId.GRA]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // Immutable X
  {
    key: CoinKey.IMX,
    name: CoinKey.IMX,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xf57e7e7c23978c3caec3c3548e3d615c346e79ff/7a875818146ec0508d3e5f5b14f1b4eb.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xf57e7e7c23978c3caec3c3548e3d615c346e79ff',
        decimals: 18,
      },
      [ChainId.IMX]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },
  // KLAY
  {
    key: CoinKey.KLAY,
    name: CoinKey.KLAY,
    logoURI:
      'https://static.debank.com/image/klay_token/logo_url/0x19aac5f612f524b754ca7e7c41cbfa2e981a4432/1866fc790849a903e0594ce0f55b758d.png',
    verified: true,
    chains: {
      [ChainId.KAI]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
    },
  },

  // OKB
  {
    key: CoinKey.OKB,
    name: CoinKey.OKB,
    logoURI:
      'https://static.debank.com/image/xlayer_token/logo_url/0xe538905cf8410324e03a5a23c1c177a474d59b2b/b58d6980429c56560d9241765bdf9c2b.png',
    verified: true,
    chains: {
      [ChainId.XLY]: {
        address: '0x0000000000000000000000000000000000000000',
        decimals: 18,
      },
      [ChainId.ETH]: {
        address: '0x75231f58b43240c9718dd58b4967c5114342a86c',
        decimals: 18,
      },
    },
  },

  // WBNB
  {
    key: CoinKey.WBNB,
    name: CoinKey.WBNB,
    logoURI:
      'https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png',
    verified: true,
    chains: {
      [ChainId.BSC]: {
        address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        decimals: 18,
      },
      [ChainId.OPB]: {
        address: '0x4200000000000000000000000000000000000006',
        decimals: 18,
      },
      [ChainId.DAI]: {
        address: '0xca8d20f3e0144a72c6b5d576e9bd3fd8557e2b04',
        decimals: 18,
      },
      [ChainId.ETH]: {
        address: '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
        decimals: 18,
        name: 'Wormhole: WBNB Token',
      },
      [ChainId.POL]: {
        address: '0xecdcb5b88f8e3c15f95c720c51c71c9e2080525d',
        decimals: 18,
      },
      [ChainId.AVA]: {
        address: '0x442F7f22b1EE2c842bEAFf52880d4573E9201158',
        decimals: 18,
      },
      [ChainId.AUR]: {
        address: '0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c',
        decimals: 18,
      },
    },
  },

  // FDUSD
  {
    key: CoinKey.FDUSD,
    name: CoinKey.FDUSD,
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xc5f0f7b66764f6ec8c8dff7ba683102295e16409/9c61b134f82d8780005895d8fb6b19ab.png',
    verified: true,
    chains: {
      [ChainId.ETH]: {
        address: '0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409',
        decimals: 18,
      },
      [ChainId.BSC]: {
        address: '0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409',
        decimals: 18,
      },
    },
  },

  // > Bitcoin
  {
    key: CoinKey.BTC,
    name: CoinKey.BTC,
    logoURI: 'https://assets.coingecko.com/coins/images/1/standard/bitcoin.png',
    verified: true,
    chains: {
      [ChainId.BTC]: {
        address: 'bitcoin',
        decimals: 8,
        name: 'Bitcoin',
      },
    },
  },
  // > Bitcoin Cash
  {
    key: CoinKey.BCH,
    name: CoinKey.BCH,
    logoURI:
      'https://assets.coingecko.com/coins/images/780/standard/bitcoin-cash-circle.png',
    verified: true,
    chains: {
      [ChainId.BCH]: {
        address: 'bitcoin-cash',
        decimals: 8,
        name: 'Bitcoin Cash',
      },
    },
  },
  // > Bitcoin
  {
    key: CoinKey.LTC,
    name: CoinKey.LTC,
    logoURI:
      'https://assets.coingecko.com/coins/images/2/standard/litecoin.png',
    verified: true,
    chains: {
      [ChainId.LTC]: {
        address: 'litecoin',
        decimals: 8,
        name: 'Litecoin',
      },
    },
  },
  // > Doge
  {
    key: CoinKey.DOGE,
    name: CoinKey.DOGE,
    logoURI:
      'https://assets.coingecko.com/coins/images/5/standard/dogecoin.png',
    verified: true,
    chains: {
      [ChainId.DGE]: {
        address: 'dogecoin',
        decimals: 8,
        name: 'Dogecoin',
      },
    },
  },
]

export const defaultCoins: Array<Coin> = basicCoins.map((coin) => {
  const defaultCoin: Coin = {
    key: coin.key,
    name: coin.name,
    logoURI: coin.logoURI,
    verified: coin.verified,
    chains: {},
  }

  for (const [chainId, token] of Object.entries(coin.chains)) {
    defaultCoin.chains[chainId] = {
      address: token.address,
      decimals: token.decimals,
      symbol: token.symbol ?? coin.key,
      chainId: parseInt(chainId), // Object.entries, Object.keys etc. only return keys as strings. Therefore, we have to parse them here
      coinKey: coin.key,
      name: token.name ?? coin.name ?? coin.key,
      logoURI: coin.logoURI,
    }
  }

  return defaultCoin
})

// Wrapped version of gas on chain
export const wrappedTokens: { [ChainId: string]: StaticToken } = {
  [ChainId.ETH]: {
    // https://ww7.etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
    address: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.ETH,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.SOL]: {
    address: 'So11111111111111111111111111111111111111112',
    symbol: 'wSOL',
    decimals: 9,
    chainId: ChainId.SOL,
    coinKey: CoinKey.WSOL,
    name: 'wSOL',
    logoURI:
      'https://assets.coingecko.com/coins/images/4128/standard/solana.png',
  },
  [ChainId.BSC]: {
    // https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c
    address: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    symbol: 'WBNB',
    decimals: 18,
    chainId: ChainId.BSC,
    coinKey: CoinKey.WBNB,
    name: 'WBNB',
    logoURI:
      'https://static.debank.com/image/coin/logo_url/bnb/9784283a36f23a58982fc964574ea530.png',
  },
  [ChainId.POL]: {
    // https://polygonscan.com/token/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270
    address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    symbol: 'WPOL',
    decimals: 18,
    chainId: ChainId.POL,
    coinKey: CoinKey.WPOL,
    name: 'WPOL',
    logoURI:
      'https://static.debank.com/image/matic_token/logo_url/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/f6e604ba0324726a3d687c618aa4f163.png',
  },
  [ChainId.DAI]: {
    // https://blockscout.com/xdai/mainnet/address/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d
    address: '0xe91d153e0b41518a2ce8dd3d7944fa863463a97d',
    symbol: 'WXDAI',
    decimals: 18,
    chainId: ChainId.DAI,
    coinKey: 'WXDAI' as CoinKey,
    name: 'WXDAI',
    logoURI:
      'https://static.debank.com/image/xdai_token/logo_url/0xe91d153e0b41518a2ce8dd3d7944fa863463a97d/3fedab836c5425fc3fc2eb542c34c81a.png',
  },
  [ChainId.OPT]: {
    // https://optimistic.etherscan.io/token/0x4200000000000000000000000000000000000006
    address: '0x4200000000000000000000000000000000000006',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.OPT,
    coinKey: CoinKey.WETH,
    name: 'Wrapped ETH',
    logoURI:
      'https://static.debank.com/image/op_token/logo_url/0x4200000000000000000000000000000000000006/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.ERA]: {
    // https://explorer.zksync.io/address/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91
    address: '0x5aea5775959fbc2557cc8789bc1bf90a239d9a91',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.ERA,
    coinKey: CoinKey.WETH,
    name: 'Wrapped Ether',
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.PZE]: {
    // https://zkevm.polygonscan.com/token/0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9
    address: '0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.PZE,
    coinKey: CoinKey.WETH,
    name: 'Wrapped Ether',
    logoURI:
      'https://static.debank.com/image/pze_token/logo_url/0x4f9a0e7fd2bf6067db6994cf12e4495df938e6e9/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.BAS]: {
    // https://basescan.org/address/0x4200000000000000000000000000000000000006
    address: '0x4200000000000000000000000000000000000006',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.BAS,
    coinKey: CoinKey.WETH,
    name: 'Wrapped Ether',
    logoURI:
      'https://static.debank.com/image/coin/logo_url/eth/d61441782d4a08a7479d54aea211679e.png',
  },
  [ChainId.LNA]: {
    // https://lineascan.build/address/0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f
    address: '0xe5d7c2a44ffddf6b295a15c148167daaaf5cf34f',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.LNA,
    coinKey: CoinKey.WETH,
    name: 'Wrapped Ether',
    logoURI:
      'https://static.debank.com/image/mtr_token/logo_url/0x79a61d3a28f8c8537a3df63092927cfa1150fb3c/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.FTM]: {
    // https://ftmscan.com/address/0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83
    address: '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83',
    symbol: 'wFTM',
    decimals: 18,
    chainId: ChainId.FTM,
    coinKey: 'wFTM' as CoinKey,
    name: 'wFTM',
    logoURI:
      'https://static.debank.com/image/ftm_token/logo_url/0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83/2b7d91858f9c62aafc8d7778b9c22f57.png',
  },
  [ChainId.ONE]: {
    address: '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
    symbol: 'WONE',
    decimals: 18,
    chainId: ChainId.ONE,
    coinKey: 'WONE' as CoinKey,
    name: 'WRAPPED ONE',
    logoURI:
      'https://assets.coingecko.com/coins/images/18183/small/wonelogo.png',
  },
  [ChainId.AVA]: {
    address: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    symbol: 'WAVAX',
    decimals: 18,
    chainId: ChainId.AVA,
    coinKey: 'WAVAX' as CoinKey,
    name: 'Wrapped AVAX',
    logoURI:
      'https://static.debank.com/image/avax_token/logo_url/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7/753d82f0137617110f8dec56309b4065.png',
  },
  [ChainId.ARB]: {
    address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.ARB,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.MOR]: {
    address: '0x98878b06940ae243284ca214f92bb71a2b032b8a',
    symbol: 'WMOVR',
    decimals: 18,
    chainId: ChainId.MOR,
    coinKey: 'WMOVR' as CoinKey,
    name: 'WMOVR',
    logoURI: 'https://assets.coingecko.com/coins/images/17984/small/9285.png',
  },
  [ChainId.CRO]: {
    address: '0x5c7f8a570d578ed84e63fdfa7b1ee72deae1ae23',
    symbol: 'WCRO',
    decimals: 18,
    chainId: ChainId.CRO,
    coinKey: CoinKey.WCRO,
    name: 'Wrapped Cronos',
    logoURI:
      'https://raw.githubusercontent.com/cronaswap/default-token-list/main/assets/tokens/cronos/0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23/logo.png',
  },
  [ChainId.FUS]: {
    address: '0x0be9e53fd7edac9f859882afdda116645287c629',
    symbol: 'WFUSE',
    decimals: 18,
    chainId: ChainId.FUS,
    coinKey: 'WFUSE' as CoinKey,
    name: 'Wrapped Fuse',
    logoURI:
      'https://static.debank.com/image/fuse_token/logo_url/0x0be9e53fd7edac9f859882afdda116645287c629/26d6e40e90bb2bf775820b1afef6ffb6.png',
  },
  [ChainId.MOO]: {
    address: '0xacc15dc74880c9944775448304b263d191c6077f',
    symbol: 'WGLMR',
    decimals: 18,
    chainId: ChainId.MOO,
    coinKey: 'WGLMR' as CoinKey,
    name: 'Wrapped GLMR',
    logoURI:
      'https://static.debank.com/image/mobm_token/logo_url/0xacc15dc74880c9944775448304b263d191c6077f/a8442077d76b258297181c3e6eb8c9cc.png',
  },
  [ChainId.MAM]: {
    address: '0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481',
    symbol: 'WMETIS',
    decimals: 18,
    chainId: ChainId.MAM,
    coinKey: 'WMETIS' as CoinKey,
    name: 'Wrapped Metis',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png',
  },
  [ChainId.BOB]: {
    address: '0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.BOB,
    coinKey: CoinKey.WETH,
    name: 'Wrapped ETH',
    logoURI:
      'https://static.debank.com/image/boba_token/logo_url/0xdeaddeaddeaddeaddeaddeaddeaddeaddead0000/b1947b38a90e559eb950453965714be4.png',
  },
  [ChainId.CEL]: {
    address: '0x471ece3750da237f93b8e339c536989b8978a438',
    symbol: 'CELO',
    decimals: 18,
    chainId: ChainId.CEL,
    coinKey: CoinKey.CELO,
    name: 'Celo native asset',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5567.png',
  },
  [ChainId.EVM]: {
    address: '0xd4949664cd82660aae99bedc034a0dea8a0bd517',
    symbol: 'WEVMOS',
    decimals: 18,
    chainId: ChainId.EVM,
    coinKey: 'WEVMOS' as CoinKey,
    name: 'Wrapped Evmos',
    logoURI:
      'https://raw.githubusercontent.com/cronus-finance/token-list/main/assets/evmos/0xD4949664cD82660AaE99bEdc034a0deA8A0bd517/logo.png',
  },
  [ChainId.AUR]: {
    address: '0xc9bdeed33cd01541e1eed10f90519d2c06fe3feb',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.AUR,
    coinKey: 'WETH' as CoinKey,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/aurora_token/logo_url/aurora/d61441782d4a08a7479d54aea211679e.png',
  },
  [ChainId.VEL]: {
    address: '0xc579d1f3cf86749e05cd06f7ade17856c2ce3126',
    symbol: 'WVLX',
    decimals: 18,
    chainId: ChainId.VEL,
    coinKey: 'WVLX' as CoinKey,
    name: 'Wrapped VLX',
    logoURI:
      'https://raw.githubusercontent.com/lifinance/types/main/src/assets/icons/tokens/vlx.png',
  },
  [ChainId.SCL]: {
    // https://scrollscan.com/token/0x5300000000000000000000000000000000000004
    address: '0x5300000000000000000000000000000000000004',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.SCL,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/era_token/logo_url/0x5aea5775959fbc2557cc8789bc1bf90a239d9a91/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.MOD]: {
    // https://explorer.mode.network/token/0x4200000000000000000000000000000000000006
    address: '0x4200000000000000000000000000000000000006',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.MOD,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/mtr_token/logo_url/0x79a61d3a28f8c8537a3df63092927cfa1150fb3c/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.MNT]: {
    // https://explorer.mantle.xyz/token/0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8
    address: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
    symbol: 'WMNT',
    decimals: 18,
    chainId: ChainId.MNT,
    coinKey: CoinKey.WMNT,
    name: 'WMNT',
    logoURI:
      'https://static.debank.com/image/mnt_token/logo_url/0x78c1b0c915c4faa5fffa6cabf0219da63d7f4cb8/a443c78c33704d48f06e5686bb87f85e.png',
  },
  [ChainId.BLS]: {
    // https://blastscan.io/token/0x4300000000000000000000000000000000000004
    address: '0x4300000000000000000000000000000000000004',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.BLS,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/mtr_token/logo_url/0x79a61d3a28f8c8537a3df63092927cfa1150fb3c/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.RSK]: {
    address: '0x542fda317318ebf1d3deaf76e0b632741a7e677d',
    symbol: 'WRBTC',
    decimals: 18,
    chainId: ChainId.RSK,
    coinKey: CoinKey.WBTC,
    name: 'Wrapped RBTC',
    logoURI:
      'https://static.debank.com/image/rsk_token/logo_url/0x542fda317318ebf1d3deaf76e0b632741a7e677d/4785a26ef5bb5df987e67ad49fc62137.png',
  },
  [ChainId.SEI]: {
    // https://seitrace.com/token/0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7
    address: '0xE30feDd158A2e3b13e9badaeABaFc5516e95e8C7',
    symbol: 'WSEI',
    decimals: 18,
    chainId: ChainId.SEI,
    coinKey: CoinKey.WSEI,
    name: 'Wrapped SEI',
    logoURI: 'https://cdn.sei.io/sei-app/sei-icon.png',
  },
  [ChainId.FRA]: {
    // https://fraxscan.com/token/0xfc00000000000000000000000000000000000006
    address: '0xfc00000000000000000000000000000000000006',
    symbol: 'wfrxETH',
    decimals: 18,
    chainId: ChainId.FRA,
    coinKey: CoinKey.wfrxETH,
    name: 'Wrapped Frax ETH',
    logoURI:
      'https://static.debank.com/image/frax_token/logo_url/0xfc00000000000000000000000000000000000006/4313f25f6c5196e8fce2c80fa34c73d0.png',
  },
  [ChainId.TAI]: {
    // https://taikoscan.io/address/0xa51894664a773981c6c112c43ce576f315d5b1b6
    address: '0xa51894664a773981c6c112c43ce576f315d5b1b6',
    symbol: 'WETH',
    decimals: 18,
    chainId: ChainId.TAI,
    coinKey: CoinKey.WETH,
    name: 'WETH',
    logoURI:
      'https://static.debank.com/image/mtr_token/logo_url/0x79a61d3a28f8c8537a3df63092927cfa1150fb3c/61844453e63cf81301f845d7864236f6.png',
  },
  [ChainId.GRA]: {
    // https://explorer.gravity.xyz/address/0xBB859E225ac8Fb6BE1C7e38D87b767e95Fef0EbD
    address: '0xBB859E225ac8Fb6BE1C7e38D87b767e95Fef0EbD',
    symbol: 'WG',
    decimals: 18,
    chainId: ChainId.GRA,
    coinKey: CoinKey.WG,
    name: 'Wrapped G',
    logoURI: 'https://assets.gravity.xyz/token_logo.png',
  },
  [ChainId.IMX]: {
    // https://explorer.immutable.com/address/0x3a0c2ba54d6cbd3121f01b96dfd20e99d1696c9d
    address: '0x3a0c2ba54d6cbd3121f01b96dfd20e99d1696c9d',
    symbol: 'WIMX',
    decimals: 18,
    chainId: ChainId.IMX,
    coinKey: CoinKey.WIMX,
    name: 'Wrapped IMX',
    logoURI:
      'https://static.debank.com/image/eth_token/logo_url/0xf57e7e7c23978c3caec3c3548e3d615c346e79ff/7a875818146ec0508d3e5f5b14f1b4eb.png',
  },
  [ChainId.KAI]: {
    // https://kaiascan.io/token/0x19aac5f612f524b754ca7e7c41cbfa2e981a4432
    address: '0x19aac5f612f524b754ca7e7c41cbfa2e981a4432',
    symbol: 'WKLAY',
    decimals: 18,
    chainId: ChainId.KAI,
    coinKey: CoinKey.WKLAY,
    name: 'Wrapped KLAY',
    logoURI:
      'https://static.debank.com/image/klay_token/logo_url/0x19aac5f612f524b754ca7e7c41cbfa2e981a4432/1866fc790849a903e0594ce0f55b758d.png',
  },
  [ChainId.XLY]: {
    // https://www.okx.com/web3/explorer/xlayer/token/0xe538905cf8410324e03a5a23c1c177a474d59b2b
    address: '0xe538905cf8410324e03a5a23c1c177a474d59b2b',
    symbol: 'WOKB',
    decimals: 18,
    chainId: ChainId.XLY,
    coinKey: CoinKey.WOKB,
    name: 'Wrapped OKB',
    logoURI:
      'https://static.debank.com/image/xlayer_token/logo_url/0xe538905cf8410324e03a5a23c1c177a474d59b2b/b58d6980429c56560d9241765bdf9c2b.png',
  },
  [ChainId.OPB]: {
    // https://opbnb.bscscan.com/token/0x4200000000000000000000000000000000000006
    address: '0x4200000000000000000000000000000000000006',
    symbol: 'WBNB',
    decimals: 18,
    chainId: ChainId.OPB,
    coinKey: CoinKey.WBNB,
    name: 'Wrapped BNB',
    logoURI:
      'https://static.debank.com/image/bsc_token/logo_url/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c/1177dec1b9b7f58a799c3f22d93b04e1.png',
  },
}
export const findDefaultCoin = (coinKey: CoinKey): Coin => {
  const coin = defaultCoins.find((coin) => coin.key === coinKey)
  if (!coin) {
    throw new Error('Invalid Coin')
  }
  return coin
}
export const findDefaultToken = (
  coinKey: CoinKey,
  chainId: ChainId
): StaticToken => {
  const coin = findDefaultCoin(coinKey)
  const token = coin.chains[chainId]
  if (!token) {
    throw new Error(`Invalid chain ${chainId} to coin ${coinKey}`)
  }
  return token
}

export const findWrappedGasOnChain = (chainId: ChainId): StaticToken => {
  const token = wrappedTokens[chainId]
  if (!token) {
    throw new Error(`Wrapped Gas Token not defined for chain ${chainId}.`)
  }
  return token
}

export const findTokenByChainIdAndAddress = (
  chainId: number,
  tokenAddress: string
): StaticToken | null => {
  return (
    defaultCoins
      .flatMap(({ chains }) => Object.values(chains))
      .find(
        (token) =>
          token.chainId === chainId &&
          tokenAddress.toLowerCase() === token.address.toLowerCase()
      ) ?? null
  )
}
