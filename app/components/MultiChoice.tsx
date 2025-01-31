"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

import { useFormStore } from "../stores/useFormStore";
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
  const { answers, setAnswer } = useFormStore();

  return (
    <div className="text-left mb-4">
      <h2 className="font-header text-xl font-bold mb-2">{header}</h2>
      {subheader && <p className="font-subheader">{subheader}</p>}

      <div className="w-full max-w flex flex-col items-center mt-5">
        {options.map((option) => (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
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
          </motion.button>
        ))}
      </div>

      {step === 2 && answers[step]?.includes("Otro") && <OtherInput />}
    </div>
  );
};

export default MultiChoice;
