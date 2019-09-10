import { AppsState, defaultAppsState } from '../apps'

describe('AppsState', () => {
  it('can be created', () => {
    const defaultState = defaultAppsState

    expect(defaultState as AppsState).not.toBeNull()
    expect(defaultState).toEqual({
      apps: {},
      addAppStep: 'generate-link',
      signUpLink: null,
      appRequest: null,
      showAddAppModal: false,
    })
  })
})
