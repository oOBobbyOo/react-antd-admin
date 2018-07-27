import axios from 'axios'
import { getToken } from './auth'
import { message } from 'antd'

/* const codeMessage = {
  200: '服务器成功返回请求的数据',
  201: '成功请求并创建了新的资源',
  202: '已经接受请求，但未处理完成',
  204: '服务器成功处理，但未返回内容',
  205: '重置内容,服务器处理成功',
  301: '请求成功，但是资源被永久转移',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作',
  406: '请求的格式不可得',
  410: '请求的资源被永久删除，且不会再得到的',
  422: '当创建一个对象时，发生一个验证错误',
  500: '服务器发生错误，请检查服务器',
  502: '网关错误',
  503: '服务不可用，服务器暂时过载或维护',
  504: '网关超时'
} */

const service = axios.create({
  baseURL:
    'https://www.easy-mock.com/mock/5b4c5bf22af967060325bc1f/react-admin',
  timeout: 5000
})

// 发送请求的拦截器
service.interceptors.request.use(
  config => {
    let token = getToken()
    if (token) {
      // config.headers.Authorization = `x-token ${token}`
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应数据的拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === '207') {
      message.error(res.message) //用户不存在
      return Promise.reject(res.message)
    }
    if (res.code === '208') {
      message.success(res.message) //登录成功
    }
    if (res.code === '209') {
      message.success(res.message) //退出成功
    }
    return response
  },
  error => {
    message.error(error.message)
    return Promise.reject(error)
  }
)

export default service
