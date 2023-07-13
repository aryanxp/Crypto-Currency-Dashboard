import React from "react";

function PortfolioComponent() {
  return (
    <div className="ml-7 h-52 p-5 bg-white w-full rounded-md shadow-sm">
      <div className="text-lg flex justify-between">
        <div className="font-bold ">Portfolio</div>
        <div className="text-gray-400">
          Total value:
          <span className="font-bold text-gray-900">$1000</span>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2 pr-4 flex items-center">
          {/* <div className="h-4 w-4 rounded-full bg-blue-500 mr-2"></div> */}
          Pi Chart
        </div>
        <div className="w-1/2 pl-4 pt-5">
          <div className="flex items-center pb-2">
            <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
            Tether
          </div>
          <div className="flex items-center pb-2">
            <div className="h-4 w-4 rounded-full bg-purple-500 mr-2"></div>
            Luna
          </div>
          <div className="flex items-center pb-2">
            <div className="h-4 w-4 rounded-full bg-yellow-500 mr-2"></div>
            Ethereum
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioComponent;
