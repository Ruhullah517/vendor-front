import { Search, Bell } from "lucide-react";
import icons from "../../constants/index";
export default function Header({ searchQuery, onSearch }) {
  return (
    <header className="flex justify-between items-center p-4">
      <h2 className="text-xl font-semibold text-pink-600">Overview</h2>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-[#E72765]" />
          <input
            type="text"
            placeholder="Search for something"
            className="pl-10 pr-4 py-2 rounded-full bg-[#F2C4C7] text-sm text-[#E72765] w-64 focus:outline-none"
            value={searchQuery}
            onChange={onSearch}
          />
        </div>
        <button className="w-10 h-10 rounded-full bg-[#F2C4C7] flex items-center justify-center text-pink-600">
          {/* <Bell className="w-5 h-5" /> */}
          <img src={icons.FoodIcon} className="w-5 h-5"/>
        </button>
        <button className="w-10 h-10 rounded-full bg-[#F2C4C7] flex items-center justify-center text-pink-600">
          <img src={icons.NotificationIcon} alt="" className="w-7.5 h-7.5"/>
        </button>
      </div>
    </header>
  );
} 