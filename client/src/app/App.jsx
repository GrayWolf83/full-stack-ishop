import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/ui/Navbar'
import UsersLoader from './hoc/usersLoader'
import Auth from './layouts/Auth'
import Home from './layouts/Home'
import Manage from './layouts/Manage'

function App() {
    return (
        <UsersLoader>
            <Navbar />
            <Switch>
                <Route path={'/manage'} component={Manage} />
                <Route path={'/:auth/:login'} component={Auth} />
                <Route exact path={'/'} component={Home} />
                <Redirect to={'/'} />
            </Switch>
            <ToastContainer />
        </UsersLoader>
    )
}

export default App
