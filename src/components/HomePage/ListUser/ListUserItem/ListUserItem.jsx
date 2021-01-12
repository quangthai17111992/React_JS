/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { firebase } from 'src/core/config/firebase';

import { setPrivateChannel } from 'src/core/shared/store/actions/channel/Action';

import Avatar from 'src/core/components/Avatar/Avatar';

const ListUserItem = (props) => {
	const handleUserItemClick = (e) => {
		e.preventDefault();
		// const currentUser = AuthService.currentUser();
		// // ChannelService.createSingleChannel(props.id, currentUser.uid);
		// console.log(props.id, props.currentUser.uid);
		const privateChannelId = getChannelId(props.id);
		firebase
			.database()
			.ref('privateMessages')
			.child(privateChannelId)
			.push()
			.set({ message: 'new message' });
		props.setPrivateChannel(true);
	};

	const getChannelId = (userId) => {
		const currentUserId = props.currentUser.uid;
		return userId < currentUserId
			? `${userId}/${currentUserId}`
			: `${currentUserId}/${userId}`;
	};

	return (
		<div
			onClick={handleUserItemClick}
			className='online-user w-10 mr-3 cursor-pointer'
		>
			<div className='w-10 h-10 flex-none image-fit rounded-full'>
				<Avatar image={props && props.image ? props.image : null} />
				<div className='online-user__badge w-3 h-3 absolute right-0 bottom-0 rounded-full border-2'></div>
			</div>
			<div className='online-user__name text-xs truncate text-center mt-2'>
				{props && props.name ? props.name : null}
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setPrivateChannel }, dispatch);
};

export default connect(null, mapDispatchToProps)(ListUserItem);
