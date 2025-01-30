import Image from "next/image";
import React from "react";
import NextButton from "./NextButton";
import { motion } from "framer-motion";

import { useFormStore } from "../store/useFormStore";
import { MEDICATION_DETAIL } from "../utils/constants";

const MedicationBox = () => {
  const { recommendation } = useFormStore();
  console.log({ recommendation });
  const medication = MEDICATION_DETAIL.find((med) => {
    console.log("key", med.key);

    return med.key == recommendation;
  });

  const { name, specs, imgPath } = medication ?? {
    name: "Unknown",
    specs: "Unknown",
    imgPath: "/assets/images/default.png",
  };
  return (
    <div className="bg-white rounded-[36px] p-7 flex flex-col shadow-box">
      <p className="text-xl font-bold leading-[25px] text-left">{name}</p>
      <p className="text-base text-[#7D7D7D] font-normal leading-[20px] text-left mb-4">
        {specs}
      </p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src={imgPath}
          alt="Welcome Background"
          width={300}
          height={200}
          priority
          quality={70}
          className="object-contain w-full h-[20vh] mt-3"
        />
      </motion.div>
      <NextButton label="Seleccionar" />
    </div>
  );
};

export default MedicationBox;
