import React, { useRef, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const InherentRisk = () => {
  const chartRef = useRef(null);

  const dataSets = [
    { label: "IT", value: 11.7, color: "#b91c1c" },
    { label: "Marketing", value: 57, color: "#ffcd56" },
    { label: "HR", value: 78, color: "#2e1065" },
    { label: "HR", value: 42, color: "#b91c1c" },
    { label: "HR", value: 42, color: "#b91c1c" },
    { label: "IT", value: 11.7, color: "#b91c1c" },
    { label: "HR", value: 90, color: "#15803d" },
    { label: "Marketing", value: 57, color: "#ffcd56" },
  ];

  const generateChartData = (value, color) => ({
    labels: [""],
    datasets: [
      {
        data: [value, 100 - value],
        backgroundColor: [color, "#e0e0e0"],
        hoverBackgroundColor: [color, "#e0e0e0"],
        borderWidth: 0,
      },
    ],
  });

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
      <h2 className="text-lg md:text-xl font-bold mb-4">Inherent Risk</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dataSets.map((item, index) => (
          <div key={index} className="text-center">
            <Doughnut
              data={generateChartData(item.value, item.color)}
              ref={chartRef}
              options={{
                cutout: "80%",
                plugins: {
                  tooltip: { enabled: false },
                  legend: { display: false },
                },
              }}
            />

            <div className="text-lg md:text-xl font-bold mt-2">
              {item.value}%
            </div>

            <div className="text-xs md:text-sm text-gray-500">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InherentRisk;
