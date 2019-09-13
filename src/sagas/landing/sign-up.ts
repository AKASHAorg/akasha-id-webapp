import { notify } from '@akashaproject/design-system/dist/components/Notification'
import { call, put, takeLatest } from 'redux-saga/effects'

import signUpActionCreator from '../../actions/landing/sign-up'
import { StartSignUpAction } from '../../actions/landing/start-sign-up'
import { START_SIGN_UP } from '../../consts/actions/landing'
import { wallet } from '../../did'
import { Profile, ProfileFormData } from '../../types/users'

function* signUpImplementation(action: StartSignUpAction) {
  try {
    const userId = yield call(
      [wallet, wallet.signup],
      action.formData.name,
      action.formData.password,
    )
    const publicProfiles: Profile[] = yield wallet.publicProfiles()
    const profile: Profile | undefined = publicProfiles.find(u => u.id === userId)

    if (profile !== undefined) {
      const data: Omit<ProfileFormData, 'name'> = {
        addressLocality: '',
        addressRegion: '',
        birthDate: '',
        email: '',
        familyName: '',
        givenName: '',
        image: '',
        jobTitle: '',
        photo: '',
        postalCode: '',
        streetAddress: '',
        telephone: '',
        url: '',
      }
      yield call([wallet, wallet.updateProfile], data)

      yield put(signUpActionCreator(profile))
    }
  } catch (e) {
    notify(`An error occurred: ${e}`)
    console.error(e)
  }
}

function* signUp() {
  yield takeLatest(START_SIGN_UP, signUpImplementation)
}

export default signUp
