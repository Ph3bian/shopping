import React, { lazy, Suspense } from 'react'
import { withAuth } from 'utils/hoc'
import PrivateRoute from './PrivateRoute'
import { Router, Route, Switch, Redirect, withRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()
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

const AppRouter = () => (
    <Router history={history}>
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <PrivateRoute
                    path="/"
                    exact
                    component={() => <Redirect to="/" />}
                />
                <Route path="/login" component={Login} />
                <Route path="/reset-password" component={ResetPassword} />
                <Route component={NotFound} />
                <PrivateRoute
                    path="/change-password"
                    component={ChangePassword}
                />
            </Switch>
        </Suspense>
    </Router>
)

export default withAuth(withRouter(AppRouter))
