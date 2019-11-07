export interface Account {
  id: string
  name: string
  picture?: string
}

export interface SignUpFormData {
  name: string
  password: string
}

export interface SignInFormData {
  password: string
}

export interface PersonaData {
  personaName: string
  avatar: string
  name: string
  description: string
  coverImage: string
  email: string
  url: string
  address: string
  ethAddress: string
}

export interface Persona extends PersonaData {
  id: string
}

export interface PasswordFormData {
  oldPassword: string
  newPassword: string
}
