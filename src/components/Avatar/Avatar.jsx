/* eslint-disable react/prop-types */
import React from 'react'

const Avatar = (props) => {
	return (
		<div className='w-8 h-8 image-fit'>
			<img
				alt={props && props.alt ? props.alt : null}
				className='rounded-full shadow-md'
				src={props && props.image ? props.image : null}
			/>
		</div>
	)
}

export default Avatar
