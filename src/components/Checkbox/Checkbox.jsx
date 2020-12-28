import React from 'react'
import PropTypes from 'prop-types'
// import styles from './Checkbox.module.css'

const propTypes = {
	label: PropTypes.string,
	children: PropTypes.any,
	name: PropTypes.string,
	value: PropTypes.string,
	className: PropTypes.string,
	inputClassName: PropTypes.string,
	id: PropTypes.any,
	labelClassName: PropTypes.string
}

const defaultProps = {
	lable: null,
	children: null,
	value: null,
	name: '',
	className: '',
	id: '',
	labelClassName: ''
}

const Checkbox = (props) => {
	const renderLabel = () => {
		return props.label ? (
			<label htmlFor={props.name} className={props.labelClassName}>
				{props.label}
			</label>
		) : null
	}

	return (
		<React.Fragment>
			<input
				type='checkbox'
				name={props.name}
				value={props.value}
				className={props.className}
				id={props.id}
			/>
			{renderLabel()}
			{props.children ? props.children : null}
		</React.Fragment>
	)
}

Checkbox.propTypes = propTypes
Checkbox.defaultProps = defaultProps

export default Checkbox
