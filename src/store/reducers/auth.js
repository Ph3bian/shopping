import { LOGIN, LOGOUT } from '../types'

const token = JSON.parse(localStorage.getItem('authToken')) ? JSON.parse(localStorage.getItem('authToken')) : null

let initialState = {
  accessToken: token,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        accessToken: payload
      }
    case LOGOUT:
      return {
        ...state,
        accessToken: null,
      }
    default:
      return state;
  }
}

export default authReducer