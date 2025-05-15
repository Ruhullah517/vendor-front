import { useState } from 'react'
import './App.css'
import Dashboard from './pages/dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from './components/dashboard/Sidebar'
import ManageOrders from './pages/ManageOrders';
import Chats from "./pages/Chats";
import Notifications from "./pages/Notifications";
import CreatePackage from "./pages/CreatePackage";
import CreateOffer from "./pages/CreateOffer";
import TrackPayments from "./pages/TrackPayments";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Setting";
import MessagePage from './pages/MessagePage'
import PackageCreation from './pages/packageCreation'
import EditPackage from './pages/editPackage'
import OrderDetail from './pages/orderDetail'


function App() {
  return (
    <>
      <BrowserRouter>
        <div className='flex'>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/manage-orders" element={<ManageOrders />} />
            <Route path="/chats" element={<Chats />} />
            <Route path='/notifications' element={<Notifications />} />
            <Route path='/create-package' element={<CreatePackage />} />
            <Route path='/create-offer' element={<CreateOffer />} />
            <Route path='/track-payments' element={<TrackPayments />} />
            <Route path='/analytics' element={<Analytics />} />
            <Route path='/settings' element={<Settings />} />
            <Route path="/messages/:id" element={<MessagePage />} />
            <Route path="/package-creation" element={<PackageCreation />} />
            <Route path="/edit-package" element={<EditPackage />} />
            <Route path="/order-detail" element={<OrderDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App