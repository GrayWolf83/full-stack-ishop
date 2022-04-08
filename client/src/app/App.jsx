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
import DataLoader from './hooks/withDataLoader'
import AddProduct from './pages/ManagePages/AddProduct'
import LogOutPage from './pages/LogoutPage'
import EditProduct from './pages/ManagePages/EditProduct'

function App() {
	return (
		<DataLoader>
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
					<Route path='/manage/add' element={<AddProduct />} />
					<Route
						path='/manage/edit/:productId'
						element={<EditProduct />}
					/>
					<Route path='orders' element={<OrdersPage />} />
				</Route>
				<Route path='/auth' element={<Auth />}>
					<Route index element={<LoginPage />} />
					<Route path='register' element={<RegisterPage />} />
				</Route>
				<Route path='/' element={<Home />} />
				<Route path='/logout' element={<LogOutPage />} />
				<Route path='*' element={<Home />} />
			</Routes>
			<ToastContainer />
		</DataLoader>
	)
}

export default App
