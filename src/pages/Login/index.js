import React, { useEffect } from "react"
import { connect } from 'react-redux'
import AuthLayout from "../../components/AuthLayout"
import Submit from "../../components/AuthLayout/Submit"
import { Input, useForm } from "../../components/Form"
import { loginUser } from '../../store/actions/auth'
import validation from "./validation"

const enterEmailRef = React.createRef()
const enterPasswordRef = React.createRef()


const Login = props => {

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validation);


  function login() {
    return props.loginUser(values)
  }

  useEffect(() => {
    if (props.token) { return props.history.push('/') }
  }, [props.token, props.history])

console.log(errors)
  return (<AuthLayout instruction={'Hello, welcome to ShopFairy'}>
    <form onSubmit={handleSubmit}>
      <Input
        label="Email address"
        placeholder="Email address"
        ref={enterEmailRef}
        onChange={handleChange}
        value={values.username}
        required
        name="username"
        id="username"
        error={errors.username}
      />

      <Input
        id="password"
        onChange={handleChange}
        value={values.password}
        name="password"
        type="password"
        label="Password"
        placeholder=""
        ref={enterPasswordRef}
        error={errors.password}
        required
      />

      <Submit text={"Sign In"} url={"/reset-password"} tag={"Forgot Password?"} />
    </form>
  </AuthLayout>
  )
}
const mapStateToProps = (state) => ({
  token: state.auth.accessToken
})


export default connect(mapStateToProps, { loginUser })(Login);

