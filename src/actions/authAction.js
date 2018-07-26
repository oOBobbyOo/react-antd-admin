import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from './action-types'

export const signIn = () => {
  return { type: SIGN_IN_SUCCESS, payload: true }
}

export const signOut = () => {
  return { type: SIGN_OUT_SUCCESS, payload: false }
}
