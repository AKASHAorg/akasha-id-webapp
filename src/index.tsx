import { AkashaThemeProvider } from '@akashaproject/design-system/dist/providers/ThemeProvider'
import lightTheme from '@akashaproject/design-system/dist/styles/themes/light-theme'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './App'
import rootReducer from './reducers'
import * as serviceWorker from './serviceWorker'

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <AkashaThemeProvider theme={lightTheme}>
      <App />
    </AkashaThemeProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
