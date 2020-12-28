import React from 'react'

import IconSvg from '../../../Icon/Icon'

const SeachInput = () => {
	return (
		<div className='intro-y search-input relative mt-5'>
			<input
				type='text'
				className='w-full input input--lg pr-8 outline-none py-2 pl-3 rounded-lg'
				placeholder='Search for messages or users...'
			/>
			<IconSvg
				icon='search'
				className='w-4 h-4 absolute inset-y-0 right-0 my-auto mr-3 text-gray-400'
			/>
		</div>
	)
}

export default SeachInput
