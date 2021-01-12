/* eslint-disable no-duplicate-case */
import React from 'react'
import PropTypes from 'prop-types'
import ChatIcon from './Chat'
import GroupsIcon from './Groups'
import ContactsIcon from './Contacts'
import ProfileIcon from './Profile'
import NotificationIcon from './Notification'
import LoginIcon from './Login'
import RegisterIcon from './Register'
import SettingsIcon from './Settings'
import Search from './Search'
import Camera from './Camera'
import Micro from './Micro'
import Addition from './Addition'
import SendChat from './SendChat'
import IconEmoji from './Emoji'
import Country from './Country'
import Phone from './Phone'
import Email from './Email'
import IconProfileSetting from './IconProfileSetting'

const propTypes = {
	icon: PropTypes.string,
	className: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
	x: PropTypes.number,
	y: PropTypes.number
}

const defaultProps = {
	icon: '',
	className: '',
	width: 24,
	height: 24,
	x: 0,
	y: 0
}

const IconSvg = (props) => {
	const buildSvgIcon = () => {
		const { icon } = props
		switch (icon) {
			case 'chat':
				return <ChatIcon />
			case 'groups':
				return <GroupsIcon />
			case 'contacts':
				return <ContactsIcon />
			case 'profile':
				return <ProfileIcon />
			case 'login':
				return <LoginIcon />
			case 'register':
				return <RegisterIcon />
			case 'settings':
				return <SettingsIcon />
			case 'notification':
				return <NotificationIcon />
			case 'search':
				return <Search />
			case 'camera':
				return <Camera />
			case 'micro':
				return <Micro />
			case 'addition':
				return <Addition />
			case 'emoji':
				return <IconEmoji />
			case 'send':
				return <SendChat />
			case 'iconprofile':
				return <IconProfileSetting />
			case 'country':
				return <Country />
			case 'phone':
				return <Phone />
			case 'email':
				return <Email />
			default:
				return null
		}
	}

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.width}
			height={props.height}
			viewBox={`${props.x} ${props.y} ${props.width} ${props.height}`}
			fill='none'
			stroke='currentColor'
			strokeWidth='1'
			strokeLinecap='round'
			strokeLinejoin='round'
			className={`${props.className}`}
		>
			{buildSvgIcon()}
		</svg>
	)
}

IconSvg.propTypes = propTypes
IconSvg.defaultProps = defaultProps

export default IconSvg
