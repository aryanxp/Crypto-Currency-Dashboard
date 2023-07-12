import React from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

function MarketCapComponent() {
  return (
    <div className="mt-7 mr-2 h-full p-5 bg-white rounded-md drop-shadow-sm w-96">
      <div className="text-lg font-bold mt-2 mb-3 ">
        Cryptocurrency by market cap
      </div>
      <div>
        <Component1 />
        <Component1 />
        <Component1 />
        <Component1 />
      </div>
    </div>
  );
}

const Component1 = () => {
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
    // <div className="mr-2 p-5 bg-white rounded-md drop-shadow-sm w-90">
    //   <div className="flex justify-between">
    //     <div className="font-bold">Tether</div>
    //     <div className="text-green-500 flex items-center">2.12%</div>
    //   </div>
    //   <div className="text-sm">Mkt.Cap $197,484</div>
    // </div>
  );
};

export default MarketCapComponent;
