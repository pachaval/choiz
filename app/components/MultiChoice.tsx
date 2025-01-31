"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

import { useFormStore } from "../stores/useFormStore";
import OtherInput from "./OtherInput";
import Image from "next/image";

const UnselectedIcon = () => (
  <Image
    src="assets/icons/empty-circle.svg"
    alt="Decorative Icon"
    width={18}
    height={18}
  />
);

const SelectedIcon = () => (
  <Image
    src="assets/icons/checked.svg"
    alt="Decorative Icon"
    width={18}
    height={18}
  />
);

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
  const isStepWithIcon = [2, 4, 5].includes(step);

  return (
    <div className="text-left mb-4">
      <h2 className="font-header text-xl font-bold mb-2">{header}</h2>
      {subheader && <p className="font-subheader">{subheader}</p>}

      <div className="w-full max-w flex flex-col items-center mt-5">
        {options.map((option) => {
          const isSelected = answers[step]?.includes(option);

          return (
            <motion.button
              key={option}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={clsx(
                "font-question w-full border p-3 rounded-lg mb-2 flex items-center gap-2",
                isSelected ? "border-[#292929]" : "border-[#E0E0E0]"
              )}
              onClick={() => setAnswer(step, option)}
            >
              {isStepWithIcon &&
                (isSelected ? <SelectedIcon /> : <UnselectedIcon />)}
              {option}
            </motion.button>
          );
        })}
      </div>

      {step === 2 && answers[step]?.includes("Otro") && <OtherInput />}
    </div>
  );
};

export default MultiChoice;
