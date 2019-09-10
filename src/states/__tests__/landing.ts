import { defaultLandingState, LandingState } from '../landing'

describe('LandingState', () => {
  it('can be created', () => {
    const defaultState = defaultLandingState

    expect(defaultState as LandingState).not.toBeNull()
    expect(defaultState).toEqual({
      users: [],
      userId: '',
      name: '',
      password: '',
      nameError: '',
      passwordError: '',
      showSignInModal: false,
      showSignUpModal: false,
      profileFormValid: false,
    })
  })
})
