import React from 'react'
import { useDispatch } from 'react-redux'
import FormComponent from '../components/common/form/FormComponent'
import TextField from '../components/common/form/TextField'
import RowContainer from '../components/common/RowContainer'
import { login } from '../store/users'
import { loginSchema } from '../utils/yup.schema'

const LoginPage = () => {
	const dispatch = useDispatch()

	const handleSubmit = (data) => {
		dispatch(login(data))
	}

	return (
		<RowContainer>
			<div className='offset-lg-2 col-lg-8 mt-5'>
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
