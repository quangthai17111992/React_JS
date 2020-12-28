import React from 'react'

import Logo from '../../assets/img/logo.svg'
import Login from '../../components/Pages/Login/Login'

const LoginPage = () => {
	return (
		<React.Fragment>
			<div className='w-full col-span-12 xl:col-span-12 p-5 md:p-20 flex items-center justify-center'>
				<div className='intro-y auth w-4/12'>
					<img
						className='intro-y mx-auto w-16'
						alt='Topson Messenger Tailwind HTML Admin Template'
						src={Logo}
					/>
					<div className='intro-y auth__title text-2xl font-medium text-center mt-16'>
						Login to Your Account!
					</div>
					<Login />
				</div>
			</div>
		</React.Fragment>
	)
}

export default LoginPage
