import Client from 'akasha-id-client'
import Wallet from 'akasha-id-wallet'

const appInfo = {
  name: 'AKASHA.world',
  description: 'The super cool AKASHA World app!',
  icon: 'https://app.akasha.world/icon.png',
  url: 'https://app.akasha.world',
}

const config = {
  hubUrls: ['http://localhost:8888'],
  walletUrl: 'http://localhost:3000/#/link/',
}

const client = new Client(appInfo, config)
const wallet = new Wallet(config)

const init = async () => {
  await wallet.init()
}

export { client, wallet, init }
