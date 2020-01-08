import React from 'react'
import AuthLayout from 'components/AuthLayout'
import { withAuth } from 'utils/hoc'
import Submit from 'components/AuthLayout/Submit'
import { Input, useForm } from 'components/Form'
import validation from './validation'
import { Axios } from 'utils'
const AdminLogin = ({ auth, history, token }) => {
    const [, setUser] = auth
    let defaultValues = { email: '', password: '' }
    
    const { values, errors, handleChange, handleSubmit } = useForm(
        adminLogin,
        validation,
        defaultValues
    )

    function adminLogin() {
        Axios.post('/auth/admin-login', values)
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
                    text={'Sign In'}
                    url={'/reset-password'}
                    tag={'Forgot Password?'}
                />
            </form>
        </AuthLayout>
    )
}
export default withAuth(AdminLogin)
