import CircleProgress from "./CircleProgress";

export default function AnalyticsChart({ analyticsData }) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-pink-600">Analytics</h3>
      </div>
      <div className="flex items-center justify-center h-64">
        <div className="relative w-48 h-48">
          <CircleProgress data={analyticsData} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-4xl font-extrabold text-gray-900">
              {Math.round((analyticsData.sales / (analyticsData.sales + analyticsData.cancel + analyticsData.refund)) * 100)}%
              <span className="text-lg align-super font-bold text-pink-400">+</span>
            </div>
            <div className="text-base text-gray-400 font-semibold mt-1">Sales</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-8">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-[#ED004F] inline-block"></span>
          <span className="font-medium text-gray-700">Sale</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-[#CC054D] inline-block"></span>
          <span className="font-medium text-gray-700">Cancel</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded bg-[#EE6295] border border-gray-200 inline-block"></span>
          <span className="font-medium text-gray-700">Return</span>
        </div>
      </div>
    </div>
  );
} 