import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function ChartType() {
  const [selectedChart, setSelectedChart] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChartType = (event) => {
    setSelectedChart(event.target.value);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const chartOptions = [
    { value: "Line", label: "Line" },
    { value: "Graph", label: "Graph" },
  ];

  return (
    <div className="relative ">
      <button
        id="dropdownDelayButton"
        data-dropdown-toggle="dropdownDelay"
        data-dropdown-delay="500"
        data-dropdown-trigger="hover"
        onClick={toggleDropdown}
        className="relative z-10 flex items-center justify-between w-44 px-4 py-2  font-bold text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
        type="button"
      >
        {selectedChart ? (
          <span className="font-bold">{selectedChart}</span>
        ) : (
          <span className="">Chart type</span>
        )}
        <RiArrowDropDownLine className="text-gray-500" size={30} />
      </button>
      {dropdownOpen && (
        <div
          id="dropdownDelay"
          className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
        >
          <ul className="py-2 text-sm text-gray-700">
            {chartOptions.map((option) => (
              <li
                key={option.value}
                onClick={() =>
                  handleChartType({ target: { value: option.label } })
                }
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default ChartType;