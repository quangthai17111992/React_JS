import React, { useEffect, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux'
import { AuthService } from 'src/core/shared/services/auth.service'

import { MessageService } from 'src/core/shared/services/message.service'

import MessageComponent from './message/message.component'

const ChatContent = (props) => {
	const chatContainerRef = React.createRef()

	const [messages, setMessages] = useState([])
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		const user = AuthService.currentUser()
		if (user) {
			setCurrentUser(user.uid)
		}

		if (props.currentchannel) {
			const message = MessageService.listMessageBychannel(
				props.currentchannel,
				props.isPrivateChannel
			)
			message.on('value', (snap) => {
				const list = []
				snap.forEach((shot) => {
					list.push({
						id: shot.key,
						key: shot.key,
						...shot.val()
					})
				})

				setMessages(list)
			})
		}
	}, [props.currentchannel])

	const updateScrollbar = (container) => {
		if (container && container._container) {
			container._container.scrollTop = chatContainerRef.current.scrollHeight
		}
	}

	const renderMessage = () => {
		return messages.map((message, index) => {
			return (
				<React.Fragment key={message.key}>
					<MessageComponent
						avatar={message.user.avatar}
						message={message.content}
						isCurrentUser={message.user.id === currentUser}
					/>
					{messages.length - 1 !== index ? (
						<div className='clear-both'></div>
					) : null}
				</React.Fragment>
			)
		})
	}

	return (
		<PerfectScrollbar ref={(container) => updateScrollbar(container)}>
			<div
				ref={chatContainerRef}
				className='chat-message-content overflow-hidden px-5 pt-5 flex-1 bg-white'
			>
				{renderMessage()}
			</div>
		</PerfectScrollbar>
	)
}

const mapStateToProps = (state) => {
	return {
		currentchannel: state.channel.currentChannel,
		isPrivateChannel: state.channel.isPrivateChannel
	}
}

export default connect(mapStateToProps)(ChatContent)
