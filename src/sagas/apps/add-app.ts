import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, cancel, fork, put, race, take, takeLatest } from 'redux-saga/effects'

import { AcceptAppAction } from '../../actions/apps/accept-app'
import { DeclineAppAction } from '../../actions/apps/decline-app'
import requestProfileActionCreator from '../../actions/apps/request-profile'
import setAddAppModalAppRequest from '../../actions/apps/set-add-app-modal-app-request'
import setAddAppModalStep from '../../actions/apps/set-add-app-modal-step'
import { ShowAddAppModalAction } from '../../actions/apps/show-add-app-modal'
import { ACCEPT_APP, DECLINE_APP, SHOW_ADD_APP_MODAL } from '../../consts/actions/apps'
import { client, wallet } from '../../did'
import { AppRequest, RequestProfileResponse } from '../../types/apps'

function* finishAddApp() {
  yield put(setAddAppModalStep('finish'))
}

function* requestProfile() {
  try {
    const response: RequestProfileResponse = yield call(
      [client, client.requestProfile],
      ['givenName', 'familyName'],
    )

    yield put(setAddAppModalStep('request-profile'))
    yield put(requestProfileActionCreator(response))
  } catch (e) {
    notify(`An error occurred during requesting profile: ${e}`)
    console.error(e)
  }

  yield finishAddApp()
}

function* acceptApp(action: AcceptAppAction, appRequest: AppRequest) {
  yield put(setAddAppModalStep('accept-app'))

  const attributes: string[] = []
  const addAppFormData = action.addAppFormData

  if (addAppFormData.shareAddress) {
    attributes.push('addressLocality', 'addressRegion', 'postalCode', 'streetAddress')
  }

  if (addAppFormData.shareEmail) {
    attributes.push('email')
  }

  if (addAppFormData.sharePhoto) {
    attributes.push('photo')
  }

  if (addAppFormData.shareImage) {
    attributes.push('image')
  }

  if (addAppFormData.shareJobTitle) {
    attributes.push('jobTitle')
  }

  if (addAppFormData.shareGivenName) {
    attributes.push('givenName')
  }

  if (addAppFormData.shareFamilyName) {
    attributes.push('familyName')
  }

  if (addAppFormData.shareBirthDate) {
    attributes.push('birthDate')
  }

  if (addAppFormData.shareTelephone) {
    attributes.push('telephone')
  }

  if (addAppFormData.shareUrl) {
    attributes.push('url')
  }

  yield call([wallet, wallet.addApp], appRequest.token, appRequest.appInfo)
  yield call([wallet, wallet.sendClaim], appRequest, attributes, true)
}

function* declineApp(action: DeclineAppAction, appRequest: AppRequest) {
  yield put(setAddAppModalStep('decline-app'))

  yield call([wallet, wallet.sendClaim], appRequest, null, false)
}

function* addAppImplementation(action: ShowAddAppModalAction) {
  try {
    yield put(setAddAppModalStep('generate-link'))
    const requestProfileTask = yield fork(requestProfile)

    yield put(setAddAppModalStep('register-app'))

    const registerAppResult = yield race({
      appRequest: call([wallet, wallet.registerApp], decodeURIComponent(action.link)),
      cancelled: take(DECLINE_APP),
    })

    if (registerAppResult.cancelled) {
      yield cancel(requestProfileTask)
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

    const sendClaimResult = yield race({
      sendClaim: sendClaimAction,
      cancelled: take(DECLINE_APP),
    })

    if (sendClaimResult.cancelled) {
      yield cancel(requestProfileTask)
      yield finishAddApp()
    }
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
