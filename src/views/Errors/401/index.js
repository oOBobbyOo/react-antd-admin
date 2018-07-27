import React from 'react'
import { Button, Icon } from 'antd'
import styles from './index.less'

const NotAuth = ({ history }) => (
  <div className={styles.errors}>
    <div className={styles.pic401}>
      <img src={require('./401.gif')} alt="Girl has dropped her ice cream." />
    </div>
    <div className={styles.oops}>
      <h1>OOPS!</h1>
      <h2>抱歉，你没有权限访问该页面！</h2>
      <Button
        type="primary"
        onClick={() => {
          history.goBack()
        }}
      >
        <Icon type="left" />Go Back
      </Button>
      <Button
        type="primary"
        onClick={() => {
          history.push('/')
        }}
      >
        <Icon type="home" />Go Home
      </Button>
    </div>
  </div>
)

export default NotAuth
