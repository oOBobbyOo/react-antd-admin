import { SIGN_IN_SUCCESS, SIGN_OUT_SUCCESS } from '../actions/action-types'

const initialState = {
  isAuthenticated: false,
  user: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return { ...state, ...action.payload }
    case SIGN_OUT_SUCCESS:
      return { ...state, ...action.payload }
    default:
      return state
  }
}

export default authReducer
