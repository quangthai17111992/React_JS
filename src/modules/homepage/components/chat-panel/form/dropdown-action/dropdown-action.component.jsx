import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import mime from 'mime-types'
import { v4 as uuidv4 } from 'uuid'

import { firebase } from 'src/core/config/firebase'
import { MessageService } from 'src/core/shared/services/message.service'

import IconSvg from 'src/core/components/Icon/Icon'

const DropdownActionComponent = (props) => {
	const [files, setFiles] = useState(null)
	const [allowTypes] = useState(['image/jpg', 'image/png'])
	const [uploadTask, setUploadTask] = useState(null)
	// const [storageRef] = useState(firebase.storage().ref())

	useEffect(() => {
		// setStorageRef(firebase.storage().storage.ref())
		return () => {}
	}, [])

	const getPath = () => {
		if (props.isPrivateChannel) {
			return `chat/private-${props.currentChannel}`
		} else {
			return 'chat/public'
		}
	}

	const handleInputFileChange = (event) => {
		const currentFile = event.target.files[0]
		if (currentFile) {
			setFiles(currentFile)
			sendFiles(currentFile)
		}
	}

	const sendFiles = (currentFile) => {
		console.log(currentFile)
		if (currentFile !== null) {
			if (isAllowedTypes(currentFile.name)) {
				const metadata = { contentType: mime.lookup(currentFile.name) }
				uploadFile(currentFile, metadata)
			}
		}
	}

	const sendFileMessage = (fileUrl, pathToUpload) => {
		MessageService.sendMessage(
			props.currentChannel,
			createMessage(fileUrl),
			props.currentUser,
			props.isPrivateChannel
		)
	}

	const createMessage = (fileUrl = null) => {
		const { currentUser } = props

		const message = {
			timestamp: firebase.database.ServerValue.TIMESTAMP,
			user: {
				id: currentUser.uid,
				name: currentUser.displayName,
				avatar: currentUser.photoURL
			}
		}

		if (fileUrl !== null) {
			message['image'] = fileUrl
		}

		return message
	}

	const uploadFile = (file, metadata) => {
		const pathToUpload = props.currentChannel
		// const ref = props.getMessagesRef()

		const filePath = `${getPath()}/${uuidv4()}.jpg`

		setUploadTask(firebase.storage().ref().child(filePath).put(file, metadata))

		uploadTask.on(
			'state_changed',
			(snap) => {
				// const percentUploaded = Math.round(
				//   (snap.bytesTransferred / snap.totalBytes) * 100
				// )
				// this.props.isProgressBarVisible(percentUploaded)
				// this.setState({ percentUploaded })
			},
			(err) => {
				console.log(err)
				// this.setState({
				//   errors: this.state.errors.concat(err),
				//   uploadState: 'error',
				//   uploadTask: null
				// })
			},
			() => {
				uploadTask.snapshot.ref
					.getDownloadURL()
					.then((downloadUrl) => {
						sendFileMessage(downloadUrl, pathToUpload)
					})
					.catch((err) => {
						console.log(err)
						this.setState({
							errors: this.state.errors.concat(err),
							uploadState: 'error',
							uploadTask: null
						})
					})
			}
		)
	}

	const isAllowedTypes = (filename) => {
		// quy.png
		// mime.lookup('quy.png') => 'image/png'
		// includes: const arr = ['a', 'b', 'c']
		// arr.includes('d') => true/false => false
		return allowTypes.includes(mime.lookup(filename))
	}

	return (
		<div className='dropdown relative'>
			<div className='chat-input__action dropdown-toggle hover:text-blue-500 cursor-pointer'>
				<IconSvg icon='addition' />
				<input type='file' onChange={(event) => handleInputFileChange(event)} />
			</div>
			<div className='chat-input__dropdown dropdown-box absolute top-0 left-0 -ml-4 z-20 hidden'>
				<div className='dropdown-box__content p-2'>
					<a
						href='/test'
						className='chat-input__dropdown__item items-center block p-3 transition duration-300 rounded-md mb-2'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='feather feather-camera w-5 h-5'
						>
							<path d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'></path>
							<circle cx='12' cy='13' r='4'></circle>
						</svg>
					</a>
					<a
						href='/test'
						className='chat-input__dropdown__item items-center block p-3 transition duration-300 rounded-md mb-2'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='feather feather-mic w-5 h-5'
						>
							<path d='M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z'></path>
							<path d='M19 10v2a7 7 0 0 1-14 0v-2'></path>
							<line x1='12' y1='19' x2='12' y2='23'></line>
							<line x1='8' y1='23' x2='16' y2='23'></line>
						</svg>
					</a>
					<a
						href='/test'
						className='chat-input__dropdown__item items-center block p-3 transition duration-300 rounded-md mb-2'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='feather feather-mail w-5 h-5'
						>
							<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
							<polyline points='22,6 12,13 2,6'></polyline>
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		isPrivateChannel: state.channel.isPrivateChannel,
		currentChannel: state.channel.currentChannel
	}
}

export default connect(mapStateToProps)(DropdownActionComponent)
