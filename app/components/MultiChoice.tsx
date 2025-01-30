"use client";

import clsx from "clsx";
import { useFormStore } from "../hooks/useFormStore";
import NextButton from "./NextButton";
import OtherInput from "./OtherInput";

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
  const { answers, setAnswer, manualReason } = useFormStore();

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

        {step === 2 && answers[step]?.includes("Otro") && <OtherInput />}
      </div>
      <NextButton disabled={isNextDisabled} />
    </div>
  );
};

export default MultiChoice;
