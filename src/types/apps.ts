export interface Claim {
  username?: string
}

export interface App {
  // token: string
  name: string
  description: string
  icon: string
  url: string
  claim?: Claim
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

export interface RequestProfileResponse {
  allowed: boolean
  claim?: Claim
  nonce: number
  token?: string
  refreshEncKey?: string
}

export type AddAppModalStep =
  | 'generate-link'
  | 'register-app'
  | 'accept-app'
  | 'decline-app'
  | 'request-profile'
