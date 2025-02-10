import React from "react";
import { HeaderProps } from "../types";

const Navbar = ({ title }: HeaderProps) => {
  return (
    <header className="w-full px-4 py-8 border round-md bg-[#fbf9fa] border-slate-300 ">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      </div>
    </header>
  );
};

export default Navbar;
