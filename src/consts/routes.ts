const userIdParam = ':userid'
const appRequestLinkParam = ':apprequestlink'
const tokenParam = ':token'

const landing = '/'
const signUp = '/sign-up/'
const signIn = `/sign-in/${userIdParam}/`
const profile = '/profile/'
const apps = '/apps/'
const account = '/account/'
const registerApp = `/register-app/${appRequestLinkParam}`
const appDetails = `/app-details/${tokenParam}`
const walletUrl = 'http://localhost:3000/#/register-app/'

export {
  userIdParam,
  appRequestLinkParam,
  tokenParam,
  landing,
  signUp,
  signIn,
  profile,
  apps,
  account,
  registerApp,
  appDetails,
  walletUrl,
}
