import Search from "../common/search/Search";
import { ProductTableProps } from "../../types/index";
import Thead from "./subcomponent/Thead";

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
                <tr className="">
                  <td className="whitespace-no-wrap py-4 text-left text-sm text-gray-600 sm:px-3 lg:text-left">
                    07 February, 2022
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    62345231143
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-600 sm:px-3 lg:table-cell">
                    Desktop Computer
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    Jane Doeson
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-left text-sm text-gray-600 sm:px-3 lg:table-cell lg:text-left">
                    1.0 Kg
                  </td>
                  <td className="whitespace-no-wrap py-4 text-right text-sm text-gray-600 sm:px-3 lg:text-left">
                    $59.00
                    <span className="mt-1 ml-auto block w-fit whitespace-nowrap rounded-full bg-purple-100 px-2 py-0.5 text-center text-xs text-purple-800 lg:hidden">
                      Action Required
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
