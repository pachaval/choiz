"use client";

import { useFormStore } from "../stores/useFormStore";
import { STEPS_DATA } from "../utils/constants";
import Recommendation from "./Recommendation";
import WelcomeModal from "./WelcomeModal";
import MultiChoice from "./MultiChoice";
import NextButton from "./NextButton";
import { Faq } from "../types";
import NavBar from "./NavBar";
import Success from "./Success";

interface StepperProps {
  faqs: Faq[];
}

const Stepper = ({ faqs }: StepperProps) => {
  const { step, answers, manualReason } = useFormStore();

  const isNextDisabled =
    !answers[step] ||
    answers[step].length === 0 ||
    (step === 2 && answers[step]?.includes("Otro") && !manualReason.trim());

  const renderLayout = (children: React.ReactNode) => (
    <div className="bg-[#F9F9F9] min-h-screen flex flex-col space-y-5 items-center p-4">
      <NavBar />
      {children}
    </div>
  );

  const renderMultiChoice = () => {
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
