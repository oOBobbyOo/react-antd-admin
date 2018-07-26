import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from '@/views/Layout'
import Login from '@/views/Login'

import Home from '@/views/Home'
import Iconfont from '@/views/UIElement/Iconfont'

import User from '@/views/User'
import BasicTable from '@/views/Table/BasicTable'
import AdvancedTable from '@/views/Table/AdvancedTable'

import Echarts from '@/views/Charts/Echarts'

export const childRoutes = [
  {
    path: '/home',
    component: Home,
    exact: true
  },
  {
    path: '/ui/iconfont',
    component: Iconfont
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/table/basic',
    component: BasicTable
  },
  {
    path: '/table/advanced',
    component: AdvancedTable
  },
  {
    path: '/charts/echarts',
    component: Echarts
  }
]

const routes = (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" component={Layout} />
  </Switch>
)

export default routes
