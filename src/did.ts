import { DIDclient, DIDwallet, generateId } from 'akasha-id-lib/src/index'

const appInfo = {
  name: 'AKASHA.world',
  description: 'The super cool AKASHA World app!',
  icon: 'https://app.akasha.world/icon.png',
  url: 'https://app.akasha.world',
}

const client = new DIDclient(appInfo)
const wallet = new DIDwallet(generateId())

const refreshHandler = async (data: { msg: any; token: string }) => {}

wallet.init(refreshHandler)

export { client, wallet }
