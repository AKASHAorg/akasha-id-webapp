import { ProfileData } from './users'

export interface Claim extends Partial<ProfileData> {
  attributes: string[]
}

export interface Apps {
  [key: string]: App
}

export interface App {
  // token: string
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
