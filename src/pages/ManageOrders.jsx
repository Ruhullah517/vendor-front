import { useState } from "react"
import { Search, Bell, Star, MoreHorizontal, Trash2, CheckCircle } from "lucide-react"
import icons from "../constants/index"
// import Image from "next/image"

export default function ManageOrders() {
  const [orders, setOrders] = useState([
    {
      id: "#876354",
      name: "M. Ali",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "12 Dec, 2023",
      status: "Complete",
      starred: true,
      selected: false,
    },
    {
      id: "#876123",
      name: "Muhammad",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "10 Dec, 2023",
      status: "Pending",
      starred: false,
      selected: false,
    },
    {
      id: "#876213",
      name: "Muhammad",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "08 Dec, 2023",
      status: "Upcoming",
      starred: false,
      selected: true,
    },
    {
      id: "#876987",
      name: "Ali",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "08 Dec, 2023",
      status: "Cancelled",
      starred: false,
      selected: true,
    },
    {
      id: "#873145",
      name: "Ali",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "10 Dec, 2023",
      status: "Complete",
      starred: false,
      selected: false,
    },
    {
      id: "#872345",
      name: "Muhammad",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "10 Dec, 2022",
      status: "Pending",
      starred: true,
      selected: true,
    },
    {
      id: "#872346",
      name: "Ali",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "10 Dec, 2022",
      status: "AOS Status",
      starred: false,
      selected: false,
    },
    {
      id: "#872346",
      name: "Ali",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "10 Dec, 2022",
      status: "AOS Status",
      starred: false,
      selected: false,
    },
    {
      id: "#872346",
      name: "Ali",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "10 Dec, 2022",
      status: "AOS Status",
      starred: false,
      selected: false,
    },
    {
      id: "#872346",
      name: "Ali",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "10 Dec, 2022",
      status: "AOS Status",
      starred: false,
      selected: false,
    },
  ])
  const [openDropdownId, setOpenDropdownId] = useState(null)

  const toggleStar = (id) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, starred: !order.starred } : order)))
  }

  const toggleSelect = (id) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, selected: !order.selected } : order)))
  }

  const handleMoreClick = (id) => {
    setOpenDropdownId(openDropdownId === id ? null : id)
  }

  const handleMarkAsRead = (id) => {
    // Add your mark as read logic here
    setOpenDropdownId(null)
  }

  const handleDelete = (id) => {
    setOrders(orders.filter(order => order.id !== id))
    setOpenDropdownId(null)
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Complete":
        return "bg-green-100 text-green-800"
      case "Pending":
        return "bg-orange-100 text-orange-800"
      case "Upcoming":
        return "bg-blue-100 text-blue-800"
      case "Cancelled":
        return "bg-red-100 text-red-800"
      case "AOS Status":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="bg-white w-full min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-pink-600">Manage Orders</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for something"
                className="pl-10 pr-4 py-2 rounded-full bg-pink-100 text-sm w-64 focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-pink-400" />
            </div>
            <div className="bg-pink-100 p-2 rounded-full">
              <Bell className="h-5 w-5 text-pink-500" />
            </div>
          </div>
        </div> */}
        <header className="flex justify-between items-center p-4 border-b border-[#E6EFF5]">
          <h2 className="text-xl font-bold text-pink-600">Manage Orders</h2>
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

        <div className="bg-white border-l border-[#E6EFF5] pt-15">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="p-4 font-medium text-gray-500">
                  <input type="checkbox" className="rounded border-gray-300" />
                </th>
                <th className="p-4 font-medium text-[#EE6295]">
                  Invoice ID <span className="text-[#EE6295] text-xs">▼</span>
                </th>
                <th className="p-4 font-medium text-[#EE6295]">
                  Name <span className="text-[#EE6295] text-xs">▼</span>
                </th>
                <th className="p-4 font-medium text-[#EE6295]">
                  Description <span className="text-[#EE6295] text-xs">▼</span>
                </th>
                <th className="p-4 font-medium text-[#EE6295]">
                  Date <span className="text-[#EE6295] text-xs">▼</span>
                </th>
                <th className="p-4 font-medium text-[#EE6295]">
                  Status <span className="text-[#EE6295] text-xs">▼</span>
                </th>
                <th className="p-4 font-medium text-[#EE6295]">
                  {/* <Trash2 className="h-5 w-5 text-[#EE6295]" /> */}
                  <img src={icons.DeleteIcon} alt="" className="h-5 w-5" />
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="hover:shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.1),0_8px_10px_-1px_rgba(0,0,0,0.1)] hover:scale-[1] duration-200 rounded-lg">
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={order.selected}
                      onChange={() => toggleSelect(order.id)}
                      className="rounded border-gray-300"
                    />
                  </td>
                  <td className="p-4 text-sm font-medium">{order.id}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full overflow-hidden bg-gray-200">
                      </div>
                      <span className="text-sm font-medium text-pink-600">{order.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded">
                        <img src={icons.Message} alt="" className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-gray-600">{order.description}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1 rounded">
                        <img src={icons.Calender} alt="" className="w-3 h-3" />
                      </div>
                      <span className="text-sm text-gray-600">{order.date}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-4">
                      <button onClick={() => toggleStar(order.id)} className="focus:outline-none">
                        <Star
                          className={`h-5 w-5 ${order.starred ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      </button>
                      <div className="relative">
                        <button
                          onClick={() => handleMoreClick(order.id)}
                          className="focus:outline-none cursor-pointer"
                        >
                          <MoreHorizontal className="h-5 w-5 text-gray-400 z-5" />
                        </button>
                        {openDropdownId === order.id && (
                          <div className="absolute -right-10 mt-2 w-32 bg-white p-2 rounded-lg flex flex-col gap-1 shadow-lg border border-gray-100 z-10">
                            <button
                              onClick={() => handleMarkAsRead(order.id)}
                              className="w-full bg-gray-50 px-2 py-2 rounded-lg text-left text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2 z-10"
                            >
                              <img src={icons.MarkAsRead} alt="" className="h-3 w-3" />
                              Mark as Read
                            </button>
                            <button
                              onClick={() => handleDelete(order.id)}
                              className="w-full px-2 bg-[#ee62953b] py-2 rounded-md text-left text-xs text-red-600 hover:bg-gray-50 flex items-center gap-2 z-10"
                            >
                              <img src={icons.DeleteIcon} alt="" className="h-3 w-3" />
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
} 