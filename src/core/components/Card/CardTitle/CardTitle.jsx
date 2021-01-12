import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.any
}

const defaultProps = {
	children: null,
	className: ''
}

const CardTitle = (props) => {
	return <div className={`${props.className}`}>{props.children}</div>
}

CardTitle.propTypes = propTypes
CardTitle.defaultProps = defaultProps

export default CardTitle
