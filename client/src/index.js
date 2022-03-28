import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/js/bootstrap.esm'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import { createStore } from './app/store/createStore'
import { Provider } from 'react-redux'
import history from './app/utils/history'
import { Router } from 'react-router-dom'

const store = createStore()

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
)

reportWebVitals()
