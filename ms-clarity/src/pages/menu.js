import React from "react";
import Content from "../components/Content";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const Menu = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Content />
    </motion.div>
  );
};

export default Menu;
