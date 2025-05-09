import SalesChart from "./SalesChart";

export default function ReportsChart() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-pink-600">Report</h3>
      </div>
      <div className="relative h-64 w-full">
        <SalesChart />
      </div>
    </div>
  );
} 