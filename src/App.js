import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from 'components/AppRouter'
import { AuthProviderContainer } from 'context/AuthContext'

const App = () => {
    return (
        <AuthProviderContainer>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </AuthProviderContainer>
    )
}

export default App
