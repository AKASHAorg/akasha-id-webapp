import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import setRedirect from '../../actions/profile/set-redirect'
import { StartCreateProfileAction } from '../../actions/profile/start-create-profile'
import { START_CREATE_PROFILE } from '../../consts/actions/profile'
import { wallet } from '../../did'
import { ProfileData } from '../../types/users'

function* createProfileImplementation(action: StartCreateProfileAction) {
  try {
    const data: ProfileData = { ...action.profileData }
    yield call([wallet, wallet.addProfile], data)

    yield put(setRedirect(true))

    notify('Profile has been created')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* createProfileSaga() {
  yield takeLatest(START_CREATE_PROFILE, createProfileImplementation)
}

export default createProfileSaga
