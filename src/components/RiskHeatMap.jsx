import React from "react";

const RiskHeatMap = () => {
  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg ">
      <h2 className="text-lg md:text-xl font-bold mb-4">
        Inherent and Residual Risk Heat Map
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-6 gap-1 md:gap-2">
        <div className="col-span-1"></div>
        <div className="col-span-2 md:col-span-5 text-center font-bold text-sm md:text-base">
          In rated Impact
        </div>

        <div className="col-span-1 font-bold text-right text-xs md:text-sm">
          Critical
        </div>
        <div className="col-span-1 bg-red-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          33
        </div>
        <div className="col-span-1 bg-red-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-red-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-red-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-red-800 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          123
        </div>

        <div className="col-span-1 font-bold text-right text-xs md:text-sm">
          High
        </div>
        <div className="col-span-1 bg-yellow-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          33
        </div>
        <div className="col-span-1 bg-yellow-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-yellow-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-yellow-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-red-800 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          123
        </div>

        <div className="col-span-1 font-bold text-right text-xs md:text-sm">
          Medium
        </div>
        <div className="col-span-1 bg-yellow-400 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          33
        </div>
        <div className="col-span-1 bg-green-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-yellow-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-gray-400 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-red-800 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          123
        </div>

        <div className="col-span-1 font-bold text-right text-xs md:text-sm">
          Low
        </div>
        <div className="col-span-1 bg-green-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          33
        </div>
        <div className="col-span-1 bg-green-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-gray-400 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-red-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-red-800 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          123
        </div>

        <div className="col-span-1 font-bold text-right text-xs md:text-sm">
          Very Low
        </div>
        <div className="col-span-1 bg-green-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          33
        </div>
        <div className="col-span-1 bg-green-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-yellow-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-gray-400 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          15
        </div>
        <div className="col-span-1 bg-red-500 h-12 md:h-24 flex justify-center items-center text-xs md:text-sm">
          123
        </div>
      </div>
    </div>
  );
};

export default RiskHeatMap;
