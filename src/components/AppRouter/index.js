import React, { lazy, Suspense } from 'react'
import { withAuth } from 'utils/hoc'
import PrivateRoute from './PrivateRoute'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

const Login = lazy(() =>
    import(/* webpackChunkName: "Login" */ 'pages/Login/Login')
)

const ResetPassword = lazy(() =>
    import(/* webpackChunkName: "ResetPassword" */ 'pages/ResetPassword')
)
const ChangePassword = lazy(() =>
    import(/* webpackChunkName: "ChangePassword" */ 'pages/ChangePassword')
)
const NotFound = lazy(() =>
    import(/* webpackChunkName: "NotFound" */ 'pages/NotFound')
)
const CreateAccount = lazy(() =>
    import(/* webpackChunkName: "CreateAccount" */ 'pages/CreateAccount')
)
const AppRouter = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <PrivateRoute
                path="/"
                exact
                component={() => <Redirect to="/" />}
            />
            <Route path="/login" component={Login} />
            <Route path="/reset-password" component={ResetPassword} />
            <Route path="/create-account" component={CreateAccount} />
            <PrivateRoute path="/change-password" component={ChangePassword} />
            <PrivateRoute component={NotFound} />
            <Route
                render={() => {
                    return <Redirect to="/" />
                }}
            />
        </Switch>
    </Suspense>
)

export default withAuth(withRouter(AppRouter))
