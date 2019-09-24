const userIdParam = ':userid'
const appRequestLinkParam = ':apprequestlink'

const landing = '/'
const signUp = '/sign-up/'
const signIn = `/sign-in/${userIdParam}/`
const profile = '/profile/'
const apps = '/apps/'
const registerApp = `/register-app/${appRequestLinkParam}`
const walletUrl = 'http://localhost:3000/#/register-app/'

export {
  userIdParam,
  appRequestLinkParam,
  landing,
  signUp,
  signIn,
  profile,
  apps,
  registerApp,
  walletUrl,
}
