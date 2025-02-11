import React from "react";

const Thead = () => {
  return (
    <thead className="hidden border-b lg:table-header-group">
      <tr className="">
        <td className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3">
          Order Date
        </td>

        <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
          Order ID
        </td>
        <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
          Description
        </td>
     

        <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
          Customer
        </td>
     

        <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
          Price
        </td>

        <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-3">
          Status
        </td>
      </tr>
    </thead>
  );
};

export default Thead;
