import request from '@/utils/request'

export function login(user) {
  return request({
    url: '/user/login',
    method: 'post',
    data: user
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}
