const masq = (state = {
  users: [],
  apps: [],
  devices: [],
  currentUser: null,
  currentAppRequest: null
}, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.user]
      }
    case 'SIGNIN':
      return {
        ...state,
        currentUser: action.profile
      }
    case 'SIGNOUT':
      return {
        ...state,
        currentUser: null
      }
    case 'RECEIVE_USERS':
      return {
        ...state,
        users: action.users
      }
    case 'RECEIVE_APPS':
      return {
        ...state,
        apps: action.apps
      }
    case 'SET_CURRENT_APP_REQUEST':
      return {
        ...state,
        currentAppRequest: action.app
      }
    case 'ADD_APP':
      return {
        ...state,
        apps: [...state.apps, action.app]
      }
    case 'ADD_DEVICE':
      return {
        ...state,
        devices: [...state.devices, action.device]
      }
    default:
      return state
  }
}

export default masq
