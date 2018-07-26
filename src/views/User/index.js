import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class User extends Component {
  render() {
    return <div className="container-inner">user aaa</div>
  }
}

export default withRouter(connect()(User))
