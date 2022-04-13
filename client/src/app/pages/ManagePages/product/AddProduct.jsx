import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FormComponent from '../../../components/common/form/FormComponent'
import SelectField from '../../../components/common/form/SelectField'
import TextField from '../../../components/common/form/TextField'
import { getCategoriesList } from '../../../store/categories'
import { addProduct } from '../../../store/products'
import { productSchema } from '../../../utils/yup.schema'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
	const categories = useSelector(getCategoriesList())
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSubmit = async (data) => {
		await dispatch(addProduct(data))
		return navigate('/manage')
	}

	return (
		<div className='offset-lg-1 col-lg-10 mt-3'>
			<FormComponent
				title={'Новый товар'}
				btnLabel={'Добавить'}
				onSubmit={handleSubmit}
				validationShema={productSchema}>
				<div className='mb-4'>
					<SelectField
						label={'Категория товара'}
						name='category'
						options={categories}
					/>
				</div>
				<TextField label={'Наименование'} name={'name'} />
				<TextField label={'Модель'} name={'model'} />
				<TextField label={'Описание'} name={'description'} />
				<TextField label={'URL картинки'} name={'image'} />
				<TextField label={'Цена'} name={'cost'} />
			</FormComponent>
		</div>
	)
}

export default AddProduct
