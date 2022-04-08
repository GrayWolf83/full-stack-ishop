import * as yup from 'yup'

export const loginSchema = yup.object().shape({
	password: yup
		.string()
		.required({
			name: 'password',
			text: 'Поле пароль обязательно для заполнения',
		})
		.min(8, { name: 'password', text: 'Длина пароля не менее 8  символов' })
		.trim(),
	email: yup
		.string()
		.required({
			name: 'email',
			text: 'Поле email обязательно для заполнения',
		})
		.email({ name: 'email', text: 'email введен некорректно' }),
})

export const productSchema = yup.object().shape({
	cost: yup
		.number({
			name: 'cost',
			text: 'Поле "Цена" не может быть строкой',
		})
		.required({
			name: 'cost',
			text: 'Поле "Цена" обязательно для заполнения',
		}),
	image: yup
		.string()
		.required({
			name: 'image',
			text: 'Поле "Ссылка на изображение" обязательно для заполнения',
		})
		.trim(),
	description: yup
		.string()
		.required({
			name: 'description',
			text: 'Поле "Описание" обязательно для заполнения',
		})
		.trim(),
	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Наименование" обязательно для заполнения',
		})
		.min(2, {
			name: 'name',
			text: 'Длина поля "Наименование" не менее 2 символов',
		})
		.trim(),
	category: yup.string().required({
		name: 'category',
		text: 'Поле "Категория" обязательно для заполнения',
	}),
})

export const registerSchema = yup.object().shape({
	password: yup
		.string()
		.required({
			name: 'password',
			text: 'Поле "Пароль" обязательно для заполнения',
		})
		.min(8, {
			name: 'password',
			text: 'Длина поля "Пароль" не менее 8 символов',
		})
		.trim(),
	email: yup
		.string()
		.required({
			name: 'email',
			text: 'Поле "email" обязательно для заполнения',
		})
		.email({ name: 'email', text: 'email введен некорректно' }),

	name: yup
		.string()
		.required({
			name: 'name',
			text: 'Поле "Имя" обязательно для заполнения',
		})
		.min(2, {
			name: 'name',
			text: 'Длина поля "Имя" не менее 2 символов',
		})
		.trim(),
	role: yup.string().required({
		name: 'role',
		text: 'Поле "Роль" обязательно для заполнения',
	}),
})
