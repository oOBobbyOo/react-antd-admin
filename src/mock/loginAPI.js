import { param2Obj } from '@/utils'

const userMap = {
  admin: {
    name: 'admin',
    roles: ['admin'],
    token: 'admin token',
    introduction: '超级管理员(Super Admin)',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  },
  develop: {
    name: 'develop',
    roles: ['develop'],
    token: 'develop token',
    introduction: '开发(Developer)',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  },
  editor: {
    name: 'editor',
    roles: ['editor'],
    token: 'editor token',
    introduction: '编辑(Normal Editor)',
    avatar:
      'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
  }
}

export default {
  login: config => {
    const { username } = JSON.parse(config.body)
    const user = userMap[username]
    if (user) {
      return {
        code: '208',
        message: '登录成功',
        user
      }
    } else {
      return {
        code: '207',
        message: '用户不存在'
      }
    }
  },
  getUserInfo: config => {
    const { token } = param2Obj(config.url)
    if (userMap[token]) {
      return userMap[token]
    } else {
      return false
    }
  },
  logout: () => {
    return {
      code: '209',
      message: '退出成功'
    }
  }
}
