import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import UserInforComponent from './user-infor/user-infor.component'
import UserContactComponent from './user-contact/user-contact.component'
import SharedFilesComponent from './shared-files/shared-files.component'

const MetaPanelComponent = () => {
	return (
		<div className='info-content col-span-12 xl:col-span-3 flex flex-col overflow-hidden pl-6 xl:pl-0 pr-6'>
			<PerfectScrollbar>
				<div className='overflow-y-auto scrollbar-hidden py-6'>
					<UserInforComponent />
					<UserContactComponent />
					{/* <SharedFilesComponent /> */}
				</div>
			</PerfectScrollbar>
		</div>
	)
}

export default MetaPanelComponent
