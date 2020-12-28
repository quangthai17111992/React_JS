/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import 'react-perfect-scrollbar/dist/css/styles.css'
import './assets/styles/main.scss'

import PublicRoute from './router'
import { AuthService } from './services/auth.service'
import { checkAuthStageChanged } from './store/actions/auth/Action'
import { bindActionCreators } from 'redux'

const RouteApp = withRouter(PublicRoute)

function App(props) {
	useEffect(() => {
		AuthService.onAuthStateChanged((user) => {
			props.checkAuthStageChanged(user)
		})
	}, [])

	return (
		<Router>
			<RouteApp isAuthenticated={props.isLoggedIn} />
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
