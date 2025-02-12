import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { productData } from "../../../data/data";

const Search = ({searchElements}:any) => {
  
  
  const handleElement = (e: any) => {
    const searchInput = e.target.value;
    searchElements(searchInput);
  };

  
  return (
    <form className="relative flex w-full max-w-2xl items-center bg-white shadow-2xl rounded-2xl">
      <CiSearch className="absolute left-2 block h-5 w-5 text-gray-400 " />
      <input
        onChange={handleElement}
        type="name"
        name="search"
        className="h-12 w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-2"
        placeholder="Search by Order ID, Date, Customer"
      />
    </form>
  );
};

export default Search;
