import React from 'react'
import PropTypes from 'prop-types'

const SelectField = ({
	label,
	value,
	onChange,
	options,
	error,
	name,
	defaultLabel,
}) => {
	const handleChange = ({ target }) => {
		onChange({ name: target.name, value: target.value })
	}
	const getInputClasses = () => {
		return 'form-select' + (error ? ' is-invalid' : '')
	}

	const optionsArray =
		!Array.isArray(options) && typeof options === 'object'
			? Object.keys(options).map((optionName) => ({
					name: options[optionName].name,
					value: options[optionName]._id,
			  }))
			: options.map((item) => ({ value: item._id, label: item.name }))

	return (
		<>
			<label htmlFor={name} className='form-label'>
				{label}
			</label>
			<select
				className={getInputClasses()}
				id={name}
				name={name}
				value={value}
				onChange={handleChange}>
				<option value={''}>{defaultLabel}</option>
				{optionsArray &&
					optionsArray.map((option) => (
						<option value={option.value} key={option.value}>
							{option.label}
						</option>
					))}
			</select>
			{error && <div className='invalid-feedback'>{error}</div>}
		</>
	)
}

SelectField.defaultProps = {
	defaultLabel: 'Выбрать...',
}

SelectField.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
	error: PropTypes.string,
	name: PropTypes.string,
	defaultLabel: PropTypes.string,
}

export default SelectField
