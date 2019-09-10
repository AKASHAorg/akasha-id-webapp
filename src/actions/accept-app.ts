import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { Action, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk'

import { ACCEPT_APP } from '../consts/actions'
import { wallet } from '../did'
import { State } from '../states'
import { AddAppFormData } from '../types/apps'
import setAddAppModalStep from './set-add-app-modal-step'

export interface AcceptAppAction extends Action<string> {}

const acceptAppActionCreator = (): AcceptAppAction => ({
  type: ACCEPT_APP,
})

const acceptApp: ActionCreator<ThunkAction<Promise<any>, State, void, Action>> = (
  addAppFormData: AddAppFormData,
) => async (dispatch, getState) => {
  try {
    const state = getState()
    const appRequest = state.apps.appRequest!

    if (state.apps.addAppStep !== 'register-app') {
      return
    }
    dispatch(setAddAppModalStep('accept-app'))

    const attributes: string[] = []

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

    dispatch(acceptAppActionCreator())
    await wallet.addApp(appRequest.token, appRequest.appInfo)
    await wallet.sendClaim(appRequest, attributes, true)
  } catch (e) {
    notify(`An error occurred: ${e}`)
  }
}

export default acceptApp
