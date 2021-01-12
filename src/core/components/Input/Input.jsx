import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	className: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string
}

const defaultProps = {
	className: 'intro-y auth__input input input--lg w-full border block',
	type: '',
	placeholder: ''
}

const Input = (props) => {
	return (
		<input
			type={`${props.type}`}
			className={`${props.className}`}
			placeholder={`${props.placeholder}`}
			{...props}
		/>
	)
}

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
