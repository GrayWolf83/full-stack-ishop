import React from 'react'
import { useDispatch } from 'react-redux'
import FormComponent from '../components/common/form/FormComponent'
import SelectField from '../components/common/form/SelectField'
import TextField from '../components/common/form/TextField'
import RowContainer from '../components/common/RowContainer'
import { signUp } from '../store/users'
import { registerSchema } from '../utils/yup.schema'

const RegisterPage = () => {
	const dispatch = useDispatch()

	const handleSubmit = (data) => {
		dispatch(signUp(data))
	}

	return (
		<RowContainer>
			<div className='offset-lg-2 col-lg-8 mt-5'>
				<FormComponent
					title={'Регистрация'}
					btnLabel={'Отправить'}
					onSubmit={handleSubmit}
					validationShema={registerSchema}>
					<SelectField
						name={'role'}
						options={[
							{ value: 'manage', label: 'Я продавец' },
							{ value: 'user', label: 'Я покупатель' },
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
