"use client";

import { useFormStore } from "../store/useFormStore";
import MedicationBox from "./MedicationBox";

const Recommendation = () => {
  const { answers, recommendation } = useFormStore();
  console.log({ recommendation });

  console.log({ answers });

  return (
    <div className="flex flex-col">
      <h2 className="font-header mb-3">
        Tratamiento recomendado en base a tus respuestas
      </h2>
      <MedicationBox />
    </div>
  );
};

export default Recommendation;
