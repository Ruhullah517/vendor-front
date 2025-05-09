import icons from "../../constants/index"
export default function TopPackagesList({ topPackages }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-pink-600">Top Selling Packages</h3>
        <button className="text-gray-400">...</button>
      </div>
      <div className="space-y-6">
        {topPackages.map((pkg) => (
          <div key={pkg.name} className="flex items-center gap-4">
            <div className="w-16 h-16 bg-pink-100 rounded-xl flex items-center justify-center overflow-hidden">
              <div className="bg-white rounded-md">
                {/* You can import and use the Package icon here if needed */}
                <img src={icons.LazeezImage} alt="" className="w-full h-full" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="font-medium">{pkg.name}</h4>
              <div className="text-sm text-gray-500">Total Sell: {pkg.totalSell}</div>
            </div>
            <div className="text-right">
              <div className="font-bold">Rs. {pkg.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 