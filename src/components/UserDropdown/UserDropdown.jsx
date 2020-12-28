/* eslint-disable react/prop-types */
import React from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import Avatar from '../Avatar/Avatar'
import { firebase } from '../../config/firebase'
import { logout } from '../../store/actions/auth/Action'
import { connect } from 'react-redux'

export class UserDropdown extends React.Component {
	constructor(props) {
		super(props)
		this.state = { visible: false }
		this.handleLogout = this.handleLogout.bind(this)
	}

	handleLogout(event) {
		event.preventDefault()

		firebase
			.auth()
			.signOut()
			.then(() => {
				// eslint-disable-next-line react/prop-types
				this.props.logout()
			})
	}

	dropdownToggle(event) {
		event.preventDefault()
		this.setState((state) => ({ visible: !state.visible }))
	}

	renderDropdownPanel() {
		const { visible } = this.state

		return visible ? (
			<div className='dropdown-content dropdown-box absolute w-56 top-12 right-0 z-20 show bg-white rounded-md'>
				<div className='dropdown-box__content box'>
					<div className='p-2'>
						<a
							href='/test'
							className='flex items-center block p-2 transition duration-300 ease-in-out rounded-md'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-user w-4 h-4 mr-2'
							>
								<path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'></path>
								<circle cx='12' cy='7' r='4'></circle>
							</svg>
							Profile
						</a>
						<a
							href='/test'
							className='flex items-center block p-2 transition duration-300 ease-in-out rounded-md'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-edit w-4 h-4 mr-2'
							>
								<path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
								<path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
							</svg>
							Add Account
						</a>
						<a
							href='/test'
							className='flex items-center block p-2 transition duration-300 ease-in-out rounded-md'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-lock w-4 h-4 mr-2'
							>
								<rect x='3' y='11' width='18' height='11' rx='2' ry='2'></rect>
								<path d='M7 11V7a5 5 0 0 1 10 0v4'></path>
							</svg>
							Reset Password
						</a>
						<a
							href='/test'
							className='flex items-center block p-2 transition duration-300 ease-in-out rounded-md'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-help-circle w-4 h-4 mr-2'
							>
								<circle cx='12' cy='12' r='10'></circle>
								<path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'></path>
								<line x1='12' y1='17' x2='12.01' y2='17'></line>
							</svg>
							Help
						</a>
					</div>
					<div className='dropdown-content__footer p-2 border-t'>
						<a
							onClick={this.handleLogout}
							href='/test'
							className='flex items-center block p-2 transition duration-300 ease-in-out rounded-md'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-toggle-right w-4 h-4 mr-2'
							>
								<rect x='1' y='5' width='22' height='14' rx='7' ry='7'></rect>
								<circle cx='16' cy='12' r='3'></circle>
							</svg>
							Logout
						</a>
					</div>
				</div>
			</div>
		) : null
	}

	render() {
		return (
			<div className='account-dropdown dropdown relative'>
				<a
					href='/index'
					className='h-full dropdown-toggle flex items-center pl-5'
					onClick={(event) => this.dropdownToggle(event)}
				>
					<Avatar
						image='https://topson.left4code.com/dist/images/profile-14.jpg'
						alt='test'
					/>
					<div className='hidden md:block ml-3'>
						<div className='w-24 truncate font-medium leading-tight'>
							{this.props.displayName}
						</div>
						<div className='account-dropdown__info uppercase text-gray-400 text-xs'>
							Frontend Engineer
						</div>
					</div>
				</a>
				{this.renderDropdownPanel()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		displayName: state.auth.displayName
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ logout }, dispatch)
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(UserDropdown)
)
