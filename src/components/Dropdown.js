import React, { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const handleSelectChange = (event) => {
    setSelectedCurrency(event.target.value);
  };
  return (
    <div className="mt-7 ml-7 mx-5">
      <select
        value={selectedCurrency}
        onChange={handleSelectChange}
        className="p-3 bg-white shadow-sm font-bold rounded"
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="GBP">GBP</option>
        <option value="JPY">JPY</option>
        <option value="CHF">CHF</option>
        <option value="AUD">AUD</option>
        <option value="CNY">CNY</option>
        <option value="NZD">NZD</option>
        <option value="SEK">SEK</option>
        <option value="KRW">KRW</option>
        <option value="SGD">SGD</option>
        <option value="NOK">NOK</option>
        <option value="MXN">MXN</option>
        <option value="INR">INR</option>
        <option value="RUB">RUB</option>
        <option value="ZAR">ZAR</option>
        <option value="TRY">TRY</option>
        <option value="BRL">BRL</option>
      </select>
    </div>
  );
};
export default Dropdown;
