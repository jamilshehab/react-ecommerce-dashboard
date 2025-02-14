 import CardContent from "../common/CardContent";
import ProductTable from "./ProductTable";
const ProductContent = () => {
  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4">
        <CardContent />
        <ProductTable />
      </div>
    </div>
  );
};

export default ProductContent;
