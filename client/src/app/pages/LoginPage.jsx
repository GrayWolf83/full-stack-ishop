import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormComponent from '../components/common/form/FormComponent'
import TextField from '../components/common/form/TextField'
import RowContainer from '../components/common/RowContainer'
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
		<RowContainer>
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
		</RowContainer>
	)
}

export default LoginPage
