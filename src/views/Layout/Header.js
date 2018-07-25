import React, { Component } from 'react'
import PropTypes from 'prop-types'
import screenfull from 'screenfull'
import { connect } from 'react-redux'
import styles from './index.less'

import { Layout, Menu, Icon, Badge } from 'antd'
const { Header } = Layout
const SubMenu = Menu.SubMenu

class HeaderBar extends Component {
  screenFull = () => {
    if (screenfull.enabled) {
      screenfull.request()
    }
  }

  render() {
    const { collapsed, switchSider, signOut } = this.props

    return (
      <Header className={styles.header}>
        <div className={styles.trigger} onClick={switchSider}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </div>
        <div className={styles.container}>
          <Menu mode="horizontal">
            <Menu.Item key="full" onClick={this.screenFull}>
              <Icon type="scan" onClick={this.screenFull} />
            </Menu.Item>
            <Menu.Item key="notification">
              <Badge count={25} overflowCount={10} style={{ marginLeft: 10 }}>
                <Icon type="notification" />
              </Badge>
            </Menu.Item>
            <SubMenu
              title={
                <span>
                  <Icon type="user" />
                  <span>bobby</span>
                </span>
              }
            >
              <Menu.Item key="logout" onClick={signOut}>
                <span onClick={signOut}>Sign out</span>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
      </Header>
    )
  }
}

HeaderBar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  switchSider: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired
}

export default connect()(HeaderBar)
