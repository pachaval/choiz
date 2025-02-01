"use client";

import React from "react";

import { useFormStore } from "../stores/useFormStore";
import { STEPS } from "../utils/constants";
import WelcomeModal from "./WelcomeModal";
import { FaqsProps } from "../types";
import Stepper from "./Stepper";

const ChoizForm: React.FC<FaqsProps> = ({ faqs }) => {
  const { step } = useFormStore();

  if (step === STEPS.WELCOME) {
    return <WelcomeModal />;
  }

  return <Stepper faqs={faqs} />;
};

export default ChoizForm;
