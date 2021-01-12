import React, { useState, useEffect } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ChatListItem from 'src/components/ChatListItem/ChatListItem'
import Tabs from 'src/core/components/tabs/tabs.component'

import {
	setCurrentChannel,
	setPrivateChannel
} from 'src/core/shared/store/actions/channel/Action'
import { ChannelService } from 'src/core/shared/services/channel.service'

import styles from './group-chat.module.scss'
import FormGroupComponent from './form/form.component'

const GroupChatComponent = (props) => {
	const [channels, setChannels] = useState([])
	const [tab, setTab] = useState('#group-members')

	useEffect(() => {
		async function fetchChannel() {
			const channelRef = await ChannelService.listChannels()

			channelRef.on('value', (snap) => {
				const list = []

				snap.forEach((shot) => {
					list.push({ ...shot.val(), id: shot.key })
				})

				setChannels(list)
				setFirstChannelToActive()
			})
		}

		fetchChannel()
	}, [])

	const setFirstChannelToActive = () => {
		if (channels.length) {
			props.setCurrentChannel(channels[0].id)
		}
	}

	const handleItemClick = (event, item) => {
		event.preventDefault()
		const { id } = item

		props.setCurrentChannel(id)
		props.setPrivateChannel(false)
	}

	const handleTabClick = (event) => {}

	const renderChatListItem = () => {
		return channels.map((item) => {
			return (
				<ChatListItem
					onClick={(event) => handleItemClick(event, item)}
					title={item.name}
					image={item.photo}
					active={props.currentChannel === item.id}
					key={item.id}
				/>
			)
		})
	}
	return (
		<React.Fragment>
			<div className='intro-y text-xl font-medium'>Groups</div>
			<div className='mt-3 overflow-hidden h-full'>
				<Tabs className={styles.groupChatTabs}>
					<div label='All Groups'>
						<div className='px-3'>
							<PerfectScrollbar>{renderChatListItem()}</PerfectScrollbar>
						</div>
					</div>
					<div label='Create Groups'>
						<PerfectScrollbar>
							<FormGroupComponent />
						</PerfectScrollbar>
					</div>
				</Tabs>
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
	return bindActionCreators({ setCurrentChannel, setPrivateChannel }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupChatComponent)
