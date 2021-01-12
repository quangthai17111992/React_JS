import React from 'react'

import Logo from 'src/assets/img/logo.svg'

const styles = {
	width: '400px'
}

const AuthLayout = (props) => {
	return (
		<React.Fragment>
			<div className='w-full col-span-12 xl:col-span-12 p-5 md:p-20 flex items-center justify-center'>
				<div className='intro-y auth' style={styles}>
					<img
						className='intro-y mx-auto w-16'
						alt='Topson Messenger Tailwind HTML Admin Template'
						src={Logo}
					/>

					{props.children}
				</div>
			</div>
		</React.Fragment>
	)
}

export default AuthLayout
