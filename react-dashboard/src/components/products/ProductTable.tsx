import Search from "../common/search/Search";
import Thead from "./subcomponent/Thead";
import Tbody from "./subcomponent/Tbody";
import { productData } from "../../data/data";
import { useState } from "react";

const ProductTable = () => {
  const [searchQuery, setSearchQuery] = useState<any>("");
  const handleElement = (e: any) => {
    const searchInput = e.target.value;
    setSearchQuery(searchInput);
  };

  return (
    <div>
      <div className="">
        <div className="mx-auto max-w-screen-xl px-2 py-10">
          <div className="mt-4 w-full">
            <div className="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0">
              {/** Search Component */}
              <Search onChange={handleElement} />
              {/** Search Component */}
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-xl bg-white px-6 shadow lg:px-4">
            <table className="min-w-full border-collapse border-spacing-y-2 border-spacing-x-2">
              <Thead />
              {productData
                .filter((item: any) => {
                  return searchQuery === ""
                    ? item
                    : item.name.includes(searchQuery);
                })
                .map((item: any) => (
                  <Tbody
                    key={item.id}
                    orderId={item.orderId}
                    name={item.name}
                    price={item.price}
                    productStatus={item.status}
                    customer={item.customer}
                    className={item.className}
                    description={item.description}
                    orderDate={item.orderDate}
                  />
                ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
