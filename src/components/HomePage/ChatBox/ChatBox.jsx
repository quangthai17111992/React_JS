import React from 'react'

import ChatContent from './ChatContent/ChatContent'
import ChatInput from './ChatInput/ChatInput'
import ChatTopBar from './ChatTopBar/ChatTopBar'

const ChatBox = () => {
	return (
		<div className='chat-box col-span-12 xl:col-span-6 flex flex-col overflow-hidden xl:border-l xl:border-r p-6'>
			<ChatTopBar />
			<ChatContent />
			<ChatInput />
		</div>
	)
}

export default ChatBox
