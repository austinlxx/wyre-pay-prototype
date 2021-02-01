export interface cryptoType {
  name: string;
  abbr: string;
  image: string;
}

const cryptoTypes = [
  {
    name: 'Bitcoin',
    abbr: 'BTC',
    image: '',
  },
  {
    name: 'Ethereum',
    abbr: 'ETH',
    image: '',
  },
  {
    name: 'Dogecoin',
    abbr: 'DOGE',
    image: '',
  },
]

const fiatTypes = [
  {
    name: 'United States Dollar ($)',
    abbr: 'USD',
    image: '',
  }
]

const rates = {
  btcToUSD: 34238.30
}

export const fakeStore = {
  rates,
  cryptoTypes,
  fiatTypes
}
