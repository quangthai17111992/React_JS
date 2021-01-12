import React from 'react'

import AuthLayout from 'src/layout/AuthLayout'

import FormLoginComponent from '../form/form.component'

const LoginPageComponent = () => {
	return (
		<AuthLayout>
			<div className='intro-y auth__title text-2xl font-medium text-center mt-16'>
				Login to Your Account!
			</div>
			<FormLoginComponent />
		</AuthLayout>
	)
}

export default LoginPageComponent
