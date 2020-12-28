/* eslint-disable react/jsx-no-undef */
import React from 'react'
import ChatBox from '../../components/Pages/HomePage/ChatBox/ChatBox'
import InforPanel from '../../components/Pages/HomePage/InforPanel/InforPanel'
import SidePanel from '../../components/Pages/HomePage/SidePanel/SidePanel'

function HomePage() {
	return (
		<React.Fragment>
			<SidePanel />
			<ChatBox />
			<InforPanel />
		</React.Fragment>
	)
}

export default HomePage
