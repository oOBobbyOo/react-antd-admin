import { createStore, applyMiddleware, compose } from 'redux'

// import history from '../history'
import rootReducer from '../reducers'

const initialState = {}
const middlewares = []
const enhancers = []

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    ...enhancers
  )
)

export default store
