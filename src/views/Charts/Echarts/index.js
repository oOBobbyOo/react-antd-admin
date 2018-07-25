import React, { Component } from 'react'

import EchartsComponent from './EchartsComponent'

import { Row, Col, Radio } from 'antd'
const RadioGroup = Radio.Group

const echartList = [
  {
    label: 'SimpleChart',
    value: 'simple'
  },
  {
    label: 'ChartShowLoading',
    value: 'loading'
  },
  {
    label: 'ChartAPI',
    value: 'api'
  },
  {
    label: 'ChartWithEvent',
    value: 'events'
  },
  {
    label: 'ThemeChart',
    value: 'theme'
  },
  {
    label: 'DynamicChart',
    value: 'dynamic'
  },
  {
    label: 'MapChart',
    value: 'map'
  },
  {
    label: 'AirportCoord',
    value: 'airport'
  },
  {
    label: 'Graph',
    value: 'graph'
  },
  {
    label: 'Calendar',
    value: 'calendar'
  },
  {
    label: 'Treemap',
    value: 'treemap'
  },
  {
    label: 'Gauge',
    value: 'gauge'
  },
  {
    label: 'GCalendar',
    value: 'gcalendar'
  },
  {
    label: 'LunarCalendar',
    value: 'lunar'
  },
  {
    label: 'Liquidfill',
    value: 'liquid'
  },
  {
    label: 'BubbleGradient',
    value: 'BubbleGradient'
  },
  {
    label: 'TransparentBar3D',
    value: 'TransparentBar3D'
  },
  {
    label: 'Moon',
    value: 'Moon'
  }
]

class Echarts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: ''
    }
  }

  handleRadioGroupChange = e => {
    this.setState({
      type: e.target.value
    })
  }
  render() {
    return (
      <div className="content-inner">
        <Row gutter={16} className="gutter-row">
          <RadioGroup
            options={echartList}
            defaultValue="simple"
            onChange={this.handleRadioGroupChange}
          />
        </Row>
        <Row gutter={16} className="gutter-row">
          <Col md={24}>
            <EchartsComponent type={this.state.type} />
          </Col>
        </Row>
        <Row gutter={16} className="gutter-row">
          <Col>
            All demos from
            <a href="https://github.com/hustcc/echarts-for-react">
              https://github.com/hustcc/echarts-for-react
            </a>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Echarts
