export interface Claim {
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  streetAddress?: string
  email?: string
  photo?: string
  image?: string
  jobTitle?: string
  givenName?: string
  familyName?: string
  birthDate?: string
  telephone?: string
  url?: string
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
  attributes: string[]
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
  | 'wait-request'
  | 'generate-link'
  | 'register-app'
  | 'accept-app'
  | 'decline-app'
  | 'request-profile'
  | 'finish'

export interface AddAppFormData {
  shareAddress: boolean
  shareEmail: boolean
  sharePhoto: boolean
  shareImage: boolean
  shareJobTitle: boolean
  shareGivenName: boolean
  shareFamilyName: boolean
  shareBirthDate: boolean
  shareTelephone: boolean
  shareUrl: boolean
}
