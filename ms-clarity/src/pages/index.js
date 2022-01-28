import React from "react";
import Hero from "../components/Hero";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const Home = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <Hero />
    </motion.div>
  );
};

export default Home;
