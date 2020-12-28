import React from 'react'
import Avatar from '../../../../Avatar/Avatar'
import IconSvg from '../../../../Icon/Icon'

const Profile = () => {
	return (
		<div className='intro-y profile box relative p-4 bg-white rounded-lg'>
			<a
				href='/test'
				className='profile__action tooltip w-8 h-8 block flex items-center justify-center absolute top-0 right-0 mr-1 mt-1 tooltipstered'
			>
				<IconSvg icon='iconprofile' className='w-4 h-4 text-gray-400' />
			</a>
			<Avatar className='mx-auto' size='large' active={true} position='top2' />
			<div className='text-base font-medium text-center mt-3'>
				Robert De Niro
			</div>
			<div className='profile__info text-center text-xs uppercase text-gray-400'>
				Software Engineer
			</div>
		</div>
	)
}

export default Profile
