import React from 'react'
import PropTypes from 'prop-types'

import styles from './ListItem.module.css'

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.any
}
const defaultProps = {
	className: null,
	children: null
}

const ListItem = (props) => {
	return (
		<div
			className={`flex items-center pb-3 ${props.className} ${styles.ListItem}`}
		>
			{props.children}
		</div>
	)
}

ListItem.propTypes = propTypes
ListItem.defaultProps = defaultProps

export default ListItem
