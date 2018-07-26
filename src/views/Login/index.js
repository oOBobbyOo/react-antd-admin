import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import styles from './index.less'
import { signIn } from '@/actions/authAction'
import { Form, Input, Icon, Button, Row } from 'antd'
const FormItem = Form.Item

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)

        //TODO 登录
        this.props.signIn()
        this.props.history.push('/')
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className={styles.login}>
        <div className={styles.logo}>
          <span>Admin</span>
        </div>
        <Form onSubmit={this.handleSubmit}>
          <FormItem hasFeedback>
            {getFieldDecorator('username', {
              rules: [
                {
                  required: true,
                  message: 'Please input your username!'
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your Password!'
                }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <Row>
            <Button type="primary" htmlType="submit">
              Sign in
            </Button>
            <p>
              <span>Username：guest</span>
              <span>Password：guest</span>
            </p>
          </Row>
        </Form>
      </div>
    )
  }
}

const Login = Form.create()(LoginForm)

const mapStateToProps = state => ({
  isAuthenticated: state.authReducer.isAuthenticated
})

export default withRouter(
  connect(
    mapStateToProps,
    { signIn }
  )(Login)
)
