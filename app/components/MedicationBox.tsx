import { motion } from "framer-motion";
import NextButton from "./NextButton";
import Image from "next/image";
import React from "react";

import { useFormStore } from "../stores/useFormStore";
import { getMedication } from "../utils/helpers";
import { ANIMATION } from "../utils/constants";

const MedicationBox: React.FC = () => {
  const { recommendation } = useFormStore();
  const { name, specs, imgPath } = getMedication(recommendation);

  return (
    <div className="recommendation-container">
      <p className="recommendation-name">{name}</p>
      <p className="recommendation-specs">{specs}</p>
      <motion.div
        transition={{ duration: 1.5, ease: "easeOut" }}
        animate={ANIMATION.anmimate}
        initial={ANIMATION.initial}
        exit={ANIMATION.exit}
      >
        <Image
          className="object-contain w-full h-[20vh] mt-3"
          alt="Welcome Background"
          src={imgPath}
          quality={70}
          height={200}
          width={300}
          priority
        />
      </motion.div>
      <NextButton label="Seleccionar" />
    </div>
  );
};

export default MedicationBox;
