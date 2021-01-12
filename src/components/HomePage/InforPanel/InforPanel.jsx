import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import PersonalInfor from './PersonalInfor/PersonalInfor'
import Profile from './Profile/Profile'
import SharedFiles from './SharedFiles/SharedFiles'

const InforPanel = () => {
	return (
		<div className='info-content col-span-12 xl:col-span-3 flex flex-col overflow-hidden pl-6 xl:pl-0 pr-6'>
			<PerfectScrollbar>
				<div className='overflow-y-auto scrollbar-hidden py-6'>
					<Profile />
					<PersonalInfor />
					<SharedFiles />
				</div>
			</PerfectScrollbar>
		</div>
	)
}

export default InforPanel
