import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, select, takeLatest } from 'redux-saga/effects'

import { FetchClaimAction } from '../../actions/app-details/fetch-claim'
import setClaimActionCreator from '../../actions/app-details/set-claim'
import { FETCH_CLAIM } from '../../consts/actions/app-details'
import { wallet } from '../../did'
import { State } from '../../states'

function* setClaim(action: FetchClaimAction) {
  try {
    const state: State = yield select()
    const app = state.apps.apps[action.token]
    const profile = yield call([wallet, wallet.account])
    const claim = yield call([wallet, wallet.getClaim], action.token)

    if (profile && claim && claim.attributes) {
      claim.attributes.forEach((attr: string) => {
        claim[attr] = profile[attr]
      })
    }

    yield put(setClaimActionCreator(app, claim))
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* fetchClaimSaga() {
  yield takeLatest(FETCH_CLAIM, setClaim)
}

export default fetchClaimSaga
