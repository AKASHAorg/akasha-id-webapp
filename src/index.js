import React from 'react';
import ReactDOM from 'react-dom';
import AkashaThemeProvider from '@akashaproject/design-system/dist/providers/ThemeProvider'
import lightTheme from '@akashaproject/design-system/dist/styles/themes/light-theme'
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <AkashaThemeProvider theme={lightTheme}>
    <App />
  </AkashaThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
