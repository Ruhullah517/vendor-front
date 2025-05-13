import { useState } from "react"
// import Image from "next/image"
import { Pencil, Search } from 'lucide-react'
import icons from "../constants"
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"

export default function Settings() {
  const [formData, setFormData] = useState({
    vendorName: "Boss Pakwan Centre",
    businessType: "Catering",
    username: "Admin",
    password: "boss123@reez",
    address: "",
    city: "",
    totalWorkers: "233",
    postalCode: "23433"
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="w-full min-h-screen bg-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center pb-6 mb-4 border-b border-[#E6EFF5]">
        <h2 className="text-2xl font-bold text-pink-600">Analytics</h2>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E72765]" />
            <input
              type="text"
              placeholder="Search for something"
              className="pl-10 pr-4 py-2 rounded-full bg-[#F2C4C7] text-sm text-[#E5024E] w-64 focus:outline-none"
            />
          </div>
          <button className="w-10 h-10 rounded-full bg-[#F2C4C7] flex items-center justify-center text-pink-600">
            <img src={icons.FoodIcon} className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#F2C4C7] flex items-center justify-center text-pink-600">
            <img src={icons.NotificationIcon} alt="" className="w-7.5 h-7.5" />
          </button>
        </div>
      </header>
      <div className="max-w-3xl p-4 md:p-6">
        <div className="mb-8">
          <h1 className="text-xl font-medium">Edit Profile</h1>
          <div className="h-0.5 w-24 bg-pink-500 mt-1"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-sky-100 overflow-hidden relative">
                  {/* <Image
                  src="/placeholder.svg?height=96&width=96"
                  alt="Profile avatar"
                  width={96}
                  height={96}
                  className="object-cover"
                /> */}
                </div>
                <button
                  type="button"
                  className="absolute bottom-0 right-0 bg-pink-500 text-white p-1.5 rounded-full"
                >
                  <Pencil size={16} />
                </button>
              </div>
            </div>

            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-0">
                  <div htmlFor="vendorName" className="text-pink-500 text-md">Vendor Name</div>
                  <input
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    className="rounded-lg w-70 text-sm border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-0">
                  <div htmlFor="vendorName" className="text-pink-500 text-md">Vendor Name</div>
                  <input
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    className="rounded-lg w-70 text-sm border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-0">
                  <div htmlFor="vendorName" className="text-pink-500 text-md">Vendor Name</div>
                  <input
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    className="rounded-lg w-70 text-sm border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-0">
                  <div htmlFor="vendorName" className="text-pink-500 text-md">Vendor Name</div>
                  <input
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    className="rounded-lg w-70 text-sm border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div className="space-y-0">
                  <div htmlFor="vendorName" className="text-pink-500 text-md">Vendor Name</div>
                  <input
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    className="rounded-lg w-70 text-sm border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-0">
                  <div htmlFor="vendorName" className="text-pink-500 text-md">Vendor Name</div>
                  <input
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    className="rounded-lg w-70 text-sm border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-0">
                  <div htmlFor="vendorName" className="text-pink-500 text-md">Vendor Name</div>
                  <input
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    className="rounded-lg w-70 text-sm border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-0">
                  <div htmlFor="vendorName" className="text-pink-500 text-md">Vendor Name</div>
                  <input
                    id="vendorName"
                    name="vendorName"
                    value={formData.vendorName}
                    onChange={handleChange}
                    className="rounded-lg w-70 text-sm border border-gray-300 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-8"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
