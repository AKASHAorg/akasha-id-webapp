import hideAddAppModal from '../../actions/hide-add-app-modal'
import { loadAppsActionCreator } from '../../actions/load-apps'
import { removeAppActionCreator } from '../../actions/remove-app'
import setAddAppModalStep from '../../actions/set-add-app-modal-step'
import { showAddAppModalActionCreator } from '../../actions/show-add-app-modal'
import { defaultState } from '../../states'
import { AppsState } from '../../states/apps'
import { AddAppModalStep, App } from '../../types/apps'
import appsReducer from '../apps'

describe('AppsReducer', () => {
  it('can load apps', () => {
    const apps: { [key: string]: App } = {
      token: {
        name: 'App Name',
        icon: 'http://localhost;//',
        url: 'http://localhost;//',
        description: 'Tets app',
      },
    }
    const action = loadAppsActionCreator(apps)
    const newState = appsReducer(defaultState.apps, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
      apps,
    }

    expect(newState).toEqual(expectedState)
  })

  it('can show add app modal', () => {
    const link = 'http://localhost:3000/'
    const action = showAddAppModalActionCreator(link)
    const newState = appsReducer(defaultState.apps, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
      showAddAppModal: true,
      signUpLink: link,
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
    const action = removeAppActionCreator(token)
    const state: AppsState = {
      ...defaultState.apps,
      apps: {
        [token]: {
          name: 'App Name',
          icon: 'http://localhost;//',
          url: 'http://localhost;//',
          description: 'Tets app',
        },
      },
    }
    const newState = appsReducer(state, action, defaultState)

    const expectedState: AppsState = {
      ...defaultState.apps,
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
