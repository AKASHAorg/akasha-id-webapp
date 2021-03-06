import removeApp from '../../actions/app-details/remove-app'
import hideRemoveAppModal from '../../actions/apps/hide-remove-app-modal'
import setAddAppModalStep from '../../actions/apps/set-add-app-modal-step'
import setAllApps from '../../actions/apps/set-all-apps'
import setRemoveAppModalClaim from '../../actions/apps/set-remove-app-modal-claim'
import { defaultState } from '../../states'
import { AppsState } from '../../states/apps'
import { AddAppModalStep, App, Claim } from '../../types/apps'
import appsReducer from '../apps'

describe('AppsReducer', () => {
  it('can set apps', () => {
    const apps: { [key: string]: App } = {
      token: {
        name: 'App Name',
        icon: 'http://localhost;//',
        url: 'http://localhost;//',
        description: 'Tets app',
      },
    }
    const action = setAllApps(apps)
    const newState = appsReducer(defaultState.apps, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
      apps,
    }

    expect(newState).toEqual(expectedState)
  })

  describe('setRemoveAppModalClaim', () => {
    it('does not change state when app is missing', () => {
      const token = 'Token'
      const claim: Claim = {
        givenName: 'name',
      }
      const action = setRemoveAppModalClaim(token, claim)
      const newState = appsReducer(defaultState.apps, action, defaultState)

      const expectedState: AppsState = {
        ...defaultState.apps,
      }

      expect(newState).toEqual(expectedState)
    })

    it('sets claim and show app modal wingow when app is found', () => {
      const token = 'Token'
      const claim: Claim = {
        givenName: 'name',
      }
      const app = {
        claim: undefined,
        description: 'description',
        name: 'name',
        icon: '/path/to/icon',
        url: '/path/to/app',
      }
      const state: AppsState = {
        ...defaultState.apps,
        apps: {
          [token]: app,
        },
      }
      const action = setRemoveAppModalClaim(token, claim)
      const newState = appsReducer(state, action, defaultState)

      const expectedState: AppsState = {
        ...state,
        showRemoveAppModal: true,
        selectedApp: app,
        selectedAppToken: token,
        selectedAppClaim: claim,
      }

      expect(newState).toEqual(expectedState)
    })
  })

  it('can hide remove app modal', () => {
    const action = hideRemoveAppModal()
    const state: AppsState = {
      ...defaultState.apps,
      showRemoveAppModal: true,
    }
    const newState = appsReducer(state, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
      showRemoveAppModal: false,
    }

    expect(newState).toEqual(expectedState)
  })

  it('can remove app', () => {
    const token = 'token'
    const action = removeApp()
    const state: AppsState = {
      ...defaultState.apps,
      selectedAppToken: token,
      apps: {
        [token]: {
          name: 'App Name',
          icon: 'http://localhost;//',
          url: 'http://localhost;//',
          description: 'Test app',
        },
      },
    }
    const newState = appsReducer(state, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
      selectedAppToken: token,
      apps: {},
    }

    expect(newState).toEqual(expectedState)
  })

  it('can set add app modal step', () => {
    const step: AddAppModalStep = 'request-persona'
    const action = setAddAppModalStep(step)
    const state: AppsState = {
      ...defaultState.apps,
      addAppModalStep: 'generate-link',
    }
    const newState = appsReducer(state, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
      addAppModalStep: step,
    }

    expect(newState).toEqual(expectedState)
  })
})
