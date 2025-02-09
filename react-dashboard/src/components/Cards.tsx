import { IoIosArrowRoundUp } from "react-icons/io";
import { CardProps } from "../types";

const Cards = ({ title, content, value, icon }: CardProps) => {
  return (
    <div className="px-4 py-6 shadow-lg shadow-blue-100">
      <span className="">{icon}</span>
      <p className="mt-4 font-medium">{title}</p>
      <p className="mt-2 text-xl font-medium">
        {value}
        <IoIosArrowRoundUp />
      </p>
      <span className="text-xs text-gray-400">{content}</span>
    </div>
  );
};

export default Cards;
