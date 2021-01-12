import React, { useState, useEffect } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setCurrentChannel } from 'src/core/shared/store/actions/channel/Action'
import { ChannelService } from 'src/core/shared/services/channel.service'
import { MessageService } from 'src/core/shared/services/message.service'

import ChatListItem from 'src/components/ChatListItem/ChatListItem'

import styles from './recent-chat.module.scss'

const RecentChatComponent = (props) => {
	const [recentMessages, setRecentMessages] = useState([])

	useEffect(() => {
		MessageService.privateMessagesRef.on('value', (snap) => {
			const list = []
			snap.forEach((shot) => {
				list.push({
					id: shot.key,
					key: shot.key,
					...shot.val()
				})
			})

			console.log(list)

			setRecentMessages(list)
		})
	}, [])

	const handleItemClick = (event, item) => {
		event.preventDefault()

		const { id } = item
		props.setChannelCurrent(id)
	}

	const renderChatListItem = () => {
		return recentMessages.map((message) => {
			return (
				<ChatListItem
					onClick={(event) => handleItemClick(event, message)}
					title={message.title}
					image={message.avatar}
					key={message.id}
				/>
			)
		})
	}
	return (
		<React.Fragment>
			<div className='intro-y text-base font-medium leading-tight mt-2'>
				Recent Chats
			</div>
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
	return bindActionCreators({ setChannelCurrent: setCurrentChannel }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentChatComponent)
