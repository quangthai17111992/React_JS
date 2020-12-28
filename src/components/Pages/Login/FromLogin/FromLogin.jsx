import React from 'react'
import { useFormik } from 'formik'
import { bindActionCreators } from 'redux'

import { AuthService } from '../../../../services/auth.service'
import { FormLoginService } from './FormLoginService'

import { login } from '../../../../store/actions/auth/Action'

import Button from '../../../Button/Button'
import styles from '../../../Checkbox/Checkbox.module.css'
import Checkbox from '../../../Checkbox/Checkbox'
import Input from '../../../Input/Input'
import { connect } from 'react-redux'

const FromLogin = (props) => {
	const formik = useFormik({
		initialValues: {
			email: '',
			password: ''
		},
		validate: FormLoginService.validate,
		onSubmit: async (values) => {
			const { user } = await AuthService.signin(values.email, values.password)

			if (user) {
				// eslint-disable-next-line react/prop-types
				props.login(user)
			}
		}
	})

	return (
		<div className='intro-y box px-5 py-8 mt-8 bg-white rounded-lg'>
			<div className='intro-y'>
				<Input
					type='text'
					name='email'
					value={formik.values.email}
					onChange={formik.handleChange}
					placeholder='Email'
					className={`intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4 ${
						formik.errors.email ? 'has-error' : ''
					}`}
				/>
				{formik.errors.email ? <div>{formik.errors.email}</div> : null}
				<Input
					type='password'
					name='password'
					value={formik.values.password}
					onChange={formik.handleChange}
					placeholder='Password'
					className={`intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4 ${
						formik.errors.password ? 'has-error' : ''
					}`}
				/>
				{formik.errors.password ? <div>{formik.errors.password}</div> : null}
			</div>
			<div className='intro-y auth__info flex text-xs sm:text-sm mt-4'>
				<div className='flex items-center mr-auto'>
					<Checkbox
						className={`input border mr-2 ${styles.input}`}
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
					onClick={formik.handleSubmit}
					classes='button button--primary shadow-md w-full btn-login'
				/>
				<Button
					value='Sign up'
					classes='button shadow-md w-full btn-login'
					type='white'
				/>
			</div>
		</div>
	)
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ login }, dispatch)
}

export default connect(null, mapDispatchToProps)(FromLogin)
