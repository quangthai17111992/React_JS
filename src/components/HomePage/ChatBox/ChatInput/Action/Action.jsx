import React from 'react';

import IconSvg from 'src/core/components/Icon/Icon';

const Action = () => {
	return (
		<div className='dropdown relative'>
			<a
				href='/test'
				className='chat-input__action dropdown-toggle hover:text-blue-500 '
			>
				<IconSvg icon='addition' />
			</a>
			<div className='chat-input__dropdown dropdown-box absolute top-0 left-0 -ml-4 z-20 hidden'>
				<div className='dropdown-box__content p-2'>
					<a
						href='/test'
						className='chat-input__dropdown__item items-center block p-3 transition duration-300 rounded-md mb-2'
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
							className='feather feather-camera w-5 h-5'
						>
							<path d='M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z'></path>
							<circle cx='12' cy='13' r='4'></circle>
						</svg>
					</a>
					<a
						href='/test'
						className='chat-input__dropdown__item items-center block p-3 transition duration-300 rounded-md mb-2'
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
							className='feather feather-mic w-5 h-5'
						>
							<path d='M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z'></path>
							<path d='M19 10v2a7 7 0 0 1-14 0v-2'></path>
							<line x1='12' y1='19' x2='12' y2='23'></line>
							<line x1='8' y1='23' x2='16' y2='23'></line>
						</svg>
					</a>
					<a
						href='/test'
						className='chat-input__dropdown__item items-center block p-3 transition duration-300 rounded-md mb-2'
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
							className='feather feather-mail w-5 h-5'
						>
							<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
							<polyline points='22,6 12,13 2,6'></polyline>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Action;
