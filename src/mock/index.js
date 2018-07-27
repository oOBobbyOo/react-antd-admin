import Mock from 'mockjs'

import loginAPI from './loginAPI'

Mock.setup({
  timeout: '350-600'
})

// 登录相关
Mock.mock(/\/user\/login/, 'post', loginAPI.login)
Mock.mock(/\/user\/info/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/user\/logout/, 'post', loginAPI.logout)
