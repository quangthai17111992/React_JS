import React from 'react'
import MenuItem from './MenuItem/MenuItem'

import { NavLink } from './NavLink'

const SideMenu = () => {
	const buildMenuItem = () => {
		return NavLink
			? NavLink.map((item) => (
					<MenuItem
						icon={item.icon}
						label={item.label}
						url={item.url}
						key={item.label}
					/>
			  ))
			: null
	}

	return (
		<div className='side-menu hidden md:block top-0 left-0 fixed z-10 w-16 h-screen bg-white'>
			<div className='side-menu__content -intro-x border-r w-full h-full pt-16 flex flex-col justify-center'>
				{buildMenuItem()}
			</div>
		</div>
	)
}

export default SideMenu
