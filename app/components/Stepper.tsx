"use client";

import { useFormStore } from "../stores/useFormStore";
import { STEPS_DATA } from "../utils/constants";
import Recommendation from "./Recommendation";
import WelcomeModal from "./WelcomeModal";
import MultiChoice from "./MultiChoice";
import NextButton from "./NextButton";
import { Faq } from "../types";
import NavBar from "./NavBar";

interface StepperProps {
  faqs: Faq[];
}
const Stepper = ({ faqs }: StepperProps) => {
  const { step, answers, manualReason } = useFormStore();

  const isNextDisabled =
    !answers[step] ||
    answers[step].length === 0 ||
    (step === 2 && answers[step]?.includes("Otro") && !manualReason.trim());

  if (step === 1) return <WelcomeModal />;

  if (step === 6) {
    return (
      <div className="bg-[#F9F9F9]  min-h-screen flex flex-col space-y-5 items-center p-4">
        <NavBar />
        <Recommendation faqs={faqs} />
      </div>
    );
  }

  const currentStep = STEPS_DATA.find((s) => s.step === step);
  if (currentStep) {
    return (
      <div className="bg-white min-h-screen flex flex-col justify-between items-center p-4">
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

export default Stepper;
