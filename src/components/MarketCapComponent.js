// import React from "react";
// import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

// function MarketCapComponent() {
//   return (
//     <div className="mt-7 mr-2 h-full p-5 bg-white rounded-md drop-shadow-sm w-96">
//       <div className="font-bold text-lg pl-5 mb-3">
//         Cryptocurrency by market cap
//       </div>
//       <ComponentUp />
//       <ComponentDown />
//       <ComponentUp />
//       <ComponentDown />
//       <ComponentUp />
//       <ComponentDown />
//       <ComponentUp />
//       <ComponentDown />
//     </div>
//   );
// }

// const ComponentUp = () => {
//   return (
//     <div className="m-1 p-5 bg-white rounded-md drop-shadow-sm w-90">
//       <div className="flex justify-between">
//         <div className="font-bold ">Tether</div>
//         <div className="text-green-500 flex items-center text-sm">
//           <BiSolidUpArrow className="mr-1" size={10} />
//           2.12%
//         </div>
//       </div>
//       <div className="text-gray-500 text-sm">Mkt.Cap $197,484</div>
//     </div>
//   );
// };
// const ComponentDown = () => {
//   return (
//     <div className="m-1 p-5 bg-white rounded-md drop-shadow-sm w-90">
//       <div className="flex justify-between">
//         <div className="font-bold ">Bitcoin</div>
//         <div className="text-red-500 flex items-center text-sm">
//           <BiSolidDownArrow className="mr-1" size={10} />
//           2.12%
//         </div>
//       </div>
//       <div className="text-gray-500 text-sm">Mkt.Cap $941,798</div>
//     </div>
//   );
// };

// export default MarketCapComponent;

import React, { useEffect, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";

function MarketCapComponent() {
  const [cryptoList, setCryptoList] = useState([]);

  useEffect(() => {
    fetchCryptoList();
  }, []);

  const fetchCryptoList = async () => {
    try {
      const response = await fetch(
        "https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1&page=1"
      );
      const data = await response.json();
      setCryptoList(data);
    } catch (error) {
      console.error("Error fetching crypto list:", error);
    }
  };

  return (
    <div className="mt-7 mr-2 h-full p-5 bg-white rounded-md drop-shadow-sm xl:w-96 lg:w-96 sm:min-w-full md:min-w-full">
      <div className="font-bold text-lg pl-5 mb-3">
        Cryptocurrency by market cap
      </div>
      {cryptoList.map((crypto) =>
        crypto.price_change_percentage_24h >= 0 ? (
          <ComponentUp
            key={crypto.id}
            name={crypto.name}
            priceChange={crypto.price_change_percentage_24h}
            marketCap={crypto.market_cap}
          />
        ) : (
          <ComponentDown
            key={crypto.id}
            name={crypto.name}
            priceChange={crypto.price_change_percentage_24h}
            marketCap={crypto.market_cap}
          />
        )
      )}
    </div>
  );
}

const ComponentUp = ({ name, priceChange, marketCap }) => {
  return (
    <div className="m-1 p-5 bg-white rounded-md drop-shadow-sm w-90">
      <div className="flex justify-between">
        <div className="font-bold ">{name}</div>
        <div className="text-green-500 flex items-center text-sm">
          <BiSolidUpArrow className="mr-1" size={10} />
          {priceChange}%
        </div>
      </div>
      <div className="text-gray-500 text-sm">Mkt.Cap ${marketCap}</div>
    </div>
  );
};

const ComponentDown = ({ name, priceChange, marketCap }) => {
  return (
    <div className="m-1 p-5 bg-white rounded-md drop-shadow-sm w-90">
      <div className="flex justify-between">
        <div className="font-bold ">{name}</div>
        <div className="text-red-500 flex items-center text-sm">
          <BiSolidDownArrow className="mr-1" size={10} />
          {priceChange}%
        </div>
      </div>
      <div className="text-gray-500 text-sm">Mkt.Cap ${marketCap}</div>
    </div>
  );
};

export default MarketCapComponent;
