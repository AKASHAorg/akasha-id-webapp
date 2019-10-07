import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import { StartUpdateProfileAction } from '../../actions/profile/start-update-profile'
import updateProfileActionCreator from '../../actions/profile/update-profile'
import { START_UPDATE_PROFILE } from '../../consts/actions/profile'
import { wallet } from '../../did'
import { ProfileData } from '../../types/users'

function* updateProfileImplementation(action: StartUpdateProfileAction) {
  try {
    const data: ProfileData = { ...action.profileData }
    yield call([wallet, wallet.updateProfile], data)

    yield put(updateProfileActionCreator(action.profileData))

    notify('Profile has been updated')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* updateProfileSaga() {
  yield takeLatest(START_UPDATE_PROFILE, updateProfileImplementation)
}

export default updateProfileSaga
