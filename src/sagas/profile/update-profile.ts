import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, select, takeLatest } from 'redux-saga/effects'

import { StartUpdateProfileAction } from '../../actions/profile/start-update-profile'
import updateProfileActionCreator from '../../actions/profile/update-profile'
import { START_UPDATE_PROFILE } from '../../consts/actions/profile'
import { wallet } from '../../did'
import { State } from '../../states'
import { ProfileFormData } from '../../types/users'

function* updateProfileImplementation(action: StartUpdateProfileAction) {
  try {
    const state: State = yield select()

    yield call([wallet, wallet.updateProfileList], state.profile.userId, {
      name: action.profileFormData.name,
    })

    const data: ProfileFormData = { ...action.profileFormData }
    delete data.name
    yield call([wallet, wallet.updateProfile], data)

    yield put(updateProfileActionCreator(action.profileFormData))

    notify('Profile has been updated')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* updateProfile() {
  yield takeLatest(START_UPDATE_PROFILE, updateProfileImplementation)
}

export default updateProfile
