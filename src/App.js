import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Routes from './routes'

const App = ({ history, isAuthenticated }) => {
  const childProps = {
    isAuthenticated: isAuthenticated
  }

  return (
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Routes childProps={childProps} />
      </BrowserRouter>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object
}

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

export default connect(mapStateToProps)(App)
