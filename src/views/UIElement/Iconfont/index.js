import React, { Component } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStroopwafel,
  faCheckSquare,
  faCoffee,
  faAmbulance
} from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

import { Row, Col, Card } from 'antd'
import './index.css'

library.add(faStroopwafel, faCheckSquare, faCoffee, faAmbulance, faBell)

const iconfont = [
  'icon-appreciate',
  'icon-check',
  'icon-close',
  'icon-edit',
  'icon-emoji',
  'icon-favorfill',
  'icon-favor',
  'icon-loading',
  'icon-locationfill'
]

// const fontawesome = {
//   faStroopwafel,
//   faCheckSquare,
//   faCoffee,
//   faAmbulance,
//   faBell
// }

const fontawesome = [
  {
    key: 'fa-stroopwafel',
    icon: faStroopwafel
  },
  {
    key: 'fa-checkSquare',
    icon: faCheckSquare
  },
  {
    key: 'fa-coffee',
    icon: faCoffee
  },
  {
    key: 'fa-ambulance',
    icon: faAmbulance
  },
  {
    key: 'fa-bell',
    icon: faBell
  }
]

const colProps = {
  md: 3
}

class IconPage extends Component {
  render() {
    return (
      <div>
        <Card title="IconFond" bordered={false}>
          <Row gutter={16}>
            {iconfont.map(item => {
              const classes = `iconfont ${item}`
              return (
                <Col {...colProps} key={item} className="iconfont-inner">
                  <i className={classes} />
                  <span className="icon-name">{item}</span>
                </Col>
              )
            })}
          </Row>
        </Card>
        <Card title="FontAwesome" bordered={false}>
          {fontawesome.map(item => (
            <Col {...colProps} key={item.key} className="iconfont-inner">
              <FontAwesomeIcon icon={item.icon} size="3x" />
              <span className="icon-name">{item.key}</span>
            </Col>
          ))}
        </Card>
      </div>
    )
  }
}

export default IconPage

/* <FontAwesomeIcon icon={faStroopwafel} size="3x" />
<FontAwesomeIcon icon={faCheckSquare} size="3x" />
<FontAwesomeIcon icon={faCoffee} size="3x" />
<FontAwesomeIcon icon={faAmbulance} size="3x" />
<FontAwesomeIcon icon={faBell} size="3x" /> */
