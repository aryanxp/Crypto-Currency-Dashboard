import React from "react";

function ExchangeComponent() {
  return (
    <div className="ml-7 h-52 p-5 bg-white w-full rounded-md drop-shadow-sm">
      <div className="font-bold text-lg">Exchange Coins</div>

      <div className="flex items-end">
        <div>
          <label htmlFor="sell" className=" text-red-600 mr-2 ">
            Sell:
          </label>
          <select
            id="sell"
            className="h-10 px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="enterValue"
            className="ml-2 text-gray-400 mb-1 font-medium"
          >
            Enter Value:
          </label>
          <input
            type="text"
            id="enterValue"
            className="w-40 h-10 px-3 py-2 ml-2 border border-gray-300 rounded-md"
            placeholder="Avl: 0.002 BTC"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center">
        <label htmlFor="buy" className="mr-2 font-medium">
          Buy:
        </label>
        <select
          id="buy"
          className="h-10 px-3 py-2 border border-gray-300 rounded-md"
        >
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
        </select>
        <p className="ml-5  text-green-500">23000 Eth</p>
      </div>
      <div className="flex justify-center mt-6">
        <button className="py-2 px-6 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-700">
          Exchange
        </button>
      </div>
    </div>
  );
}

export default ExchangeComponent;
