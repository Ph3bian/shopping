import React from 'react'
import AuthLayout from 'components/AuthLayout'
import { withAuth } from 'utils/hoc'
import Submit from 'components/AuthLayout/Submit'
import { Input, useForm } from 'components/Form'
import validation from './validation'
import { Axios } from 'utils'
const CreateAccount = ({ auth, history, token }) => {
    const [, setUser] = auth
    let defaultValues = {
        email: '',
        password: '',
        username: '',
        first_name: '',
        last_name: '',
        confirmPassword: ''
    }

    const { values, errors, handleChange, handleSubmit } = useForm(
        register,
        validation,
        defaultValues
    )

    function register() {
        Axios.post('/auth/register', values)
            .then(function(response) {
                console.log(response)

                setUser(response.data.data)
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    // useEffect(() => {
    //     if (token) {
    //         return history.push('/')
    //     }
    // }, [token, history])

    return (
        <AuthLayout instruction={'Hello, welcome to ShopFairy'}>
            <form onSubmit={handleSubmit}>
                <Input
                    label="First Name"
                    placeholder="First name"
                    onChange={handleChange}
                    value={values.first_name}
                    required
                    name="first_name"
                    id="first_name"
                    error={errors.first_name}
                />
                <Input
                    label="Last Name"
                    placeholder="Last name"
                    onChange={handleChange}
                    value={values.last_name}
                    required
                    name="last_name"
                    id="last_name"
                    error={errors.last_name}
                />
                <Input
                    label="username"
                    placeholder="username"
                    onChange={handleChange}
                    value={values.username}
                    required
                    name="last_name"
                    id="last_name"
                    error={errors.last_name}
                />
                <Input
                    label="Email address"
                    placeholder="Email address"
                    onChange={handleChange}
                    value={values.email}
                    required
                    name="email"
                    id="email"
                    error={errors.email}
                />

                <Input
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                    name="password"
                    type="password"
                    label="Password"
                    placeholder=""
                    error={errors.password}
                    required
                />

                <Submit
                    text={'Create Account'}
                    url={'/reset-password'}
                    tag={'Forgot Password?'}
                />
            </form>
        </AuthLayout>
    )
}
export default withAuth(CreateAccount)
