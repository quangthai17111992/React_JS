import React, { useEffect, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import { AuthService } from '../../../../services/auth.service'

import ListUserItem from './ListUserItem/ListUserItem'

const ListUser = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		async function fetchUser() {
			let list = []
			const userSnapshot = await AuthService.listUsers()
			userSnapshot.forEach((user) => {
				const currentUser = AuthService.currentUser()

				if (user.key !== currentUser.uid) {
					list.push({ id: user.key, ...user.val() })
				}
			})

			setUsers(list)
		}
		fetchUser()
	}, [])

	const renderUserItem = () => {
		return users.map((item) => (
			<ListUserItem
				image={item.avatar}
				name={item.name}
				id={item.id}
				key={item.id}
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

export default ListUser
