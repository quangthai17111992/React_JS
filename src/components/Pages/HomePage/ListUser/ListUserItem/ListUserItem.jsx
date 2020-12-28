/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { AuthService } from '../../../../../services/auth.service'

import { ChannelService } from '../../../../../services/channel.service'

import Avatar from '../../../../Avatar/Avatar'

const ListUserItem = (props) => {
	//createSingleChannel

	useEffect(() => {
		// async function createChannel() {
		// }
	}, [])

	const createChannel = (e) => {
		e.preventDefault()
		const currentUser = AuthService.currentUser()
		ChannelService.createSingleChannel(props.id, currentUser.uid)
	}

	return (
		<a onClick={createChannel} className='online-user w-10 mr-3 cursor-pointer'>
			<div className='w-10 h-10 flex-none image-fit rounded-full'>
				<Avatar image={props && props.image ? props.image : null} />
				<div className='online-user__badge w-3 h-3 absolute right-0 bottom-0 rounded-full border-2'></div>
			</div>
			<div className='online-user__name text-xs truncate text-center mt-2'>
				{props && props.name ? props.name : null}
			</div>
		</a>
	)
}

export default ListUserItem
