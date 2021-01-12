import React from 'react'
import { useFormik } from 'formik'
import Button from 'src/core/components/Button/Button'
import Checkbox from 'src/core/components/Checkbox/Checkbox'

import Input from 'src/core/components/Input/Input'
import { AuthService } from 'src/core/shared/services/auth.service'
import { ChannelService } from 'src/core/shared/services/channel.service'
import { FormGroupChatService } from 'src/modules/homepage/service/form-group-chat.service'

const FormGroupComponent = () => {
	const formik = useFormik({
		initialValues: {
			photo: '',
			groupName: '',
			tagline: '',
			public: false,
			description: ''
		},
		validate: FormGroupChatService.validate,
		onSubmit: (values) => {
			// TODO: create group
			const currentUser = AuthService.currentUser()

			ChannelService.createChannel(values, currentUser)
		}
	})

	return (
		<div className='box p-4 mt-3 mb-6'>
			<form onSubmit={formik.handleSubmit}>
				<div>
					<label>Photo</label>
					<div className='image-upload border relative flex flex-col items-center justify-center rounded-md py-8 mt-3'>
						<div className='image-upload__icon w-12 h-12 rounded-full flex items-center justify-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								strokeWidth='1'
								strokeLinecap='round'
								strokeLinejoin='round'
								className='feather feather-image w-5 h-5'
							>
								<rect x='3' y='3' width='18' height='18' rx='2' ry='2'></rect>
								<circle cx='8.5' cy='8.5' r='1.5'></circle>
								<polyline points='21 15 16 10 5 21'></polyline>
							</svg>
						</div>
						<div className='image-upload__info mt-2'>
							Choose your group profile photo
						</div>
						<input
							type='file'
							className='w-full h-full top-0 left-0 absolute opacity-0'
						/>
					</div>
				</div>

				<div className='mt-3'>
					<label>Group Name</label>
					<Input
						type='groupName'
						name='groupName'
						value={formik.values.groupName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder='Group name'
						className={`intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4 ${
							formik.errors.groupName ? 'has-error' : ''
						}`}
					/>
					{formik.touched.groupName && formik.errors.groupName ? (
						<div className='text-red-600 mt-2'>{formik.errors.groupName}</div>
					) : null}
				</div>
				<div className='mt-3'>
					<label>Tagline</label>
					<Input
						type='tagline'
						name='tagline'
						value={formik.values.tagline}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						placeholder='Tagline'
						className={`intro-y auth__input input input--lg w-full border block p-3 rounded-lg mt-4`}
					/>
				</div>
				<div className='mt-3 flex'>
					<label>Public</label>
					<div className='ml-2'>
						<Checkbox
							className={`input border border-gray-100 mr-2`}
							value={formik.values.public}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							labelClassName='cursor-pointer select-none text-gray-400'
							id='remember-me'
							name='remember-me'
						></Checkbox>
					</div>
				</div>
				<div className='mt-3'>
					<label>Description</label>
					<textarea
						className='input w-full border mt-2 p-2'
						name='description'
						value={formik.values.description}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						rows='5'
					></textarea>
				</div>
				<Button
					value='Create'
					classes='w-full ml-0 mr-0'
					htmlType='submit'
					onClick={formik.handleSubmit}
				/>
			</form>
		</div>
	)
}

export default FormGroupComponent
