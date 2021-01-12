import React, { useState, useEffect } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
	setCurrentChannel,
	setPrivateChannel
} from 'src/core/shared/store/actions/channel/Action'
import { ConnectedService } from 'src/core/shared/services/connected.service'

import ChatListItem from 'src/components/ChatListItem/ChatListItem'

import styles from './contact.module.scss'

const ContactComponent = (props) => {
	const [users, setUsers] = useState([])

	const [connectedRef] = useState(ConnectedService.connectedRef)
	const [presenceRef] = useState(ConnectedService.presenceRef)

	useEffect(() => {
		setUsers(props.users)

		if (props.currentUser) {
			addListeners()
		}
	}, [props.users, props.currentUser])

	const addListeners = () => {
		connectedRef.on('value', (snap) => {
			if (snap.val() === true) {
				const ref = presenceRef.child(props.currentUser.uid)
				ref.set(true)
				ref.onDisconnect().remove((err) => {
					if (err !== null) {
						console.log(err)
					}
				})
			}
		})

		presenceRef.on('child_added', (snap) => {
			if (props.currentUser.uid !== snap.key) {
				addStatusToUser(snap.key)
			}
		})

		presenceRef.on('child_removed', (snap) => {
			if (props.currentUser.uid !== snap.key) {
				addStatusToUser(snap.key, false)
			}
		})
	}

	const addStatusToUser = (userId, connected = true) => {
		if (props.users.length) {
			const updatedUsers = props.users.map((user) => {
				if (user.id === userId) {
					return {
						...user,
						status: `${connected ? 'online' : 'offline'}`
					}
				}

				return user
			})

			setUsers(updatedUsers)
			setFirstChannel(updatedUsers[0])
		}
	}

	const setFirstChannel = (user) => {
		const channelId = getChannelId(user.id)
		props.setCurrentChannel(channelId)
	}

	const handleItemClick = (e, user) => {
		e.preventDefault()
		const privateChannelId = getChannelId(user.id)

		props.setCurrentChannel(privateChannelId)
		props.setPrivateChannel(true)
	}

	const getChannelId = (userId) => {
		const currentUserId = props.currentUser.uid
		return userId < currentUserId
			? `${userId}/${currentUserId}`
			: `${currentUserId}/${userId}`
	}

	const isUserOnline = (user) => user.status === 'online'

	const renderChatListItem = () => {
		return users.map((user) => {
			return (
				<ChatListItem
					onClick={(event) => handleItemClick(event, user)}
					title={user.name}
					image={user.avatar}
					key={user.id}
					active={props.currentChannel === getChannelId(user.id)}
					userOnline={isUserOnline(user)}
					description='Frontend Developer'
				/>
			)
		})
	}
	return (
		<React.Fragment>
			<div
				className={`intro-y overflow-y-auto scrollbar-hidden pt-2 mt-3 -mx-5 px-5 h-full box-border ${styles.recentChatBox}`}
			>
				<PerfectScrollbar>{renderChatListItem()}</PerfectScrollbar>
			</div>
		</React.Fragment>
	)
}

const mapStateToProps = (state) => {
	return {
		currentChannel: state.channel.currentChannel
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setPrivateChannel, setCurrentChannel }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactComponent)
