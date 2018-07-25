import React, { Component } from 'react'
import styles from './index.less'

import { Layout } from 'antd'
const { Footer } = Layout

class FooterBar extends Component {
  render() {
    return <Footer className={styles.footer}>©2018 Created by Bobby</Footer>
  }
}

export default FooterBar
