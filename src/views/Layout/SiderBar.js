import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './index.less'
import { allMenu } from '../../utils/menu'

import { Layout, Menu, Switch, Icon } from 'antd'
const { Sider } = Layout
const SubMenu = Menu.SubMenu

class SiderBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false,
      selectedKey: 'dashboard',
      theme: 'dark',
      mode: 'inline',
      current: 'home'
    }
  }

  handleClick = (e, special) => {
    this.setState({
      current: e.key || special
    })
  }

  render() {
    const { mode, current } = this.state
    const { changeTheme, darkTheme, collapsed } = this.props

    return (
      <Sider
        className={styles.sider}
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme={darkTheme ? 'dark' : 'light'}
      >
        <div className={styles.logo} />
        <Menu
          theme={darkTheme ? 'dark' : 'light'}
          mode={mode}
          defaultSelectedKeys={['']}
          selectedKeys={[current]}
          onClick={this.handleClick}
        >
          {allMenu.map(subMenu => {
            if (subMenu.children && subMenu.children.length) {
              return (
                <SubMenu
                  key={subMenu.key}
                  title={
                    <span>
                      <Icon type={subMenu.icon} />
                      <span>{subMenu.name}</span>
                    </span>
                  }
                >
                  {subMenu.children.map(menu => (
                    <Menu.Item key={menu.key}>
                      <Link to={menu.url}>
                        <Icon type={menu.icon} />
                        <span>{menu.name}</span>
                      </Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              )
            }
            return (
              <Menu.Item key={subMenu.key}>
                <Link to={subMenu.url}>
                  <Icon type={subMenu.icon} />
                  <span className="nav-text">{subMenu.name}</span>
                </Link>
              </Menu.Item>
            )
          })}
        </Menu>
        <div className={styles.switchtheme}>
          <span>
            <Icon type="bulb" />Switch Theme
          </span>
          <Switch
            onChange={changeTheme}
            defaultChecked={darkTheme}
            checkedChildren="Dark"
            unCheckedChildren="Light"
          />
        </div>
      </Sider>
    )
  }
}

SiderBar.propTypes = {
  changeTheme: PropTypes.func,
  darkTheme: PropTypes.bool
}

export default withRouter(connect()(SiderBar))
