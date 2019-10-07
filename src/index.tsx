import { AkashaThemeProvider } from '@akashaproject/design-system/dist/providers/ThemeProvider'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import App from './App'
import { init } from './did'
import rootReducer from './reducers'
import rootSaga from './sagas'
import * as serviceWorker from './serviceWorker'
import theme from './theme'

import './style.css'

init().then(() => {
  const sagaMiddleware = createSagaMiddleware()
  const logger = createLogger()
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger))
  sagaMiddleware.run(rootSaga)

  ReactDOM.render(
    <Provider store={store}>
      <AkashaThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </AkashaThemeProvider>
    </Provider>,
    document.getElementById('root'),
  )
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
