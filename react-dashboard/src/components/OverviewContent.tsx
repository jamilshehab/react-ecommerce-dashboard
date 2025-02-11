import CardContent from "./common/CardContent";
import CategoryDistributionChart from "./CategoryDistributionChart";
import Navbar from "./Navbar";
import SalesOverviewChart from "./charts/RevenueBarChart";
import RevenueBarChart from "./charts/RevenueBarChart";
import SalesChart from "./charts/SalesChart";
const OverviewContent: React.FC = () => {
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
