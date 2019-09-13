import { defaultProfileState, ProfileState } from '../profile'

describe('ProfileState', () => {
  it('can be created', () => {
    const defaultState = defaultProfileState

    expect(defaultState as ProfileState).not.toBeNull()
    expect(defaultState).toEqual({
      userId: '',
      addressLocality: '',
      addressRegion: '',
      postalCode: '',
      streetAddress: '',
      email: '',
      photo: '',
      image: '',
      jobTitle: '',
      name: '',
      givenName: '',
      familyName: '',
      birthDate: '',
      telephone: '',
      url: '',
      password: '',
      signedIn: false,
      showExportProfileModal: false,
      exportProfileText: '',
    })
  })
})
