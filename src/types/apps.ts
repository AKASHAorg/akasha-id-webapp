import { PersonaData } from './users'

export interface Claim extends Partial<PersonaData> {
  attributes: string[]
}

export type Apps = App[]

export interface App {
  id: string
  persona: string
  appInfo: {
    name: string
    description: string
    icon: string
    url: string
  }
  attributes: {
    [attribute: string]: boolean
  }
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
  [K in keyof PersonaData]: boolean
}
