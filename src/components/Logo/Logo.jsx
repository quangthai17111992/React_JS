import React from 'react'
import logo from '../../assets/img/logo.svg'

// Functional component
// Minh chua su dung bien state trong component
// Nen ho thuong su dung functional component
// Hien React cung cap Hook
// .. noi sau
const Logo = () => {
	return (
		<React.Fragment>
			<img
				alt='Topson Messenger Tailwind HTML Admin Template'
				className='h-8'
				src={logo}
			/>
			<div className='text-base font-light ml-4'>
				<span className='font-medium'>Topson</span> Messenger{' '}
			</div>
		</React.Fragment>
	)
}

export default Logo
