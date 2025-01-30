"use client";

import { useFormStore } from "../store/useFormStore";
import { motion } from "framer-motion";
import MedicationBox from "./MedicationBox";

const Recommendation = () => {
  const { answers, recommendation } = useFormStore();
  console.log({ recommendation });

  console.log({ answers });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="flex flex-col"
    >
      <h2 className="font-header mb-3">
        Tratamiento recomendado en base a tus respuestas
      </h2>
      <MedicationBox />
    </motion.div>
  );
};

export default Recommendation;
