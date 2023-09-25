import React from "react";
import CalendarGrid from "./CalendarGrid";
import CurrencyList from "./CurrencyList";
import ChartType from "./ChartType";

function ChartComponent() {
  return (
    <div className="ml-7 h-52 p-5 bg-white  rounded-md drop-shadow-sm relative z-10">
      <div className=" flex  mb-5  justify-end flex-wrap  md:flex-nowrap  lg:flex-nowrap w-full">
        <div className="flex">
          <div className="flex">
            <CalendarGrid />
            <CurrencyList />
            <ChartType />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChartComponent;
