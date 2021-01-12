import React from 'react'
import { useFormik } from 'formik'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { AuthService } from 'src/core/shared/services/auth.service'

import { login } from 'src/core/shared/store/actions/auth/Action'
import Button from 'src/core/components/Button/Button'
import styles from 'src/core/components/Checkbox/Checkbox.module.css'
import Checkbox from 'src/core/components/Checkbox/Checkbox'
import Input from 'src/core/components/Input/Input'

import { FormLoginService } from '../../service/form/form.service'

const FormLoginComponent = (props) => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validationSchema: FormLoginService.validationSchema,
		onSubmit: async (values) => {
			const { user } = await AuthService.signin(values.email, values.password)

			if (user) {
				props.login(user)
			}
		}
	})

	const onSignUpClicked = () => {
		props.history.push('/register')
	}

	return (
		<div className='intro-y box px-5 py-8 mt-8 bg-white rounded-lg'>
			<form onSubmit={formik.handleSubmit}>
				<div className='intro-y'>
					<Input
						type='text'
						name='email'
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder='Email'
						className={`intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-2 ${
							formik.errors.email ? 'has-error' : ''
						}`}
					/>
					{formik.touched.email && formik.errors.email ? (
						<div className='text-red-600 mt-2'>{formik.errors.email}</div>
					) : null}
					<Input
						type='password'
						name='password'
						value={formik.values.password}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder='Password'
						className={`intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4 ${
							formik.errors.password ? 'has-error' : ''
						}`}
					/>
					{formik.touched.password && formik.errors.password ? (
						<div className='text-red-600 mt-2'>{formik.errors.password}</div>
					) : null}
				</div>
				<div className='intro-y auth__info flex text-xs sm:text-sm mt-4'>
					<div className='flex items-center mr-auto'>
						<Checkbox
							className={`input border border-gray-100 mr-2 ${styles.input}`}
							label='Remember me'
							value='true'
							labelClassName='cursor-pointer select-none text-gray-400'
							id='remember-me'
							name='remember-me'
						></Checkbox>
					</div>
					<a href='test' className='text-gray-400'>
						Forgot Password?
					</a>
				</div>
				<div className='intro-y mt-5 xl:mt-8 text-center xl:text-left'>
					<Button
						value='Login'
						htmlType='submit'
						onClick={formik.handleSubmit}
						classes='button button--primary w-full btn-login'
					/>
					<Button
						onClick={onSignUpClicked}
						value='Sign up'
						classes='button w-full btn-login'
						type='white'
					/>
				</div>
			</form>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ login }, dispatch)
}

export default withRouter(connect(null, mapDispatchToProps)(FormLoginComponent))
