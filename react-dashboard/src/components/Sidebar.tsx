import React, { useState } from "react";
import { BiX } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import { DATA } from "../data/data";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button
        onClick={toggleSidebar}
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>

        <CiMenuBurger size={24} />
      </button>

      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 bg-gray-50 dark:bg-gray-800`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="sm:absolute sm:top-4 sm:right-4 sm:text-gray-500 sm:hover:text-gray-700 sm:dark:text-gray-400 sm:dark:hover:text-gray-300 lg:hidden"
          >
            <BiX size={24} />
          </button>

          <ul className="space-y-2 font-medium mt-10">
            {DATA.map((item: any, index: any) => (
              <li>
                <Link
                  key={item.id}
                  to={item.href}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span className="ms-3">
                    {DATA[item.id] || null} {item.name}
                  </span>
                </Link>
              </li>
            ))}
            {/* Add more menu items here */}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
