import * as yup from 'yup'

export const loginSchema = yup.object().shape({
	password: yup
		.string()
		.required({
			name: 'password',
			text: 'Поле обязательно для заполнения',
		})
		.min(8, { name: 'password', text: 'Длина пароля не менее 8  символов' })
		.trim(),
	email: yup
		.string()
		.required({ name: 'email', text: 'Поле обязательно для заполнения' })
		.email({ name: 'email', text: 'email введен некорректно' }),
})

export const registerSchema = yup.object().shape({
	password: yup
		.string()
		.required({
			name: 'password',
			text: 'Поле обязательно для заполнения',
		})
		.min(8, { name: 'password', text: 'Длина пароля не менее 8 символов' })
		.trim(),
	email: yup
		.string()
		.required({ name: 'email', text: 'Поле обязательно для заполнения' })
		.email({ name: 'email', text: 'email введен некорректно' }),

	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле обязательно для заполнения',
		})
		.min(2, { name: 'name', text: 'Длина имени не менее 2 символов' })
		.trim(),
})
