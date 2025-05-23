import { useState, useEffect } from "react";
import { ChevronLeft, Pencil } from 'lucide-react';
import icons from "../constants";
import Header from "../components/Header";
import { useNavigate, useLocation } from "react-router-dom";

export default function OrderDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [orderData, setOrderData] = useState(null);
    const [activeTab, setActiveTab] = useState("info");

    useEffect(() => {
        if (location.state?.orderData) {
            setOrderData(location.state.orderData);
        }
    }, [location.state]);

    const handleBack = () => {
        navigate('/manage-orders');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/manage-orders');
    };

    if (!orderData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-full min-h-screen bg-white p-6">
            <Header title="Order Detail" />
            <div className="max-w-3xl p-4 md:p-6">
                <div className="pb-2 cursor-pointer" onClick={handleBack}>
                    <ChevronLeft color="#ED004F" />
                </div>
                <div className="flex gap-10 cursor-pointer">
                    <div className="mb-8" onClick={() => setActiveTab("info")}>
                        <h1 className={`text-xl font-medium ${activeTab === "info" ? "text-[#bf06448a]" : "text-gray-400"}`}>
                            Order Info
                        </h1>
                        {activeTab === "info" && <div className="h-0.5 w-24 bg-pink-500 mt-1 roundedt-lg"></div>}
                    </div>
                    <div className="mb-8" onClick={() => setActiveTab("detail")}>
                        <h1 className={`text-xl font-medium ${activeTab === "detail" ? "text-[#9E033B]" : "text-gray-400"}`}>
                            Package Detail
                        </h1>
                        {activeTab === "detail" && <div className="h-0.5 w-24 bg-pink-500 mt-1"></div>}
                    </div>
                </div>
                <div className="flex gap-12">
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full bg-sky-100 overflow-hidden relative">
                                {orderData.avatar ? (
                                    <img
                                        src={orderData.avatar}
                                        alt="Profile avatar"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-pink-500">
                                        <img src={icons.FoodIcon} className="w-12 h-12" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* Order info part */}
                        {
                            activeTab === "info" && (
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                                        <div className="flex-grow">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div className="space-y-0">
                                                    <div htmlFor="customerName" className="text-pink-500 text-sm pb-1">Customer Name</div>
                                                    <input
                                                        id="customerName"
                                                        name="customerName"
                                                        value={orderData.name}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>
                                                <div className="space-y-0">
                                                    <div htmlFor="location" className="text-pink-500 text-sm pb-1">Location</div>
                                                    <input
                                                        id="location"
                                                        name="location"
                                                        value={orderData.location}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>
                                                <div className="space-y-0">
                                                    <div htmlFor="dateTime" className="text-pink-500 text-sm pb-1">Order Date & Time</div>
                                                    <input
                                                        id="dateTime"
                                                        name="dateTime"
                                                        value={orderData.date + orderData.time}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>
                                                <div className="space-y-0">
                                                    <div htmlFor="packageName" className="text-pink-500 text-sm pb-1">Package Name</div>
                                                    <input
                                                        id="packageName"
                                                        name="packageName"
                                                        value={orderData.packageName}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>
                                                <div className="space-y-0">
                                                    <div htmlFor="orderID" className="text-pink-500 text-sm pb-1">Order ID</div>
                                                    <input
                                                        id="orderID"
                                                        name="orderID"
                                                        value={orderData.id}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>

                                                <div className="space-y-0">
                                                    <div htmlFor="paymentMethod" className="text-pink-500 text-sm pb-1">Payment Method</div>
                                                    <input
                                                        id="paymentMethod"
                                                        name="paymentMethod"
                                                        value={orderData.paymentMethod}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>

                                                <div className="space-y-0">
                                                    <div htmlFor="totalIncome" className="text-pink-500 text-sm pb-1">Total Income</div>
                                                    <input
                                                        id="totalIncome"
                                                        name="totalIncome"
                                                        value={orderData.totalIncome}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end items-center mt-8 pr-2">
                                        <button
                                            type="submit"
                                            className='bg-[#E5024E] text-white px-14 py-2 rounded-xl cursor-pointer hover:bg-pink-600'
                                        >
                                            OK
                                        </button>
                                    </div>
                                </form>
                            )
                        }
                        {/* Package detail part */}
                        {
                            activeTab === "detail" && (
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col md:flex-row gap-8 mb-8">
                                        <div className="flex-grow">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                <div className="space-y-0">
                                                    <div htmlFor="packageName" className="text-pink-500 text-sm pb-1">Package Name</div>
                                                    <input
                                                        id="packageName"
                                                        name="packageName"
                                                        value={orderData.packageName}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>
                                                <div className="space-y-0">
                                                    <div htmlFor="packageType" className="text-pink-500 text-sm pb-1">Package Type</div>
                                                    <input
                                                        id="packageType"
                                                        name="packageType"
                                                        value={orderData.packageType}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>

                                                <div className="space-y-0">
                                                    <div htmlFor="foodItem" className="text-pink-500 text-sm pb-1">Food Items</div>
                                                    <input
                                                        id="foodItem"
                                                        name="foodItem"
                                                        value={orderData.foodItem}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>

                                                <div className="space-y-0">
                                                    <div htmlFor="totalServing" className="text-pink-500 text-sm pb-1">Total Serving</div>
                                                    <input
                                                        id="totalServing"
                                                        name="totalServing"
                                                        value={orderData.totalServing}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>

                                                <div className="space-y-0">
                                                    <div htmlFor="addOns" className="text-pink-500 text-sm pb-1">Add Ons</div>
                                                    <input
                                                        id="addOns"
                                                        name="addOns"
                                                        value={orderData.addOns}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>

                                                <div className="space-y-0">
                                                    <div htmlFor="price" className="text-pink-500 text-sm pb-1">Price</div>
                                                    <input
                                                        id="price"
                                                        name="price"
                                                        value={`Rs. ${orderData.price}`}
                                                        readOnly
                                                        className="rounded-xl w-70 text-sm border border-[#9E033B] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent bg-gray-50"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-end items-center mt-8 pr-2">
                                        <button
                                            type="submit"
                                            className='bg-[#E5024E] text-white px-14 py-2 rounded-xl cursor-pointer hover:bg-pink-600'
                                        >
                                            OK
                                        </button>
                                    </div>
                                </form>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
