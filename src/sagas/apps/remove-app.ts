import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, race, select, take, takeLatest } from 'redux-saga/effects'

import { HideRemoveAppModalAction } from '../../actions/apps/hide-remove-app-modal'
import removeAppActionCreator from '../../actions/apps/remove-app'
import setRemoveAppModalClaim from '../../actions/apps/set-remove-app-modal-claim'
import { ShowRemoveAppModalAction } from '../../actions/apps/show-remove-app-modal'
import { StartRemoveAppAction } from '../../actions/apps/start-remove-app'
import {
  HIDE_REMOVE_APP_MODAL,
  SHOW_REMOVE_APP_MODAL,
  START_REMOVE_APP,
} from '../../consts/actions/apps'
import { wallet } from '../../did'

function* fetchClaim(token: string) {
  const profile = yield call([wallet, wallet.profile])
  const claim = yield call([wallet, wallet.getClaim], token)

  if (profile && claim && claim.attributes) {
    claim.attributes.forEach((attr: string) => {
      claim[attr] = profile[attr]
    })
  }

  yield put(setRemoveAppModalClaim(token, claim))
}

function* removeAppImplementation() {
  const state = yield select()
  const token = state.apps.selectedAppToken
  if (!token) {
    throw new Error('App token is missing')
  }

  yield call([wallet, wallet.removeApp], token)

  yield put(removeAppActionCreator())

  notify('App has been removed')
}

function* removeApp(action: ShowRemoveAppModalAction) {
  try {
    const fetchClaimResult = yield race({
      claim: fetchClaim(action.token),
      cancelled: take(HIDE_REMOVE_APP_MODAL),
    })

    if (fetchClaimResult.cancelled) {
      return
    }

    const modalAction: StartRemoveAppAction | HideRemoveAppModalAction = yield take([
      START_REMOVE_APP,
      HIDE_REMOVE_APP_MODAL,
    ])

    if (modalAction.type === START_REMOVE_APP) {
      yield race({
        removeApp: call(removeAppImplementation),
        cancelled: take(HIDE_REMOVE_APP_MODAL),
      })
    }
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* removeAppSaga() {
  yield takeLatest(SHOW_REMOVE_APP_MODAL, removeApp)
}

export default removeAppSaga