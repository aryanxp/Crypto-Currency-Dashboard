import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";

function CurrencyList() {
  const [selectedCryptoCurrency, setSelectedCryptoCurrency] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleCryptoCurrency = (cryptocurrency) => {
    setSelectedCryptoCurrency(cryptocurrency);
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
    <div>
      <div className="px-6 relative">
        <div className="relative" ref={dropdownRef}>
          <div
            id="dropdownSearchButton"
            onClick={toggleDropdown}
            className="relative z-10 flex items-center justify-between w-60 px-4 py-2 font-bold text-gray-900 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="font-bold text-gray-900">
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
    </div>
  );
}
export default CurrencyList;
