"use-client";

import { useFormStore } from "../hooks/useFormStore";

export enum remedy {
  DUTCAPS = "DUTAXIDIL CAPSULAS",
  DUTGEL = "DUTAXIDIL GEL",
  MINCAPS = "MINOXIDIL CAPSULAS",
}

type RecommendationProps = {
  recommendation: remedy;
};

const Recommendation = ({ recommendation }: RecommendationProps) => {
  const { prevStep, answers } = useFormStore();
  console.log({ answers });

  return (
    <>
      <h2 className="text-xl font-semibold mb-4">
        Tratamiento recomendado en base a tus respuestas
      </h2>
      {/* METER ACA OTRO COMPONENTE QUE RECIBA 'RECOMMENDATION' Y ADENTRO HAGA UN
      SWITCH CON CADA REMEDIO */}
      <div className="w-full max-w-sm">REMEDIO {recommendation}</div>
      <button className="text-gray-500" onClick={prevStep}>
        Back
      </button>
      <div className="w-full max-w-sm flex justify-between mt-4">
        METER ACA OTRO COMPONENTE FAQS
      </div>
    </>
  );
};

export default Recommendation;
