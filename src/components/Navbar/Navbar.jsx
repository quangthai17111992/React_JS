import React, { Component } from 'react'
import Button from '../../core/components/Button/Button'
import IconSvg from '../../core/components/Icon/Icon'
import Logo from '../Logo/Logo'
import UserDropdown from '../UserDropdown/UserDropdown'

export default class Navbar extends Component {
	render() {
		return (
			<div className='-intro-y top-bar__content border-b w-full h-full flex px-5 items-center bg-white z-20 relative'>
				<a
					className='hidden md:flex items-center h-full mr-auto'
					href='http://localhost/page/dashboard'
				>
					<Logo />
				</a>

				<div className='hidden md:flex items-center px-5'>
					<Button
						value='Invite Friends'
						classes='button button--primary shadow-md'
					/>
				</div>

				<IconSvg icon='notification' />
				<UserDropdown />
			</div>
		)
	}
}
