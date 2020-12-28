import React from 'react'

import Logo from '../../assets/img/logo.svg'
import Register from '../../components/Pages/Register/Register'

const RegisterPage = () => {
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
						Register New Account
					</div>
					<Register />

					<div className='intro-y auth__info mt-10 text-center xl:text-center text-gray-400'>
						By signin up, you agree to our <br />
						<a className='underline' href='./test'>
							Terms and Conditions
						</a>
						<a className='underline' href='./test'>
							Privacy Policy
						</a>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default RegisterPage
