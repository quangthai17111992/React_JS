import React, { useEffect, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { connect } from 'react-redux'
import { MessageService } from '../../../../../services/message.service'
import { AuthService } from '../../../../../services/auth.service'

import Message from './Message/Message'

const ChatContent = (props) => {
	const chatContainerRef = React.createRef()

	const [messages, setMessages] = useState([])
	const [currentUser, setCurrentUser] = useState(null)

	useEffect(() => {
		const user = AuthService.currentUser()
		if (user) {
			setCurrentUser(user.uid)
		}

		if (props.currentChannel) {
			const messageRef = MessageService.listMessages(props.currentChannel)

			messageRef.on('value', (snap) => {
				const listMessage = []

				snap.forEach((shot) => {
					listMessage.push({
						id: shot.key,
						...shot.val()
					})
				})

				console.log(listMessage)

				setMessages(listMessage)
			})
		}
	}, [props.currentChannel])

	const renderMessage = () => {
		return messages.map((message) => {
			return (
				<React.Fragment key={message.id}>
					<Message
						image={message.user.avatar}
						message={message.content}
						isCurrentUser={currentUser === message.user.id}
					/>
					<div className='clear-both'></div>
				</React.Fragment>
			)
		})
	}

	const updateScrollbar = (container) => {
		if (container && container._container) {
			container._container.scrollTop = chatContainerRef.current.scrollHeight
			// đoạn nay _container không hiểu được
		}
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
		currentChannel: state.channel.currentChannel
	}
}

export default connect(mapStateToProps)(ChatContent)
