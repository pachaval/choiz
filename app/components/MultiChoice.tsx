"use client";

import clsx from "clsx";
import { useFormStore } from "../hooks/useFormStore";
import NextButton from "./NextButton";

type MultiChoiceProps = {
  step: number;
  header: string;
  subheader?: string;
  options: string[];
};

const MultiChoice = ({
  step,
  header,
  subheader = "",
  options,
}: MultiChoiceProps) => {
  const { answers, setAnswer, setManualReason, manualReason } = useFormStore();

  const isNextDisabled =
    !answers[step] ||
    answers[step].length === 0 ||
    (step === 2 && answers[step]?.includes("Otro") && !manualReason.trim());

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between items-center p-4">
      <div className="text-left mb-4">
        <h2 className="font-header text-xl font-bold">{header}</h2>
        {subheader && <p className="font-subheader mb-8 mt-3">{subheader}</p>}

        <div className="w-full max-w-sm flex flex-col items-center">
          {options.map((option) => (
            <button
              key={option}
              className={clsx(
                "font-question w-full border p-3 rounded-lg mb-2",
                answers[step]?.includes(option)
                  ? "border-[#292929]"
                  : "border-[#E0E0E0]"
              )}
              onClick={() => setAnswer(step, option)}
            >
              {option}
            </button>
          ))}
        </div>

        {step === 2 && answers[step]?.includes("Otro") && (
          <div className="w-full max-w-sm mt-4">
            <p className="font-subheader mb-2 mt-3">
              Cuéntanos cuál es el problema
            </p>

            <textarea
              placeholder="Inserta tu respuesta aquí"
              value={manualReason}
              onChange={(e) => setManualReason(e.target.value)}
              className="w-full border p-4 rounded-lg min-h-[15vh] font-subheader outline-none focus:ring-0"
            />
          </div>
        )}
      </div>
      <NextButton disabled={isNextDisabled} />
    </div>
  );
};

export default MultiChoice;
