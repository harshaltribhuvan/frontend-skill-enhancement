import React from "react";
import Aboutus from "../components/Aboutus";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Aboutus />
    </motion.div>
  );
};

export default About;
