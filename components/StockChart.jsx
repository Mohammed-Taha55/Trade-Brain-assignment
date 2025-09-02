"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StockChart({ data }) {
  // format date to HH:mm (looks cleaner on chart)
  const formattedData = data.map((point) => ({
    time: new Date(point.date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    close: point.close,
  }));

  // get min & max for Y axis with lil padding
  const closes = formattedData.map((d) => d.close);
  const min = Math.min(...closes);
  const max = Math.max(...closes);
  const pad = 5; // extra pad for better readability

  return (
    <div className="w-full h-80 bg-white rounded-xl shadow py-4 px-2 md:p-8 flex flex-col gap-4">
      <h2 className="text-lg font-semibold mb-4 ml-4 md:mt-0">
        Stock Price Trend
      </h2>
      <ResponsiveContainer width="100%" height="100%" className="md:-ml-2">
        <LineChart data={formattedData}>
          <XAxis dataKey="time" tick={{ fontSize: 12 }} />
          <YAxis
            domain={[min - pad, max + pad]} // zoomed into price range
            tick={{ fontSize: 12 }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="close"
            stroke="#a855f7" // purple shade
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
