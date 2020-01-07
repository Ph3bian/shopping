import React, { useState } from 'react'
import AuthLayout from 'components/AuthLayout'
import { Input } from 'components/Form'
import Submit from 'components/AuthLayout/Submit'
const enterEmailRef = React.createRef()

const ResetPassword = props => {
    const [email, setEmail] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        await props.forgotPassword({ email })
    }

    return (
        <AuthLayout instruction={'Reset Password'}>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Email address"
                    placeholder="Email address"
                    ref={enterEmailRef}
                    onChange={e => setEmail(e.target.value)}
                    required
                    name="email"
                    id="email"
                />
                <Submit text={'Submit'} url={'/login'} tag={'Log In?'} />
            </form>
        </AuthLayout>
    )
}

export default ResetPassword
