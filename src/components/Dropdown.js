import React, { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = () => {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const currencyOptions = [
    { value: "USD", label: "USD" },
    { value: "EUR", label: "EUR" },
    { value: "CAD", label: "CAD" },
    { value: "GBP", label: "GBP" },
    { value: "JPY", label: "JPY" },
    { value: "CHF", label: "CHF" },
    { value: "AUD", label: "AUD" },
    { value: "CNY", label: "CNY" },
    { value: "NZD", label: "NZD" },
    { value: "SEK", label: "SEK" },
    { value: "KRW", label: "KRW" },
    { value: "SGD", label: "SGD" },
    { value: "NOK", label: "NOK" },
    { value: "MXN", label: "MXN" },
    { value: "INR", label: "INR" },
    { value: "RUB", label: "RUB" },
    { value: "ZAR", label: "ZAR" },
    { value: "TRY", label: "TRY" },
    { value: "BRL", label: "BRL" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="mt-7 ml-7 mr-2 relative z-10 flex items-center  p-3 pl-4 pr-2 bg-white shadow-sm font-bold rounded cursor-pointer  focus:ring-1 focus:ring-blue-500"
        onClick={toggleDropdown}
        type="button"
      >
        {selectedCurrency ? (
          <span className="font-bold">{selectedCurrency}</span>
        ) : (
          <span className="">Select Currency</span>
        )}
        <RiArrowDropDownLine className="text-gray-500" size={30} />
      </button>
      {dropdownOpen && (
        <div className="absolute z-50 w-44 ml-7 mt-2 bg-white divide-y divide-gray-100 rounded shadow">
          <ul className="py-2 text-sm text-gray-700">
            {currencyOptions.map((option) => (
              <li
                key={option.value}
                onClick={() =>
                  handleCurrencyChange({ target: { value: option.label } })
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

export default Dropdown;
