import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import registerServiceWorker from './registerServiceWorker';
import App from './components/App'
import configureStore from './configureStore'

const history = createHistory()
const { store } = configureStore(history, window.REDUX_STATE)

const render = App => {
  const root = document.getElementById('root')

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )
}

render(App)

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default
    render(App)
  })
}
