import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import 'react-perfect-scrollbar/dist/css/styles.css'
import 'src/assets/styles/main.scss'

import { AuthService } from 'src/core/shared/services/auth.service'
import { checkAuthStageChanged } from 'src/core/shared/store/actions/auth/Action'

import PublicRoute from './router'

import Spinner from './core/components/Spinner/Spinner'

const RouteApp = withRouter(PublicRoute)

function App(props) {
	const [isLoading, setIsLoading] = useState(true)

	// TODO: improve performace: because this function called 3 times
	useEffect(() => {
		AuthService.onAuthStateChanged((user) => {
			if (user) {
				props.checkAuthStageChanged(user)
			}

			setIsLoading(false)
		})
	})

	return (
		<Router>
			{isLoading ? (
				<Spinner />
			) : (
				<RouteApp isAuthenticated={props.isLoggedIn} />
			)}
		</Router>
	)
}

const mapStateToProps = (state) => {
	return { isLoggedIn: state.auth.isAuthenticated }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ checkAuthStageChanged }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
