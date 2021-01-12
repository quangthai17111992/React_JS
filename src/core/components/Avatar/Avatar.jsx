import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const propTypes = {
	image: PropTypes.string,
	active: PropTypes.bool,
	position: PropTypes.string,
	size: PropTypes.string,
	className: PropTypes.string,
	alt: PropTypes.string
}

const defaultProps = {
	image: 'https://ui-avatars.com/api/?size=128&name=user',
	alt: null,
	active: false,
	position: 'bottom',
	size: 'small',
	className: ''
}

const Avatar = (props) => {
	const AVATAR_CLASSES_DEFAULT =
		'chat-list__badge w-3 h-3 absolute right-0 rounded-full border-2 bg-green-400'

	const IMAGE_CLASSES_DEFAULT =
		'rounded-full shadow-md absolute w-full h-full object-cover'

	const buildImageSize = () => {
		const classes = classNames(
			AVATAR_CLASSES_DEFAULT,
			{ 'w-8 h-8': props.size === 'small' },
			{ 'w-10 h-10': props.size === 'medium' },
			{ 'w-20 h-20': props.size === 'large' }
		)
		return classes
	}

	const renderActive = () => {
		const classes = classNames(
			AVATAR_CLASSES_DEFAULT,
			{ 'top-2': props.position === 'top2' },
			{ 'top-0': props.position === 'top' },
			{ 'bottom-0': props.position === 'bottom' }
		)
		return props.active ? <div className={classes}></div> : null
	}
	return (
		<div className={`relative ${props.className} ${buildImageSize()}`}>
			<img
				alt={props.alt}
				className={IMAGE_CLASSES_DEFAULT}
				src={props.image}
			/>
			{renderActive()}
		</div>
	)
}

Avatar.propTypes = propTypes
Avatar.defaultProps = defaultProps

export default Avatar
