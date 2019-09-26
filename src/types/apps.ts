import { ProfileData } from './users'

export interface Claim extends Partial<ProfileData> {}

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

export type AddAppModalStep =
  | 'wait-request'
  | 'register-app'
  | 'accept-app'
  | 'decline-app'
  | 'finish'

export type AddAppFormData = {
  [K in keyof ProfileData]: boolean
}
