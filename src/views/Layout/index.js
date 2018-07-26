import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Switch, Route, Redirect } from 'react-router-dom'

import Header from './Header'
import SiderBar from './SiderBar'
import Footer from './Footer'
import NotFound from '../NotFound'

import styles from './index.less'

import { childRoutes } from '@/routes'
// import authHOC from '../../utils/auth'

import { Layout } from 'antd'
const { Content } = Layout

class LayoutPage extends Component {
  constructor(props) {
    super(props)
    this.state = { darkTheme: true, collapsed: false }
  }

  changeTheme = checked => {
    this.setState({
      darkTheme: checked
    })
  }

  switchSider = () => {
    this.setState({ collapsed: !this.state.collapsed })
  }

  signOut = () => {
    console.log('logout')
  }

  render() {
    const { collapsed, darkTheme } = this.state

    return (
      <Layout
        className={classnames({
          [styles.dark]: darkTheme,
          [styles.light]: !darkTheme
        })}
      >
        <SiderBar
          changeTheme={this.changeTheme}
          darkTheme={darkTheme}
          collapsed={collapsed}
        />
        <Layout className={styles.main}>
          <Header
            collapsed={this.state.collapsed}
            switchSider={this.switchSider}
            signOut={this.signOut}
          />
          <Content className={styles.content}>
            <Switch>
              {childRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  component={route.component}
                  exact={route.exact}
                />
              ))}
              <Redirect exact from="/" to="/home" />
              <Route render={NotFound} />
            </Switch>
            <Footer />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(connect()(LayoutPage))
