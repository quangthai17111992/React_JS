import React, { useEffect, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { ConnectedService } from 'src/core/shared/services/connected.service'

import UserOnlineItemComponent from './user-online-item/user-online-item.component'

const UserOnlineComponent = (props) => {
	const [users, setUsers] = useState([])
	const [currentUser] = useState(props.currentUser)
	const [connectedRef] = useState(ConnectedService.connectedRef)
	const [presenceRef] = useState(ConnectedService.presenceRef)

	useEffect(() => {
		setUsers(props.users)

		if (props.currentUser) {
			addListeners()
		}

		return () => {
			// componentWillUnMount
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
		}
	}

	const isUserOnline = (user) => user.status === 'online'

	const renderUserItem = () => {
		return users.map((user) => (
			<UserOnlineItemComponent
				currentUser={currentUser}
				image={user.avatar}
				name={user.name}
				id={user.id}
				key={user.id}
				active={isUserOnline(user)}
			/>
		))
	}

	return (
		<div className='intro-y h-24 flex-none overflow-x-auto overflow-y-hidden scrollbar-hidden'>
			<PerfectScrollbar>
				<div className='flex mt-5'>{renderUserItem()}</div>
			</PerfectScrollbar>
		</div>
	)
}

export default UserOnlineComponent
