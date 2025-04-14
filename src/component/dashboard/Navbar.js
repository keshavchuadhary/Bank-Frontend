import React, { useEffect, useState } from 'react'
import { 
    FaApplePay, 
    FaFileInvoiceDollar, 
    FaLandmark, 
    FaUser, 
    FaWallet, 
    FaPiggyBank, 
    FaCreditCard 
} from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectOpenNavbar } from '../../features/page/pageSlice'

const Navbar = () => {
    const location = useLocation()
    const openNav = useSelector(selectOpenNavbar)
    const [currentPage, setCurrentPage] = useState('home')
    const navigate = useNavigate()

    useEffect(() => {
        const pathParts = location.pathname.split('/')
        setCurrentPage(pathParts[2] || 'home')
    }, [location])

    const pages = [
        { path: '/dashboard', icon: <FaLandmark />, label: 'Home' },
        { path: '/dashboard/accounts', icon: <FaWallet />, label: 'Accounts' },
        { path: '/dashboard/payments', icon: <FaApplePay />, label: 'Payments' },
        { path: '/dashboard/transactions', icon: <FaFileInvoiceDollar />, label: 'Transactions' },
        { path: '/dashboard/cards', icon: <FaCreditCard />, label: 'Cards' },
        { path: '/dashboard/profile', icon: <FaUser />, label: 'Profile' },
        { path: '/dashboard/settings', icon: <MdSettings />, label: 'Settings' },
    ]

    return (
        <nav className={`fixed top-0 left-0 bottom-0 z-40 w-64 bg-white shadow-xl transition-transform duration-300 
            ${openNav ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
            
            <div className='flex items-center gap-3 p-6 border-b border-gray-200'>
                <FaPiggyBank size={32} className='text-blue-500' />
                <h1 className='text-xl font-bold text-gray-800'>SBI Bank</h1>
            </div>
            
            <ul className='p-2 space-y-1'>
                {pages.map((page, id) => (
                    <li key={id}>
                        <button
                            onClick={() => navigate(page.path)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                                ${currentPage === page.label.toLowerCase() 
                                    ? 'bg-blue-500 text-white' 
                                    : 'text-gray-600 hover:bg-blue-50'}`}
                        >
                            <span className='text-lg'>{page.icon}</span>
                            <span className='text-sm font-medium'>{page.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar