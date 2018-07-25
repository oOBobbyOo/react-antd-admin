import React, { Component } from 'react'
import { Row, Col, Card, Icon } from 'antd'
import styles from './index.less'

class NumberCard extends Component {
  render() {
    const colProps = {
      lg: 6,
      md: 12
    }

    return (
      <Row gutter={16}>
        <Col {...colProps}>
          <Card className={styles.numberCard}>
            <Icon
              type="pay-circle-o"
              className={styles.iconWrap}
              style={{ color: '#64ea91' }}
            />
            <div className={styles.container}>
              <p className={styles.title}>Online Review</p>
              <span className={styles.number}>2,781</span>
            </div>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card className={styles.numberCard}>
            <Icon
              type="team"
              className={styles.iconWrap}
              style={{ color: '#8fc9fb' }}
            />
            <div className={styles.container}>
              <p className={styles.title}>Online Review</p>
              <span className={styles.number}>2,781</span>
            </div>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card className={styles.numberCard}>
            <Icon
              type="message"
              className={styles.iconWrap}
              style={{ color: '#d897eb' }}
            />
            <div className={styles.container}>
              <p className={styles.title}>Online Review</p>
              <span className={styles.number}>2,781</span>
            </div>
          </Card>
        </Col>
        <Col {...colProps}>
          <Card className={styles.numberCard}>
            <Icon
              type="shopping-cart"
              className={styles.iconWrap}
              style={{ color: '#f69899' }}
            />
            <div className={styles.container}>
              <p className={styles.title}>Online Review</p>
              <span className={styles.number}>2,781</span>
            </div>
          </Card>
        </Col>
      </Row>
    )
  }
}

export default NumberCard
