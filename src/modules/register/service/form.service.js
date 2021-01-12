import * as Yup from 'yup'

export const FormRegisterService = {
	validationSchema: Yup.object().shape({
		firstName: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		lastName: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		jobTitle: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		phone: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		address: Yup.string()
			.min(2, 'Too Short!')
			.max(50, 'Too Long!')
			.required('Required'),
		email: Yup.string().email('Invalid email').required('Required'),
		password: Yup.string()
			.min(3, 'Password should be greater than 3')
			.max(20)
			.required('Password is required'),
		confirm_password: Yup.string().oneOf(
			[Yup.ref('password'), null],
			'Passwords must match'
		)
	})
}
