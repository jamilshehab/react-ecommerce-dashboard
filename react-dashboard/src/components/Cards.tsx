import { IoIosArrowRoundUp } from "react-icons/io";
import { CardProps } from "../types";
import { motion } from "framer-motion";
const Cards = ({ title, content, value, icon, classNames, id }: CardProps) => {
  return (
    <motion.div
      className="px-4 py-6 shadow-lg shadow-blue-200 border-slate-200 rounded-2xl"
      id={`${id}`}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
    >
      <span className={`text-center text-3xl ${classNames}`}>{icon}</span>
      <p className="my-2 font-medium text-2xl text-center">{title}</p>
      <p className="mt-2 text-xl font-medium text-center">{content}</p>
      <h4 className="text-md text-center text-gray-400">{value}</h4>
    </motion.div>
  );
};

export default Cards;
