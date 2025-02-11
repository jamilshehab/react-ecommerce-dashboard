import React from "react";
import CardContent from "../common/CardContent";
import ProductTable from "./ProductTable";

const ProductContent = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4">
        <CardContent />
      </div>
      <ProductTable />
    </div>
  );
};

export default ProductContent;
