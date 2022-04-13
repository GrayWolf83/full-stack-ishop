import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProtectedManageRoute from '../components/common/ProtectedManageRoute'
import Auth from '../layouts/Auth'
import Home from '../layouts/Home'
import Manage from '../layouts/Manage'
import LoginPage from '../pages/LoginPage'
import LogOutPage from '../pages/LogoutPage'
import OrdersPage from '../pages/ManagePages/OrdersPage'
import AddProduct from '../pages/ManagePages/product/AddProduct'
import EditProduct from '../pages/ManagePages/product/EditProduct'
import ProductsPage from '../pages/ManagePages/ProductsPage'
import ProfilePage from '../pages/ProfilePage'
import RegisterPage from '../pages/RegisterPage'
import SingleProductPage from '../pages/SingleProductPage'

const AppRoutes = () => {
	return (
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

			<Route path='/profile/:userId' element={<ProfilePage />} />
			<Route path='/product/:productId' element={<SingleProductPage />} />
			<Route path='/logout' element={<LogOutPage />} />
			<Route path='/' element={<Home />} />
			<Route path='*' element={<Home />} />
		</Routes>
	)
}

export default AppRoutes
