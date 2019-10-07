import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, select, takeLatest } from 'redux-saga/effects'

import deleteProfileActionCreator from '../../actions/profile/delete-profile'
import { START_DELETE_PROFILE } from '../../consts/actions/profile'
import { wallet } from '../../did'
import { State } from '../../states'

function* deleteProfileImplementation() {
  try {
    const state: State = yield select()
    yield call([wallet, wallet.removeProfile], state.account.userId)
    yield put(deleteProfileActionCreator())

    notify('Profile has been deleted')
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* deleteProfileSaga() {
  yield takeLatest(START_DELETE_PROFILE, deleteProfileImplementation)
}

export default deleteProfileSaga
