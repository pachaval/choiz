import { MEDICATION_DETAIL, OTRO } from "./constants";

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
