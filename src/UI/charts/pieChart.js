import React from "react";
import { ResponsiveContainer, PieChart, Pie, Tooltip } from "recharts";
import renderCustomizedLabel from "../../Util/helpFunction/renderCustomizeLabel";

const pieChart = props => {
  const { data, pieDataKey, outerRadius, cx, cy, children } = props;

  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey={pieDataKey}
          data={data}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={outerRadius}
          cx={cx}
          cy={cy}
        >
          {children}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default pieChart;
