import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'

const FormComponent = ({
	title,
	btnLabel,
	children,
	onSubmit,
	validationShema,
	initialData,
}) => {
	const [data, setData] = useState({})
	const [error, setError] = useState({})

	const handleChange = (e) => {
		setData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const validation = useCallback(() => {
		validationShema
			.validate(data)
			.then((d) => setError({}))
			.catch((err) => setError({ [err.message.name]: err.message.text }))
	}, [validationShema, data])

	useEffect(() => {
		if (initialData) {
			setData(initialData)
		}

		return () => setData(null)
	}, [initialData])

	useEffect(() => {
		if (Object.keys(data).length > 0) validation()
	}, [data, validation])

	const handleSubmit = (e) => {
		e.preventDefault()
		validation()
		if (Object.keys(error).length === 0 && Object.keys(data).length > 0) {
			onSubmit(data)
		} else {
			toast.warning('Форма заполнена некорректно!')
		}
	}

	return (
		<>
			<h2 className='text-center pb-3'>{title}</h2>
			<form
				className='needs-validation'
				onSubmit={handleSubmit}
				noValidate>
				{React.Children.map(children, (child) => {
					const config = {
						...child.props,
						onChange: handleChange,
						value: data[child?.props?.name] || '',
						error: error[child?.props?.name] || '',
					}

					return React.cloneElement(child, config)
				})}
				<div className='w-100 d-flex justify-content-center'>
					<button className='btn btn-secondary btn-lg' type='submit'>
						{btnLabel}
					</button>
				</div>
			</form>
		</>
	)
}

FormComponent.defaultProps = {
	initialData: '',
}

FormComponent.propTypes = {
	title: PropTypes.string,
	btnLabel: PropTypes.string,
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
	onSubmit: PropTypes.func,
	validationShema: PropTypes.object,
	initialData: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default FormComponent
