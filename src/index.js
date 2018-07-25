import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './store'
import routes from './Route'
import './styles/index.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter children={routes} />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
