import { NavLink } from "react-router-dom";
import icons from "../../constants/index";

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", icon: icons.HomeIcon, iconActive: icons.HomeIconActive, to: "/" },
    { label: "Manage Orders", icon: icons.ManageOrderIcon, iconActive: icons.ManageOrderIconActive, to: "/manage-orders" },
    { label: "Chats", icon: icons.ChatsIcon, iconActive: icons.ChatsIconActive, to: "/chats" },
    { label: "Notifications", icon: icons.Notifications, iconActive: icons.NotificationsActive, to: "/notifications" },
    { label: "Create a Package", icon: icons.CreatePackageIcon, iconActive: icons.CreatePackageIconActive, to: "/create-package" },
    { label: "Create an Offer", icon: icons.CreateOfferIcon, iconActive: icons.CreateOfferIconActive, to: "/create-offer" },
    { label: "Track Payments", icon: icons.TrackPayments, iconActive: icons.TrackPaymentsActive, to: "/track-payments" },
    { label: "Analytics", icon: icons.AnalyticsIcon, iconActive: icons.AnalyticsIconActive, to: "/analytics" },
    { label: "Setting", icon: icons.SettingsIcon, iconActive: icons.SettingsIconActive, to: "/settings" },
  ];

  return (
    <div className="w-84  flex flex-col">
      <div className="p-4 ">
        <h1 className="text-xl font-bold text-pink-600">Logo here</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2 pt-15">
          {navItems.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 p-2 rounded-md font-medium transition-colors duration-150 ${isActive
                    ? "bg-pink-50 text-pink-600"
                    : "text-gray-500 hover:bg-pink-50 hover:text-pink-600"
                  }`
                }
                end={item.to === "/"}
              >
                {({ isActive }) => (
                  <>
                    <div className="w-5 h-5 flex items-center justify-center">
                      <img src={isActive ? item.iconActive : item.icon} alt="" className="w-5 h-5" />
                    </div>
                    {item.label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-auto p-4 border-r border-[#E6EFF5]">
        <div className="flex items-center gap-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
          Help Centre
        </div>
      </div>
    </div>
  );
} 