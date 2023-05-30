import React from "react";
import { FiSearch } from "react-icons/fi";

function Searchbar() {
  return (
    <div className="mt-7 h-11 p-3 bg-white grow rounded-md shadow-sm text-slate-400 font-display flex">
      <FiSearch className="mr-3 ml-2 mt-1 " />
      <input
        type="text"
        className="bg-white rounded inline-block outline-none"
        placeholder="Search by coin"
      />
    </div>
  );
}

export default Searchbar;
