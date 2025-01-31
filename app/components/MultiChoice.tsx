"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import clsx from "clsx";

import { useFormStore } from "../stores/useFormStore";
import { ANIMATION, OTRO } from "../utils/constants";
import { isOtroSelected } from "../utils/helpers";
import { MultiChoiceProps } from "../types";
import OtherInput from "./OtherInput";

const MultiChoice: React.FC<MultiChoiceProps> = ({
  subheader = "",
  options,
  header,
  step,
}) => {
  const { answers, setAnswer } = useFormStore();
  const isStepWithIcon = [2, 4, 5].includes(step);

  return (
    <div className="text-left mb-4">
      <h2 className="font-header text-xl font-bold mb-2">{header}</h2>
      {subheader && <p className="font-subheader">{subheader}</p>}

      <div className="w-full max-w flex flex-col items-center mt-5">
        {options.map((option) => {
          const isSelected =
            option === OTRO
              ? isOtroSelected(answers[step])
              : answers[step]?.includes(option);

          return (
            <motion.button
              className={clsx(
                "option-button",
                isSelected ? "border-[#292929]" : "border-[#E0E0E0]"
              )}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={() => setAnswer(step, option)}
              animate={ANIMATION.anmimate}
              initial={ANIMATION.initial}
              exit={ANIMATION.exit}
              key={option}
            >
              {isStepWithIcon &&
                (isSelected ? (
                  <Image
                    src="assets/icons/checked.svg"
                    alt="Selected Icon"
                    width={18}
                    height={18}
                  />
                ) : (
                  <Image
                    src="assets/icons/empty-circle.svg"
                    alt="Unselected Icon"
                    width={18}
                    height={18}
                  />
                ))}
              {option}
            </motion.button>
          );
        })}
      </div>

      {step === 2 && isOtroSelected(answers[step]) && <OtherInput />}
    </div>
  );
};

export default MultiChoice;
