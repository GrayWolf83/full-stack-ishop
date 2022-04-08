import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import FormComponent from '../components/common/form/FormComponent'
import SelectField from '../components/common/form/SelectField'
import TextField from '../components/common/form/TextField'
import RowContainer from '../components/common/RowContainer'
import { signUp } from '../store/users'
import { registerSchema } from '../utils/yup.schema'

const RegisterPage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = async (data) => {
		await dispatch(signUp(data))
		navigate('/')
	}

	return (
		<RowContainer>
			<div className='col-md-6 offset-md-3 mt-5'>
				<FormComponent
					title={'Регистрация'}
					btnLabel={'Отправить'}
					onSubmit={handleSubmit}
					validationShema={registerSchema}>
					<SelectField
						name={'role'}
						options={[
							{ _id: 'manage', name: 'Я продавец' },
							{ _id: 'user', name: 'Я покупатель' },
						]}
					/>
					<TextField label={'Имя'} name={'name'} />
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

export default RegisterPage
