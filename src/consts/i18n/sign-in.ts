import { SIGN_IN } from '../i18n-ns'

const signInNs = `${SIGN_IN}:`

const header = `${signInNs}header`
const subheader = `${signInNs}subheader`

const username = {
  label: `${signInNs}username.label`,
}
const password = {
  label: `${signInNs}password.label`,
  placeholder: `${signInNs}password.placeholder`,
  errorIsRequired: `${signInNs}password.errorIsRequired`,
}

const signIn = `${signInNs}signIn`
const createAccount = {
  text: `${signInNs}createAccount.text`,
  link: `${signInNs}createAccount.link`,
}

export { header, subheader, username, password, signIn, createAccount }
