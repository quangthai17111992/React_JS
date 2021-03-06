/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import IconSvg from 'src/core/components/Icon/Icon'

import './MenuItem.css'

const propTypes = {
	icon: PropTypes.any,
	lable: PropTypes.string,
	url: PropTypes.string
}

const MenuItem = (props) => {
	const getUrl = () => {
		return props && props.url ? props.url : null
	}

	const getIcon = () => {
		return props && props.icon ? props.icon : null
	}

	const getLabel = () => {
		return props && props.label ? props.label : null
	}

	const renderMenuItemContent = () => {
		return (
			<React.Fragment>
				<IconSvg icon={getIcon()} className='mx-auto text-gray-400' />
				<div className='icon-left-tool-tip tool-tip absolute left-20 bg-black text-white px-5 py-2 rounded-lg bg-opacity-80'>
					{getLabel()}
				</div>
			</React.Fragment>
		)
	}

	const renderLink = () => {
		if (props.isLink) {
			return (
				<Link
					to={getUrl()}
					className='notification-dropdown__toggler dropdown-toggle flex items-center py-5 relative -mr-3 md:mr-0 md:border-l md:border-r'
				>
					{renderMenuItemContent()}
				</Link>
			)
		}

		return (
			<div className='cursor-pointer notification-dropdown__toggler dropdown-toggle flex items-center py-5 relative -mr-3 md:mr-0 md:border-l md:border-r'>
				{renderMenuItemContent()}
			</div>
		)
	}

	return renderLink()
}

MenuItem.prototype = propTypes

export default MenuItem
