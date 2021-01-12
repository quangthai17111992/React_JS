import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

import { AuthService } from 'src/core/shared/services/auth.service'

import SearchInputComponent from 'src/components/search-input/search-input.component'

import ContactComponent from './contact/contact.component'
import GroupChatComponent from './group-chat/group-chat.component'

const SidePanelComponent = (props) => {
	const [users, setUsers] = useState([])
	const [userRef] = useState(AuthService.userRef)
	const [currentUser] = useState(AuthService.currentUser())

	useEffect(() => {
		fetchUser()

		return () => {
			userRef.off()
		}
	}, [])

	const fetchUser = () => {
		userRef.on('value', (snapshots) => {
			const listUsers = []

			snapshots.forEach((snapshot) => {
				if (snapshot.key !== currentUser.uid) {
					listUsers.push({
						...snapshot.val(),
						id: snapshot.key,
						status: 'offline'
					})

					setUsers(listUsers)
				}
			})
		})
	}

	const renderSidePanel = () => {
		return props.location.hash === '#groups' ? (
			<GroupChatComponent />
		) : (
			<React.Fragment>
				<div className='intro-y text-xl font-medium'>Chats</div>
				<SearchInputComponent />
				<ContactComponent users={users} currentUser={currentUser} />
			</React.Fragment>
		)
	}

	return (
		<div
			className='side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 flex-col overflow-hidden side-content--active'
			data-content='chats'
		>
			{renderSidePanel()}
		</div>
	)
}

export default withRouter(SidePanelComponent)
