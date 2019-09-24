import { AppsState, defaultAppsState } from '../apps'

describe('AppsState', () => {
  it('can be created', () => {
    const defaultState = defaultAppsState

    expect(defaultState as AppsState).not.toBeNull()
    expect(defaultState).toEqual({
      apps: {},
      addAppModalStep: 'generate-link',
      appRequest: null,
      selectedApp: undefined,
      selectedAppToken: '',
      selectedAppClaim: undefined,
      showRemoveAppModal: false,
    })
  })
})
