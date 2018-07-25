export const allMenu = [
  {
    key: 'home',
    name: '首页',
    icon: 'home',
    url: '/home'
  },
  {
    key: 'ui',
    name: 'UIElement',
    icon: 'table',
    children: [
      {
        key: 'iconfont',
        name: 'Iconfont',
        icon: 'area-chart',
        url: '/ui/iconfont'
      }
    ]
  },
  {
    key: 'user',
    name: '用户管理',
    icon: 'user',
    url: '/user'
  },
  {
    key: 'table',
    name: '表格',
    icon: 'table',
    children: [
      {
        key: 'basic',
        name: '基础表格',
        icon: 'area-chart',
        url: '/table/basic'
      },
      {
        key: 'more',
        name: '复杂',
        icon: 'bar-chart',
        url: '/table/advanced'
      }
    ]
  },
  {
    key: 'charts',
    name: '图表',
    icon: 'table',
    children: [
      {
        key: 'echarts',
        name: 'Echarts',
        icon: 'area-chart',
        url: '/charts/echarts'
      }
    ]
  }
]
