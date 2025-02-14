import React from "react";
import ProductContent from "../components/products/ProductContent";
import SalesChart from "../components/charts/SalesChart";

const Products: React.FC = () => {
  return (
    <main>
      <ProductContent />
      <div className="grid grid-cols-1  ">
        <SalesChart />
      </div>
    </main>
  );
};

export default Products;
