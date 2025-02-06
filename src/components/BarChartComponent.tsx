import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const BarChartComponent: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);
      const option = {
        title: { text: "Average Crop Production" },
        xAxis: { type: "category", data: ["Rice", "Wheat", "Corn","Wheat", ] },
        yAxis: { type: "value" },
        series: [{ data: [300, 500, 400, 320], type: "bar" }],
      };
      chartInstance.setOption(option);
    }
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: 500 }} />;
};

export default BarChartComponent;
