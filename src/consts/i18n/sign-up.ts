import { SIGN_UP } from '../i18n-ns'

const signUpNs = `${SIGN_UP}:`

const header = `${signUpNs}header`
const subheader = `${signUpNs}subheader`

const username = {
  label: `${signUpNs}username.label`,
  placeholder: `${signUpNs}username.placeholder`,
  errorIsRequired: `${signUpNs}username.errorIsRequired`,
}
const password = {
  label: `${signUpNs}password.label`,
  placeholder: `${signUpNs}password.placeholder`,
  errorIsRequired: `${signUpNs}password.errorIsRequired`,
}
const confirm = {
  label: `${signUpNs}confirm.label`,
  placeholder: `${signUpNs}confirm.placeholder`,
  errorIsRequired: `${signUpNs}confirm.errorIsRequired`,
}

const createAccount = `${signUpNs}createAccount`

const signIn = {
  text: `${signUpNs}signIn.text`,
  link: `${signUpNs}signIn.link`,
}

export { header, subheader, username, password, confirm, createAccount, signIn }
