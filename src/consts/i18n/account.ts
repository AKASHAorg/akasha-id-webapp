import { ACCOUNT } from '../i18n-ns'

const accountNs = `${ACCOUNT}:`

const header = `${accountNs}header`
const deleteFormHeader = `${accountNs}deleteForm.header`
const deleteFormText = `${accountNs}deleteForm.text`
const deleteFormButton = `${accountNs}deleteForm.button`

const accountForm = {
  header: `${accountNs}accountForm.header`,
  name: {
    label: `${accountNs}accountForm.name.label`,
    placeholder: `${accountNs}accountForm.name.placeholder`,
    errorIsRequired: `${accountNs}accountForm.name.errorIsRequired`,
  },
  oldPassword: {
    label: `${accountNs}accountForm.oldPassword.label`,
    placeholder: `${accountNs}accountForm.oldPassword.placeholder`,
    errorIsRequired: `${accountNs}accountForm.oldPassword.errorIsRequired`,
  },
  newPassword: {
    label: `${accountNs}accountForm.newPassword.label`,
    placeholder: `${accountNs}accountForm.newPassword.placeholder`,
    errorIsRequired: `${accountNs}accountForm.newPassword.errorIsRequired`,
  },
  confirmPassword: {
    label: `${accountNs}accountForm.confirmPassword.label`,
    placeholder: `${accountNs}accountForm.confirmPassword.placeholder`,
    errorIsRequired: `${accountNs}accountForm.confirmPassword.errorIsRequired`,
  },
  passwordHeader: `${accountNs}accountForm.passwordHeader`,
  resetPassword: `${accountNs}accountForm.resetPassword`,
}

export { header, deleteFormHeader, deleteFormText, deleteFormButton, accountForm }
