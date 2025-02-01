"use client";

import React, { useEffect } from "react";

import { OTRO, STEPS, STEPS_DATA } from "../utils/constants";
import { useFormStore } from "../stores/useFormStore";
import Recommendation from "./Recommendation";
import MultiChoice from "./MultiChoice";
import NextButton from "./NextButton";
import { FaqsProps } from "../types";
import Success from "./Success";
import NavBar from "./NavBar";

const Stepper: React.FC<FaqsProps> = ({ faqs }) => {
  const { step, answers, manualReason } = useFormStore();
  const currentStep = STEPS_DATA.find((s) => s.step === step);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const isNextDisabled =
    !answers[step] ||
    answers[step].length === 0 ||
    (step === STEPS.PROBLEMAS &&
      answers[step]?.includes(OTRO) &&
      !manualReason.trim());

  if (step === STEPS.RESPUESTAS) {
    return (
      <div className="render-layout">
        <NavBar bgColor="[#F9F9F9]" />
        <Success />
      </div>
    );
  }

  if (step === STEPS.RECOMENDACION) {
    return (
      <div className="render-layout">
        <NavBar bgColor="[#F9F9F9]" />
        <Recommendation faqs={faqs} />
      </div>
    );
  }

  return (
    <div className="render-multichoice">
      <div className="flex-col space-y-5">
        <NavBar />
        {currentStep && <MultiChoice {...currentStep} />}
      </div>
      <NextButton disabled={isNextDisabled} />
    </div>
  );
};

export default Stepper;
