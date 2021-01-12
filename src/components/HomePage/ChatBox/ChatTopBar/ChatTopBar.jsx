import React from 'react';
import Avatar from '../../../../core/components/Avatar/Avatar';
import IconSvg from '../../../../core/components/Icon/Icon';

const ChatTopBar = () => {
	return (
		<div className='intro-y chat-top-bar border flex items-center px-5 py-4 bg-white rounded-t-lg'>
			<div className='flex items-center mr-auto'>
				<Avatar
					className='w-10 h-10'
					active={true}
					position='top'
					image={'https://topson.left4code.com/dist/images/profile-7.jpg'}
				/>
				<div className='ml-2 overflow-hidden'>
					<a href='/test' className='text-base font-medium'>
						Robert De Niro
					</a>
					<div className='chat-top-bar__sender-status text-gray-400'>
						Online
					</div>
				</div>
			</div>
			<a className='chat-top-bar__action' href='/test'>
				<IconSvg icon='camera' className='text-gray-400' />
			</a>
			<a className='chat-top-bar__action ml-2 sm:ml-5' href='/test'>
				<IconSvg icon='micro' className='text-gray-400' />
			</a>
		</div>
	);
};

export default ChatTopBar;
