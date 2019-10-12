import { toast } from 'react-toastify';
import { LOGIN, LOGOUT, RESET_PASSWORD } from "../types"
import { Config, Axios } from "../../utils"


export const loginUser = (values) => async (dispatch) => {

  const success = (data) => {
    return { type: LOGIN, payload: data };
  }

  try {
 
    const response = await Axios.post(`${Config.baseUrl}/auth/signin`, values)
    let { data: { token } } = response
    localStorage.setItem('authToken', JSON.stringify(token))
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    toast.success("Login Successful")
    dispatch(success(token));
  } catch (errors) {
    toast.error("Oops, something went wrong")
    return console.log(errors)
  }

}


export const forgotPassword = ({ email }) => async (dispatch) => {
  try {
    const response = await Axios.post(`${Config.baseUrl}/reset-password`, { email })
    return dispatch({
      type: RESET_PASSWORD,
      payload: response.data.data
    })
  } catch (errors) {
    return console.log(errors)
  }
}


export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('authToken')
  dispatch({
    type: LOGOUT
  })
}