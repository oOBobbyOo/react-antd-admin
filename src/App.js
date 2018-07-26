import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter } from 'react-router-dom'
import routes from './routes'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <BrowserRouter children={routes} />
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object
}

export default App
