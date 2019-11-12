import { defaultPersonaState, PersonaState } from '../persona'

describe('PersonaState', () => {
  it('can be created', () => {
    const defaultState = defaultPersonaState

    expect(defaultState as PersonaState).not.toBeNull()
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
      showExportPersonaModal: false,
      exportPersonaText: '',
    })
  })
})
