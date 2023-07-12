import React from "react";
import { useState } from "react";
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
    <div className="ml-7 h-52 p-5 bg-white w-full rounded-md drop-shadow-sm">
      ChartComponent
    </div>
  );
}

export default ChatComponent;
