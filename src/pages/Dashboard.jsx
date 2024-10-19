import React from "react";
import RiskSummary from "../components/RiskSummary";
import RiskHeatMap from "../components/RiskHeatMap";
import InherentRisk from "../components/InherentRisk";

const Dashboard = () => {
  return (
    <div className="dashboard-container p-6 bg-gray-100 space-y-6">
      <RiskSummary />

      <div className="heatmap-and-risk flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-1 h-full">
          <RiskHeatMap />
        </div>

        <div className="flex-1 h-full">
          <InherentRisk />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
