import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, fork, put, take, takeLatest } from 'redux-saga/effects'

import { AcceptAppAction } from '../../actions/apps/accept-app'
import { DeclineAppAction } from '../../actions/apps/decline-app'
import hideAddAppModal from '../../actions/apps/hide-add-app-modal'
import requestProfileActionCreator from '../../actions/apps/request-profile'
import setAddAppModalAppRequest from '../../actions/apps/set-add-app-modal-app-request'
import setAddAppModalStep from '../../actions/apps/set-add-app-modal-step'
import { ACCEPT_APP, DECLINE_APP, SHOW_ADD_APP_MODAL } from '../../consts/actions/apps'
import { client, wallet } from '../../did'
import { AppRequest, RequestProfileResponse } from '../../types/apps'

function* requestProfile() {
  try {
    const response: RequestProfileResponse = yield call(
      [client, client.requestProfile],
      ['givenName', 'familyName'],
    )
    yield put(setAddAppModalStep('request-profile'))
    yield put(hideAddAppModal())
    yield put(requestProfileActionCreator(response))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
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

function* addAppImplementation() {
  try {
    yield put(setAddAppModalStep('generate-link'))
    const link = yield call([client, client.registrationLink])
    const trimmedLink = link.substring('http://localhost:3000/#/link/'.length)

    yield fork(requestProfile)

    yield put(setAddAppModalStep('register-app'))
    const appRequest: AppRequest = yield call([wallet, wallet.registerApp], trimmedLink)
    yield put(setAddAppModalAppRequest(appRequest))

    const action: AcceptAppAction | DeclineAppAction = yield take([ACCEPT_APP, DECLINE_APP])

    if (action.type === ACCEPT_APP) {
      yield call(acceptApp, action as AcceptAppAction, appRequest)
    } else {
      yield call(declineApp, action as DeclineAppAction, appRequest)
    }
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* addApp() {
  yield takeLatest(SHOW_ADD_APP_MODAL, addAppImplementation)
}

export default addApp
