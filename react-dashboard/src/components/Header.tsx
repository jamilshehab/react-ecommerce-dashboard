import CardContent from "./CardContent";
import CategoryDistributionChart from "./CategoryDistributionChart";
import Navbar from "./Navbar";
import RevenueBarChart from "./RevenueBarChart";
import SalesChart from "./SalesChart";
const Header = () => {
  return (
    <header>
      <Navbar title="Header" />
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <CardContent />

          <div className="grid grid-cols-3 mx-auto gap-4 mb-4">
            <CategoryDistributionChart />
            <SalesChart />
          </div>
          <div className="grid grid-cols-12 sm:grid-cols-12 ">
            <RevenueBarChart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
