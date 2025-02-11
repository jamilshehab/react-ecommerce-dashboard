import { ProductTableProps } from "../../../types";

const Tbody = ({
  customer,
  orderDate,
  orderId,
  product,
  price,
  className,
  description,
  productStatus,
}: ProductTableProps) => {
  return (
    <tr className="" id="">
      <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
        {orderDate}
      </td>

      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
        {orderId}
      </td>

      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
        {product}
      </td>

      <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
        {customer}
      </td>

      <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
        {price}
      </td>

      <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
        {description}
      </td>
      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-3 lg:table-cell">
        <span className={className}>{productStatus}</span>
      </td>
    </tr>
  );
};

export default Tbody;
