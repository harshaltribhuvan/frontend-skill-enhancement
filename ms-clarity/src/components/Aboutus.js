import React from "react";
import { motion } from "framer-motion";
import { fade } from "../Animation";

const Aboutus = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-white h-screen font-mono ">
        <div className="center-content">
          <h2 className="text-3xl mb-8">
            We are <span className="text-yellow-500">Eggcellient</span>
          </h2>
          <motion.p variants={fade} className="mb-4">
            We are known for special egg food.
          </motion.p>
          <motion.span variants={fade} className="font-extralight">
            Make sure you{" "}
            <span className="text-yellow-500 underline">visit</span> us.
          </motion.span>
        </div>
      </div>
      <div className="flex justify-center items-center bg-white h-screen font-mono ">
        <div className="center-content">
          <h2 className="text-3xl mb-8">
            Our <span className="text-yellow-500">Address</span>
          </h2>
          <motion.p variants={fade} className="mb-4">
            4665 Mount Olive Road, Atlanta, Georgia, 30303.
          </motion.p>
          <motion.span variants={fade} className="font-extralight">
            In your <span className="text-yellow-500">Service</span> 24/7.
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
