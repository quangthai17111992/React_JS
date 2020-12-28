import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
	value: PropTypes.string,
	size: PropTypes.string,
	type: PropTypes.string,
	classes: PropTypes.string,
	shape: PropTypes.string, // none | small | medium | large
	outline: PropTypes.bool,
	htmlType: PropTypes.string,
	onClick: PropTypes.func
}

const defaultProps = {
	size: 'medium', // small | medium | large
	htmlType: 'button',
	onClick: null
}

const PRIMARY_TYPE = 'primary'
const SUCCESS_TYPE = 'success'
const SECONDARY_TYPE = 'secondary'
const WARNING_TYPE = 'warning'
const DANGER_TYPE = 'danger'
const WHITE_TYPE = 'white'

const Button = (props) => {
	const buildBackgroundButton = (type) => {
		switch (type) {
			case PRIMARY_TYPE:
				return 'bg-blue-500 border-indigo-500 hover:bg-blue-600 text-white'
			case SUCCESS_TYPE:
				return 'bg-green-500 border-green-500 hover:bg-green-600 text-white'
			case SECONDARY_TYPE:
				return 'border-red-500 bg-red-500 hover:bg-red-600 text-white'
			case WARNING_TYPE:
				return 'border-yellow-500 bg-yellow-500 hover:bg-yellow-600 text-white'
			case DANGER_TYPE:
				return 'border-gray-700 bg-gray-700 hover:bg-indigo-800 text-white'
			case WHITE_TYPE:
				return 'm-0 border-gray-400 bg-white hover:bg-white-800 text-gray'
			default:
				return 'bg-blue-500 border-blue-500 hover:bg-blue-600 text-white'
		}
	}

	const buildOutlineButton = (type) => {
		switch (type) {
			case PRIMARY_TYPE:
				return 'border-indigo-500 hover:bg-indigo-600 hover:text-white'
			case SUCCESS_TYPE:
				return 'border-green-500 hover:bg-green-600 hover:text-white'
			case SECONDARY_TYPE:
				return 'border-red-500 hover:bg-red-600 hover:text-white'
			case WARNING_TYPE:
				return 'border-yellow-500 hover:bg-yellow-600 hover:text-white'
			case DANGER_TYPE:
				return 'border-gray-700 hover:bg-indigo-800 hover:text-white'
			case WHITE_TYPE:
				return 'm-0 bg-white hover:bg-white-800 text-gray'
			default:
				return 'bg-blue-500 border-blue-500 hover:bg-blue-600 hover:text-white'
		}
	}

	const buildClasses = () => {
		const { classes, outline, type } = props
		const className = classNames(
			'border rounded-md px-4 py-2 m-2 transition duration-500 ease select-none focus:outline-none focus:shadow-outline',
			classes && classes,
			outline ? buildOutlineButton(type) : buildBackgroundButton(type)
		)
		return className
	}

	return (
		<button
			type={props.htmlType}
			className={buildClasses()}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	)
}

Button.propTypes = propTypes

Button.defaultProps = defaultProps

export default Button
