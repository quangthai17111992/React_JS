import React from 'react'
import { Route, Switch } from 'react-router-dom'

import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'

const AuthLayout = () => {
	return (
		<React.Fragment>
			<Switch>
				<Route
					exact
					path='/login'
					component={(props) => <LoginPage {...props} />}
				/>
				<Route
					path='/register'
					exact
					component={(props) => <RegisterPage {...props} />}
				/>
			</Switch>
		</React.Fragment>
	)
}

export default AuthLayout
