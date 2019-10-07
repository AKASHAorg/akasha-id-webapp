export interface AccountState {
  userId: string
  name: string
  signedIn: boolean
}

const defaultAccountState: AccountState = {
  userId: '',
  name: '',
  signedIn: false,
}

export { defaultAccountState }
