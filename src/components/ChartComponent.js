import React, { useState } from "react";

function ChatComponent() {
  const [selectedCryptoCurrency, setSelectedCryptoCurrency] = useState(null);
  const [selectedChart, setSelectedChart] = useState(null);

  const handleCryptoCurrency = (event) => {
    setSelectedCryptoCurrency(event.target.value);
  };
  const handleChartType = (event) => {
    setSelectedChart(event.target.value);
  };
  const Cryptocurrency = () => {
    return (
      <div className="px-6">
        <select
          value={selectedCryptoCurrency}
          onChange={handleCryptoCurrency}
          className="p-3 bg-white shadow-sm font-bold rounded"
        >
          <option value="">Cryptocurrency</option>
          <option value="Bitcoin">Bitcoin</option>
          <option value="Etherium">Etherium</option>
        </select>
      </div>
    );
  };
  const Chart = () => {
    return (
      <div className="px-6">
        <select
          value={selectedChart}
          onChange={handleChartType}
          className="p-3 bg-white shadow-sm font-bold rounded"
        >
          <option value="">Chart type</option>
          <option value="Line">Line</option>
          <option value="Graph">Graph</option>
        </select>
      </div>
    );
  };

  return (
    <>
      <div className="ml-7 h-52 p-5 bg-white w-full rounded-md drop-shadow-sm ">
        <div className="flex justify-end space-x-1">
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
            className="m- text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 px-3.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            1Y
          </button>
          <button
            type="button"
            className="m- text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-1.5 px-3.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
          >
            s
            <img
              className="w-4 h-4 mr-1"
              src="../public/assets/blue-calendar-11020.svg"
              alt="Icon"
            />
          </button>
          <Cryptocurrency />
          <Chart />
          {/* <p className="mr-2">ChartComponent</p> */}
        </div>
      </div>
    </>
  );
}

export default ChatComponent;
