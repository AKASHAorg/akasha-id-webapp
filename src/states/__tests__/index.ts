import { defaultState, State } from '../'
import { defaultAppsState } from '../apps'
import { defaultLandingState } from '../landing'
import { defaultProfileState } from '../profile'

describe('State', () => {
  it('can be created', () => {
    expect(defaultState as State).not.toBeNull()
    expect(defaultState).toEqual({
      apps: defaultAppsState,
      landing: defaultLandingState,
      profile: defaultProfileState,
      form: undefined,
    })
  })
})
