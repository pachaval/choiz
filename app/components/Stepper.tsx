"use client";

import React, { useEffect } from "react";

import { useFormStore } from "../stores/useFormStore";
import { OTRO, STEPS_DATA } from "../utils/constants";
import Recommendation from "./Recommendation";
import WelcomeModal from "./WelcomeModal";
import MultiChoice from "./MultiChoice";
import NextButton from "./NextButton";
import { FaqsProps } from "../types";
import Success from "./Success";
import NavBar from "./NavBar";

const Stepper: React.FC<FaqsProps> = ({ faqs }) => {
  const { step, answers, manualReason } = useFormStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const isNextDisabled =
    !answers[step] ||
    answers[step].length === 0 ||
    (step === 2 && answers[step]?.includes(OTRO) && !manualReason.trim());

  const renderMultiChoice = () => {
    const currentStep = STEPS_DATA.find((s) => s.step === step);
    if (currentStep) {
      return (
        <div className="render-multichoice">
          <div className="flex-col space-y-5">
            <NavBar />
            <MultiChoice {...currentStep} />
          </div>
          <NextButton disabled={isNextDisabled} />
        </div>
      );
    }
    return null;
  };

  const renderLayout = (children: React.ReactNode) => (
    <div className="render-layout">
      <NavBar bgColor="[#F9F9F9]" />
      {children}
    </div>
  );

  switch (step) {
    case 1:
      return <WelcomeModal />;
    case 6:
      return renderLayout(<Recommendation faqs={faqs} />);
    case 7:
      return renderLayout(<Success />);
    default:
      return renderMultiChoice();
  }
};

export default Stepper;
