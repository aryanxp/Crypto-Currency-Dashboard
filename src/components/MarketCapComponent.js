import React, { useEffect, useState } from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { fetchCryptoList } from "../app/store";

const ITEMS_PER_PAGE = 5; // Number of items to load per page

function MarketCapComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const cryptoList = useSelector((state) => state.marketCap.cryptoList);
  const dispatch = useDispatch();

  useEffect(() => {
    // Use Redux Thunk action to fetch the first page of crypto list
    dispatch(fetchCryptoList());
  }, [dispatch]);

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Extract the items to display for the current page
  const itemsToShow = cryptoList.slice(0, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="mt-7 mr-2 h-full p-5 bg-white rounded-md drop-shadow-sm xl:w-96 lg:w-96 sm:min-w-full md:min-w-full">
      <div className="font-bold text-lg pl-5 mb-3">
        Cryptocurrency by market cap
      </div>
      {itemsToShow.map((crypto) => (
        <CryptoComponent
          key={crypto.id}
          name={crypto.name}
          priceChange={crypto.price_change_percentage_24h}
          marketCap={crypto.market_cap}
        />
      ))}
      {cryptoList.length > itemsToShow.length && (
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
}

const CryptoComponent = ({ name, priceChange, marketCap }) => {
  return (
    <div className="m-1 p-5 bg-white rounded-md drop-shadow-sm w-90">
      <div className="flex justify-between">
        <div className="font-bold ">{name}</div>
        <div className={priceChange >= 0 ? "text-green-500" : "text-red-500"}>
          {priceChange >= 0 ? (
            <BiSolidUpArrow className="mr-1" size={10} />
          ) : (
            <BiSolidDownArrow className="mr-1" size={10} />
          )}
          {Math.abs(priceChange)}%
        </div>
      </div>
      <div className="text-gray-500 text-sm">Mkt.Cap ${marketCap}</div>
    </div>
  );
};

export default MarketCapComponent;
