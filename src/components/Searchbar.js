import React from "react";
import { FiSearch } from "react-icons/fi";

function Searchbar() {
  return (
    <div className="mt-7 items-center p-3 bg-white flex grow rounded-md shadow-sm text-slate-400 font-display">
      <FiSearch className="mr-3 ml-2 " />
      <input
        type="text"
        className=" bg-white rounded inline-block outline-none"
        placeholder="Search by coin"
      />
    </div>
  );
}

export default Searchbar;
