const userIdParam = ':userid'
const personaIdParam = ':personaid'
const appRequestLinkParam = ':apprequestlink'
const tokenParam = ':token'

const landing = '/'
const signUp = '/sign-up/'
const signIn = `/sign-in/${userIdParam}`
const personas = '/personas/'
const personaDetails = `/persona-details/${personaIdParam}`
const createPersona = '/create-persona/'
const personaCreated = '/persona-created/'
const editPersona = `/edit-persona/${personaIdParam}`
const deletePersona = `/delete-persona/${personaIdParam}`
const unlinkPersona = `/unlink-persona/${tokenParam}`
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
  personaIdParam,
  appRequestLinkParam,
  tokenParam,
  landing,
  signUp,
  signIn,
  personas,
  personaDetails,
  createPersona,
  personaCreated,
  editPersona,
  deletePersona,
  unlinkPersona,
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
