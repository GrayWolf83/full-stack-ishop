import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FormComponent from '../components/common/form/FormComponent'
import TextField from '../components/common/form/TextField'
import RowContainer from '../components/common/RowContainer'
import { login } from '../store/users'
import { loginSchema } from '../utils/yup.schema'

const LoginPage = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (data) => {
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : '/'

        dispatch(login({ payload: data, redirect }))
    }

    return (
        <RowContainer>
            <div className='offset-md-2 col-md-8 mt-5'>
                <FormComponent
                    title={'Авторизация'}
                    btnLabel={'Войти'}
                    onSubmit={handleSubmit}
                    validationShema={loginSchema}>
                    <TextField label={'Email'} name={'email'} />
                    <TextField
                        label={'Пароль'}
                        type={'password'}
                        name={'password'}
                    />
                </FormComponent>
            </div>
        </RowContainer>
    )
}

export default LoginPage
