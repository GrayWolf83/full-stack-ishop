import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/ui/Navbar'
import CurrentUserLoader from './hoc/usersLoader'
import Auth from './layouts/Auth'
import Home from './layouts/Home'
import Manage from './layouts/Manage'
import LogOutPage from './pages/LogoutPage'

function App() {
	return (
		<CurrentUserLoader>
			<Navbar />
			<Switch>
				<Route path={'/manage'} component={Manage} />
				<Route exact path={'/logout'} component={LogOutPage} />
				<Route exact path={'/'} component={Home} />
				<Route path={'/:auth/:login'} component={Auth} />

				<Redirect to={'/'} />
			</Switch>
			<ToastContainer />
		</CurrentUserLoader>
	)
}

export default App
