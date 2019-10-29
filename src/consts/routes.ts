const userIdParam = ':userid'
const profileIdParam = ':profileid'
const appRequestLinkParam = ':apprequestlink'
const tokenParam = ':token'

const landing = '/'
const signUp = '/sign-up/'
const signIn = `/sign-in/${userIdParam}`
const profiles = '/profiles/'
const profileDetails = `/profile-details/${profileIdParam}`
const createProfile = '/create-profile/'
const profileCreated = '/profile-created/'
const editProfile = `/edit-profile/${profileIdParam}`
const deleteProfile = `/delete-profile/${profileIdParam}`
const unlinkProfile = '/unlink-profile/'
const apps = '/apps/'
const account = '/account/'
const registerApp = `/register-app/${appRequestLinkParam}`
const appDetails = `/app-details/${tokenParam}`
const appCreated = '/app-created/'
const search = '/search/'
const settings = '/settings/'
const discardChanges = '/discard-changes/'
const supportedApps = '/supported-apps/'
const faq = '/faq/'
const walletUrl = 'http://localhost:3000/#/register-app/'

export {
  userIdParam,
  profileIdParam,
  appRequestLinkParam,
  tokenParam,
  landing,
  signUp,
  signIn,
  profiles,
  profileDetails,
  createProfile,
  profileCreated,
  editProfile,
  deleteProfile,
  unlinkProfile,
  apps,
  account,
  registerApp,
  appDetails,
  appCreated,
  search,
  settings,
  walletUrl,
  discardChanges,
  supportedApps,
  faq,
}
