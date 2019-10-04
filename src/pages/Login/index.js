import React, { useState, useEffect } from "react"
import { connect } from 'react-redux'
import AuthLayout from "../../components/AuthLayout"
import Submit from "../../components/AuthLayout/Submit"
import {Input} from "../../components/Form"
import { loginUser } from '../../store/actions/auth'

const enterEmailRef = React.createRef();
const enterPasswordRef = React.createRef();


const Login = props => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    return props.loginUser({ username, password })
  }
  useEffect(() => {
    if (props.token) { return props.history.push('/') }
  }, [props.token, props.history])


  return (<AuthLayout instruction={'Hello, welcome to ShopFairy'}>
    <form onSubmit={handleSubmit}>
      <Input
        label="Email address"
        placeholder="Email address"
        ref={enterEmailRef}
        onChange={e => setUsername(e.target.value)}
        required
        name="email"
        value=""
        id="email"
      />

      <Input
        id="password"
        onChange={e => setPassword(e.target.value)}
        name="password"
        type="password"
        label="Password"
        placeholder=""
        ref={enterPasswordRef}
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

