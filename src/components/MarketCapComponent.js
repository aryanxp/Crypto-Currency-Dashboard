import React from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

function MarketCapComponent() {
  return (
    <div className="mt-7 mr-2 h-full p-5 bg-white rounded-md drop-shadow-sm w-96">
      <div className="font-bold text-lg pl-5 mb-3">
        Cryptocurrency by market cap
      </div>
      <ComponentUp />
      <ComponentDown />
      <ComponentUp />
      <ComponentDown />
      <ComponentUp />
      <ComponentDown />
      <ComponentUp />
      <ComponentDown />
    </div>
  );
}

const ComponentUp = () => {
  return (
    <div className="m-1 p-5 bg-white rounded-md drop-shadow-sm w-90">
      <div className="flex justify-between">
        <div className="font-bold ">Tether</div>
        <div className="text-green-500 flex items-center text-sm">
          <BiSolidUpArrow className="mr-1" size={10} />
          2.12%
        </div>
      </div>
      <div className="text-gray-500 text-sm">Mkt.Cap $197,484</div>
    </div>
  );
};
const ComponentDown = () => {
  return (
    <div className="m-1 p-5 bg-white rounded-md drop-shadow-sm w-90">
      <div className="flex justify-between">
        <div className="font-bold ">Bitcoin</div>
        <div className="text-red-500 flex items-center text-sm">
          <BiSolidDownArrow className="mr-1" size={10} />
          2.12%
        </div>
      </div>
      <div className="text-gray-500 text-sm">Mkt.Cap $941,798</div>
    </div>
  );
};

export default MarketCapComponent;
