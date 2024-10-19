import React from "react";

const RiskSummary = () => {
  const riskData = [
    { label: "Total", value: 200, color: "text-blue-500" },
    { label: "Mitigated", value: 60, color: "text-green-500" },
    { label: "Accept", value: 45, color: "text-yellow-500" },
    { label: "Avoid", value: 55, color: "text-red-500" },
    { label: "Transferred", value: 40, color: "text-purple-500" },
  ];

  return (
    <div className="grid grid-cols-5 gap-6 p-4 bg-gray-100">
      {riskData.map((item, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center"
        >
          <h3 className={`text-4xl font-bold ${item.color}`}>{item.value}</h3>
          <p className="text-gray-600 mt-2 text-lg font-medium">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default RiskSummary;
