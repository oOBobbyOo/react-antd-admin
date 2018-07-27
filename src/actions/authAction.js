import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './action-types'
import { setToken, removeToken } from '@/utils/auth'
import { login, logout } from '@/api/login'

/* export const signIn = () => {
  return { type: SIGN_IN_SUCCESS, payload: true }
}

export const signOut = () => {
  return { type: SIGN_OUT_SUCCESS, payload: false }
} */

export const signIn = user => {
  return dispatch => {
    login(user)
      .then(response => {
        console.log(response)
        const user = response.data.user
        setToken(user.token)
        dispatch({
          type: SIGN_IN_SUCCESS,
          payload: {
            isAuthenticated: true,
            user: user
          }
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const signOut = () => {
  return dispatch => {
    logout().then(response => {
      console.log(response)
      removeToken()
      dispatch({
        type: SIGN_OUT_SUCCESS,
        payload: {
          isAuthenticated: false,
          user: null
        }
      })
    })
  }
}
