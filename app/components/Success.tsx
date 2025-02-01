import React, { useEffect } from "react";

import { useFormStore } from "../stores/useFormStore";
import { STEPS_DATA } from "../utils/constants";

const Success: React.FC = () => {
  const { answers } = useFormStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col">
      <h2 className="font-header mb-3">Tus respuestas:</h2>
      <div className="success-container">
        {STEPS_DATA.map(({ step, header }) => {
          const stepAnswers = answers[step];
          return (
            <div key={step}>
              <p className="success-question">{header}</p>
              <p className="success-answer">{stepAnswers.join(", ")} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Success;
