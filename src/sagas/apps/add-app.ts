import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, race, take, takeLatest } from 'redux-saga/effects'

import { AcceptAppAction } from '../../actions/apps/accept-app'
import { DeclineAppAction } from '../../actions/apps/decline-app'
import setAddAppModalAppRequest from '../../actions/apps/set-add-app-modal-app-request'
import setAddAppModalStep from '../../actions/apps/set-add-app-modal-step'
import { ShowAddAppModalAction } from '../../actions/apps/show-add-app-modal'
import { ACCEPT_APP, DECLINE_APP, SHOW_ADD_APP_MODAL } from '../../consts/actions/apps'
import { wallet } from '../../did'
import { AppRequest } from '../../types/apps'

function* finishAddApp() {
  yield put(setAddAppModalStep('finish'))
}

function* acceptApp(action: AcceptAppAction, appRequest: AppRequest) {
  yield put(setAddAppModalStep('accept-app'))

  const attributes: string[] = Object.entries(action.addAppFormData)
    .filter(([attribute, value]) => value)
    .map(([attribute, value]) => attribute)

  // yield call([wallet, wallet.addApp], appRequest.token, appRequest.appInfo)
  // yield call([wallet, wallet.sendClaim], appRequest, attributes, true)
}

function* declineApp(action: DeclineAppAction, appRequest: AppRequest) {
  yield 1
  // yield put(setAddAppModalStep('decline-app'))

  // yield call([wallet, wallet.sendClaim], appRequest, null, false)
}

function* addAppImplementation(action: ShowAddAppModalAction) {
  try {
    yield put(setAddAppModalStep('register-app'))

    const registerAppResult = yield race({
      appRequest: call([wallet, wallet.registerApp], action.link),
      cancelled: take(DECLINE_APP),
    })

    if (registerAppResult.cancelled) {
      yield finishAddApp()

      return
    }

    yield put(setAddAppModalAppRequest(registerAppResult.appRequest))

    const modalUserAction: AcceptAppAction | DeclineAppAction = yield take([
      ACCEPT_APP,
      DECLINE_APP,
    ])

    let sendClaimAction

    if (modalUserAction.type === ACCEPT_APP) {
      sendClaimAction = call(
        acceptApp,
        modalUserAction as AcceptAppAction,
        registerAppResult.appRequest,
      )
    } else {
      sendClaimAction = call(
        declineApp,
        modalUserAction as DeclineAppAction,
        registerAppResult.appRequest,
      )
    }

    yield race({
      sendClaim: sendClaimAction,
      cancelled: take(DECLINE_APP),
    })

    yield finishAddApp()
  } catch (e) {
    notify(`An error occurred during adding app: ${e}`)
    console.error(e)
    yield finishAddApp()
  }
}

function* addAppSaga() {
  yield takeLatest(SHOW_ADD_APP_MODAL, addAppImplementation)
}

export default addAppSaga
