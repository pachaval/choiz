import React from "react";
import clsx from "clsx";

import { useFormStore } from "../stores/useFormStore";
import { NextButtonProps } from "../types";

const NextButton: React.FC<NextButtonProps> = ({
  label = "Continuar",
  disabled = false,
}) => {
  const { nextStep } = useFormStore();

  return (
    <button
      className={clsx(
        "next-button",
        disabled ? "bg-[#bab7b7ad]" : "bg-[#292929]"
      )}
      disabled={disabled}
      onClick={nextStep}
    >
      {label}
    </button>
  );
};

export default NextButton;
