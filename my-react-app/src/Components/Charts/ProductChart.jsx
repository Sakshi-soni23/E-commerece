import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const COLORS = ["#1E3B3A", "#5FA7A0", "#A7D7C5"];

const ProductChart = ({data}) => {
    if (!Array.isArray(data) || data.length === 0) return null;
  return (
    <PieChart width={300} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="category"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip formatter={(value, name) => [`${value} Products`, name]} />
    </PieChart>
  );
}

export default ProductChart