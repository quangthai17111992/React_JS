import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import RegisterPage from './pages/RegisterPage/RegisterPage'
import LoginPage from './pages/LoginPage/LoginPage'
import ChatLayout from './layout/ChatLayout'

// eslint-disable-next-line react/prop-types
const RestrictRoute = ({ component: Component, isAuthenticated }) => {
	return (
		<Route
			render={() =>
				isAuthenticated ? (
					<Component />
				) : (
					<Redirect
						to={{
							pathname: '/login'
						}}
					/>
				)
			}
		></Route>
	)
}

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ isAuthenticated }) => {
	return (
		<Switch>
			<Route
				path='/register'
				component={(props) => <RegisterPage {...props} />}
			/>
			<Route
				exact
				path='/login'
				render={() =>
					isAuthenticated ? <Redirect to={{ path: '/' }} /> : <LoginPage />
				}
			/>
			<RestrictRoute
				isAuthenticated={isAuthenticated}
				component={() => <ChatLayout />}
			/>
		</Switch>
	)
}

export default PublicRoute
