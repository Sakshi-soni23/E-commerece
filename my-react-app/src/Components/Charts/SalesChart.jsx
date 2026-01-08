import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const SalesChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tick={{ fill: "#1E3B3A", fontSize: 12 }}
          interval={0}
        />
        <YAxis
          tick={{ fill: "#1E3B3A" }}
          tickFormatter={(value) => `₹${value / 1000}k`}
        />
        <Tooltip />
        <Line type="monotype" dataKey="total" stroke="black" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesChart;
