import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuCalendarDays } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";

const Cryptocurrency = () => {
  const [selectedCryptoCurrency, setSelectedCryptoCurrency] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCryptoCurrency = (cryptocurrency) => {
    setSelectedCryptoCurrency(cryptocurrency);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchQuery = (e) => {
    setSearchQuery(e.target.value);
  };

  const cryptocurrencyList = [
    "Bitcoin",
    "Ethereum",
    "Ripple",
    "Cardano",
    "Litecoin",
    "Polkadot",
    "Chainlink",
    "Stellar",
    "VeChain",
    "Tron",
    "Neo",
    "IOTA",
    "Monero",
    "EOS",
    "Dash",
  ];

  const filteredCryptocurrencies = cryptocurrencyList.filter((cryptocurrency) =>
    cryptocurrency.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="px-6 relative">
      <div className="relative" ref={dropdownRef}>
        <div
          id="dropdownSearchButton"
          onClick={toggleDropdown}
          className="relative z-10 flex items-center justify-between w-60 px-4 py-2 font-bold text-gray-900 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <span className="font-bold text-gray-900 dark:text-white">
            {selectedCryptoCurrency || "Cryptocurrency"}
          </span>
          <RiArrowDropDownLine
            className="text-gray-500 dark:text-gray-400"
            size={30}
          />
        </div>

        {dropdownOpen && (
          <div
            id="dropdownSearch"
            className="absolute z-50 w-60 mt-2 bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <div className="p-3">
              <label htmlFor="input-group-search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <FiSearch className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  type="text"
                  id="input-group-search"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search cryptocurrency"
                  value={searchQuery}
                  onChange={handleSearchQuery}
                />
              </div>
            </div>
            <div
              className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownSearchButton"
            >
              {filteredCryptocurrencies.map((cryptocurrency) => (
                <div
                  key={cryptocurrency}
                  className="flex items-center pl-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => handleCryptoCurrency(cryptocurrency)}
                >
                  <input
                    id={`checkbox-item-${cryptocurrency}`}
                    type="checkbox"
                    value={cryptocurrency}
                    checked={selectedCryptoCurrency === cryptocurrency}
                    onChange={() => {}}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor={`checkbox-item-${cryptocurrency}`}
                    className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 select-none"
                    onClick={() => handleCryptoCurrency(cryptocurrency)}
                  >
                    {cryptocurrency}
                  </label>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ChartType = () => {
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
};

const ChartComponent = () => {
  return (
    <div className="ml-7 h-52 p-5 bg-white  rounded-md drop-shadow-sm relative z-10">
      <div className=" flex  mb-5  justify-end flex-wrap  md:flex-nowrap  lg:flex-nowrap w-full">
        <div className=" flex space-x-2">
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 px-3.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            1D
          </button>
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 px-3.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            1W
          </button>
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 px-3.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            1M
          </button>
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 px-3.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            6M
          </button>
          <button
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 px-3.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            1Y
          </button>
          <button
            type="button"
            className="m- text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 px-3.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            <LuCalendarDays size={16} />
          </button>
        </div>
        {/* <div className="flex pt-5 md:pt-0 lg:pt-0 xl:pt-0  ">
        <div className="flex pt-0 sm:pt-5  "> */}
        <div className="flex ">
          <Cryptocurrency />
          <ChartType />
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
