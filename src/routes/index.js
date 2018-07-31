import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from '@/components/Authorized/AuthenticatedRoute'
import asyncComponent from '@/components/AsyncComponent'

// import Layout from '@/views/Layout'
// import Login from '@/views/Login'
// import NotAuth from '@/views/Errors/401'
// import NotFound from '@/views/Errors/404'
// import Home from '@/views/Home'
// import Iconfont from '@/views/UIElement/Iconfont'
// import User from '@/views/User'
// import BasicTable from '@/views/Table/BasicTable'
// import AdvancedTable from '@/views/Table/AdvancedTable'
// import Echarts from '@/views/Charts/Echarts'

const _import_views = file => asyncComponent(() => import(`@/views/${file}`))
// const Layout = asyncComponent(() => import('@/views/Layout'))

const Layout = _import_views('Layout')
const Login = _import_views('Login')
const NotAuth = _import_views('Errors/401')
const NotFound = _import_views('Errors/404')
const Home = _import_views('Home')
const Iconfont = _import_views('UIElement/Iconfont')
const User = _import_views('User')
const BasicTable = _import_views('Table/BasicTable')
const AdvancedTable = _import_views('Table/AdvancedTable')
const Echarts = _import_views('Charts/Echarts')

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
  },
  {
    path: '/errors/401',
    component: NotAuth
  },
  {
    path: '/errors/404',
    component: NotFound
  }
]

const routes = ({ childProps }) => (
  <Switch>
    <Route path="/login" component={Login} />
    <AuthenticatedRoute path="/" component={Layout} props={childProps} />
  </Switch>
)

export default routes
