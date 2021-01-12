import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Navbar from '../components/Navbar/Navbar'
import SideMenu from '../components/SideMenu/SideMenu'

import Groups from '../pages/Groups/Groups'
import Contacts from '../pages/Contacts/Contacts'

import HomePageComponent from '../modules/homepage/components/page/page.component'

const ChatLayout = (props) => {
	return (
		<React.Fragment>
			<Navbar />
			<SideMenu />
			{/* Define Page */}
			<div className='md:pl-16'>
				<div className='-mt-16 ml-auto xl:-ml-16 mr-auto xl:pl-16 pt-16 xl:h-screen w-auto sm:w-3/5 xl:w-auto grid grid-cols-12 gap-6'>
					<Switch>
						<Route exact path='/contacts'>
							<Contacts />
						</Route>
						<Route exact path='/groups'>
							<Groups />
						</Route>

						{/** Home Page */}
						<Route exact path='/'>
							<HomePageComponent />
						</Route>
					</Switch>
				</div>
			</div>
		</React.Fragment>
	)
}

export default ChatLayout
