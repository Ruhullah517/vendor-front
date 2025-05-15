import { useState } from "react"
import { Search, Bell, Star, MoreHorizontal, Trash2, CheckCircle } from "lucide-react"
import icons from "../constants/index"
import Header from "../components/Header"
import StatusDropdown from "../components/customDropDown"
import { useNavigate } from 'react-router-dom'
// import Image from "next/image"

export default function ManageOrders() {
  const navigate = useNavigate()
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
      packageName: "Grand Walima",
      packageType: "Buffet",
      foodItem: "Biryani, Korma, Naan",
      totalServing: "500",
      addOns: "Karachi",
      price: "500000",
      preparationTime: "2",
      deliveryTime: "1"
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
      status: "Pending",
      starred: false,
      selected: false,
    },
    {
      id: "#872346",
      name: "Ali",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "10 Dec, 2022",
      status: "Completed",
      starred: false,
      selected: false,
    },
    {
      id: "#872346",
      name: "Ali",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "10 Dec, 2022",
      status: "Cancelled",
      starred: false,
      selected: false,
    },
    {
      id: "#872346",
      name: "Ali",
      avatar: "/placeholder.svg?height=32&width=32",
      description: "Ordered Barat pack...",
      date: "10 Dec, 2022",
      status: "Pending",
      starred: false,
      selected: false,
    },
  ])
  const [openDropdownId, setOpenDropdownId] = useState(null)

  const statusOptions = [
    "Complete",
    "Pending",
    "Upcoming",
    "Cancelled"
  ]

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

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map((order) =>
      order.id === id ? { ...order, status: newStatus } : order
    ))
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "Complete":
        return "bg-green-100 text-[#3A974C]"
      case "Pending":
        return "bg-orange-100 text-[#F29339]"
      case "Upcoming":
        return "bg-blue-100 text-[#3A4297]"
      case "Cancelled":
        return "bg-red-100 text-[#E71D36]"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleOrderClick = (order) => {
    navigate('/order-detail', { state: { orderData: order } });
  }

  return (
    <div className="bg-white w-full min-h-screen p-6">
      <Header title="Manage Orders" />
      <div className="max-w-7xl mx-auto">
        <div className="bg-white border-l border-[#E6EFF5] pt-15">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="p-4 font-medium text-gray-500">
                  <input type="checkbox" className="rounded border-gray-300 accent-[#E5024E]" />
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
                <tr 
                  key={order.id} 
                  className="hover:shadow-[0_-2px_4px_-1px_rgba(0,0,0,0.1),0_8px_10px_-1px_rgba(0,0,0,0.1)] duration-200 rounded-lg cursor-pointer"
                  onClick={() => handleOrderClick(order)}
                >
                  <td className="p-4">
                    <input
                      type="checkbox"
                      checked={order.selected}
                      onChange={() => toggleSelect(order.id)}
                      className="rounded border-gray-300 accent-[#E5024E]"
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
                  <StatusDropdown order={order} onChange={handleStatusChange}/>
                  {/* <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) => handleStatusChange(order.id, e.target.value)}
                      className={`px-6 py-2  rounded-full text-xs font-medium ${getStatusColor(order.status)} border-none focus:ring-4 focus:ring-pink-500 focus:border-none cursor-pointer appearance-none`}
                    >
                      {statusOptions.map((status) => (
                        <option 
                          key={status} 
                          value={status}
                          className={`${getStatusColor(status)}`}
                        >
                          {status}
                        </option>
                      ))}
                    </select>
                  </td> */}
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
                          <MoreHorizontal className="h-5 w-5 text-[#E5024E] z-5" />
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