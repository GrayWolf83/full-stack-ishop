import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextField = ({ label, type, name, value, onChange, error, ...rest }) => {
	const [showPassword, setShowPassword] = useState(false)

	const getInputClasses = () => {
		return 'form-control' + (error ? ' is-invalid' : '')
	}
	const toggleShowPassword = () => {
		setShowPassword((prevState) => !prevState)
	}
	return (
		<div className='mb-2'>
			<div className='form-floating mb-4 input-group has-validation'>
				<input
					type={showPassword ? 'text' : type}
					id={name}
					name={name}
					value={value}
					onChange={onChange}
					className={getInputClasses()}
					autoComplete={name}
					{...rest}
				/>
				<label htmlFor={name}>{label}</label>
				{type === 'password' && (
					<button
						className='btn btn-outline-secondary'
						type='button'
						onClick={toggleShowPassword}>
						<i
							className={
								'bi bi-eye' + (showPassword ? '-slash' : '')
							}></i>
					</button>
				)}
				{error && <div className='invalid-feedback'>{error}</div>}
			</div>
		</div>
	)
}

TextField.defaultProps = {
	type: 'text',
}

TextField.propTypes = {
	label: PropTypes.string,
	type: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	onChange: PropTypes.func,
	error: PropTypes.string,
}

export default TextField
