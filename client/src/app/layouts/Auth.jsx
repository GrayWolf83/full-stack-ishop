import React from 'react'
import { useParams } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

const Auth = () => {
    const { login } = useParams()

    return <>{login === 'login' ? <LoginPage /> : <RegisterPage />}</>
}

export default Auth
