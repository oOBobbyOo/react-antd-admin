import React from 'react'
import ReactEcharts from 'echarts-for-react'

require('echarts-liquidfill')

const Liquidfill = () => {
  const option = {
    series: [
      {
        type: 'liquidFill',
        data: [0.6]
      }
    ]
  }
  return (
    <div className="chart">
      <ReactEcharts
        option={option}
        style={{
          height: '400px',
          width: '100%'
        }}
        className="react_for_echarts"
      />
    </div>
  )
}

export default Liquidfill
