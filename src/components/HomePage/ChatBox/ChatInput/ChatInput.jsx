import React, { useEffect, useState } from 'react'
import { Picker } from 'emoji-mart'
import { connect } from 'react-redux'

import 'src/modules/homepage/components/chat-panel/form/node_modules/emoji-mart/css/emoji-mart.css'

import { AuthService } from 'src/core/shared/services/auth.service'
import { MessageService } from '../../../../core/shared/services/message.service'

import useClickOutSide from '../../../../core/shared/hook/useClickOutSide'

import Action from './Action/Action'
import IconSvg from '../../../../core/components/Icon/Icon'

const ChatInput = (props) => {
	const { ref, isComponentVisible, setIsComponentVisible } = useClickOutSide(
		false
	)

	const [user, setUser] = useState(null)
	const [message, setMessage] = useState('')

	useEffect(() => {
		const currentUser = AuthService.currentUser()
		setUser(currentUser)
	}, [])

	const sendMessage = (e) => {
		if (e.keyCode === 13 && e.shiftKey === false) {
			e.preventDefault()

			if (message !== '') {
				MessageService.sendMessage(props.currentChannel, message, user)
				setMessage('')
				console.log(message)
			}
		}
	}

	return (
		<div className='intro-y chat-input border flex items-center px-5 py-4 bg-white rounded-b-lg'>
			<Action />
			<textarea
				onKeyDown={(e) => sendMessage.bind(this, e)}
				onChange={(e) => setMessage(e.target.value)}
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
				className='chat-input__send w-8 h-8 sm:w-10 sm:h-10 block rounded-full flex-none flex items-center justify-center'
			>
				<IconSvg icon='send' />
			</a>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		currentChannel: state.channel.currentChannel
	}
}

export default connect(mapStateToProps)(ChatInput)
