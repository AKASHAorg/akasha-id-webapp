import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import { State } from '../../../../states'
import { ProfileData } from '../../../../types/users'
import MobileProfileForm, { MobileProfileFormProps } from './MobileProfileForm'

const enchance = connect((state: State) => ({
  name: state.account.name,
  initialValues: {
    ...state.profile,
  },
}))

const withForm = reduxForm<ProfileData, MobileProfileFormProps, string>({
  form: 'profile',
  enableReinitialize: true,
  onSubmit: (formData, dispatch, props) => {
    props.onSubmit(formData)
  },
})

export default enchance(withForm(MobileProfileForm))
