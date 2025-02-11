import React from "react";
import { productData, productHeadingData } from "../../../data/data";

const Thead = () => {
  return (
    <thead className="hidden border-b lg:table-header-group">
      <tr className="">
        {productHeadingData.map((item: any) => (
          <td
            key={item.id}
            className="whitespace-normal py-4 text-sm font-semibold text-gray-800 sm:px-3"
          >
            {item.name}
          </td>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
