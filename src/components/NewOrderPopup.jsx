import { useState } from 'react';
import icons from '../constants/index';
// import chefImg from 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=facearea&w=256&h=256&facepad=2';

const randomOrder = {
  name: 'Muhammad Ali',
  location: 'Plot 232, JTH, Karachi.',
  packageName: 'Majlis Pack 1',
  deliveryDateTime: '16, Oct, 2025 - 9:00 p.m.',
  price: '100,000',
  specialInstructions: 'Use olive oil',
  addOns: 'No',
};

const NewOrderPopup = ({ isOpen, onClose, onAccept, onReject, orderData = randomOrder }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-0 right-0 bottom-0 flex items-center justify-center z-50">
      <div className="bg-[#EE6295] rounded-xl p-6 w-[400px]">
        {/* Left: Order Details */}
        <div className="flex-1 space-y-1 pr-6">
          <h2 className="text-xl font-semibold text-white mb-2">New Order!</h2>
          <div className='flex'>

            <div className="text-white space-y-1">
              <div><b>Name:</b> {orderData.name}</div>
              <div><b>Location:</b> {orderData.location}</div>
              <div><b>Package Name:</b> {orderData.packageName}</div>
              <div><b>Delivery date & time:</b> {orderData.deliveryDateTime}</div>
              <div><b>Price:</b> Rs. {orderData.price}</div>
              <div><b>Special instructions:</b> {orderData.specialInstructions}</div>
              <div><b>Any add-ons?:</b> {orderData.addOns}</div>
            </div>
            {/* Right: Chef Illustration */}
            <div className="flex items-center justify-center">
              <img src={icons.ChefIcon} alt="Chef" />
            </div>
          </div>
        </div>
        <div className="flex justify-around  mt-6">
          <button
            onClick={onAccept}
            className="flex items-center justify-center px-5 bg-[#9E033B] text-white rounded-lg hover:bg-pink-600 font-semibold shadow"
          >
            <span className="px-1">✔</span> Accept
          </button>
          <button
            onClick={onReject}
            className="flex items-center justify-center px-5 py-0.5 bg-[#7f012bab] rounded-lg text-white hover:bg-white hover:text-[#E5024E] font-semibold"
          >
            <span className="px-1">✖</span> Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewOrderPopup; 