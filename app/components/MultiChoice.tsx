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
  const { answers, setAnswer, prevStep, setManualReason, manualReason } =
    useFormStore();

  const isNextDisabled =
    !answers[step] ||
    answers[step].length === 0 ||
    (step === 2 && answers[step]?.includes("Otro") && !manualReason.trim());

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-6">
      <h2 className="font-header">{header}</h2>
      <p className="font-subheader">{subheader}</p>
      <div className="w-full max-w-sm">
        {options.map((option) => (
          <button
            key={option}
            className={clsx(
              "font-question w-full border p-2 rounded-lg mb-2",
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
          <input
            type="text"
            placeholder="Please specify"
            value={manualReason}
            onChange={(e) => setManualReason(e.target.value)}
            className="w-full border p-2 rounded-lg"
          />
        </div>
      )}
      <div className="w-full max-w-sm flex justify-between mt-4">
        {step > 1 && (
          <button className="text-gray-500" onClick={prevStep}>
            Back
          </button>
        )}
        <NextButton disabled={isNextDisabled} />
      </div>
    </div>
  );
};

export default MultiChoice;
