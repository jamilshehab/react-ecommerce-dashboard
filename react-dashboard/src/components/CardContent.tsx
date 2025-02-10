import React from "react";
import { motion } from "framer-motion";
import { CARD_CONTENT, CARD_ICONS } from "../data/data";
import Cards from "./Cards";
const CardContent: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="py-4 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {CARD_CONTENT.map((item, index) => {
        const Icons = CARD_ICONS[index];
        return (
          <Cards
            id={item.id}
            title={item.name}
            content={item.value}
            value={item.percentage}
            icon={Icons && <Icons />}
            classNames={item.classNames}
          />
        );
      })}
    </motion.div>
  );
};

export default CardContent;
