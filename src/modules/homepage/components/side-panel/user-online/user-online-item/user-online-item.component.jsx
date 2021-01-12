import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
	setPrivateChannel,
	setCurrentChannel
} from 'src/core/shared/store/actions/channel/Action'

import Avatar from 'src/core/components/Avatar/Avatar'

const UserOnlineItemComponent = (props) => {
	const handleUserItemClick = (e) => {
		e.preventDefault()
		const privateChannelId = getChannelId(props.id)

		props.setCurrentChannel(privateChannelId)
		props.setPrivateChannel(true)
	}

	const getChannelId = (userId) => {
		const currentUserId = props.currentUser.uid
		return userId < currentUserId
			? `${userId}/${currentUserId}`
			: `${currentUserId}/${userId}`
	}

	return (
		<div
			onClick={handleUserItemClick}
			className='online-user w-10 mr-3 cursor-pointer'
		>
			<div className='w-10 h-10 flex-none image-fit rounded-full'>
				<Avatar
					image={props && props.image ? props.image : null}
					active={props.active}
				/>
			</div>
			<div className='online-user__name text-xs truncate text-center mt-2'>
				{props && props.name ? props.name : null}
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setPrivateChannel, setCurrentChannel }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserOnlineItemComponent)
