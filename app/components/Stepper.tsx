"use client";

import WelcomeModal from "./WelcomeModal";
import MultiChoice from "./MultiChoice";
import { useFormStore } from "../hooks/useFormStore";
import { STEPS_DATA } from "../utils/constants";
import Recommendation, { remedy } from "./Recommendation";

const Stepper = () => {
  const { step } = useFormStore();

  if (step === 1) return <WelcomeModal />;

  if (step === 6) {
    return <Recommendation recommendation={remedy.DUTCAPS} />;
  }

  const currentStep = STEPS_DATA.find((s) => s.step === step);
  if (currentStep) {
    return <MultiChoice {...currentStep} />;
  }

  return null;
};

export default Stepper;
