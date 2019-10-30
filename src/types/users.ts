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
  address: {
    addressLocality: string
    addressRegion: string
    postalCode: string
    streetAddress: string
  }
  email: string
  photo: string
  picture: string
  jobTitle: string
  givenName: string
  familyName: string
  birthDate: string
  telephone: string
  url: string
  about: string
  location: string
  personaName: string
}

export interface Persona extends PersonaData {
  id: string
}

export interface PasswordFormData {
  oldPassword: string
  newPassword: string
}
