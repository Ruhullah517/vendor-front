import { useState } from "react"
import { Search, Bell, User, MoreVertical, Check, MoreHorizontal } from "lucide-react"
import icons from "../constants/index"

function Notifications() {
  const [activeMenu, setActiveMenu] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  const notifications = [
    { id: 1, title: "Your payment is released", description: "We have released the payment for your recent order. The amount has been transferred to your registered bank account.", isNew: true },
    { id: 2, title: "We have suspended your account!", description: "We had warned you about the policy violations. Your account has been temporarily suspended.", isNew: true },
    { id: 3, title: "New offers", description: "Some new releases at discounted prices. Check them out now!", isNew: true },
    { id: 4, title: "Your payment is released", description: "We have released the payment for your recent order. The amount has been transferred to your registered bank account.", isNew: false },
    { id: 5, title: "Your payment is released", description: "We have released the payment for your recent order. The amount has been transferred to your registered bank account.", isNew: false },
    { id: 6, title: "Your payment is released", description: "We have released the payment for your recent order. The amount has been transferred to your registered bank account.", isNew: false },
    { id: 7, title: "Your payment is released", description: "We have released the payment for your recent order. The amount has been transferred to your registered bank account.", isNew: false },
    { id: 8, title: "Personalize your account", description: "Start with 3 steps to personalize your account and get better recommendations.", isNew: false },
    { id: 9, title: "Contact us and get help", description: "Need assistance? Our support team is available 24/7 to help you.", isNew: false },
    { id: 10, title: "Welcome!", description: "We welcome you to Lazeez Events! Get started by exploring our platform.", isNew: false },
  ]

  const toggleMenu = (id) => {
    if (activeMenu === id) {
      setActiveMenu(null)
      setShowPopup(false)
    } else {
      setActiveMenu(id)
      setShowPopup(true)
    }
  }

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="w-full mx-auto p-4">
        <header className="flex justify-between items-center pb-4  border-b border-[#E6EFF5]">
          <h2 className="text-xl font-bold text-pink-600">Notifications</h2>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E72765]" />
              <input
                type="text"
                placeholder="Search for something"
                className="pl-10 pr-4 py-2 rounded-full bg-[#F2C4C7] text-sm text-[#E5024E] w-64 focus:outline-none"
              // value={searchQuery}
              // onChange={onSearch}
              />
            </div>
            <button className="w-10 h-10 rounded-full bg-[#F2C4C7] flex items-center justify-center text-pink-600">
              {/* <Bell className="w-5 h-5" /> */}
              <img src={icons.FoodIcon} className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-[#F2C4C7] flex items-center justify-center text-pink-600">
              <img src={icons.NotificationIcon} alt="" className="w-7.5 h-7.5" />
            </button>
          </div>
        </header>

        <div className="space-y-3 pt-12 px-30 border-l border-[#E6EFF5]">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-center justify-between py-2 px-4 shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.1),0_8px_10px_-1px_rgba(0,0,0,0.1)] rounded-md">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                  <span className="text-white text-xs"></span>
                </div>
                <div className="flex flex-row flex-1">
                  <h3 className="font-medium text-[#9E033B]">{notification.title}</h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-[#bf064499] text-sm mt-1 w-40">
                  {notification.description.split(' ').slice(0, 4).join(' ')}...
                </p>
                {notification.isNew && (
                  <span className="px-2 py-1 bg-pink-100 text-pink-500 text-xs rounded-full">New</span>
                )}
                <div className="relative">
                  <button onClick={() => toggleMenu(notification.id)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                    <MoreHorizontal className="h-5 w-5 text-[#E5024E]" />
                  </button>

                  {activeMenu === notification.id && showPopup && (
                    <div className="absolute -right-32 top-2 mt-2 w-32 bg-white p-2 rounded-lg flex flex-col gap-1 shadow-lg border border-gray-100 z-10">
                      <button
                        onClick={() => handleMarkAsRead()}
                        className="w-full bg-gray-50 px-2 py-2 rounded-lg text-left text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2 z-10"
                      >
                        <img src={icons.MarkAsRead} alt="" className="h-3 w-3" />
                        Mark as Read
                      </button>
                      <button
                        onClick={() => handleDelete()}
                        className="w-full px-2 bg-[#ee62953b] py-2 rounded-md text-left text-xs text-red-600 hover:bg-gray-50 flex items-center gap-2 z-10"
                      >
                        <img src={icons.DeleteIcon} alt="" className="h-3 w-3" />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Notifications
