import { MEDICATION_DETAIL, OTRO, STEPS_WITH_ICON } from "./constants";

export function isOtroSelected(answers: string[]): boolean {
  return answers?.some((answer) => answer.startsWith(OTRO));
}

export function getMedication(recommendation: string) {
  const medication = MEDICATION_DETAIL.find(
    (med) => med.key === recommendation
  );
  if (!medication) {
    return {
      imgPath: "/assets/images/default.png",
      specs: "Unknown",
      name: "Unknown",
    };
  }

  return medication;
}

export const isStepWithIcon = (step: number) => STEPS_WITH_ICON.has(step);
