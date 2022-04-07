import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCurrentUser } from '../../store/users'
import Cart from './Cart'
import CartNavbar from './CartNavbar'
import NavProfile from './navProfile'

const Navbar = () => {
    const currentUser = useSelector(getCurrentUser())

    return (
        <div className='navbar bg-secondary shadow'>
            <div className='container'>
                <div className='row w-100'>
                    <div className='col-md-6'>
                        <div className='logo d-flex align-items-center justify-content-center justify-content-md-start my-2'>
                            <NavLink to={'/'}>
                                <h1 className='mb-0'>Webern</h1>
                            </NavLink>
                        </div>
                    </div>
                    <div className='col-12 col-md-6 d-flex align-items-center justify-content-between justify-content-md-end'>
                        <CartNavbar count={0} />

                        {currentUser ? (
                            <NavProfile />
                        ) : (
                            <p className='mb-0 ms-2'>
                                <NavLink to={'/auth'} className='ms-2'>
                                    Вход
                                </NavLink>
                                <span className='mx-1'>/</span>
                                <NavLink to={'/auth/register'}>
                                    Регистрация
                                </NavLink>
                            </p>
                        )}
                    </div>
                </div>
            </div>
            <Cart />
        </div>
    )
}

export default Navbar
