import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { motion } from "framer-motion";
import { revenueData } from "../../data/data";

const SalesOverviewChart = () => {
  return (
    <motion.div
      className="  shadow-lg rounded-xl p-6   "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart width={150} height={40} data={revenueData}>
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default SalesOverviewChart;
