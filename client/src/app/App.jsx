import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/ui/Navbar'
import DataLoader from './hooks/withDataLoader'
import AppRoutes from './hooks/withAppRoutes'

function App() {
	return (
		<DataLoader>
			<Navbar />
			<AppRoutes />
			<ToastContainer />
		</DataLoader>
	)
}

export default App
