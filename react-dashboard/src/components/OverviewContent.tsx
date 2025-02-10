import CardContent from "./CardContent";
import CategoryDistributionChart from "./CategoryDistributionChart";
import Navbar from "./Navbar";
import SalesOverviewChart from "./RevenueBarChart";
import RevenueBarChart from "./RevenueBarChart";
import SalesChart from "./SalesChart";
const OverviewContent = () => {
  return (
    <div>
      <div className="p-4 sm:ml-64">
        <div className="p-4  ">
          <CardContent />

          <div className="grid grid-cols-3 mx-auto gap-4 mb-4">
            <CategoryDistributionChart />
            <SalesChart />
          </div>
          <div className="grid grid-cols-1  ">
            <SalesOverviewChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
