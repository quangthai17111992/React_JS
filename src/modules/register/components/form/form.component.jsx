import React from 'react'
import { withRouter } from 'react-router-dom'
import { useFormik } from 'formik'

import { AuthService } from 'src/core/shared/services/auth.service'

import Button from 'src/core/components/Button/Button'
import Checkbox from 'src/core/components/Checkbox/Checkbox'
import Input from 'src/core/components/Input/Input'
import styles from 'src/core/components/Checkbox/Checkbox.module.css'

import SecureCheck from 'src/components/SecureCheck/SecureCheck'
import { FormRegisterService } from '../../service/form.service'

const FormRegisterComponent = (props) => {
	// const [firstName, setFirstName] = useState('')
	// const [lastName, setLastName] = useState('')
	// const [email, setEmail] = useState('')
	// const [password, setPassword] = useState('')
	// const [passwordConfir, setConfirPassword] = useState('')

	// const onSubmit = () => {
	// 	AuthService.singup(
	// 		email,
	// 		password,
	// 		firstName,
	// 		lastName,
	// 		jobTitle,
	// 		phone,
	// 		address
	// 	)
	// }

	const onSignInClicked = () => {
		props.history.push('/login')
	}
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			jobTitle: '',
			phone: '',
			address: '',
			email: '',
			password: '',
			confirm_password: ''
		},
		validationSchema: FormRegisterService.validationSchema,
		onSubmit: async (values) => {
			const { user } = await AuthService.singup(
				values.firstName,
				values.lastName,
				values.jobTitle,
				values.phone,
				values.address,
				values.email,
				values.password,
				values.confirm_password
			)

			if (user) {
				props.login(user)
			}
		}
	})

	return (
		<div className='intro-y box px-5 py-8 mt-8 bg-white rounded-lg'>
			<form onSubmit={formik.handleSubmit}>
				<div className='intro-y'>
					<Input
						name='firstName'
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						type='text'
						placeholder='First Name'
						className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg'
					/>
					{formik.touched.firstName && formik.errors.firstName && (
						<div>{formik.errors.firstName}</div>
					)}
					<Input
						type='text'
						name='lastName'
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder='Last Name'
						className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
					/>
					{formik.touched.lastName && formik.errors.lastName && (
						<div>{formik.errors.lastName}</div>
					)}
					<Input
						type='text'
						name='jobTitle'
						value={formik.values.jobTitle}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder='job title'
						className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
					/>
					{formik.touched.jobTitle && formik.errors.jobTitle && (
						<div>{formik.errors.jobTitle}</div>
					)}
					<Input
						type='text'
						name='phone'
						value={formik.values.phone}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder='phone'
						className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
					/>
					{formik.touched.phone && formik.errors.phone && (
						<div>{formik.errors.phone}</div>
					)}
					<Input
						type='text'
						name='address'
						value={formik.values.address}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder='address'
						className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
					/>
					{formik.touched.address && formik.errors.address && (
						<div>{formik.errors.address}</div>
					)}
					<Input
						type='text'
						name='email'
						onChange={formik.handleChange}
						value={formik.values.email}
						onBlur={formik.handleBlur}
						placeholder='Email'
						className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
					/>
					{formik.touched.email && formik.errors.email && (
						<div>{formik.errors.email}</div>
					)}
					<Input
						type='password'
						name='password'
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder='Password'
						className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
					/>
					{formik.touched.password && formik.errors.password && (
						<div>{formik.errors.password}</div>
					)}
					<SecureCheck />
					<Input
						name='confirm_password'
						value={formik.values.confirm_password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						type='password'
						placeholder='confirm_password'
						className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
					/>
					{formik.touched.confirm_password &&
						formik.errors.confirm_password && (
							<div>{formik.errors.confirm_password}</div>
						)}
				</div>
				<div className='intro-y flex items-center auth__info mt-4 text-xs sm:text-sm'>
					<Checkbox
						className={`input border mr-2 ${styles.input}`}
						labelClassName='cursor-pointer select-none text-gray-400'
						label='I agree to the Envato'
						htmlFor='remember-me'
					>
						<a href='/text' className='text-gray-400'>
							Privacy Policy
						</a>
					</Checkbox>
				</div>
				<div className='intro-y mt-5 xl:mt-8 text-center xl:text-left'>
					<Button
						htmlType='submit'
						value='Register'
						onClick={formik.handleSubmit}
						classes='button button--primary w-full btn-register'
					/>
					<Button
						onClick={onSignInClicked}
						value='Sign in'
						classes='button w-full btn-register'
						type='white'
					/>
				</div>
			</form>
		</div>
	)
}

export default withRouter(FormRegisterComponent)
