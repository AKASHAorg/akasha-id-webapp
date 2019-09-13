const userIdParam = ':userid'
const appRequestParam = ':apprequest'

const landing = '/'
const signUp = '/sign-up/'
const signIn = `/sign-in/${userIdParam}/`
const profile = '/profile/'
const apps = '/apps/'
const addApp = `/add-app/${appRequestParam}`

export { userIdParam, appRequestParam, landing, signUp, signIn, profile, apps, addApp }
