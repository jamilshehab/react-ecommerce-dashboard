import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { productData } from "../../../data/data";

const Search = ({ onChange }: any) => {
  return (
    <form className="relative flex w-full max-w-2xl items-center bg-white shadow-2xl  ">
      <CiSearch className="absolute left-2 block h-5 w-5 text-gray-400 " />
      <input
        onChange={onChange}
        type="name"
        name="search"
        className="h-12 rounded-2xl w-full border-b-gray-400 bg-transparent py-4 pl-12 text-sm outline-none focus:border-b-gray-400 focus:outline-none focus:rounded-2xl"
        placeholder="Search by Order ID, Date, Customer"
      />
    </form>
  );
};

export default Search;
