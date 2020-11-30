import React, { Component } from 'react'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import UserDropdown from '../UserDropdown/UserDropdown'

export default class Navbar extends Component {
	render() {
		return (
			<div className='-intro-y top-bar__content border-b w-full h-full flex px-5'>
				<a
					className='hidden md:flex items-center h-full mr-auto'
					href='http://localhost/page/dashboard'
				>
					<Logo />
				</a>

				<div className='hidden md:flex items-center px-5'>
					<Button value='Invite Friends' />
				</div>
				<UserDropdown />
			</div>
		)
	}
}
