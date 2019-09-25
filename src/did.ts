import Wallet from 'akasha-id-wallet'

import { walletUrl } from './consts/routes'

const config = {
  walletUrl,
  hubUrls: ['http://localhost:8888'],
}

const wallet = new Wallet(config)

const init = async () => {
  await wallet.init()
}

export { wallet, init }
