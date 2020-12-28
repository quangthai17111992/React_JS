import React from 'react'

const SecureCheck = () => {
	return (
		<React.Fragment>
			<div className='intro-y w-full grid grid-cols-12 gap-4 h-1 mt-3'>
				<div className='bg-green-400 auth__password-strength auth__password-strength--red col-span-3 h-full rounded'></div>
				<div className='bg-green-400 auth__password-strength auth__password-strength--red col-span-3 h-full rounded'></div>
				<div className='bg-green-400 auth__password-strength auth__password-strength--red col-span-3 h-full rounded'></div>
				<div className='auth__password-strength col-span-3 h-full rounded'></div>
			</div>
			<a
				href='./test'
				className='intro-y auth__info block mt-2 text-xs sm:text-sm -mb-1 text-gray-400'
			>
				What is a secure password?
			</a>
		</React.Fragment>
	)
}

export default SecureCheck
