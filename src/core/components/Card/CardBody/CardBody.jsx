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

const CardBody = (props) => {
	return <div className={`${props.className}`}>{props.children}</div>
}

CardBody.propTypes = propTypes
CardBody.defaultProps = defaultProps

export default CardBody
