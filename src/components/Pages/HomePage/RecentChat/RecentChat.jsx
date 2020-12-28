import React, { useState, useEffect } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './RecentChat.module.css'

import { setChannelCurrent } from '../../../../store/actions/channel/Action'

import ChatListItem from '../../../ChatListItem/ChatListItem'
import { ChannelService } from '../../../../services/channel.service'
// import { AuthService } from '../../../../services/auth.service'

const RecentChat = (props) => {
	const [channels, setChannels] = useState([])

	useEffect(() => {
		async function fetchChannel() {
			// firebase => use channel database from firebase
			const channelRef = await ChannelService.listChannels()

			// retrieve data => subscribe value many time when data change and get value from firebase real database
			channelRef.on('value', (snap) => {
				const list = []

				snap.forEach((shot) => {
					// use val() method to get data each item (snapshot)
					list.push({ ...shot.val(), id: shot.key })
				})

				setChannels(list)
			})

			setFirstChannelToActive()
		}

		fetchChannel()
	}, [])

	const setFirstChannelToActive = () => {
		if (channels.length) {
			props.setChannelCurrent(channels[0].id)
		}
	}

	const handleItemClick = (event, item) => {
		event.preventDefault()
		const { id } = item
		props.setChannelCurrent(id)
	}

	const renderChatListItem = () => {
		return channels.map((item, index) => {
			return (
				<ChatListItem
					onClick={(event) => handleItemClick(event, item)}
					title={item.title}
					image={item.avatar}
					active={props.currentChannel === item.id}
					key={item.id}
				/>
			)
		})
	}
	return (
		<React.Fragment>
			<div className='intro-y text-base font-medium leading-tight mt-4 mt-2'>
				Recent Chats
			</div>
			<div
				className={`intro-y overflow-y-auto scrollbar-hidden pt-2 mt-3 -mx-5 px-5 h-full box-border ${styles.recentChatBox}`}
			>
				<PerfectScrollbar>{renderChatListItem()}</PerfectScrollbar>
			</div>
		</React.Fragment>
	)
}

const mapStateToProps = (state) => {
	return {
		currentChannel: state.channel.currentChannel
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ setChannelCurrent }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RecentChat)
