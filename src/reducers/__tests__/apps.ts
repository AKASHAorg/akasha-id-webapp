import hideAddAppModal from '../../actions/apps/hide-add-app-modal'
import removeApp from '../../actions/apps/remove-app'
import setAddAppModalStep from '../../actions/apps/set-add-app-modal-step'
import setApps from '../../actions/apps/set-apps'
import showAddAppModal from '../../actions/apps/show-add-app-modal'
import { defaultState } from '../../states'
import { AppsState } from '../../states/apps'
import { AddAppModalStep, App } from '../../types/apps'
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
    const action = setApps(apps)
    const newState = appsReducer(defaultState.apps, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
      apps,
    }

    expect(newState).toEqual(expectedState)
  })

  it('can show add app modal', () => {
    const action = showAddAppModal()
    const newState = appsReducer(defaultState.apps, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
      showAddAppModal: true,
    }

    expect(newState).toEqual(expectedState)
  })

  it('can hide add app modal', () => {
    const action = hideAddAppModal()
    const state: AppsState = {
      ...defaultState.apps,
      showAddAppModal: true,
    }
    const newState = appsReducer(state, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
      showAddAppModal: false,
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
    const step: AddAppModalStep = 'request-profile'
    const action = setAddAppModalStep(step)
    const state: AppsState = {
      ...defaultState.apps,
      addAppStep: 'generate-link',
    }
    const newState = appsReducer(state, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
      addAppStep: step,
    }

    expect(newState).toEqual(expectedState)
  })
})
