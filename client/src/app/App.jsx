import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/ui/Navbar'
import Auth from './layouts/Auth'
import Home from './layouts/Home'
import Manage from './layouts/Manage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProductsPage from './pages/ManagePages/ProductsPage'
import OrdersPage from './pages/ManagePages/OrdersPage'
import ProtectedManageRoute from './components/common/ProtectedManageRoute'
import CategoriesLoader from './hoc/categoriesLoader'
import AuthLoader from './hoc/authLoader'

function App() {
	return (
		<AuthLoader>
			<CategoriesLoader>
				<Navbar />
				<Routes>
					<Route
						path='/manage'
						element={
							<ProtectedManageRoute>
								<Manage />
							</ProtectedManageRoute>
						}>
						<Route index element={<ProductsPage />} />
						<Route path='orders' element={<OrdersPage />} />
					</Route>
					<Route path='/auth' element={<Auth />}>
						<Route index element={<LoginPage />} />
						<Route path='register' element={<RegisterPage />} />
					</Route>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Home />} />
				</Routes>
				<ToastContainer />
			</CategoriesLoader>
		</AuthLoader>
	)
}

export default App
