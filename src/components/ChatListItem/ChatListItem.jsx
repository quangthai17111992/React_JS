import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '../../core/components/Avatar/Avatar'

const propTypes = {
	id: PropTypes.string,
	image: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	date: PropTypes.string,
	active: PropTypes.bool,
	children: PropTypes.any,
	onClick: PropTypes.func
}

const defaultProps = {
	active: false,
	image: null,
	description: null,
	date: null,
	children: null,
	id: null,
	onClick: null
}

const ChatListItem = (props) => {
	return (
		<div
			onClick={props.onClick}
			className={`chat-list cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4 rounded-lg ${
				props && props.active ? 'bg-blue-400 text-white' : 'bg-white'
			}`}
		>
			<div className='flex-none image-fit mr-1'>
				<Avatar active={props.userOnline} image={props.image} />
			</div>
			<div className='ml-2 overflow-hidden w-full'>
				<a href='/test' className='chat-list__name font-medium'>
					{props && props.title ? props.title : null}
				</a>
				<div className='flex items-center text-xs'>
					<div className='chat-list__text w-3/5 truncate'>
						{props && props.description ? props.description : null}
					</div>
					<div className='chat-list__time whitespace-no-wrap ml-2'>
						{props && props.date ? props.date : null}
					</div>
				</div>
			</div>
			{props && props.children ? props.children : null}
		</div>
	)
}

ChatListItem.propTypes = propTypes
ChatListItem.defaultProps = defaultProps

export default ChatListItem
