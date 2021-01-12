import React from 'react'

import ChatHeaderComponent from './chat-header/chat-header.component'
import MessagesComponent from './messages/messages.component'
import MessageFormComponent from './form/form.component'

const ChatPanelComponent = () => {
	return (
		<div className='chat-box col-span-12 xl:col-span-6 flex flex-col overflow-hidden xl:border-l xl:border-r p-6'>
			<ChatHeaderComponent />
			<MessagesComponent />
			<MessageFormComponent />
		</div>
	)
}

export default ChatPanelComponent
