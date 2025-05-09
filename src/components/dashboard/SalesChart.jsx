// src/components/SalesChart.jsx
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
  } from "recharts";
  
  const data = [
    { time: "10am", sales: 230000 },
    { time: "11am", sales: 180000 },
    { time: "12am", sales: 250000 },
    { time: "01am", sales: 160000 },
    { time: "02am", sales: 170000 },
    { time: "03am", sales: 233000 },
    { time: "04am", sales: 110000 },
    { time: "05am", sales: 140000 },
    { time: "06am", sales: 260000 },
    { time: "07am", sales: 300000 },
  ];
  
  // Custom tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-black text-white rounded px-3 py-1 text-xs shadow">
          <p className="text-pink-200 font-semibold">Sales</p>
          <p className="font-bold">Rs. {(payload[0].value / 1000).toFixed(0)}k</p>
        </div>
      );
    }
    return null;
  };
  
  export default function SalesChart() {
    return (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="1" vertical={false} />
            <XAxis dataKey="time" tick={{ fontSize: 12, fontFamily:"Poppins" }} />
            <YAxis
              tick={{ fontSize: 12, fontFamily:"Poppins" }}
              domain={[0, 500000]}
              tickFormatter={(value) => `${value / 1000}k`}
              tickCount={6}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ strokeDasharray: "3 3", stroke: "#f472b6" }} />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#ec4899"
              strokeWidth={4}
              dot={{
                stroke: "#ec4899",
                strokeWidth: 2,
                r: 5,
                fill: "#fff",
              }}
              activeDot={{
                fill: "#ec4899",
                stroke: "#ec4899",
                strokeWidth: 4,
                r: 6,
              }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#ec4899"
              strokeOpacity={0}
              strokeWidth={3}
              dot={false}
              legendType="none"
            />
          </LineChart>
        </ResponsiveContainer>
    );
  }
  