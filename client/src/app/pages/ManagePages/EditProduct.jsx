import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import FormComponent from '../../components/common/form/FormComponent'
import SelectField from '../../components/common/form/SelectField'
import TextField from '../../components/common/form/TextField'
import { getCategoriesList } from '../../store/categories'
import { editProduct, getProductById } from '../../store/products'
import { productSchema } from '../../utils/yup.schema'

const EditProduct = () => {
	const dispatch = useDispatch()
	const categories = useSelector(getCategoriesList())
	const { productId } = useParams()
	const product = useSelector(getProductById(productId))

	if (!productId || !product) {
		return <Navigate to={'/manage'} />
	}

	const handleSubmit = async (data) => {
		await dispatch(editProduct(data))
		return <Navigate to={'/manage'} />
	}

	return (
		<div className='offset-lg-1 col-lg-10 mt-3'>
			<FormComponent
				title={'Редактирование товара'}
				btnLabel={'Изменить'}
				onSubmit={handleSubmit}
				initialData={product}
				validationShema={productSchema}>
				<SelectField
					label={'Категория товара'}
					name='category'
					options={categories}
				/>
				<TextField label={'Наименование'} name={'name'} />
				<TextField label={'Описание'} name={'description'} />
				<TextField label={'URL картинки'} name={'image'} />
				<TextField label={'Цена'} name={'cost'} />
			</FormComponent>
		</div>
	)
}

export default EditProduct
