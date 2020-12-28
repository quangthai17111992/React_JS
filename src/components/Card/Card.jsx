import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import CardTitle from './CardTitle/CardTitle'
import CardBody from './CardBody/CardBody'

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.any,
	backgroundColor: PropTypes.string,
	BackgroundTitle: PropTypes.string,
	rounded: PropTypes.bool
}

const defaultProps = {
	children: null,
	className: '',
	backgroundColor: 'bg-white',
	rounded: true
}
const Card = (props) => {
	const classess = classNames('p-4', props.className, props.backgroundColor, {
		'rounded-lg': props.rounded
	})
	return <div className={classess}>{props.children} </div>
}

Card.propTypes = propTypes
Card.defaultProps = defaultProps

Card.Title = CardTitle
Card.Body = CardBody

export default Card
