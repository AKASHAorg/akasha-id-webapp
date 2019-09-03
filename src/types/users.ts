export interface User {
  username: string
  password: string
}

export interface Profile {
  id: string
  name: string
  picture: string
}

export interface ProfileFormData {
  context: string
  '@type': string
  address: {
    '@type': string
    addressLocality: string
    addressRegion: string
    postalCode: string
    streetAddress: string
  }
  email: string
  photo: string
  image: string
  jobTitle: string
  name: string
  givenName: string
  familyName: string
  birthDate: string
  telephone: string
  url: string
  password: string
}
