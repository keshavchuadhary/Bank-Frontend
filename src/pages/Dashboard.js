import React from 'react'
import Navbar from '../component/dashboard/Navbar'
import Header from '../component/dashboard/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './dashboard/Home'
import Account from './dashboard/Account'
import Payment from './dashboard/Payment'
import Transaction from './dashboard/Transaction'
import Card from './dashboard/Card'
import Settings from './dashboard/Settings'
import Profile from './dashboard/Profile'
import Convert from './dashboard/Convert'

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-50 font-roboto">
      {/* Sidebar/Navbar */}
      <Navbar />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-64">
        {/* Fixed Header */}
        <Header />
        
        {/* Scrollable content container */}
        <div className="flex-1 overflow-auto pt-16">  {/* pt-16 matches header height */}
          <div className="p-4 md:p-6">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/accounts' element={<Account/>}/>
              <Route path='/payments' element={<Payment/>}/>
              <Route path='/transaction' element={<Transaction/>}/>
              <Route path='/cards' element={<Card/>}/>
              <Route path='/settings' element={<Settings/>}/>
              <Route path='/profile' element={<Profile/>}/>
              <Route path='/convert' element={<Convert/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard