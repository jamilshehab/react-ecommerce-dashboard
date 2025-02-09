import React from "react";
import { HeaderProps } from "../types";

const Navbar = ({ title }: HeaderProps) => {
  return (
    <header className="w-full px-4 py-8 border round-md bg-[#fbf9fa] border-slate-300 ">
      <div className="header">
        <div className="title">
          <h1 className="text-2xl font-semibold text-slate-800">{title}</h1>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
