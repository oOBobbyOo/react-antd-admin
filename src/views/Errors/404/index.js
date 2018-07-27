import React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import styles from './index.less'
import img404 from './404.png'
import cloud404 from './404_cloud.png'

const NotFound = () => {
  return (
    <div className={styles.errors}>
      <div className={styles.pic404}>
        <img className={styles.img404} src={img404} alt="404" />
        <img
          className={classnames(styles.cloud, styles.left)}
          src={cloud404}
          alt="404"
        />
        <img
          className={classnames(styles.cloud, styles.mid)}
          src={cloud404}
          alt="404"
        />
        <img
          className={classnames(styles.cloud, styles.right)}
          src={cloud404}
          alt="404"
        />
      </div>
      <div className={styles.bullshit}>
        <div className={styles.opps}>
          <h1>404! </h1>
          <h2>
            抱歉，你访问的页面不存在! <br /> 请检查您输入的网址是否正确,
            请点击以下按钮返回主页或者联系管理员！！！
          </h2>
        </div>
        <Link to="/home" className={styles.back}>
          返回首页
        </Link>
      </div>
    </div>
  )
}

export default NotFound
