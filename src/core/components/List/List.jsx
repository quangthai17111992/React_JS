import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem/ListItem'

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.any
}

const defaultProps = {
	className: '',
	children: null
}

const List = (props) => {
	return <div className={`${props.className}`}>{props.children}</div>
}

List.propTypes = propTypes
List.defaultProps = defaultProps

List.Item = ListItem

export default List
