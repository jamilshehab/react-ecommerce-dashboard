import Search from "../common/search/Search";
import { ProductTableProps } from "../../types/index";
import Thead from "./subcomponent/Thead";
import Tbody from "./subcomponent/Tbody";
import { productData } from "../../data/data";

const ProductTable = () => {
  return (
    <div>
      <div className="">
        <div className="mx-auto max-w-screen-xl px-2 py-10">
          <div className="mt-4 w-full">
            <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
              {/** Search Component */}
              <Search />
              {/** Search Component */}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
            <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
              <Thead />
              <tbody className="bg-white lg:border-gray-300">
                {productData.map((item: any) => (
                  <Tbody
                    key={item.id}
                    className={item.className}
                    orderId={item.orderId}
                    orderDate={item.orderDate}
                    customer={item.customer}
                    product={item.name}
                    productStatus={item.status}
                    price={item.price}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
