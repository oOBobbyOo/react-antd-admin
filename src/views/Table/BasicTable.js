import React, { Component } from 'react'

import { Row, Col, Table, Card } from 'antd'

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }
]

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  }
]

class BasicTable extends Component {
  render() {
    return (
      <div className="container-inner">
        <Row gutter={16}>
          <Col md={24} className="gutter-row">
            <Card title="基础表格" bordered={false}>
              <Table
                columns={columns}
                dataSource={dataSource}
                bordered
                scroll={{ x: 1300 }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col md={24} className="gutter-row">
            <Card title="基础表格" bordered={false}>
              <Table
                columns={columns}
                dataSource={dataSource}
                bordered
                scroll={{ x: 1300 }}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col md={12} className="gutter-row">
            <Card title="基础表格" bordered={false}>
              <Table
                columns={columns}
                dataSource={dataSource}
                bordered
                scroll={{ x: 1300 }}
              />
            </Card>
          </Col>
          <Col md={12} className="gutter-row">
            <Card title="基础表格" bordered={false}>
              <Table
                columns={columns}
                dataSource={dataSource}
                bordered
                scroll={{ x: 1300 }}
              />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default BasicTable
