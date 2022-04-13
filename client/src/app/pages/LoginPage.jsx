import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormComponent from '../components/common/form/FormComponent'
import TextField from '../components/common/form/TextField'
import { login } from '../store/users'
import { loginSchema } from '../utils/yup.schema'

const LoginPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = async (data) => {
		await dispatch(login(data))
		navigate('/')
	}

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6 offset-md-3 mt-5'>
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
			</div>
		</div>
	)
}

export default LoginPage
