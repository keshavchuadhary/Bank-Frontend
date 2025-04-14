import React from 'react'
import { FaBars, FaExchangeAlt, FaTimes } from 'react-icons/fa'
import { MdNotifications, MdSettings } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectOpenNavbar, toggleNavbar } from '../../features/page/pageSlice'
import { selectUser } from '../../features/user/userSlice'

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const openNav = useSelector(selectOpenNavbar)
    const navigate = useNavigate()
    const username = user ? user.username : 'Guest';

    const toggleNav = () => {
        dispatch(toggleNavbar())
    }

    const navigatePage = (path) => {
        navigate(path)
    }

    return (
        <header className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-4 bg-white shadow-md lg:left-64'>
            <div className='flex items-center gap-4'>
                <button 
                    className='lg:hidden text-gray-600 hover:text-blue-500'
                    onClick={toggleNav}
                >
                    {openNav ? <FaTimes size={25} /> : <FaBars size={25} />}
                </button>
                <h1 className='text-gray-600 text-lg font-semibold'>
                    Welcome, {username}
                </h1>
            </div>
            
            <div className='flex items-center gap-6'>
                <button 
                    onClick={() => navigatePage('/dashboard/convert')}
                    className='hidden lg:flex items-center gap-2 text-gray-600 hover:text-blue-500'
                >
                    <FaExchangeAlt />
                    <span className='text-sm font-medium'>Convert</span>
                </button>
                
                <button className='text-gray-600 hover:text-blue-500'>
                    <MdNotifications size={24} />
                </button>
                
                <button 
                    onClick={() => navigatePage('/dashboard/settings')}
                    className='text-gray-600 hover:text-blue-500'
                >
                    <MdSettings size={24} />
                </button>
                
                <div className='flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-medium'>
                    {user?.firstname?.[0]}{user?.lastname?.[0]}
                </div>
            </div>
        </header>
    )
}

export default Header