export interface App {
  token: string
  name: string
  description: string
  icon: string
  url: string
}

export interface AppRequest {
  appInfo: {
    name: string
    description: string
    icon: string
    url: string
  }
  channel: string
  key: string
  nonce: number
  token: string
}

export interface ProfileData {
  allowed: boolean
  claim?: {
    issuer: string
    credentialSubject: {
      id: string
      login: string
    }
  }
  token?: string
  refreshEncKey?: string
}

export type AddAppModalStep = 'generate-link' | 'register-app' | 'request-profile' | 'send-claim'

export interface AppsState {
  apps: App[]
  addAppStep: AddAppModalStep
  signUpLink: string | null
  appRequest: AppRequest | null
  profileData?: ProfileData
  showAddAppModal: boolean
  shareFirstName: boolean
  shareLastName: boolean
}

const defaultAppsState: AppsState = {
  apps: [],
  addAppStep: 'generate-link',
  signUpLink: null,
  appRequest: null,
  profileData: { allowed: false },
  showAddAppModal: false,
  shareFirstName: false,
  shareLastName: false,
}

export { defaultAppsState }
