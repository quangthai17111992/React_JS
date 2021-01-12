import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import ChatLayout from './layout/ChatLayout'
import LoginPageComponent from './modules/login/components/page/page.component'
import RegisterPageComponent from './modules/register/components/page/page.component'

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

const PublicRoute = ({ isAuthenticated }) => {
	return (
		<Switch>
			<Route
				exact
				path='/register'
				component={() => <RegisterPageComponent />}
			/>
			<Route
				exact
				path='/login'
				component={() =>
					isAuthenticated ? (
						<Redirect
							to={{
								pathname: '/'
							}}
						/>
					) : (
						<LoginPageComponent />
					)
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
