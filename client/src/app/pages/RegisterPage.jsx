import React from 'react'
import { useDispatch } from 'react-redux'
import CheckboxField from '../components/common/form/CheckboxFiels'
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
            <div className='offset-md-2 col-md-8 mt-5'>
                <FormComponent
                    title={'Регистрация'}
                    btnLabel={'Отправить'}
                    onSubmit={handleSubmit}
                    validationShema={registerSchema}>
                    <SelectField
                        name={'role'}
                        options={[
                            { value: 'user', label: 'Я покупатель' },
                            { value: 'manage', label: 'Я продавец' },
                        ]}
                    />
                    <TextField label={'Имя'} name={'name'} />
                    <TextField label={'Email'} name={'email'} />

                    <TextField
                        label={'Пароль'}
                        type={'password'}
                        name={'password'}
                    />
                    <CheckboxField name={'license'}>
                        <span className='ms-1 fst-italic w-100 license'>
                            Отправляя данные Вы соглашаетесь с Пользовательским
                            соглашением
                        </span>
                    </CheckboxField>
                </FormComponent>
            </div>
        </RowContainer>
    )
}

export default RegisterPage
