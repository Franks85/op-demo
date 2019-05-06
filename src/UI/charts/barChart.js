import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const barChart = props => {
  const { data, width, height, xAxis, barDataKey, barColor } = props;
  return (
    <ResponsiveContainer>
      <BarChart
        width={width}
        height={height}
        data={data}
        maxBarSize={50}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xAxis} hide/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={barDataKey} fill={barColor} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default barChart;
