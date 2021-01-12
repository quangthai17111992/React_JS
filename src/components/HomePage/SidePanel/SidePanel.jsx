import React from 'react'
import ListUser from '../ListUser/ListUser'
import RecentChat from '../RecentChat/RecentChat'
import SearchInput from '../SeachInput/SeachInput'

const SidePanel = () => {
	return (
		<div
			className='side-content col-span-12 xl:col-span-3 -mt-16 xl:mt-0 pt-20 xl:-mr-6 px-6 xl:pt-6 flex-col overflow-hidden side-content--active'
			data-content='chats'
		>
			<div className='intro-y text-xl font-medium'>Chats</div>
			<SearchInput />
			<ListUser />
			<RecentChat />
		</div>
	)
}

export default SidePanel
