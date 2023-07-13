import React from "react";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "",
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 26, 55, 40],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [56, 95, 8, 18, 62, 55, 4],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

function ChartComponent() {
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
    <div className="ml-7 p-5 bg-white w-full rounded-md drop-shadow-sm">
      USD
      <div className="">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}

export default ChartComponent;
