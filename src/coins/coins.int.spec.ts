import { StaticToken } from '@lifi/types'
import { defaultCoins, wrappedTokens } from './coins'

jest.setTimeout(20_000)

describe('Coin logo test', () => {
  const allImages: string[] = []

  // default coins
  allImages.push(
    ...defaultCoins
      .map((coin) => {
        const baseURL = coin.logoURI
        const tokenSpecificURLs = Object.values(coin.chains).flatMap(
          ({ logoURI }) => (logoURI ? [logoURI] : [])
        )
        return [baseURL, ...tokenSpecificURLs]
      })
      .flat()
  )

  // wrapped tokens
  allImages.push(
    ...Object.values(wrappedTokens).map((token: StaticToken) => token.logoURI!)
  )

  test.each([...new Set(allImages)])(
    'check that logoURI %s is valid',
    async (image) => {
      expect(image.startsWith('https://')).toBeTruthy()
      const response = await fetch(image)
      expect(response.status).toEqual(200)
    },
    2000
  )
})
