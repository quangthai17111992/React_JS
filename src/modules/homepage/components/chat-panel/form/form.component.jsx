import React, { useEffect, useState } from 'react'
import { Picker } from 'emoji-mart'
import { connect } from 'react-redux'

import 'emoji-mart/css/emoji-mart.css'

import useClickOutSide from 'src/core/shared/hook/useClickOutSide'
import { AuthService } from 'src/core/shared/services/auth.service'
import { MessageService } from 'src/core/shared/services/message.service'

import IconSvg from 'src/core/components/Icon/Icon'

import DropdownActionComponent from './dropdown-action/dropdown-action.component'

const MessageFormComponent = (props) => {
	const { ref, isComponentVisible, setIsComponentVisible } = useClickOutSide(
		false
	)

	const [currentUser, setCurrentUser] = useState(null)
	const [message, setMessage] = useState('')

	useEffect(() => {
		const user = AuthService.currentUser()
		setCurrentUser(user)
	}, [])

	const sendMessage = (e) => {
		if (e.keyCode === 13 && e.shiftKey === false) {
			e.preventDefault()

			if (message !== '') {
				MessageService.sendMessage(
					props.currentChannel,
					message,
					currentUser,
					props.isPrivateChannel
				)
				setMessage('')
			}
		}
	}

	return (
		<div className='intro-y chat-input border flex items-center px-5 py-4 bg-white rounded-b-lg'>
			<DropdownActionComponent currentUser={currentUser} />
			<textarea
				onKeyDown={(e) => sendMessage(e)}
				onChange={(e) => setMessage(e.target.value)}
				value={message}
				className='input w-full h-auto resize-none border-transparent px-5 py-3 focus:shadow-none truncate mr-3 sm:mr-0 outline-none'
				rows='1'
				placeholder='Type your message...'
			></textarea>

			<div className='dropdown relative mr-3 sm:mr-5'>
				<button
					ref={ref}
					onClick={() => setIsComponentVisible(!isComponentVisible)}
					className='chat-input__action dropdown-toggle w-4 h-4 sm:w-5 sm:h-5 block'
				>
					<IconSvg icon='emoji' />
				</button>

				<div
					className={`dropdown-panel absolute right-0 bottom-10 ${
						isComponentVisible ? 'block' : 'hidden'
					}`}
				>
					<Picker title='Pick your emoji…' emoji='' />
				</div>
			</div>
			<a
				href='/test'
				className='chat-input__send w-8 h-8 sm:w-10 sm:h-10 rounded-full flex-none flex items-center justify-center'
			>
				<IconSvg icon='send' />
			</a>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		currentChannel: state.channel.currentChannel,
		isPrivateChannel: state.channel.isPrivateChannel
	}
}

export default connect(mapStateToProps)(MessageFormComponent)
