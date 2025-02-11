import { CardProps } from "../../../types";
const Cards = ({ title, content, value, icon, classNames }: CardProps) => {
  return (
    <div>
      <span className={`text-center text-3xl ${classNames}`}>{icon}</span>
      <p className="my-2 font-medium text-2xl text-center">{title}</p>
      <p className="mt-2 text-xl font-medium text-center">{content}</p>
      <h4 className="text-md text-center text-gray-400">{value}</h4>
    </div>
  );
};

export default Cards;
