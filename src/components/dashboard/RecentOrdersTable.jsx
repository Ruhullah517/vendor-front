export default function RecentOrdersTable({ recentOrders }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-pink-600">Recent Orders</h3>
        <button className="text-gray-400">...</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-gray-500">
              <th className="pb-3 font-medium">Tracking ID</th>
              <th className="pb-3 font-medium">Package Name</th>
              <th className="pb-3 font-medium">Price</th>
              <th className="pb-3 font-medium">Total Order</th>
              <th className="pb-3 font-medium">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-t">
                <td className="py-3 text-sm">{order.id}</td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-md bg-pink-600 flex items-center justify-center text-white text-xs">
                      {order.name[0]}
                    </div>
                    <span>{order.name}</span>
                  </div>
                </td>
                <td className="py-3 text-sm">Rs. {order.price}</td>
                <td className="py-3">
                  <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-md">
                    {order.orders}
                  </span>
                </td>
                <td className="py-3 text-sm">Rs. {order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 