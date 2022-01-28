import React from "react";
import FormContent from "../components/FormContent";
//animation
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      exit="exit"
      initial="hidden"
      animate="show"
    >
      <FormContent />
    </motion.div>
  );
};

export default Contact;
