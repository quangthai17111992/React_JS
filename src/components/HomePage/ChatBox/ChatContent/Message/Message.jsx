import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../../../../core/components/Avatar/Avatar';

const propTypes = {
	isCurrentUser: PropTypes.bool,
	image: PropTypes.string,
	message: PropTypes.string,
	timeAgo: PropTypes.string,
};
const defaultProps = {
	isCurrentUser: false,
	image: null,
	message: null,
	timeAgo: null,
};

const Message = (props) => {
	return (
		<div
			className={`-intro-x chat-text-box flex order-2 items-end mb-4 ${
				props.isCurrentUser ? 'float-right' : 'float-left'
			}`}
		>
			<div
				className={`${props.isCurrentUser ? 'order-2 ml-3' : 'order-1 mr-3'}`}
			>
				<Avatar />
			</div>
			<div className={`w-full ${props.isCurrentUser ? 'order-1' : 'order-2'}`}>
				<div>
					<div className='chat-text-box__content  flex items-center float-left'>
						<div
							className={`rounded-lg chat-text-box__content__text px-4 py-3 mt-3 ${
								props.isCurrentUser ? 'bg-blue-400 text-white' : 'border'
							}`}
						>
							{props.message}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Message.propTypes = propTypes;
Message.defaultProps = defaultProps;

export default Message;
