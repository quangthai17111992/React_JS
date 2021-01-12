import React from 'react'

import PropTypes from 'prop-types'

const propTypes = {
	className: PropTypes.string
}

const defaultProps = {
	className: 'mx-auto'
}

const SendChat = (props) => {
	return (
		<React.Fragment>
			<line x1='22' y1='2' x2='11' y2='13'></line>
			<polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
		</React.Fragment>
	)
}

SendChat.propTypes = propTypes
SendChat.defaultProps = defaultProps

export default SendChat
