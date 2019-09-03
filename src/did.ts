import { Client, Wallet } from 'akasha-id-lib/src/index'

const appInfo = {
  name: 'AKASHA.world',
  description: 'The super cool AKASHA World app!',
  icon: 'https://app.akasha.world/icon.png',
  url: 'https://app.akasha.world',
}

const client = new Client(appInfo)
const wallet = new Wallet()

const init = async () => {
  await wallet.init()
}

export { client, wallet, init }
