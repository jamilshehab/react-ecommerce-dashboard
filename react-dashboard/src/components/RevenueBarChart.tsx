import React from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { revenueData } from "../data/data";
const RevenueBarChart = () => {
  return (
    <motion.div
      className="bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-12 w-fit  "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={revenueData}>
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export default RevenueBarChart;
