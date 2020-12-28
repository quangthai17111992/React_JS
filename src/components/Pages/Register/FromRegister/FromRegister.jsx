import React, { useState } from 'react'

import { AuthService } from '../../../../services/auth.service'

import Button from '../../../Button/Button'
import Checkbox from '../../../Checkbox/Checkbox'
import Input from '../../../Input/Input'
import styles from '../../../Checkbox/Checkbox.module.css'
import SecureCheck from '../../../SecureCheck/SecureCheck'

const FromRegister = () => {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConfir, setConfirPassword] = useState('')

	const [err, setErr] = useState([])

	const onSubmit = () => {
		AuthService.singup(email, password, firstName, lastName)
		// if (email && password && firstName && lastName) {
		// 	AuthService.singup(email, password, firstName, lastName)
		// }
	}

	return (
		<div className='intro-y box px-5 py-8 mt-8 bg-white rounded-lg'>
			<div className='intro-y'>
				<Input
					onChange={(e) => setFirstName(e.target.value)}
					value={firstName}
					type='text'
					placeholder='First Name'
					className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg'
				/>
				<Input
					type='text'
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					placeholder='Last Name'
					className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
				/>
				<Input
					type='text'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder='Email'
					className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
				/>
				<Input
					type='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					placeholder='Password'
					className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
				/>
				<SecureCheck />
				<Input
					value={passwordConfir}
					onChange={(e) => setConfirPassword(e.target.value)}
					type='password'
					placeholder='Password Confirmation'
					className='intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4'
				/>
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
					value='Register'
					onClick={() => onSubmit()}
					classes='button button--primary shadow-md w-full btn-register'
				/>
				<Button
					value='Sign in'
					classes='button shadow-md w-full btn-register'
					type='white'
				/>
			</div>
		</div>
	)
}

export default FromRegister
