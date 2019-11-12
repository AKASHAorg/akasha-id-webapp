export interface AccountState {
  userId: string
  name: string
  picture?: string
  signedIn: boolean
}

const defaultAccountState: AccountState = {
  userId: '',
  name: '',
  picture: '',
  signedIn: false,
}

export { defaultAccountState }
