import React from 'react'

import AuthLayout from 'src/layout/AuthLayout'
import FormRegisterComponent from '../form/form.component'

const RegisterPageComponent = () => {
	return (
		<AuthLayout>
			<div className='intro-y auth__title text-2xl font-medium text-center mt-16'>
				Register New Account
			</div>
			<FormRegisterComponent />
		</AuthLayout>
	)
}

export default RegisterPageComponent
