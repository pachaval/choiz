import React, { useEffect } from "react";

import MedicationBox from "./MedicationBox";
import { FaqsProps } from "../types";
import Faqs from "./Faqs";

const Recommendation: React.FC<FaqsProps> = ({ faqs }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="font-header mb-3">
        Tratamiento recomendado en base a tus respuestas
      </h2>
      <MedicationBox />
      <Faqs faqs={faqs} />
    </div>
  );
};

export default Recommendation;
