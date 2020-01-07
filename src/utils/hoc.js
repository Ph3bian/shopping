import React from 'react'
import { AuthConsumer } from 'context/AuthContext'
export const withAuth = WrappedComponent => {
    const WithWrappedComponent = props => (
        <AuthConsumer>
            {value => <WrappedComponent auth={value} {...props} />}
        </AuthConsumer>
    )

    WithWrappedComponent.displayName = `withAuth(${WrappedComponent.name})`

    return WithWrappedComponent
}
