export const FormLoginService = {
	validate: (values) => {
		const errors = {}

		if (!values.email) {
			errors.email = 'Email is required'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address'
		}

		if (!values.password) {
			errors.password = 'Email is required'
		} else if (values.password.length < 3 || values.password.length > 20) {
			errors.password =
				'Password should be greater than 3 and less than or equals to 20'
		}

		return errors
	}
}
